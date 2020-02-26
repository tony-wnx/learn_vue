import Vue from 'vue'
import App from './App'
// import router from './router/index.js' 也可以写成：
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 引用router对象
  router,
  render: h => h(App)
})
