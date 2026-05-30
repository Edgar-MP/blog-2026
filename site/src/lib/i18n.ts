export const LOCALES = ['es', 'en'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'es';

export type RouteKey = 'home' | 'articles' | 'categories' | 'about' | 'rss';

export const LANG_LABEL: Record<Locale, string> = {
  es: 'ES',
  en: 'EN',
};

const ROUTES: Record<RouteKey, Record<Locale, string>> = {
  home: { es: '/', en: '/en' },
  articles: { es: '/articulos', en: '/en/articles' },
  categories: { es: '/categorias', en: '/en/categories' },
  about: { es: '/sobre', en: '/en/about' },
  rss: { es: '/rss.xml', en: '/en/rss.xml' },
};

export function getLocaleFromPathname(pathname: string): Locale {
  return pathname.startsWith('/en') ? 'en' : 'es';
}

export function getLocaleDateFormat(locale: Locale): string {
  return locale === 'en' ? 'en-US' : 'es-ES';
}

export function getLocalizedPaths(locale: Locale) {
  return {
    home: ROUTES.home[locale],
    articles: ROUTES.articles[locale],
    categories: ROUTES.categories[locale],
    about: ROUTES.about[locale],
    rss: ROUTES.rss[locale],
  };
}

function swapRoot(pathname: string, fromRoot: string, toRoot: string): string {
  if (pathname === fromRoot) return toRoot;
  if (pathname.startsWith(`${fromRoot}/`)) {
    return pathname.replace(fromRoot, toRoot);
  }
  return pathname;
}

export function getAlternatePath(pathname: string, search: string): string {
  if (pathname === '/en' || pathname.startsWith('/en/')) {
    const withoutPrefix = pathname === '/en' ? '/' : pathname.replace('/en', '');
    let nextPath = withoutPrefix;
    nextPath = swapRoot(nextPath, '/articles', '/articulos');
    nextPath = swapRoot(nextPath, '/about', '/sobre');
    nextPath = swapRoot(nextPath, '/categories', '/categorias');
    return `${nextPath}${search}`;
  }

  let nextPath = pathname;
  nextPath = swapRoot(nextPath, ROUTES.articles.es, ROUTES.articles.en);
  nextPath = swapRoot(nextPath, ROUTES.about.es, ROUTES.about.en);
  nextPath = swapRoot(nextPath, ROUTES.categories.es, ROUTES.categories.en);
  if (nextPath === '/') nextPath = '/en';
  return `${nextPath}${search}`;
}
