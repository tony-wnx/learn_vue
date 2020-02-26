// 2、提取过来后,模块化思想,将其导出以供使用
export default {
// const App = {
    template:
    `
        <div>
            <h2>vue对象中的template部分替换整个div</h2>
            <h2>{{message}}</h2>
        </div>
    `,
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