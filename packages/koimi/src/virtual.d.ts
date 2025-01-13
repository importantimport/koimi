declare module 'virtual:koimi/options' {
  const options: import('type-fest').RequiredDeep<import('./index').KoimiOptions>
  export default options
}

// declare module 'virtual:starlight/plugin-translations' {
//   const PluginTranslations: import('./utils/plugins').PluginTranslations
//   export default PluginTranslations
// }

// // TODO: Move back to `virtual-internal.d.ts` when possible. For example, when dropping support for
// // legacy collections, `utils/translations.ts` would no longer need to import project context.
// declare module 'virtual:starlight/project-context' {
//   const ProjectContext: {
//     build: {
//       format: import('astro').AstroConfig['build']['format']
//     }
//     legacyCollections: boolean
//     root: string
//     srcDir: string
//     trailingSlash: import('astro').AstroConfig['trailingSlash']
//   }
//   export default ProjectContext
// }
