
// 使用commonJs规范进行导入
const {sum,mul} = require('./mathUtils.js')

console.log(sum(11,22));
console.log(mul(11,22));


// 使用ES6规范进行导入
import {id,name,age} from './info'
console.log(id);
console.log(name);
console.log(age);

// 当我们打包好bundle.js文件后,其中可能会有ES6的语法,但是有些浏览器现在还不支持ES6,所以
// 我们需要把ES6转换成ES5,完成该转换需要安装一个loader ：babel-loader,
// 命令： npm install --save-dev babel-loader@7 babel-core babel-preset-es2015

// 原来打包后的bundle.js文件中可以检索到const关键字(ES6语法),安装babel-loader重新打包,
// 检索不到const关键字

// webpack官网:npm install babel-loader babel-core babel-preset-env webpack
// 它这个命令需要一个babel.rc的配置文件 babel-preset-env到该文件中去找相应的版本