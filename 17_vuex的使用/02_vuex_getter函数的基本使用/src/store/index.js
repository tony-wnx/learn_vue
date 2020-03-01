import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter:10
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters:{
    // getters中定义的方法,也有一个默认的参数,同样是state
    square(state){
      return state.counter * state.counter
    }
  }
})
