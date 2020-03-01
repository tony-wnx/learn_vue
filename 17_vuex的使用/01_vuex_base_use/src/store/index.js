import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 2、定义counter
    counter:0
  },
  mutations: {
    // 在mutations中定义的方法中,默认会有一个state参数,该参数就是上边哪个state
    addition(state){
      state.counter++
    },
    subtraction(state){
      state.counter--
    }
  },
  actions: {
  },
  modules: {
  }
})

// 单一状态树(单一数据源)
// const store1 = new Vuex.Store({})
// const store2 = new Vuex.Store({})

// 在该文件中可以有多个store对象,但是vue推荐只使用一个,虽然每个store都能放各自特定的数据,但是在引用的时候
// 会造成混乱,不便于统一管理。
