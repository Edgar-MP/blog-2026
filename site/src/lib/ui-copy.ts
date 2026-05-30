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

type HomePageCopy = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  heroLead: string;
  heroName: string;
  heroSub: string;
  latestCta: string;
  portfolioCta: string;
  featuredBadge: string;
  featuredMinutesLabel: string;
  featuredRead: string;
  latestSection: string;
  viewAll: string;
  aboutSection: string;
  aboutHand: string;
  aboutTextStart: string;
  aboutTextStrong: string;
  aboutTextEnd: string;
  aboutCta: string;
  noPosts: string;
};

type FaqItemCopy = { label: string; text: string };

type AboutPageCopy = {
  metaTitle: string;
  metaDescription: string;
  headerEyebrow: string;
  headerLine: string;
  headerEm: string;
  profileName: string;
  profileRole: string;
  profileLocation: string;
  profileBio: string;
  portfolio: string;
  github: string;
  linkedin: string;
  email: string;
  subscribe: string;
  statsArticles: string;
  statsTopics: string;
  statsSince: string;
  manifesto: string[];
  quote: string;
  faqTitle: string;
  faqItems: FaqItemCopy[];
  ctaHand: string;
  ctaText: string;
  ctaPrimary: string;
  ctaRss: string;
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

export const homePageCopy: Record<Locale, HomePageCopy> = {
  es: {
    metaTitle: 'Blog · Edgar Martínez',
    metaDescription:
      'Frontend, diseño y sistemas web desde la práctica. Aprendizajes, decisiones técnicas y experimentos.',
    eyebrow: 'blog · edgarmartinez.dev',
    heroLead: 'Blog',
    heroName: 'Edgar Martínez',
    heroSub:
      'Frontend, diseño y sistemas web desde la práctica. Aprendizajes, decisiones técnicas y experimentos que voy documentando mientras construyo productos web.',
    latestCta: 'Leer últimos artículos',
    portfolioCta: 'Ver portfolio',
    featuredBadge: '★ Destacado',
    featuredMinutesLabel: 'min lectura',
    featuredRead: 'Leer artículo',
    latestSection: 'Más artículos',
    viewAll: 'ver todos',
    aboutSection: 'Sobre este blog',
    aboutHand: '— notas, no documentación —',
    aboutTextStart: 'Este blog es mi espacio para documentar aprendizajes, decisiones técnicas y experimentos relacionados con ',
    aboutTextStrong: 'frontend, diseño de interfaces y desarrollo web',
    aboutTextEnd: '. No pretende ser una documentación perfecta, sino una colección de notas útiles desde la práctica.',
    aboutCta: 'Conocer más sobre mí',
    noPosts: 'No hay artículos publicados todavía.',
  },
  en: {
    metaTitle: 'Blog · Edgar Martinez',
    metaDescription:
      'Frontend, design and web systems from real practice. Learnings, technical decisions, and experiments.',
    eyebrow: 'blog · edgarmartinez.dev',
    heroLead: 'Blog',
    heroName: 'Edgar Martinez',
    heroSub:
      'Frontend, design and web systems from real practice. Learnings, technical decisions, and experiments I document while building web products.',
    latestCta: 'Read latest articles',
    portfolioCta: 'View portfolio',
    featuredBadge: '★ Featured',
    featuredMinutesLabel: 'min read',
    featuredRead: 'Read article',
    latestSection: 'More articles',
    viewAll: 'view all',
    aboutSection: 'About this blog',
    aboutHand: '— notes, not documentation —',
    aboutTextStart: 'This blog is my place to document learnings, technical decisions, and experiments related to ',
    aboutTextStrong: 'frontend, interface design, and web development',
    aboutTextEnd: '. It is not meant to be perfect documentation, but a collection of useful notes from real practice.',
    aboutCta: 'Learn more about me',
    noPosts: 'No published articles yet.',
  },
};

export const aboutPageCopy: Record<Locale, AboutPageCopy> = {
  es: {
    metaTitle: 'Sobre el blog',
    metaDescription:
      'Quién es Edgar Martínez y por qué existe este blog. Frontend, diseño y sistemas web desde la práctica.',
    headerEyebrow: 'Sobre este blog',
    headerLine: 'Notas, no documentación.',
    headerEm: 'Aprendizajes desde la práctica.',
    profileName: 'Edgar Martínez',
    profileRole: 'Frontend Developer & Designer',
    profileLocation: '📍 Vitoria-Gasteiz, ES',
    profileBio: 'Construyo interfaces web cuidadas, con atención al detalle visual y a la experiencia de usuario.',
    portfolio: 'Portfolio',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    email: 'Email',
    subscribe: 'Suscribirse',
    statsArticles: 'Artículos',
    statsTopics: 'Temas',
    statsSince: 'Desde',
    manifesto: [
      'Soy frontend developer y diseñador con base en Vitoria-Gasteiz. Me dedico a construir interfaces web cuidadas, con atención al detalle visual y a la experiencia de usuario.',
      'Este blog nació de una necesidad muy concreta: tenía demasiadas notas dispersas sobre decisiones técnicas, experimentos y aprendizajes, y quería un lugar donde ordenarlas. No pretende ser una fuente de verdad absoluta ni un tutorial paso a paso.',
      'Escribo sobre lo que uso en el día a día: Astro, Tailwind, design systems, Next.js, WordPress, Shopify. También sobre errores que cometí y cómo los resolví, y sobre decisiones de diseño que a veces no tienen respuesta obvia.',
    ],
    quote: '"No todo lo que aprendes merece ser un curso. A veces basta con una nota bien escrita."',
    faqTitle: 'Preguntas frecuentes',
    faqItems: [
      {
        label: 'Frecuencia',
        text: 'Sin calendario fijo. Publico cuando tengo algo que merece un artículo — normalmente entre 2 y 4 veces al mes. Puedes suscribirte al RSS para no perderte nada.',
      },
      {
        label: 'Contacto',
        text: 'Puedes escribirme por email o LinkedIn. Si tienes una pregunta sobre un artículo concreto, también puedes mencionarme en Twitter/X. Respondo a todo.',
      },
      {
        label: 'Stack',
        text: 'Este blog está construido con Astro 5 (salida 100% estática), Tailwind CSS v4 y contenido en MDX. Los artículos viven en el repositorio como archivos Markdown. La analítica es Umami self-hosted, sin cookies.',
      },
      {
        label: 'Revisión de proyectos',
        text: 'Depende del tiempo y del proyecto. Si tienes algo interesante entre manos, escríbeme con los detalles y lo vemos. No cobro por echar un vistazo y dar feedback.',
      },
      {
        label: 'Uso del contenido',
        text: 'Todo el contenido es de libre uso con atribución. Si usas algo de aquí en un proyecto, artículo o charla, agradezco una mención. Nada formal.',
      },
    ],
    ctaHand: '— ¡gracias por leer! —',
    ctaText: 'Si algún artículo te resultó útil, la mejor forma de apoyar es compartirlo o suscribirte al RSS para seguir el blog.',
    ctaPrimary: 'Ver artículos',
    ctaRss: 'RSS Feed',
  },
  en: {
    metaTitle: 'About this blog',
    metaDescription:
      'Who Edgar Martinez is and why this blog exists. Frontend, design, and web systems from real practice.',
    headerEyebrow: 'About this blog',
    headerLine: 'Notes, not documentation.',
    headerEm: 'Learned from real practice.',
    profileName: 'Edgar Martinez',
    profileRole: 'Frontend Developer & Designer',
    profileLocation: '📍 Vitoria-Gasteiz, ES',
    profileBio: 'I build crafted web interfaces with attention to visual detail and user experience.',
    portfolio: 'Portfolio',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    email: 'Email',
    subscribe: 'Subscribe',
    statsArticles: 'Articles',
    statsTopics: 'Topics',
    statsSince: 'Since',
    manifesto: [
      'I am a frontend developer and designer based in Vitoria-Gasteiz. I focus on building polished web interfaces with attention to visual detail and user experience.',
      'This blog was born from a very practical need: I had too many scattered notes about technical decisions, experiments, and learnings, and I wanted one place to organize them. It is not meant to be absolute truth or a step-by-step tutorial.',
      'I write about what I use day to day: Astro, Tailwind, design systems, Next.js, WordPress, Shopify. I also write about mistakes I made and how I fixed them, plus design decisions that often do not have obvious answers.',
    ],
    quote: '"Not everything you learn needs to become a course. Sometimes a well-written note is enough."',
    faqTitle: 'Frequently asked questions',
    faqItems: [
      {
        label: 'Publishing',
        text: 'No fixed calendar. I publish when I have something worth sharing — usually between 2 and 4 times per month. You can subscribe to RSS so you do not miss updates.',
      },
      {
        label: 'Contact',
        text: 'You can reach me via email or LinkedIn. If your question is about a specific article, you can also mention me on Twitter/X. I answer everything.',
      },
      {
        label: 'Stack',
        text: 'This blog is built with Astro 5 (100% static output), Tailwind CSS v4, and MDX content. Articles live in the repository as Markdown files. Analytics are self-hosted Umami, cookie-free.',
      },
      {
        label: 'Project reviews',
        text: 'It depends on time and project fit. If you are building something interesting, send me the details and we can check it. I do not charge to take a look and share feedback.',
      },
      {
        label: 'Content usage',
        text: 'All content can be reused with attribution. If you use something from here in a project, article, or talk, I appreciate a mention. Nothing formal.',
      },
    ],
    ctaHand: '— thanks for reading! —',
    ctaText: 'If any article helped you, the best way to support this blog is to share it or subscribe via RSS.',
    ctaPrimary: 'View articles',
    ctaRss: 'RSS Feed',
  },
};
