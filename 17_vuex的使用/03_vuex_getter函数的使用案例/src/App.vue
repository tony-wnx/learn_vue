<!--  -->
<template>
  <div id="app">
    <h2>我是app组件</h2>
    
    <!-- 1、需求：我们在Vuex的index.js文件的state中定义了一个books属性,我们要在父子组件中获取
        价格大于50的书籍列表。
        为了代码美观简洁,我们首先想到的是在各自组建中定义一个计算属性。
    -->
    <h2>computed计算属性：{{priceMore50}}</h2>

    <!-- 2、同样存在的问题,就是该计算属性需要在各自组建中都定义一次。
        为了只定义一次,就能到处使用,我们在Vuex的index.js的getters中定义一个函数。
    -->
    <h2>getters中的计算属性：{{$store.getters.higherThen50}}</h2>

    <!-- 3、需求：我不仅要拿到价格大于50的书籍列表,还要拿到列表的长度。
        我们首先想到的可能是：{{$store.getters.higherThen50.length}}
    -->
    <h2>价格大于50的列表长度：{{$store.getters.higherThen50.length}}</h2>

    <!-- 4、存在的问题同样是父子组件中都需要些这么长的一串代码,为了简洁,我们同样在index.js的getters中
        定义一个函数。(具体说明见该文件中注释)
    -->
    <h2>getters函数获取列表长度：{{$store.getters.higherThen50ListLength}}</h2>

    <!-- 5、需求：前边我们是直接写死了,要返回价格大于多少的书籍列表,现在我想要根据用户自定义传递进来的价格进行筛选。
        我们首先想到的是,在后边跟上一个参数。
    -->
    <h2>自定义筛选价格结果：{{$store.getters.higherThenSelfPrice(100)}}</h2>

    <hr>
    <VueGetter></VueGetter>
  </div>
</template>

<script>
  import VueGetter from './components/VuexGetter'

  export default {
    components: {
      VueGetter
    },
    data() {
      return {
      };
    },
    computed: {
      priceMore50(){
        // 对数组中的数据进行过滤筛选,我们使用之前学过的filter高级函数(此外还有map/reduce函数)
        return this.$store.state.books.filter(book => book.price >= 50)
      }
    },
    watch: {},
    methods: {}
  }
</script>

<style>
</style>