import * as babylon from "babylon"
import generate from 'babel-generator';

const code = `var a = ['a', 'b', 'c']; var b = [...a, 'foo'];`;
const ast = babylon.parse(code);

console.log(generate(ast));