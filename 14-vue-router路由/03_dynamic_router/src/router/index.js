import Router from 'vue-router'
import Vue from 'vue'
// import Home from '../components/Home.vue'
// import About from '../components/About.vue'
// import User from '../components/User.vue'

// 上边的写法当进行打包时,会被打包成三个js文件(app.xxx业务代码、main.xxx各个文件之间的依赖关系、vender.xxx第三方插件)
// 当项目很大时,打包后的js文件会非常大,当打开页面时,可能会出现页面空白,内容没有加载出来或者加载很慢的情况,
// 为了避免这种情况,我们使用懒加载的方式,将不同的路由打包成不同的js文件,当哪个路由处于活跃状态,就加载哪个
// 路由对应的js文件(懒加载思想)

const Home = () => import('../components/Home.vue')
const About = () => import('../components/About.vue')
const User = () => import('../components/User.vue')

Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            redirect:'/home'
        },
        {
            path:'/home',
            component:Home
        },
        {
            path:'/about',
            component:About
        },
        // 希望传递参数进来
        {
            path:'/user/:userId',
            component:User
        }
    ],
    mode:'history'
})