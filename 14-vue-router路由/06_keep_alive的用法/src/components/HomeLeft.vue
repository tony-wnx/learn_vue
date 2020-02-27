<template>
<div>
  <h2>子组件左边栏</h2>
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
    console.log('HomeLeft被创建了')
  },
  destroyed() {
    console.log('HomeLeft被销毁了')
  }
}
</script>
<style lang="scss" scoped>
</style>