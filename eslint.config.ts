import { GLOB_ASTRO, GLOB_ASTRO_TS } from '@antfu/eslint-config'
import { defineConfig } from '@moeru/eslint-config'

export default defineConfig({
  astro: true,
}, {
  files: [GLOB_ASTRO, GLOB_ASTRO_TS],
  rules: {
    '@masknet/browser-no-persistent-storage': 'off',
    '@masknet/no-top-level': 'off',
  },
})
