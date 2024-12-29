import { defineConfig } from 'astro/config'
import { koimi } from 'koimi'

// https://astro.build/config
export default defineConfig({
  integrations: [koimi({
    site: 'https://example.com',
  })],
})
