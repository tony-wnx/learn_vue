
// 使用commonJs规范进行导入
const {sum,mul} = require('./mathUtils.js')

console.log(sum(11,22));
console.log(mul(11,22));


// 使用ES6规范进行导入
import {id,name,age} from './info'
console.log(id);
console.log(name);
console.log(age);

// webpack的相关配置
// 1、前边我们打包的时候需要输入命令: webpack ./src/main.js ./dist/bundle.js,我们希望当我们输入webpack命令
// 时就能完成打包工作，而不需要输入前边那么长的命令，这时就需要创建一个webpack.config.js文件和package.json文件。
// 
// 2、只要用到了其他一些依赖，就需要用到package.json这个文件,我们可以通过命令： npm init  自动生成该文件
// 
// 3、如果package.json文件中还有其他的依赖的话，执行命令: npm install   安装相关依赖
// 
// 4、接下来需要创建webpack.config.js文件(具体配置详细看该文件)
// 
// 5、webpack实际工作中使用的一般都是本地版本,(在终端中使用的都是全局版本),当我们从git把项目下载下来后,项目本身
// 使用的webpack版本可能是3.6.0,但是我们全局安装的版本可能(是3.7.0)和这个版本不一致,这时候我们如果使用全局版本
// 去打包线上版本时就可能因为版本原因出现错误。所以我们一般把项目下载下来后,还要安装一个本地版本
// 安装本地版本命令： npm install webpack@3.6.0 --save-dev
// 安装完本地版本,会生成一个node_modules文件夹