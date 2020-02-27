<template>
  <div>
    <h2>用户组件</h2>
    <h2>{{$route.params.userId}}</h2>
  </div>
</template>
<script>
export default {
  name: "User",
  data () {
    return {
    };
  },
  created() {
    console.log('User被创建了')
  },
  destroyed() {
    console.log('User被销毁了')
  }
}
</script>
<style>
</style>