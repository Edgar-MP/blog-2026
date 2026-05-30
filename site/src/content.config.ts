import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      date: z.coerce.date(),
      locale: z.enum(['es', 'en']).default('es'),
      translationKey: z.string().optional(),
      category: z.string(),
      tags: z.array(z.string()).default([]),
      cover: image().optional(),
      coverAlt: z.string().default(''),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

export const collections = { blog };
