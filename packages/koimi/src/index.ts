import type { AstroIntegration, AstroUserConfig } from 'astro'

import mdx from '@astrojs/mdx'
import tailwindcss from '@tailwindcss/vite'
import icon from 'astro-icon'

export * from './utils'

export interface KoimiOptions {
  integrations?: AstroIntegration[]
  // required by pages/feed.xml.ts
  site: AstroUserConfig['site']
}

const koimi = (options: KoimiOptions): AstroIntegration => ({
  hooks: {
    'astro:config:setup': async ({
      // config,
      injectRoute,
      injectScript,
      updateConfig,
    }) => {
      injectRoute({
        entrypoint: 'koimi/pages/feed.xml.ts',
        pattern: 'feed.xml',
      })

      injectRoute({
        entrypoint: 'koimi/pages/articles/index.astro',
        pattern: 'articles',
      })

      injectRoute({
        entrypoint: 'koimi/pages/articles/[...slug].astro',
        pattern: 'articles/[...slug]',
      })

      // TODO: check KoimiOptions
      injectScript('page-ssr', 'import \'koimi/styles/main.css\'')

      updateConfig({
        integrations: [
          mdx({ optimize: true }),
          icon(),
          ...(options.integrations ?? []),
        ],
        site: options.site,
        vite: {
          plugins: [
            tailwindcss(),
          ],
        },
      })
    },
  },
  name: 'koimi',
})

export { koimi as default, koimi }
