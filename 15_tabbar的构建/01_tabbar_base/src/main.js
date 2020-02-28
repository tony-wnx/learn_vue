import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// 二、一般我们不在这里这样使用css样式,而是放到xxx.vue文件的<style>标签中
// require('./assets/css/base.css')
