import type { BaseSchema, SchemaContext } from 'astro:content'

import { z } from 'astro/zod'

import type { PostSchemaOptions } from './shared'

const ArticleSchema = ({ image }: SchemaContext) => z.object({
  image: z.union([
    image(),
    z.object({
      alt: z.string(),
      src: image(),
    }),
  ]).optional(),
  // published: z.date().optional(),
  published: z.string().optional(),
  summary: z.string().optional(),
  title: z.string(),
})

export const articleSchema = <T extends BaseSchema | never = never>({
  extend,
}: PostSchemaOptions<T> = {}) =>
  (ctx: SchemaContext) => {
    const userSchema = extend ? extend(ctx) : undefined
    const articleSchema = ArticleSchema(ctx)

    return userSchema === undefined
      ? articleSchema
      : articleSchema.and(userSchema)
  }
