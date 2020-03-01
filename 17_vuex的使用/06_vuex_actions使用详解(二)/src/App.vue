<template>
  <div id="app">
    <h2>Vuex数据的响应式原理</h2>
    <h2>{{$store.state.person}}</h2>
    <button @click="changeAge">更换年龄</button>
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
        // 需求:当异步处理完之后,给外边一个通知,告诉我们异步处理已经完成
        // this.$store.dispatch('asynChangeAge')

        // 方法一：传递进去一个函数当做参数,当里边异步处理完后,回调该函数
        // this.$store.dispatch('asynChangeAge',(msg) => {
        //   console.log(msg);
        // })

        // 方法一中存在的问题,就是我们可能还需要传递进去好多参数,这样的话,就需要把所有的参数包装成一个对象传递进去
        // this.$store.dispatch('asynChangeAge',{
        //   message:'外边传递进来的消息',
        //   success(msg){
        //     console.log(msg);
        //   }
        // })

        // 方法二：上边还是不够好,使用Promise进行改进
        this.$store.dispatch('asynChangeAge').then(res=>{
          console.log(res);
        })
      }
    }
  }
</script>

<style>
</style>