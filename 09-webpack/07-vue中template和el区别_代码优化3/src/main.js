// 导入js计算函数
const {sum,mul} = require('./js/mathUtil')
console.log(sum(10,20))
console.log(mul(10,20))

// 导入css样式
require('./css/style.css')

// 导入vue对象
// import App from './vue/app' 
import Vue from 'vue'
import App from './vue/App.vue'
// 3、导入后重新打包,报错：
// ERROR in ./src/vue/App.vue
// Module parse failed: D:\Workspace\Vue\Vue学习\09-webpack\07-vue中template和el区别_代码优化3\src\vue\App.vue Unexpected token
// (1:0)
// You may need an appropriate loader to handle this file type.
// | <template>
// |     <div>
// |         <h2>vue对象中的template部分替换整个div</h2>
//  @ ./src/main.js 7:11-35
// 4、安装相关loader：npm install vue-loader vue-template-compiler --save-dev
// 5、在webpack.config.js中进行配置

new Vue({
    el:'#app',
    template:'<App/>',
    components:{
        App
    }
})