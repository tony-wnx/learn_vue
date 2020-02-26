
// 使用commonJs规范进行导入
const {sum,mul} = require('./mathUtils.js')

console.log(sum(11,22));
console.log(mul(11,22));


// 使用ES6规范进行导入
import {id,name,age} from './info'
console.log(id);
console.log(name);
console.log(age);