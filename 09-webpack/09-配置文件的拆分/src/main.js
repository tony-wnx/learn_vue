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