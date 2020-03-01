import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    person:{
      name:'zhangsan',
      age:23,
      sex:'man'
    }
  },
  mutations: {
    changeAge(state){
      state.person.age=25
    }
  },
  actions: {
    asynChangeAge(context){     // 不带参数
    // asynChangeAge(context,payload){   // 带参数
      // setTimeout(() => {
      //   context.commit('changeAge')

      //   // 方法一：
      //   // payload('里边的异步操作执行完了！！！')

      //   // 方法一改进后
      //   // console.log(payload.message);
      //   // payload.success('里边的异步操作执行完了！！！')
      // }, 1000);

      // 方法二：
      return new Promise(resolve=>{
        setTimeout(() => {
          context.commit('changeAge')
          resolve('里边的异步操作执行完了！！！')
        }, 1000);
      })
    }
  },
  modules: {
  }
})
