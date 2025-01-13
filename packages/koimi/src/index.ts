/// <reference path="./virtual.d.ts" />

import type { AstroIntegration, AstroUserConfig } from 'astro'
import type { RequiredDeep } from 'type-fest'

import mdx from '@astrojs/mdx'
import tailwindcss from '@tailwindcss/vite'
import icon from 'astro-icon'
import { defu } from 'defu'

import { koimiViteVirtual } from './integrations/vite/virtual'

export * from './utils'

export interface KoimiOptions {
  integrations?: AstroIntegration[]
  routes?: {
    /** @default `articles/[...slug]` */
    articles?: `${string}[...slug]`
    /** @default `articles` */
    articlesIndex?: string
    /** @default `feed.xml` */
    feedXML?: string
  }
  // required by pages/feed.xml.ts
  site: AstroUserConfig['site']
  /** @default `Koimi` */
  title?: string
}

const defaultOptions: KoimiOptions = {
  integrations: [],
  routes: {
    articles: 'articles/[...slug]',
    articlesIndex: 'articles',
    feedXML: 'feed.xml',
  },
  site: 'http://localhost:4321',
  title: 'Koimi',
} satisfies RequiredDeep<KoimiOptions>

const koimi = (userOptions: KoimiOptions): AstroIntegration => {
  const options = defu(userOptions, defaultOptions) as RequiredDeep<KoimiOptions>

  return {
    hooks: {
      'astro:config:setup': async ({
        injectRoute,
        injectScript,
        updateConfig,
      }) => {
        injectRoute({
          entrypoint: 'koimi/pages/feed.xml.ts',
          pattern: options.routes.feedXML,
        })

        injectRoute({
          entrypoint: 'koimi/pages/articles/index.astro',
          pattern: options.routes.articlesIndex,
        })

        injectRoute({
          entrypoint: 'koimi/pages/articles/[...slug].astro',
          pattern: options.routes.articles,
        })

        // TODO: disable via KoimiOptions
        injectScript('page-ssr', 'import \'koimi/styles/main.css\'')
        injectScript('page-ssr', 'import \'koimi/styles/tailwind.css\'')

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
              koimiViteVirtual(options),
            ],
          },
        })
      },
    },
    name: 'koimi',
  }
}

export { koimi as default, koimi }
