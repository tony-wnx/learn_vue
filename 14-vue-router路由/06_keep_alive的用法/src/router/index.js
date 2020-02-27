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

router.beforeEach((to,from,next) => {
  console.log('beforeEach函数被调用')
  document.title = to.matched[0].meta.title
  next()
})

export default router
