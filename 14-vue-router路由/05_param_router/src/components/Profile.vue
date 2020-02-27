<!-- 档案 -->
<template>
  <div class=''>
    <h2>我是profile组件</h2>
    <h2>{{$route.query.name}}</h2>
    <h2>{{$route.query.sex}}</h2>
    <h2>{{$route.query.age}}</h2>
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
      };
    },
    computed: {},
    watch: {},
    methods: {

    }
  }
</script>
<style>
</style>