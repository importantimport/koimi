# Koimi

> 💘 Sweet, Powerful, Blazing-fast Blog Meta-framework.

## About

Koimi is a continuation of [Urara](https://github.com/importantimport/urara), inheriting its style and rewriting it based on Astro.

### Meta-framework

Have you ever used [Starlight](https://starlight.astro.build)? Like it, Koimi is provided as [Astro Integration](https://docs.astro.build/en/guides/integrations-guide/).

```bash
pnpm add koimi
```

```ts
// astro.config.ts
import { defineConfig } from 'astro/config'
import { koimi } from 'koimi'

export default defineConfig({
  integrations: [
    koimi({
      site: 'https://example.com',
      title: 'My Blog',
    }),
  ],
})
```

## License

[MIT](LICENSE.md)
