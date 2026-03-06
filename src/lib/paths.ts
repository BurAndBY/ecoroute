const ABSOLUTE_URL_RE = /^(?:[a-z]+:)?\/\//i;

const normalizeBaseUrl = (baseUrl: string): string => {
  if (!baseUrl || baseUrl === '/') {
    return '/';
  }

  const withLeadingSlash = baseUrl.startsWith('/') ? baseUrl : `/${baseUrl}`;
  return withLeadingSlash.endsWith('/') ? withLeadingSlash : `${withLeadingSlash}/`;
};

const baseUrl = normalizeBaseUrl(import.meta.env.BASE_URL ?? '/');

export const withBase = (path: string): string => {
  if (!path) return path;
  if (path.startsWith('#') || ABSOLUTE_URL_RE.test(path) || path.startsWith('data:')) {
    return path;
  }

  const trimmedPath = path.startsWith('/') ? path.slice(1) : path;
  return `${baseUrl}${trimmedPath}`;
};

export const stripBaseFromPathname = (pathname: string): string => {
  if (!pathname || baseUrl === '/') {
    return pathname || '/';
  }

  const baseWithoutTrailingSlash = baseUrl.slice(0, -1);
  if (pathname === baseWithoutTrailingSlash) {
    return '/';
  }

  if (pathname.startsWith(`${baseWithoutTrailingSlash}/`)) {
    return pathname.slice(baseWithoutTrailingSlash.length);
  }

  return pathname;
};
