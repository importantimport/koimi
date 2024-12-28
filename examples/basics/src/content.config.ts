import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

const articles = defineCollection({
  loader: glob({ base: './src/contents/articles', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    // permalink: z.string().optional(),
    title: z.string(),
  }),
})

export const collections = { articles }
