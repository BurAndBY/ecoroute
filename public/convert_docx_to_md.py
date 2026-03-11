import argparse
import os
import re
import shutil
import zipfile
import xml.etree.ElementTree as ET
from pathlib import Path

NS = {
    "w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main",
    "r": "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
    "a": "http://schemas.openxmlformats.org/drawingml/2006/main",
    "wp": "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing",
    "pic": "http://schemas.openxmlformats.org/drawingml/2006/picture",
    "rel": "http://schemas.openxmlformats.org/package/2006/relationships",
}


def build_rel_map(zf: zipfile.ZipFile):
    rel_map = {}
    rel_path = "word/_rels/document.xml.rels"
    if rel_path not in zf.namelist():
        return rel_map

    rel_root = ET.fromstring(zf.read(rel_path))
    for rel in rel_root.findall("rel:Relationship", NS):
        rid = rel.attrib.get("Id")
        target = rel.attrib.get("Target", "")
        if rid and target:
            if target.startswith("media/"):
                rel_map[rid] = f"word/{target}"
            else:
                rel_map[rid] = target
    return rel_map


def extract_media(zf: zipfile.ZipFile, out_dir: Path):
    out_dir.mkdir(parents=True, exist_ok=True)
    for name in zf.namelist():
        if name.startswith("word/media/") and not name.endswith("/"):
            target = out_dir / Path(name).name
            with zf.open(name) as src, open(target, "wb") as dst:
                shutil.copyfileobj(src, dst)


def get_text_from_run(run):
    pieces = []
    for child in run:
        tag = child.tag
        if tag == f"{{{NS['w']}}}t":
            pieces.append(child.text or "")
        elif tag == f"{{{NS['w']}}}tab":
            pieces.append("\t")
        elif tag == f"{{{NS['w']}}}br":
            pieces.append("  ")
    return "".join(pieces)


def style_wrap(text, run):
    rpr = run.find("w:rPr", NS)
    if rpr is None:
        return text

    bold = rpr.find("w:b", NS) is not None
    italic = rpr.find("w:i", NS) is not None

    if bold and italic:
        return f"***{text}***"
    if bold:
        return f"**{text}**"
    if italic:
        return f"*{text}*"
    return text


def paragraph_markdown(p, rel_map, images_rel_dir):
    pstyle = p.find("w:pPr/w:pStyle", NS)
    style = pstyle.attrib.get(f"{{{NS['w']}}}val", "") if pstyle is not None else ""

    numpr = p.find("w:pPr/w:numPr", NS)
    is_list = numpr is not None

    fragments = []
    images = []

    for run in p.findall("w:r", NS):
        text = get_text_from_run(run)
        if text:
            fragments.append(style_wrap(text, run))

        for drawing in run.findall("w:drawing", NS):
            blip = drawing.find(".//a:blip", NS)
            if blip is None:
                continue
            rid = blip.attrib.get(f"{{{NS['r']}}}embed")
            if not rid:
                continue

            source = rel_map.get(rid, "")
            filename = Path(source).name if source else f"{rid}.bin"
            alt = ""
            docpr = drawing.find(".//wp:docPr", NS)
            if docpr is not None:
                alt = docpr.attrib.get("descr") or docpr.attrib.get("name") or ""
            alt = alt.strip() or filename
            images.append(f"![{alt}]({images_rel_dir}/{filename})")

    text_line = "".join(fragments).strip()

    if style.startswith("Heading"):
        m = re.search(r"(\d+)$", style)
        level = int(m.group(1)) if m else 1
        level = min(max(level, 1), 6)
        if text_line:
            text_line = f"{'#' * level} {text_line}"

    if is_list and text_line:
        text_line = f"- {text_line}"

    lines = []
    if text_line:
        lines.append(text_line)
    lines.extend(images)
    return lines


def convert(docx_path: Path, output_md: Path, images_dir: Path):
    with zipfile.ZipFile(docx_path, "r") as zf:
        rel_map = build_rel_map(zf)
        extract_media(zf, images_dir)

        xml_root = ET.fromstring(zf.read("word/document.xml"))
        body = xml_root.find("w:body", NS)
        if body is None:
            raise RuntimeError("Missing document body")

        out_lines = []
        for child in body:
            if child.tag == f"{{{NS['w']}}}p":
                lines = paragraph_markdown(child, rel_map, images_dir.name)
                if lines:
                    out_lines.extend(lines)
                    out_lines.append("")
            elif child.tag == f"{{{NS['w']}}}tbl":
                out_lines.append("[Table omitted in automatic conversion]")
                out_lines.append("")

    output_md.write_text("\n".join(out_lines).rstrip() + "\n", encoding="utf-8")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("input_docx")
    parser.add_argument("output_md")
    parser.add_argument("images_dir")
    args = parser.parse_args()

    convert(Path(args.input_docx), Path(args.output_md), Path(args.images_dir))


if __name__ == "__main__":
    main()
