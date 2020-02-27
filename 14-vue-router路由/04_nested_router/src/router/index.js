import Router from 'vue-router'
import Vue from 'vue'

// 懒加载
const Home = () => import('../components/Home.vue')
const About = () => import('../components/About.vue')
const User = () => import('../components/User.vue')
const HomeLeft = () => import('../components/HomeLeft.vue')
const HomeRight = () => import('../components/HomeRight.vue')

Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'/',
            redirect:'/home'
        },
        {
            path:'/home',
            component:Home,
            
            // 嵌套路由的定义,使用children添加子路由
            children:[
                {
                    path:'',
                    redirect:'/left'
                },
                {
                    path:'/left',
                    component:HomeLeft
                },
                {
                    path:'/right',
                    component:HomeRight
                }
            ]
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