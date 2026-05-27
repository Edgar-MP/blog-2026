import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: 'Blog · Edgar Martínez',
    description: 'Frontend, diseño y sistemas web desde la práctica. Aprendizajes, decisiones técnicas y experimentos.',
    site: context.site!,
    items: posts.map(post => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/articulos/${post.slug}/`,
      categories: [post.data.category, ...post.data.tags],
    })),
    customData: `<language>es</language>`,
  });
}
