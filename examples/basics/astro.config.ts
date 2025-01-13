import { defineConfig } from 'astro/config'
import { koimi } from 'koimi'

// https://astro.build/config
export default defineConfig({
  integrations: [koimi({
    routes: {
      articles: '[...slug]',
      articlesIndex: '/',
    },
    site: 'https://example.com',
    title: 'Koimi Example',
  })],
})
