// 使用commonJs规范进行导入
const {sum,mul} = require('./js/mathUtils.js')

console.log(sum(11,22));
console.log(mul(11,22));

// 使用ES6规范进行导入
import {id,name,age} from './js/info'
console.log(id);
console.log(name);
console.log(age);

// 1、按模块化的思维使用Vue,我们之前的使用方式都是直接导入Vue.js进行使用的,但是要按模块化的方式
// 使用,需要先安装Vue
// 2、安装命令： npm install vue --save 
// (这里不是--save-dev,-dev是开发环境中的依赖,实际发布的版本中不需要的东西,但是vue是项目中
// 必须要用到的东西,所以去掉dev)
// 3、安装完之后按模块化思维使用vue

import Vue from 'vue'
 const app = new Vue({
     el:'#app',
     data:{
         message:'模块化思维使用vue'
     }
 })

// 4、打包
// 5、打开页面,在浏览器中发现报错:
// [Vue warn]: You are using the runtime-only build of Vue where the template compiler 
// is not available. Either pre-compile the templates into render functions, or use 
// the compiler-included build.
// 这是因为在我们安装的vue模块(./node_modules/vue/)
// 默认使用的是runtime-only：代码中不可以有任何template
// runtime-compler：代码中可以有任何template,因为compiler可以编译template
// 需要在webpack.config.js中添加如下配置
// resolve:{
//     alias:{
//         'vue$':'vue/dist/vue.esm.js'
//     }
// }
// 重新打包，页面显示正常

