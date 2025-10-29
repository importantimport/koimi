import { defineConfig } from 'astro/config'
import { koimi } from 'koimi'

// https://astro.build/config
export default defineConfig({
  integrations: [koimi({
    authors: [{
      avatar: 'https://github.com/kwaa.png',
      name: '藍+85CD',
      url: 'https://kwaa.dev',
    }],
    routes: {
      articles: '[...slug]',
      articlesIndex: '/',
    },
    site: 'https://example.com',
    title: 'Koimi Example',
  })],
})
