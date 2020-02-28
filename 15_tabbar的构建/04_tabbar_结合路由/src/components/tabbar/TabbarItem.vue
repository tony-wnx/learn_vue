<!--  -->
<template>
    <div class="tab-bar-item" @click="isSelected">
      <slot v-if="!isClick" name="item-icon"></slot>
      <slot v-else name="item-icon-active"></slot>

      <!-- 5、动态修改这里显示的文字颜色,从父组件传过来什么颜色就使用什么颜色。在props中接收
            在App.vue中添加 activeColor    
       -->
       <!-- 5-3、这里就不能再这样引用 -->
      <!-- <div :class={fontcolor:isClick}> -->

      <!-- 5-4、定义一个计算属性 -->
      <div :style="activeStyle">
        <slot name="item-text"></slot>
      </div>
    </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
        // isClick:false
      };
    },
    props:{
      // 名字不能是驼峰命名,因为父组件中传递过来的是固定的字符串,没有用动态绑定,所以这里的名字必须和父组件中的名字一致
      link:String,

      // (5-2、自定义字体颜色)
      activeColor:{
        type:String,
        default:'blue'
      }
    },
    methods: {
      isSelected(){
        // 1、思路：使用三元运算符判断,如果当前活跃的路由地址和点击的路由地址相同(或包含),跳转路由到该页面,并控制颜色改变
        // 2、当前活跃：this.$route.path
        ///3、现在的问题就是如何获取点击的路由地址？
        //    结论:让父组件把路由地址传递进来(父子通信：父传子。修改App.vue文件)
        this.$router.push(this.link)

        // 不能再这里写路由跳转,因为当前活跃的路由总是前一个
        // this.isClick = this.$route.path.indexOf(this.link) !== -1
        // console.log(this.$route.path)
        // console.log(this.link)
      }
    },
    computed: {
      // 4、定义一个计算属性动态的获取路由激活状态(注释掉data中的isClick)
      isClick(){
        return this.$route.path.indexOf(this.link) !== -1
      },
      activeStyle(){
        return this.isClick ? {color:this.activeColor} : {}
      }
    }
  }
</script>

<style>
  .tab-bar-item{
    flex:1;
    text-align: center;
    height:49px;  
    font-size: 12px;
  }

  .tab-bar-item img{
    height:24px;
    width: 24px;
    margin-top: 5px;
    vertical-align: middle;
  }

  .fontcolor{
    color: blue
  }
</style>