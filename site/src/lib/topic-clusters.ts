import type { Locale } from './i18n';

type Cluster = {
  key: string;
  title: Record<Locale, string>;
  intro: Record<Locale, string>;
  slugs: Record<Locale, string[]>;
};

const CLUSTERS: Cluster[] = [
  {
    key: 'frontend-foundations',
    title: {
      es: 'Ruta Frontend: base técnica',
      en: 'Frontend Path: technical foundation',
    },
    intro: {
      es: 'Secuencia recomendada para entender stack, arquitectura y sistema de diseño.',
      en: 'Recommended sequence to understand stack, architecture, and design-system decisions.',
    },
    slugs: {
      es: [
        'construyendo-blog-astro-tailwind',
        'design-systems-sencillos',
      ],
      en: [
        'building-my-blog-with-astro-tailwind-and-a-simple-architecture',
        'simple-design-systems-how-i-organize-styles-components-and-tokens',
      ],
    },
  },
  {
    key: 'author-context',
    title: {
      es: 'Ruta Personal: contexto del autor',
      en: 'Personal Path: author context',
    },
    intro: {
      es: 'Contenido de contexto para entender cómo trabajo y desde qué experiencia escribo.',
      en: 'Context content to understand how I work and the experience behind these notes.',
    },
    slugs: {
      es: [
        'por-que-cree-este-blog',
        'mi-setup-desarrollo-frontend',
      ],
      en: [
        'why-i-created-this-frontend-blog',
        'my-setup-for-coding-creating-and-gaming',
      ],
    },
  },
];

export function findClusterForPost(slug: string, locale: Locale): Cluster | undefined {
  return CLUSTERS.find(cluster => cluster.slugs[locale].includes(slug));
}

