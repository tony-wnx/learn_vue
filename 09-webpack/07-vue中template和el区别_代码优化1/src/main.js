// 导入js计算函数
const {sum,mul} = require('./js/mathUtil')
console.log(sum(10,20))
console.log(mul(10,20))

// 导入css样式
require('./css/style.css')

// 导入vue对象
import Vue from 'vue'

// 2、提取后,封装成一个组件
const App = {
    template:
    `
        <div>
            <h2>vue对象中的template部分替换整个div</h2>
            <h2>{{message}}</h2>
        </div>
    `,
    // 4、把组件中引用的数据和方法提取到组件中
    data(){
        return {
            message:'vue中template和el的区别'
        }
    },
    methods:{
        showMsg(){
            console.log(this.message)
        }
    }
}

new Vue({
    el:'#app',
    
    // 1、写在这里的话,感觉结构很乱,所有进行代码优化,把这部分代码提取出去
    // template:'',
    // 6、在Vue中注册提取的组件,Vue对象现在介简洁多了,在下边template中使用<App/>
    // 组件就可以了(template部分会替换html中<div id="app"></div>整块代码)
    // 7、重新打包,刷新页面,显示正常
    template:'<App/>',
        // `
        // <div>
        //     <h2>vue对象中的template部分替换整个div</h2>
        //     <h2>{{message}}</h2>
        // </div>
        // `,

    // 3、代码提取成组件后,组件中的引用的数据和方法也不要放在Vue对象中了,也提取到组件中
    // data:{
    //     message:'vue中template和el的区别'
    // },
    // methods:{
    //     showMsg(){
    //         console.log(this.message)
    //     }
    // }
    // 5、注册提取出的组件
    components:{
        App
    }
})