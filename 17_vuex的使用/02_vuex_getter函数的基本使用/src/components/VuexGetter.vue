<!--  -->
<template>
  <div>
    <h2>我是VueGetter子组件</h2>
    <h2>{{$store.state.counter}}</h2>
    <h2>平方值：{{$store.state.counter * $store.state.counter}}</h2>
    <h2>计算属性改造后：{{square}}</h2>
    <h2>使用Vuex中的getters改造后：{{$store.getters.square}}</h2>
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {};
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