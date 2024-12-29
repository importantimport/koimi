import { glob } from 'astro/loaders'
import { defineCollection } from 'astro:content'
import { articleSchema } from 'koimi'

const articles = defineCollection({
  loader: glob({ base: './src/content/articles', pattern: '**/*.{md,mdx}' }),
  schema: articleSchema(),
})

export const collections = { articles }
