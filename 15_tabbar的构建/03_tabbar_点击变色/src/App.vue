<template>
  <div id="app">
    <router-view></router-view>
    <Tabbar>
      <!-- 小写数字标的作废,以大写数字为准 -->
      <!-- 1、现在都有两张图片,我们要实现点击变色,所以要有一个变量记录点击状态,当true时显示红的图片,false时显示黑色图片 -->
      <!-- 3、给Tabba-item绑定点击事件,当点击时,修改isClick变量的状态 -->

      <!-- 问题：我要在每一个分类模块上绑定点击按钮,但是最后显示的是<div class="tab-bar-item">标签,而这个标签在子组件中 -->
      <!-- 一、刚开始的时候,我是在下面的<img>标签中直接添加了v-if和v-else指令,这对后续的实现可能有些困难,所以,不在这里加判断,
      而是在TabbarItem.vue中添加一个插槽,在插槽上判断显示红色图片还是黑色图片,而这里只需要把图片放在这里就行了-->
      <!-- <Tabba-item>
        <img v-if="!isClick" slot="item-icon" src="./assets/img/tabbar/home.svg">
        <img v-else slot="item-icon" src="./assets/img/tabbar/home-active.svg">
        <div slot="item-text">首页</div>
      </Tabba-item> -->
      <!-- 三、修改激活状态下的slot名字,其他三个一样替换 -->
      <Tabba-item>
        <img slot="item-icon" src="./assets/img/tabbar/home.svg">
        <!-- <img slot="item-icon" src="./assets/img/tabbar/home-active.svg"> -->
        <img slot="item-icon-active" src="./assets/img/tabbar/home-active.svg">
        <div slot="item-text">首页</div>
      </Tabba-item>
      <Tabba-item>
        <img slot="item-icon" src="./assets/img/tabbar/category.svg">
        <img slot="item-icon-active" src="./assets/img/tabbar/category-active.svg">
        <div slot="item-text">分类</div>
      </Tabba-item>
      <Tabba-item>
        <img slot="item-icon" src="./assets/img/tabbar/car.svg">
        <img slot="item-icon-active" src="./assets/img/tabbar/car-active.svg">
        <div slot="item-text">购物车</div>
      </Tabba-item>
      <Tabba-item>
        <img slot="item-icon" src="./assets/img/tabbar/mine.svg">
        <img slot="item-icon-active" src="./assets/img/tabbar/mine-active.svg">
        <div slot="item-text">我的</div>
      </Tabba-item>
    </Tabbar>
  </div>
</template>

<script>
  import Tabbar from './components/tabbar/Tabbar'
  import TabbaItem from './components/tabbar/TabbarItem'

  export default {
    name: 'App',
    components: {
      Tabbar,
      TabbaItem
    },
    data(){
      return {
        // 不在这里添加,放到组件中去判断
        // // 2、定义状态记录
        // isClick:false
      }
    },
    methods:{
      selected(){
        this.isClick = !this.isClick
      }
    }
  }
</script>

<style>
  @import './assets/css/base.css';
</style>