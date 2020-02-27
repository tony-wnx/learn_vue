import Vue from 'vue'
import VueRouter from 'vue-router'

// 懒加载
const About = () => import('../components/About.vue')
const Home = () => import('../components/Home.vue')
const HomeLeft = () => import('../components/HomeLeft.vue')
const HomeRight = () => import('../components/HomeRight.vue')
const User = () => import('../components/User.vue')
const Profile = () => import('../components/Profile.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      title:'首页'
    }
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta:{
      title:'首页'
    },
    children:[
      {
        path:'/',
        component:HomeLeft
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
    path: '/about',
    name: 'About',
    component: About,
    meta:{
      title:'关于'
    }
  },
  {
    path: '/user/:userId',
    name: 'User',
    component: User,
    meta:{
      title:'用户'
    }
  },
  {
    path:'/profile',
    name:'Profile',
    component:Profile,
    meta:{
      title:'档案'
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


// 当从一个路由跳转到另一个路由时，该方法就会被调用
router.beforeEach((to,from,next) => {

  // 这个在点击‘首页’按钮时,页面标题显示undefind(因为它包含嵌套组件),这时可打印to对象在浏览器查看,
  // 发现to对象有个matched属性,它里边包含meta.title
  console.log(to)
  // document.title = to.meta.title

  // 改写成如下就可解决
  document.title = to.matched[0].meta.title
  next()
})

export default router
