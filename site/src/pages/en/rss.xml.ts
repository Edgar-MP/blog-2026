import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPublishedPosts } from '../../lib/blog';

export async function GET(context: APIContext) {
  const posts = await getPublishedPosts('en');

  return rss({
    title: 'Blog · Edgar Martinez (EN)',
    description: 'Frontend, design systems, and web engineering notes in English.',
    site: context.site!,
    items: posts.map(post => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/en/articles/${post.id}/`,
      categories: [post.data.category, ...post.data.tags],
    })),
    customData: `<language>en</language>`,
  });
}
