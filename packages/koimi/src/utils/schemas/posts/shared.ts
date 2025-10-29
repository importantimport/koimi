// import type { z } from 'astro/zod'
import type { BaseSchema, SchemaContext } from 'astro:content'

export interface PostSchemaOptions<T extends BaseSchema> {
  /**
   * Extend Koimi's schema with additional fields.
   *
   * @example
   * // Extend the built-in schema with a Zod schema.
   * articleSchema({
   *   extend: z.object({
   *     // Add a new field to the schema.
   *     categories: z.enum(['tutorial', 'guide', 'reference']).optional(),
   *   }),
   * })
   *
   * // Use the Astro image helper.
   * articleSchema({
   *   extend: ({ image }) => z.object({
   *     banner: image(),
   *   })
   * })
   */
  extend?: ((ctx: SchemaContext) => T) | T
}
