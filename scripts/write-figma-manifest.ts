import * as fs from 'fs';
import { resolve } from 'path';

import figmaManifest from '../figma.manifest';

export default function writeFigmaManifest() {
	return {
		name: 'write-figma-manifest',
		writeBundle() {
			const outDir = resolve('dist');
			if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);
			const fileOutPath = resolve(outDir, 'manifest.json');
			fs.writeFileSync(fileOutPath, JSON.stringify(figmaManifest, null, 2));
		},
	};
}
