<!--  -->
<template>
  <div>
    <h2>HelloVuex组件</h2>
    <!-- <h2>{{hcounter}}</h2> -->
    <h2>{{$store.state.counter}}</h2>
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {};
    },
    computed: {},
    watch: {},
    methods: {},
    props:{
      hcounter:Number
    }
  }
</script>

<style>
</style>