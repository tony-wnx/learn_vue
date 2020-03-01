<!--  -->
<template>
  <div id="app">
    <h2>我是app组件</h2>
    <h2>{{$store.state.counter}}</h2>

    <!-- 1、需求一：在父子组件中都打印state.counter的平方值 -->
    <h2>平方值：{{$store.state.counter * $store.state.counter}}</h2>

    <!--2、方法一存在的问题：我们发现代码有些复杂,不够精简。而且如果还有其他的运算需求都像这样写的话,
        这里的代码会更加复杂,所以我们使用computed计算属性对其进行改造。
        但是,改造后还存在一个问题：我们在App.vue父组件中定义了该计算属性,但是我们在子组件VuexGetter.vue中并不能使用,
        还需要在子组件中再定义一次该计算属性。
        所以,我们再次进行改造。
    -->
    <h2>计算属性改造后：{{square}}</h2>

    <!--3、既然在各自组件中都定义计算属性繁杂,那么久到Vuex的index.js中去定义一个计算属性,这样不管在哪个组件中,都可以
        使用$store.getters.xxx来进行使用。
        Vuex中的getters属性,就相当于Vue对象中的computerd计算属性 
    -->
    <h2>使用Vuex中的getters改造后：{{$store.getters.square}}</h2>
    <hr>
    <VueGetter></VueGetter>
  </div>
</template>

<script>
  import VueGetter from './components/VuexGetter'

  export default {
    components: {
      VueGetter
    },
    data() {
      return {
      };
    },
    computed: {
      square(){
        return this.$store.state.counter * this.$store.state.counter
      }
    },
    watch: {},
    methods: {}
  }
</script>

<style>
</style>