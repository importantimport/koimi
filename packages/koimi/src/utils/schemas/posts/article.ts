import type { BaseSchema, SchemaContext } from 'astro:content'

import { z } from 'astro/zod'

import type { PostSchemaOptions } from './shared'

const ArticleSchema = ({ image }: SchemaContext) => z.object({
  authors: z.array(
    z.object({
      avatar: z.string().url().optional(),
      name: z.string(),
      url: z.string().url().optional(),
    }),
  ).optional(),
  image: z.union([
    image(),
    z.object({
      alt: z.string(),
      src: image(),
    }),
  ]).optional(),
  published: z.coerce.date().optional(),
  summary: z.string().optional(),
  tags: z.array(z.string()).optional(),
  title: z.string(),
})

export const articleSchema = <T extends BaseSchema = never>({
  extend,
}: PostSchemaOptions<T> = {}) =>
  (ctx: SchemaContext) => {
    const userSchema = typeof extend === 'function' ? extend(ctx) : extend
    const articleSchema = ArticleSchema(ctx)

    return userSchema == null
      ? articleSchema
      : articleSchema.and(userSchema)
  }
