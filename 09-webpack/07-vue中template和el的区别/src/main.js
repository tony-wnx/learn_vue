// 导入js计算函数
const {sum,mul} = require('./js/mathUtil')
console.log(sum(10,20))
console.log(mul(10,20))

// 导入css样式
require('./css/style.css')

    // 导入vue对象
    import Vue from 'vue'

    new Vue({
        el:'#app',
        // template中定义的部分将会替换html页面中<div id="app"></div>整个部分
        template:
            `
            <div>
                <h2>vue对象中的template部分替换整个div</h2>
            </div>
            `,
        data:{
            message:'vue中template和el的区别'
        }
    })