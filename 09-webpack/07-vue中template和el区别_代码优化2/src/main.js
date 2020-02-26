// 导入js计算函数
const {sum,mul} = require('./js/mathUtil')
console.log(sum(10,20))
console.log(mul(10,20))

// 导入css样式
require('./css/style.css')

// 导入vue对象
import Vue from 'vue'

// 1、创建一个文件夹vue,把下面组件这块代码单独封装进一个文件app.js中
// const App = {
//     template:
//     `
//         <div>
//             <h2>vue对象中的template部分替换整个div</h2>
//             <h2>{{message}}</h2>
//         </div>
//     `,
//     data(){
//         return {
//             message:'vue中template和el的区别'
//         }
//     },
//     methods:{
//         showMsg(){
//             console.log(this.message)
//         }
//     }
// }

// 3、组件已经被提取了出去,要还想使用就得进行导入
import App from './vue/app'
// 4、导入后重新打包,刷新页面显示正常

new Vue({
    el:'#app',
    template:'<App/>',
    components:{
        App
    }
})