import type { ViteUserConfig } from 'astro'

import type { KoimiOptions } from '../..'

export const koimiViteVirtual = (options: KoimiOptions): NonNullable<ViteUserConfig['plugins']>[number] => {
  const modules = {
    'virtual:koimi/options': `export default ${JSON.stringify(options)}`,
  } satisfies Record<`virtual:koimi/${string}`, unknown>

  return {
    load: id => Object.keys(modules).includes(id.slice('\0'.length))
      ? modules[id.slice('\0'.length) as keyof typeof modules]
      : undefined,
    name: 'koimi/internal/vite-plugin-virtual',
    resolveId: id => Object.keys(modules).includes(id)
      ? `\0${id}`
      : undefined,
  }
}
