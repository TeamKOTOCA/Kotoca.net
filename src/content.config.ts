import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    hero: z.string(),
    image: z.string().optional(),
  }),
});

export const collections = {
  blog,
};
