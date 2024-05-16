import path from 'path';
import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';

import figmaManifest from './figma.manifest';
import writeFigmaManifest from './scripts/write-figma-manifest';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	const dev = mode === 'development';
	return {
		plugins: [viteSingleFile(), writeFigmaManifest()],
		build: {
			minify: !dev,
			sourcemap: dev,
			lib: {
				name: figmaManifest.name,
				entry: path.resolve(__dirname, './src/plugin/plugin.ts'),
				fileName: 'plugin',
				formats: ['es'],
			},
			rollupOptions: {
				output: {
					entryFileNames: 'index.js',
					extend: true,
				},
			},
			emptyOutDir: false,
			outDir: path.resolve(__dirname, './dist'),
		},
		resolve: {
			alias: {
				$common: path.resolve(__dirname, './src/common'),
				$ui: path.resolve(__dirname, './src/ui'),
				$plugin: path.resolve(__dirname, './src/plugin'),
			},
		},
	};
});
