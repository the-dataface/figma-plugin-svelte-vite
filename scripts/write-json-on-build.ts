import * as fs from 'fs';
import { resolve } from 'path';

export default function writeJSONOnBuild(
	obj: Object,
	filename: string = 'file.json'
) {
	return {
		name: 'write-json-on-build',
		writeBundle() {
			const outDir = resolve('dist');
			if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);
			const fileOutPath = resolve(outDir, filename);
			fs.writeFileSync(fileOutPath, JSON.stringify(obj, null, 2));
		},
	};
}
