<!--  -->
<template>
  <div id="app">
    <h2>App组件</h2>
    <!-- 
      <h2>{{counter}}</h2>
      <button @click="add">+</button>
      <button @click="sub">-</button> 
    -->

    <!-- 3、在state中定义完后,在这里使用 -->
    <h2>{{$store.state.counter}}</h2>
    
    <!-- 4、在浏览器中安装vue Devtools插件,该插件可以方便的对vue程序进行调试,
      当通过mutations对state中的couter进行操作时,在vue插件中可以记录它的修改记录 
    -->

    <!-- 5、直接通过$store操作state中的变量,但是在浏览器中发现,插件没有记录先关的修改记录 -->
    <!-- <button @click="$store.state.counter++">+</button> -->
    <!-- <button @click="$store.state.counter--">-</button> -->

    <!-- 6、在mutations中定义操作方法,并在此定义方法进行调用 -->
    <button @click="add">+</button>
    <button @click="sub">-</button>

    <h2>--------------------</h2>

    <!-- 1、现在要想在HelloVuex组件中也使用counter变量,方法一：使用父子传递 -->
    <!-- <HelloVuex :hcounter="counter"></HelloVuex> -->

    <!--2、假设两个组件之间没有父子关系,他们都需要获取counter的值,使用Vuex状态管理,
      在store的index.js的state中定义counter
    -->
    <HelloVuex></HelloVuex>
  </div>
</template>

<script>
  import HelloVuex from './components/HelloVuex'

  export default {
    components: {
      HelloVuex
    },
    data() {
      return {
        counter:0
      };
    },
    computed: {},
    watch: {},
    methods: {
      add(){
        // this.counter++   旧方法

        // 7、调用store中mutations中的方法,必须使用this.$store.commit()函数
        // 这样修改之后,再点击+、-按钮,在浏览器中就记录下相关的修改记录
        this.$store.commit('addition')
      },
      sub(){
        // this.counter--   旧方法

        // 7、调用store中mutations中的方法,必须使用this.$store.commit()函数
        this.$store.commit('subtraction')
      }
    }
  }
</script>

<style>
</style>