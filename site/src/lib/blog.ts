import { getCollection, render, type CollectionEntry } from 'astro:content';
import type { Locale } from './i18n';
import { getLocalePosts } from './content';

type BlogPost = CollectionEntry<'blog'>;

export async function getPublishedPosts(locale: Locale): Promise<BlogPost[]> {
  const entries = await getCollection('blog', ({ data }) => !data.draft);
  return getLocalePosts(entries, locale).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function getFeaturedAndLatest(posts: BlogPost[], latestCount: number) {
  const featured = posts.find(post => post.data.featured) ?? posts[0];
  const latest = posts.filter(post => post.id !== featured?.id).slice(0, latestCount);
  return { featured, latest };
}

export async function getReadingMinutes(post: BlogPost): Promise<number> {
  const { remarkPluginFrontmatter } = await render(post);
  return (remarkPluginFrontmatter?.minutesRead as number | undefined) ?? 5;
}

export async function withReadingMinutes(posts: BlogPost[]) {
  return Promise.all(posts.map(async post => ({ post, minutes: await getReadingMinutes(post) })));
}
