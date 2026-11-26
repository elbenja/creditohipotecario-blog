import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One .mdx file per guide in src/content/blog. The file name is the URL slug.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    category: z.string(),
    date: z.coerce.date(),
    readingTime: z.string(),
    cover: z.object({
      src: z.string(),
      alt: z.string(),
      // Optional object-position per surface, so the subject isn't hidden under text.
      position: z
        .object({
          featured: z.string().optional(),
          featuredMobile: z.string().optional(),
          card: z.string().optional(),
          hero: z.string().optional(),
        })
        .default({}),
      // Featured card only: enlarge and push the photo left (subject in the centre of the shot).
      shiftLeft: z.boolean().default(false),
    }),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
