<template>
<div>
    <h2>我是首页,嘿嘿嘿</h2>

    <!-- 嵌套路由 -->
    <router-link to="/left" tag="button">左模块</router-link>
    <router-link to="right" tag="button">右模块</router-link>
    <router-view></router-view>
</div>
</template>
<script>
export default {
  name: "home",
  data () {
    return {
    };
  },
  components:{

  },
  created() {
    console.log('Home被创建了')
  },
  destroyed() {
    console.log('Home被销毁了')
  }
}
</script>
<style>
</style>