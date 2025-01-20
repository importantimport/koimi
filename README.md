# Koimi [alpha]

> 💘 Sweet, Powerful, Blazing-fast Blog Meta-framework.

## About

Koimi is a continuation of [Urara](https://github.com/importantimport/urara), inheriting its style and rewriting it based on Astro.

### Meta-framework

Have you ever used [Starlight](https://starlight.astro.build)? like it, Koimi is provided as [Astro Integration](https://docs.astro.build/en/guides/integrations-guide/).

```bash
pnpm add koimi @iconify-json/heroicons
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

<!-- Or you can create a new project from template (WIP):

```bash
pnpm create astro --template importantimport/koimi/examples/create
``` -->

No more forks, Koimi is just a npm package.

### Modern Stack

Astro v5, Tailwind v4, daisyUI v5... just keep it up to date.

## License

[MIT](LICENSE.md)
