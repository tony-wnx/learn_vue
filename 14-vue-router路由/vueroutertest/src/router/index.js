// 1、使用路由首先导入
import VueRouter from 'vue-router'
import Vue from 'vue'

// 2、通过Vue.use(插件)安装插件
Vue.use(VueRouter)

// 5、提取routes数组
const routes = []

// 3、创建一个vueRouter对象
const router = new VueRouter({
  // 4、VueRouter对象中有一个routers属性,该属性是一个数组,可以把该数组提取出去
  // routes:[]
  routes
})

// 6、将router对象传入vue实例
export default router

// 7、在main.js的vue对象中引用router








// import Vue from 'vue'
// import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })
