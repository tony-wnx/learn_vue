<template>
  <div id="app">
    <router-link to="/home" tag="button">首页</router-link>
    <router-link to="/about" tag="button">关于</router-link>

    <!-- url后拼接着参数,使用动态绑定 -->
    <router-link :to="'/user/' + username" tag="button">用户</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import About from './components/About'
import Home from './components/Home'

export default {
  name: 'App',
  components: {
    About,
    Home
  },
  data(){
    return {
      username:'zhangsan'
    }
  }
}
</script>

<style>
</style>
