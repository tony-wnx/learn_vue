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
    changeAge(state){
      // 一、当在mutations中的方法中存在异步操作时,页面显示和devtools查看的数据会不一致
      state.person.age=25  

      // 异步操作时
      // setTimeout(() => {
      //   state.person.age = 25
      // }, 1000);
    },
    addAddress(state){
      Vue.set(state.person,'address','beijing')
    },
    deleteSex(state){
      Vue.delete(state.person,'sex')
    }
  },
  actions: {
    // 二、我们强调,不能再Mutations中进行异步操作。但是某些情况下,我们确实希望在Vuex中进行一些异步操作,
    // 那么这个时候必须用Actions来替换Mutations进行异步操作。

    // 1、和mutations一样,actions中的方法也有一个默认参数,不过这里的默认参数是：context,它类似于store对象
    // asynChangeAge(context){
    asynChangeAge(context,age){
      setTimeout(() => {
        ///2、既然context类似于store对象,那么做如下操作
        // context.state.person.age = 26
        // 3、不能像2、中那么操作,看[学习笔记.md]中的关系图,我们不能跳过mutations而直接去操作state中的数据
        // 4、所以,做如下修改
        console.log(age);
        context.commit('changeAge')
        // 5、虽然我们在actions中定义了可以进行异步操作的方法,但是当点击按钮时,调用的还是App.vue中的changeAge()方法,
        // 而这个方法中直接就进行了提交：this.$store.commit('changeAge'),所以还是没用到我们写的这个方法
        // 6、修改App.vue中的changeAge()方法
      }, 1000);
    }
  },
  modules: {
  }
})
