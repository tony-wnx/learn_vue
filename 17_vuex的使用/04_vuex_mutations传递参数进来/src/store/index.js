import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter:10,
    movies:[
      {id:'001',name:'海贼王'},
      {id:'002',name:'火影忍者'}
    ],
    person:{
      name:'zhangsan',
      age:23,
      sex:'man'
    }
  },
  mutations: {
    increment(state){
      state.counter++
    },
    decrement(state){
      state.counter--
    },
    incrementNum(state,num){
      state.counter+=num
    },
    multiplication(state,payload){
      console.log(payload);
      state.counter*=payload.count
    },
    addNewMovie(state,movie){
      state.movies.push(movie)
    },
    changeAge(state){
      state.person.age=25
    },
    addAddress(state){
      // 1、当点击按钮后,页面并不会进行更新显示出新添加的address
      // state.person['address'] = 'beijing'

      // 2、可以使用下边的方法
      Vue.set(state.person,'address','beijing')
    },
    deleteSex(state){
      // 1、当点击删除性别按钮时,页面也不会更新数据内容
      // delete state.person.sex

      // 2、可以使用下边的方法
      Vue.delete(state.person,'sex')
    }
  },
  actions: {
  },
  modules: {
  }
})
