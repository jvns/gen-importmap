#!/usr/bin/env node
import * as esbuild from 'esbuild';

async function generateImportMap(filename) {
    const result = await esbuild.build({
        entryPoints: [filename],
        bundle: true,
        metafile: true,
        write: false,
        format: 'esm',
        platform: 'browser'
    });

    const { metafile } = result;
    const imports = {};

    for (const [file, data] of Object.entries(metafile.inputs)) {
        for (const imp of data.imports) {
            if (imp.original.startsWith('.')) {
                continue;
            }
            imports[imp.original] = "./" + imp.path;
        }
    }
    console.log('<script type="importmap">');
    console.log(JSON.stringify(imports, null, 2));
    console.log('</script>');
}

const filename = process.argv[2];
if (!filename) {
    console.error('Usage: node gen-importmap.js <filename>');
    process.exit(1);
}

generateImportMap(filename);
