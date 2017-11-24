"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var babylon = require("babylon");
var babel_generator_1 = require("babel-generator");
var code = "var a = ['a', 'b', 'c']; var b = [...a, 'foo'];";
var ast = babylon.parse(code);
console.log(babel_generator_1.default(ast));
//# sourceMappingURL=index.js.map