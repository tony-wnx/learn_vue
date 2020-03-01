<template>
  <div id="app">
    <h2>我是App组件</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="sub">-</button>
    <button @click="add">+</button>
    <button @click="addNum(5)">+5</button>
    <button @click="addNum(10)">+10</button>
    <button @click="multiply(2)">*2</button>
    <h2>{{$store.state.movies}}</h2>
    <button @click="addMovie">添加动漫信息</button>
    <hr>
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

      // mutations的提交风格一：
      add(){
        this.$store.commit('increment')
      },
      sub(){
        this.$store.commit('decrement')
      },
      addNum(aaa){
        // 如果有参数传递进来,直接更在后边就可以,参数名可以和mutations中的不一致
        this.$store.commit('incrementNum',aaa)  
      },
      addMovie(){
        const newMovie = {
          id:'003',
          name:'一人之下'
        }
        this.$store.commit('addNewMovie',newMovie)
      },

      // mutations的提交风格二：
      multiply(count){
        this.$store.commit({
          type:'multiplication',
          count
        })
      },

      // Vuex数据的响应式原理
      changeAge(){
        this.$store.commit('changeAge')
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