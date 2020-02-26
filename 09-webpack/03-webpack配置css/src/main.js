
// 使用commonJs规范进行导入
const {sum,mul} = require('./js/mathUtils.js')

console.log(sum(11,22));
console.log(mul(11,22));


// 使用ES6规范进行导入
import {id,name,age} from './js/info'
console.log(id);
console.log(name);
console.log(age);

// 1、引用css样式
// 2、引用后，执行打包命令：npm run build,发现报错
    // ERROR in ./src/css/nomal.css
    // Module parse failed: D:\Workspace\Vue\Vue学习\09-webpack\03-webpack配置css\src\css\nomal.css Unexpected token (1:4)
    // You may need an appropriate loader to handle this file type.
    // | body{
    // |     background-color: red;
    // | }
// 3、这时因为解析不了css，需要安装解析css-loader,与之搭配的还有style-loader
// 4、引用之后还要在webpack.config.js中添加相关配置(详细见给文件)

require('./css/nomal.css')