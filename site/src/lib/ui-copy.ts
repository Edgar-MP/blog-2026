import type { Locale } from './i18n';

type HeaderCopy = {
  home: string;
  articles: string;
  about: string;
  portfolio: string;
  navAriaLabel: string;
};

type FooterCopy = {
  signature: string;
  signatureEm: string;
  location: string;
  blog: string;
  home: string;
  articles: string;
  categories: string;
  about: string;
  rss: string;
  feed: string;
  bottomLeft: string;
  bottomRight: string;
};

type ArticleUiCopy = {
  back: string;
  min: string;
  authorBio: string;
  portfolio: string;
  keepReading: string;
  tocLabel: string;
};

export const headerCopy: Record<Locale, HeaderCopy> = {
  es: {
    home: 'Inicio',
    articles: 'Articulos',
    about: 'Sobre',
    portfolio: 'Portfolio',
    navAriaLabel: 'Navegacion principal',
  },
  en: {
    home: 'Home',
    articles: 'Articles',
    about: 'About',
    portfolio: 'Portfolio',
    navAriaLabel: 'Primary navigation',
  },
};

export const footerCopy: Record<Locale, FooterCopy> = {
  es: {
    signature: 'Construyendo el futuro de la web,',
    signatureEm: 'pixel a pixel.',
    location: 'Vitoria-Gasteiz · ES · 2026',
    blog: 'Blog',
    home: 'Inicio',
    articles: 'Articulos',
    categories: 'Categorias',
    about: 'Sobre el blog',
    rss: 'RSS',
    feed: 'Feed RSS',
    bottomLeft: '© 2026 · Edgar Martinez Palmero',
    bottomRight: 'Disenado y desarrollado desde Vitoria',
  },
  en: {
    signature: 'Building the future of the web,',
    signatureEm: 'pixel by pixel.',
    location: 'Vitoria-Gasteiz · ES · 2026',
    blog: 'Blog',
    home: 'Home',
    articles: 'Articles',
    categories: 'Categories',
    about: 'About this blog',
    rss: 'RSS',
    feed: 'RSS Feed',
    bottomLeft: '© 2026 · Edgar Martinez Palmero',
    bottomRight: 'Designed and built from Vitoria',
  },
};

export const articleUiCopy: Record<Locale, ArticleUiCopy> = {
  es: {
    back: '<- Volver a articulos',
    min: 'MIN',
    authorBio: 'Frontend developer en Vitoria-Gasteiz. Diseno y construyo interfaces.',
    portfolio: 'Ver portfolio',
    keepReading: 'Seguir leyendo',
    tocLabel: 'En este articulo',
  },
  en: {
    back: '<- Back to articles',
    min: 'MIN',
    authorBio: 'Frontend developer in Vitoria-Gasteiz. I design and build interfaces.',
    portfolio: 'View portfolio',
    keepReading: 'Keep reading',
    tocLabel: 'In this article',
  },
};
