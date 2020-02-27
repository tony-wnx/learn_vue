<template>
  <div id="app">
    <router-link to="/home" tag="button">首页</router-link>
    <router-link to="/about" tag="button">关于</router-link>
    <router-link :to="'/user/' + username" tag="button">用户</router-link>
    <router-link :to="{path:'/profile',query:{name:'路飞',age:23,sex:'男'}}" tag="button">我的link</router-link>
    <button @click="goProfile">我的button</button>

    <!-- 1、来回点击切换几个路由按钮,各个组件都会被频繁的创建和销毁(调用各个组件自己的created和destoryed方法) ,为了避免他们频繁的
    创建和销毁，提供效率，我们使用keep-alive标签,把<router-view>标签包裹在<keep-alive>标签中后,再点击路由按钮来回切换就不会频繁的
    创建和销毁了-->
    <!-- <router-view></router-view> -->
    <!--  第一次记点击：
          beforeEach函数被调用
          Home.vue?76f2:22 Home被创建了
          HomeLeft.vue?0c7b:14 HomeLeft被创建了
          index.js?a18c:78 beforeEach函数被调用
          About.vue?c330:14 About被创建了
          index.js?a18c:78 beforeEach函数被调用
          User.vue?8255:15 User被创建了
          index.js?a18c:78 beforeEach函数被调用
          index.js?a18c:78 beforeEach函数被调用
          
          第二次点击：(不会再打印创建信息)
          beforeEach函数被调用
          index.js?a18c:78 beforeEach函数被调用
          2index.js?a18c:78 beforeEach函数被调用
          index.js?a18c:78 beforeEach函数被调用 -->
    <!-- 2、当我们希望几个路由按钮中，“用户”按钮每次点击都被创建新的，可以使用 include和exclude属性 -->
    <!-- <keep-alive> -->
    <!-- 3、这里指定的"User"和User.vue文件中export default {name: "User"}中的name相同  -->
    <keep-alive exclude="User">
      <router-view></router-view>
    </keep-alive>

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
