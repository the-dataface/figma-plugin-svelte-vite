import path from 'path';
import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';
import { svelte, vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [svelte({ preprocess: [vitePreprocess()] }), viteSingleFile()],
	root: path.resolve(__dirname, './src/ui'),
	build: {
		outDir: path.resolve(__dirname, './dist'),
		rollupOptions: {
			input: {
				ui: path.relative(__dirname, './src/ui/index.html'),
			},
			output: {
				entryFileNames: '[name].js',
			},
		},
	},
	css: {},
	resolve: {
		alias: {
			$common: path.resolve(__dirname, './src/common'),
			$ui: path.resolve(__dirname, './src/ui'),
			$plugin: path.resolve(__dirname, './src/plugin'),
		},
	},
});
