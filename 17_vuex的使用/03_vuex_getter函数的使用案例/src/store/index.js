import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter:10,
    books:[
      {id:'001',name:'小狗钱钱',price:25.00},
      {id:'002',name:'穷爸爸富爸爸',price:69.00},
      {id:'003',name:'财富自由',price:35.00},
      {id:'004',name:'穷查理宝典',price:108.00},
      {id:'005',name:'人性的弱点',price:26.00}
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters:{
    higherThen50(state){
      return state.books.filter(book => book.price >= 50)
    },

    // 这里主要讲的是：这里定义的函数还有第二个默认的参数,就是getters(就是Store的属性getters,参数名字可以随便起,但
    // 都表示同样的含义)
    higherThen50ListLength(state,getters){
      return getters.higherThen50.length
    },

    // 要获取用户传递进来的价格参数,但是这里并没有默认的第三个参数,而且前边两个默认的参数是固定的,不能修改。
    // 变换思路,我们给外边调用处返回一个函数,这个函数需要一个价格参数,并根据价格进行筛选
    higherThenSelfPrice(state){
      return function(price){
        return state.books.filter(book => book.price >= price)
      }
    }
  }
})
