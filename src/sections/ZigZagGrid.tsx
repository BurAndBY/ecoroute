import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { zigZagGridConfig, type ZigZagGridItem } from '../config';
import { withBase } from '../lib/paths';

gsap.registerPlugin(ScrollTrigger);

const GridItem = ({
  item,
  index,
}: {
  item: ZigZagGridItem;
  index: number;
}) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const itemHrefIsExternal = item.href ? /^https?:\/\//.test(item.href) : false;
  const itemHrefIsDocument = item.href ? /\.(pdf|docx?)$/i.test(item.href) : false;
  const showSingleLink = Boolean(item.href) && (!item.links || item.links.length === 0);
  const useContainedImage = item.id === 'chatbot' || item.id === 'methodology';
  const hideImageOnMobile = item.id === 'chatbot';
  const hideImageCompletely = item.id === 'methodology';
  const showInlineButton = showSingleLink && !hideImageCompletely;
  const resolvedItemHref = item.href
    ? itemHrefIsExternal
      ? item.href
      : withBase(item.href)
    : undefined;

  useEffect(() => {
    const itemEl = itemRef.current;
    const imageContainer = imageContainerRef.current;
    const image = imageRef.current;
    const text = textRef.current;

    if (!itemEl || !imageContainer || !image || !text) return;

    // Initial state for text
    gsap.set(text.children, { opacity: 0, y: 30 });

    const triggers: ScrollTrigger[] = [];

    // Text reveal animation
    const textTrigger = ScrollTrigger.create({
      trigger: text,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        gsap.to(text.children, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
        });
      },
    });
    triggers.push(textTrigger);

    // Internal parallax on image
    const imageTrigger = ScrollTrigger.create({
      trigger: imageContainer,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
      onUpdate: (self) => {
        const yPercent = (self.progress - 0.5) * 20;
        gsap.set(image, { yPercent });
      },
    });
    triggers.push(imageTrigger);

    return () => {
      triggers.forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={itemRef}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
        index > 0 ? 'mt-24 md:mt-32' : ''
      }`}
    >
      {/* Image Column */}
      {!hideImageCompletely ? (
        <div
          ref={imageContainerRef}
          className={`relative overflow-hidden rounded-3xl ${
            hideImageOnMobile ? 'hidden md:block ' : ''
          }${
            item.reverse ? 'lg:order-2' : 'lg:order-1'
          }`}
        >
          <div
            className={`relative overflow-hidden rounded-3xl ${
              useContainedImage ? 'mx-auto aspect-[9/16] max-w-[24rem] bg-kaleo-charcoal/5 p-4' : 'aspect-[4/3]'
            }`}
          >
            <img
              ref={imageRef}
              src={withBase(item.image)}
              alt={item.imageAlt}
              className={`w-full ${
                useContainedImage ? 'h-full object-contain' : 'h-[120%] object-cover'
              }`}
              style={{
                willChange: 'transform',
                transform: useContainedImage ? 'scale(1)' : 'scale(1.1)',
              }}
            />
          </div>
          {showInlineButton ? (
            <div className="mt-5 flex justify-center">
              <a
                href={resolvedItemHref}
                target={itemHrefIsExternal || itemHrefIsDocument ? '_blank' : undefined}
                rel={itemHrefIsExternal || itemHrefIsDocument ? 'noopener noreferrer' : undefined}
                className="inline-flex min-w-[16rem] items-center justify-center gap-3 rounded-full border border-kaleo-terracotta bg-kaleo-terracotta px-8 py-4 font-body text-base uppercase tracking-[0.14em] text-kaleo-cream transition-colors hover:bg-kaleo-earth hover:border-kaleo-earth"
              >
                {item.ctaLabel ?? 'Подробнее'}
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ) : null}
        </div>
      ) : null}

      {/* Text Column */}
      <div
        ref={textRef}
        className={`${
          item.reverse ? 'lg:order-1 lg:pr-8' : 'lg:order-2 lg:pl-8'
        } ${hideImageCompletely ? 'lg:col-span-2 lg:px-12' : ''} ${
          item.id === 'chatbot' ? 'lg:flex lg:h-full lg:flex-col lg:justify-center' : ''
        }`}
      >
        <span className="font-body text-xs uppercase tracking-[0.2em] text-kaleo-terracotta">
          {item.subtitle}
        </span>
        <h3 className="font-display text-headline text-kaleo-earth mt-3">
          {item.title}
        </h3>
        <p className="font-body text-sm md:text-base text-kaleo-earth/70 leading-relaxed mt-6">
          {item.description}
        </p>

        {item.announcement ? (
          <div className="mt-6 rounded-[1.5rem] border border-kaleo-terracotta/30 bg-[linear-gradient(135deg,rgba(186,113,63,0.16),rgba(246,240,226,0.95))] px-5 py-4 shadow-soft">
            <p className="font-display text-2xl text-kaleo-earth md:text-3xl">
              {item.announcement}
            </p>
          </div>
        ) : null}

        {item.detailTitle ? (
          <div className="mt-6 rounded-2xl border border-kaleo-earth/10 bg-kaleo-cream/70 p-5">
            <p className="font-body text-xs uppercase tracking-[0.14em] text-kaleo-terracotta">
              {item.detailLabel ?? 'Подробнее'}
            </p>
            <p className="mt-2 font-body text-sm leading-relaxed text-kaleo-earth md:text-base">
              {item.detailTitle}
            </p>
            {item.bulletPoints && item.bulletPoints.length > 0 ? (
              <ul className="mt-4 space-y-2">
                {item.bulletPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 rounded-xl border border-kaleo-earth/8 bg-kaleo-sand/80 px-4 py-3"
                  >
                    <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-kaleo-terracotta" />
                    <span className="font-body text-sm leading-relaxed text-kaleo-earth/85">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ) : null}

        {item.links && item.links.length > 0 ? (
          <div className="mt-8 flex flex-wrap gap-3">
            {item.links.map((link) => (
              <a
                key={link.href}
                href={withBase(link.href)}
                className="inline-flex items-center gap-2 rounded-full border border-kaleo-terracotta/40 bg-kaleo-cream px-5 py-2 font-body text-xs uppercase tracking-[0.14em] text-kaleo-earth transition-colors hover:border-kaleo-terracotta hover:bg-kaleo-terracotta/10"
              >
                {link.label}
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>
        ) : null}

        {(hideImageCompletely || (hideImageOnMobile && item.id !== 'chatbot')) && showSingleLink ? (
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={resolvedItemHref}
              target={itemHrefIsExternal || itemHrefIsDocument ? '_blank' : undefined}
              rel={itemHrefIsExternal || itemHrefIsDocument ? 'noopener noreferrer' : undefined}
              className="inline-flex min-w-[16rem] items-center justify-center gap-3 rounded-full border border-kaleo-terracotta bg-kaleo-terracotta px-8 py-4 font-body text-base uppercase tracking-[0.14em] text-kaleo-cream transition-colors hover:bg-kaleo-earth hover:border-kaleo-earth"
            >
              {item.ctaLabel ?? 'Подробнее'}
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        ) : null}

        {/* Decorative line */}
        <div className="w-16 h-px bg-kaleo-terracotta/30 mt-8" />
      </div>
    </div>
  );
};

interface ZigZagGridProps {
  itemIds?: string[];
  hideHeader?: boolean;
}

const ZigZagGrid = ({ itemIds, hideHeader = false }: ZigZagGridProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const items = itemIds
    ? zigZagGridConfig.items.filter((item) => itemIds.includes(item.id))
    : zigZagGridConfig.items;

  useEffect(() => {
    const header = headerRef.current;
    if (!header || hideHeader) return;

    gsap.set(header.children, { opacity: 0, y: 30 });

    const trigger = ScrollTrigger.create({
      trigger: header,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        gsap.to(header.children, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  if (!zigZagGridConfig.sectionTitle && items.length === 0) return null;

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 md:py-32 lg:py-40 bg-kaleo-sand"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        {!hideHeader ? (
          <div ref={headerRef} className="text-center mb-20 md:mb-28">
            <span className="font-body text-xs uppercase tracking-[0.2em] text-kaleo-terracotta">
              {zigZagGridConfig.sectionLabel}
            </span>
            <h2 className="font-display text-headline text-kaleo-earth mt-4">
              {zigZagGridConfig.sectionTitle}
            </h2>
          </div>
        ) : null}

        {/* Grid Items */}
        {items.map((item, index) => (
          <div key={item.id} id={item.id}>
            <GridItem item={item} index={index} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ZigZagGrid;
