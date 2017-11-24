const babel = require('babel-core');
const fs = require('fs');

const code = `import * as fs from 'fs'; const file = fs.readFileSync('.babelrc'); console.log(file); const a = 15;`;

const mutantResult = babel.transform(code);
console.log(`Mutant code: ${mutantResult.code}`);

const babelrc = JSON.parse(fs.readFileSync('.babelrc', 'utf8'));
const transpileResult = babel.transform(code, {
    presets: babelrc.presets
});
console.log(`Transpiler code: ${transpileResult.code}`);