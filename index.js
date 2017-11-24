var babel = require('babel-core');

let result = babel.transform('let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };', { babelrc: true });
console.log(result.code);