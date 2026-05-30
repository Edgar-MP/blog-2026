import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPublishedPosts } from '../lib/blog';

export async function GET(context: APIContext) {
  const posts = await getPublishedPosts('es');

  return rss({
    title: 'Blog · Edgar Martínez',
    description: 'Frontend, diseño y sistemas web desde la práctica. Aprendizajes, decisiones técnicas y experimentos.',
    site: context.site!,
    items: posts.map(post => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/articulos/${post.id}/`,
      categories: [post.data.category, ...post.data.tags],
    })),
    customData: `<language>es</language>`,
  });
}
