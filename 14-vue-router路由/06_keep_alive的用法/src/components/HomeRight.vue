<template>
<div>
  <h2>子组件右边栏</h2>
</div>
</template>
<script>
export default {
  name: "component_name",
  data () {
    return {
    };
  },
  created() {
    console.log('HomeRight被创建了')
  },
  destroyed() {
    console.log('HomeRight被销毁了')
  }
}
</script>
<style lang="scss" scoped>
</style>