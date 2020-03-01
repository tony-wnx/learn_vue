<!--  -->
<template>
  <div>
    <h2>我是VueGetter子组件</h2>
    <h2>computed计算属性：{{priceMore50}}</h2>
    <h2>getters中的计算属性：{{$store.getters.higherThen50}}</h2>
    <h2>价格大于50的列表长度：{{$store.getters.higherThen50.length}}</h2>
    <h2>getters函数获取列表长度：{{$store.getters.higherThen50ListLength}}</h2>
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {};
    },
    computed: {
      priceMore50(){
        return this.$store.state.books.filter(book => book.price >= 50)
      }
    },
    watch: {},
    methods: {}
  }
</script>

<style>
</style>