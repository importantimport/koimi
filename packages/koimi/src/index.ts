import type { AstroIntegration } from 'astro'

import mdx from '@astrojs/mdx'
import tailwindcss from '@tailwindcss/vite'

export interface KoimiOptions {
  integrations?: AstroIntegration[]
}

const koimi = (options: Partial<KoimiOptions>): AstroIntegration => ({
  hooks: {
    'astro:config:setup': async ({
      // config,
      injectRoute,
      injectScript,
      updateConfig,
    }) => {
      injectRoute({
        entrypoint: 'koimi/routes/articles.astro',
        pattern: 'articles/[...slug]',
      })

      // TODO: check KoimiOptions
      injectScript('page-ssr', 'import \'koimi/styles/main.css\'')

      updateConfig({
        integrations: [
          mdx({ optimize: true }),
          ...(options.integrations ?? []),
        ],
        vite: {
          plugins: [
            tailwindcss() as any,
          ],
        },
      })
    },
  },
  name: 'koimi',
})

export { koimi as default, koimi }
