import type { CollectionEntry } from 'astro:content';
import type { Locale } from './i18n';

type BlogEntry = CollectionEntry<'blog'>;

export function isLocalePost(post: BlogEntry, locale: Locale): boolean {
  if (locale === 'en') return post.data.locale === 'en';
  return post.data.locale !== 'en';
}

export function getLocalePosts(posts: BlogEntry[], locale: Locale): BlogEntry[] {
  return posts.filter(post => isLocalePost(post, locale));
}
