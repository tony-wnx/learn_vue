<template>
  <div id="app">
    <!-- 来回点击切换后，不希望浏览器上的前进后退按钮可以点击,添加一个replace -->
    <!-- tag标签,指定被渲染成什么标签 -->
    <!-- 下边渲染后，默认有个class属性router-link-active,可通过 active-class='active'对其简写 -->
    <!-- 当需要大量修改active-class='active',可以在index.js中添加  linkActiveClass:'active' -->
    <router-link to="home" replace tag='button' active-class='active'>首页</router-link>

    <!-- <router-link to="home" replace tag='button' >首页</router-link> -->
    <!-- <router-link to="about" replace tag='span'>关于</router-link> -->
    <router-view></router-view>

    <!-- 使用下边的方式效果和上边相同 -->
    <button @click="homeChange">首页</button>
    <button @click="aboutChange">关于</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    homeChange(){
      // this.$router.push('/home')
      this.$router.replace('/home')
    },
    aboutChange(){
      // this.$router.push('/about')
      this.$router.replace('/about')
    }
  }
}
</script>

<style>
</style>
