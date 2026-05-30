import type { Locale } from './i18n';

export const AUTHOR_NAME = 'Edgar Martinez Palmero';
export const AUTHOR_TITLE = 'Frontend Developer';
export const AUTHOR_PORTFOLIO = 'https://edgarmartinez.dev';
export const AUTHOR_EMAIL = 'mailto:edgar@edgarmartinez.dev';
export const AUTHOR_GITHUB = 'https://github.com/edgarmartinez';
export const AUTHOR_LINKEDIN = 'https://linkedin.com/in/edgarmartinez';
export const AUTHOR_X = 'https://x.com/edgarmartdev';

export const ORGANIZATION_NAME = 'Edgar Martinez';
export const SITE_DISPLAY_NAME = 'Blog · Edgar Martinez';
export const SITE_FOUNDING_DATE = '2026-01-01';

export function getEditorialPolicyPath(locale: Locale): string {
  return locale === 'en' ? '/en/about/editorial' : '/sobre/editorial';
}
