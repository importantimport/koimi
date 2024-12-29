import type { SchemaContext } from 'astro:content'

import { z } from 'astro/zod'

export const articleSchema = () =>
  ({ image }: SchemaContext) => z.object({
    image: z.union([
      image(),
      z.object({
        alt: z.string(),
        src: image(),
      }),
    ]).optional(),
    published: z.date().optional(),
    summary: z.string().optional(),
    title: z.string(),
  })
