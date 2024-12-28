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
      // injectRoute,
      injectScript,
      updateConfig,
    }) => {
      // injectRoute({
      //   entrypoint: 'koimi/routes/index.astro',
      //   pattern: '[...slug]',
      // })

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

      // TODO: check KoimiOptions
      injectScript('page-ssr', 'import \'koimi/styles/main.css\'')
    },
  },
  name: 'koimi',
})

export { koimi as default, koimi }
