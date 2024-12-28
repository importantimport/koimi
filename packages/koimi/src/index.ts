import type { AstroIntegration } from 'astro'

const koimi = (): AstroIntegration => ({
  hooks: {
    // 'astro:config:setup': async ({ injectRoute }) => {
    //   injectRoute({
    //     entrypoint: 'koimi/routes/index.astro',
    //     pattern: '[...slug]',
    //   })
    // },
  },
  name: 'koimi',
})

export { koimi as default, koimi }
