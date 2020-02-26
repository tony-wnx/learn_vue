// 导入js计算函数
const {sum,mul} = require('./js/mathUtil')
console.log(sum(10,20))
console.log(mul(10,20))

// 导入css样式
require('./css/style.css')

// 导入vue对象
import Vue from 'vue'
import App from './vue/App.vue'

new Vue({
    el:'#app',
    template:'<App/>',
    components:{
        App
    }
})
// 1、html插件
// 问题：现在的目录结构是dist中不包含index.html,dist是发布到服务器上的文件夹,这个文件夹中不包含html文件的话,
// 那打包好的bundle.js文件也就没有了作用,所以我们需要把index.html文件也打包进dist文件夹中。
// 解决办法：这就用到了插件 ：HtmlWebpackPlugin
// 插件作用：该插件会根据指定模板(需要配置)在dist目录下生成一个index.html文件,并把打包好的bundle.js文件自动通过
// <script>标签插入到<body>中
// 安装 ： npm install html-webpack-plugin --save-dev


// 2、js压缩插件
// 命令 : npm install uglifyjs-webpack-plugin@1.1.1 --save-dev
// 在webpack.config.js中导入,添加配置


// 3、我们每次修改都需要手动: npm run build,很不方便,我们可以构建一个本地服务器,当代码修改后不需要手动
// 打包,构建的服务器会帮我们自动打包,然后将打包生成的东西放在内存中(磁盘中没有),在调试完成后,只需要在最
// 后执行一次:npm run build命令即可,然后把打包生成的dist发布到服务器
// 构建的服务器可以实时监听指定的文件夹,当其中有文件发生变化时,就会自动编译
// ·安装 ： npm install webpack-dev-server@2.9.1 --save-dev
// 在webpack.config.js中添加相关配置
// ·执行webpack-dev-server 报错:无法识别命令,因为我们安装webpack-dev-server是局部安装的,但是在终端中
// 使用的是全局的
// ·在package.json文件中添加配置 "dev":"webpack-dev-server",然后就可以执行 npm run dev
// ·执行后显示Project is running at http://localhost:8080/ 成功,但是需要点击该链接才能在浏览器上打开
// 页面,让它自动打开需要再package.json文件中修改配置为：  "dev":"webpack-dev-server --open"
