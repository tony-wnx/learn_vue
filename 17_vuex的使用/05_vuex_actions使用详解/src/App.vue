<template>
  <div id="app">
    <h2>Vuex数据的响应式原理</h2>
    <h2>{{$store.state.person}}</h2>
    <button @click="changeAge">更换年龄</button>
    <button @click="addAddress">添加住址</button>
    <button @click="deleteSex">删除性别</button>
    <hr>
    <UseMutations></UseMutations>
  </div>
</template>

<script>
  import UseMutations from './components/UseMutations'

  export default {
    components: {
      UseMutations
    },
    methods: {
      changeAge(){
        // 6、修改此处的方法,来用上我们在actions中定义的可异步操作的方法
        // // this.$store.commit('changeAge')
        // this.$store.dispatch('asynChangeAge')

        // 7、dispatch和commit类似,也可以传递参数
        this.$store.dispatch('asynChangeAge',30)
      },
      addAddress(){
        this.$store.commit('addAddress')
      },
      deleteSex(){
        this.$store.commit('deleteSex')
      }
    }
  }
</script>

<style>
</style>