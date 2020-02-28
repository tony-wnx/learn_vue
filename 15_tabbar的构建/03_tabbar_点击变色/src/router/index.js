import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = ()=> import('../views/Home.vue')
const Category = ()=> import('../views/Category.vue')
const Car = ()=> import('../views/Car.vue')
const Mine = ()=> import('../views/Mine.vue')

Vue.use(VueRouter)

const routes = [
  {
    path:'',
    component:Home
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/car',
    component:Car
  },
  {
    path:'/mine',
    component:Mine
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
