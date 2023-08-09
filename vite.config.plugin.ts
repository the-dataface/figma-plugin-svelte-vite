import path from 'path';
import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';
import writeFigmaManifest from './scripts/write-figma-manifest';
import figmaManifest from './figma.manifest';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [viteSingleFile(), writeFigmaManifest()],
	build: {
		lib: {
			name: figmaManifest.name,
			entry: path.resolve(__dirname, './src/plugin/plugin.ts'),
			fileName: 'plugin',
			formats: ['es'],
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
});
