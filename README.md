# Figma Plugin Boilerplate: Svelte + Vite + TypeScript

This is a boilerplate for building Figma plugins with Svelte, Vite, and TypeScript. To learn more about building plugins, see the [Figma Plugin API documentation](https://www.figma.com/plugin-docs/intro/)

*Based on the great work of [figma-plugin-react-vite](https://github.com/CoconutGoodie/figma-plugin-react-vite)*

## Notes

- This boilerplate uses [Svelte](https://svelte.dev/) for the UI, [Vite](https://vitejs.dev/) for the build system, and [TypeScript](https://www.typescriptlang.org/) for type checking.
- The plugin is built to the `build` folder, which is ignored by Git. This folder is what you upload to the Figma Developer Console when publishing your plugin.

## Getting started

1. Clone this repository
2. Install dependencies with `npm install`
3. Run `npm run dev` to start the development server
4. In Figma, go to `Plugins` > `Development` > `New Plugin...` and follow the prompts
5. Copy the contents of `manifest.json` into the `figma.manifest.ts` file in this repository's root folder
6. Run `npm run build` to build the plugin
7. Reload the plugin in Figma to see your changes
8. Run `npm run build` again to update the plugin
9. To publish the plugin, run `npm run build` and upload the `build` folder to the Figma Developer Console

## Caveats

- Images must be either inlined SVGs or be small enough to be inlined as data URIs. This is because Figma plugins are sandboxed and cannot load external resources.
