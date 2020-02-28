<template>
  <div id="app">
    <router-view></router-view>
    <Tabbar>
      <!-- 4、父组件传递路由地址到子组件中,添加path(因为这里是固定值,所以不用:绑定,如果是使用组件中data中的值就需要动态绑定了) -->
      <!-- 5-1、自定义字体颜色 <Tabba-item link="/home"> -->
      <Tabba-item link="/home" activeColor="red">
        <img slot="item-icon" src="./assets/img/tabbar/home.svg">
        <img slot="item-icon-active" src="./assets/img/tabbar/home-active.svg">
        <div slot="item-text">首页</div>
      </Tabba-item>
      <Tabba-item link="/category">
        <img slot="item-icon" src="./assets/img/tabbar/category.svg">
        <img slot="item-icon-active" src="./assets/img/tabbar/category-active.svg">
        <div slot="item-text">分类</div>
      </Tabba-item>
      <Tabba-item link="/car">
        <img slot="item-icon" src="./assets/img/tabbar/car.svg">
        <img slot="item-icon-active" src="./assets/img/tabbar/car-active.svg">
        <div slot="item-text">购物车</div>
      </Tabba-item>
      <Tabba-item link="/mine">
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