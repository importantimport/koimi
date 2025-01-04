// import type { z } from 'astro/zod'
import type { BaseSchema, SchemaContext } from 'astro:content'

export interface PostSchemaOptions<T extends BaseSchema> {
  extend?: ((ctx: SchemaContext) => T)
}
