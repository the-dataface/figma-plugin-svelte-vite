<p align='center'>
<img src="https://raw.githubusercontent.com/the-dataface/figma-plugin-svelte-vite/master/.github/assets/logo.png" height="100px" alt="Logo" />
</p>

<h1 align="center">
  Figma Plugin Boilerplate: Svelte + Vite
</h1>

<!-- Slogan -->
<p align="center">
   Create scalable Figma plugins with ease, using the power of Svelte + Vite!
</p>

<!-- Badges -->
<p align="center">

  <!-- Github Badges -->
  <img src="https://raw.githubusercontent.com/TheSpawnProject/TheSpawnLanguage/master/.github/assets/github-badge.png" height="20px" />

  <a href="https://github.com/the-dataface/figma-plugin-svelte-vite/commits/master">
    <img src="https://img.shields.io/github/last-commit/the-dataface/figma-plugin-svelte-vite" alt="Last commit"/>
  </a>

  <a href="https://github.com/the-dataface/figma-plugin-svelte-vite/issues">
    <img src="https://img.shields.io/github/issues/the-dataface/figma-plugin-svelte-vite" alt="Issues"/>
  </a>

</p>

This is a boilerplate for building Figma plugins with Svelte, Vite, and TypeScript. To learn more about building plugins, see the [Figma Plugin API documentation](https://www.figma.com/plugin-docs/intro/)

_Based on the great work of [figma-plugin-react-vite](https://github.com/CoconutGoodie/figma-plugin-react-vite)_

## Key Features

1. **_Tabular_**: Use as many tabs as needed to create a multi-tabbed UI. Create a new entry in `src/ui/furniture/tabs/` with an associated `name` and `icon` in the module context. It will be automatically added to the UI's nav bar.

2. **_Common Code_**: Figma plugins with an interface are rendered using Figma-side code (code.ts on Figma docs) and sandboxed UI code (index.html on Figma docs). This template keeps the two sides separate (`src/ui` and `src/plugin`) but keeps common code available via `src/common`.

3. **_Communicative_**: Plugin and UI code can communicate via postMessaging. This boilerplate has a built-in postMessage handler to send messages between the plugin and UI. (See /src/ui/lib/components/Message.svelte for code source and examples)

4. **_Iterative_**: Configure your figma.manifest.ts credentials just once. Run `npm run build` and your plugin is ready to publish via your `/dist` folder!

5. **_One File_**: Figma UI plugins accept only a single file each for Figma-side code (js) and UI-side code (html), which makes deployment of multiple files linked to each other impossible. This template is configured with [vite-single-file](https://www.npmjs.com/package/vite-plugin-singlefile) to bundle or inline files, imports, vectors and more.

6. **_Figma's Icons_**: This boilerplate is configured with Figma's icon library for consistency and ease of use. Just use the `<FigmaIcon />` component to render an SVG icon from the library. (See /src/ui/lib/components/figma-icons/FigmaIcon.svelte for code source and examples)

7. **_Tailwind-ready_**: This boilerplate is configured with [tailwindcss](https://tailwindcss.com/) and [postcss](https://postcss.org/) for out-of-the-box utilities and styling.

## File Structure

- src
  - src/common/ : Sources that are intended to be used both by plugin and ui logical sides.
  - src/plugin/ : Sources of the plugin logical side. Place everything that interracts with Figma here.
  - src/ui/ : Sources of the ui logical side, a classical Vite + Svelte source base.
- scripts
  - scripts/vite/ : Some custom vite plugins to assist inlining assets
- figma.manifest.ts - A module that exports Figma Plugin Manifest for the build scripts

## Getting started

1. Clone this repository
2. Install dependencies with `npm install`
3. In Figma, go to `Plugins` > `Development` > `New Plugin...` and follow the prompts
4. Copy the contents of `manifest.json` into the `figma.manifest.ts` file in this repository's root folder
5. Run `npm run dev`to build the plugin. This command will watch for changes and rebuild the plugin automatically, updating Figma's plugin instance with the changes.
6. To publish the plugin, run `npm run build` and upload the `/dist` folder to the Figma Developer Console

## Caveats

- Images must be either inlined SVGs or be small enough to be inlined as data URIs. Figma plugins are sandboxed and cannot load external resources, so assets must be inlined.

## Notes

- This boilerplate uses [Svelte](https://svelte.dev/) for the UI, [Vite](https://vitejs.dev/) for the build system, and [TypeScript](https://www.typescriptlang.org/) for type checking.
- The plugin is built to the `/dist` folder, which is ignored by Git. This folder is what you upload to the Figma Developer Console when publishing your plugin.
