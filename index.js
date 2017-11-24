var babel = require('babel-core');

let result = babel.transform('const a = 15;');
console.log(result.code);