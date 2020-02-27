<template>
  <div id="app">
    <router-link to="/home" tag="button">首页</router-link>
    <router-link to="/about" tag="button">关于</router-link>

    <!-- 传递参数方式一：param传参 -->
    <router-link :to="'/user/' + username" tag="button">用户</router-link>

    <!-- 传递参数方式二：query传参 -->
    <!-- <router-link to="/profile" tag="button">我的</router-link> -->
    <!-- 当点击下边路由按钮时，浏览器地址显示：http://localhost:8080/profile?name=路飞&age=23&sex=男 -->
    <router-link :to="{path:'/profile',query:{name:'路飞',age:23,sex:'男'}}" tag="button">我的link</router-link>

    <!-- 手动实现点击按钮页面跳转 -->
    <br>
    <button @click="goProfile">我的button</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data(){
    return {
      username:'zhangsan'
    }
  },
  methods:{
    goProfile(){
      this.$router.push({
        path:'/profile',
        query:{
          name:'索隆',
          sex:'man',
          age:28
        }
      })
    }
  }
}
</script>

<style>
</style>
