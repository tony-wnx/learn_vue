import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // 一个组件就是一个对象
    {
      path: '',
      // 一打开页面就默认显示一个内容
      // 但是浏览器地址栏有些不好看(默认采用hash的方式显示,就是多一个#) :http://localhost:8080/#/home
      // 在该文件中添加一个和routes同级的mode属性 : http://localhost:8080/home
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ],
  mode:'history',
  linkActiveClass:'active'
})
