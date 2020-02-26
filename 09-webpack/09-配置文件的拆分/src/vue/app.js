// 1、我们发现下面的代码还是有些乱,所以进一步提取,我们创建一个App.vue文件,把template部分的代码
// 放到App.vue文件的<template></template>之间,把除template部分的代码放到App.vue文件中的
// <script></script>之间
// 
// export default {
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

// 2、提取之后,在main.js中就不再 import App from './vue/app.js',
// 改为：import App from './vue/App.vue'