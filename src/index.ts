import * as babylon from 'babylon';
import generate from 'babel-generator';
import traverse from 'babel-traverse';

const code = `const a = ['a', 'b', 'c']; const b = [a, 'foo'];`;
const ast = babylon.parse(code);

traverse(ast, {
    enter(path) {
        if(path.isSpreadElement()) {
            console.log(path.node = path.node.argument);
        }
    }
});

console.log(generate(ast));