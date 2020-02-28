<template>
  <div id="app">
    
    <!-- 一、我们一般不在这里直接写,而是将这部分封装成一个组件 -->
    <!-- <div id="tab-bar">
      <div class="tab-bar-item">首页</div>
      <div class="tab-bar-item">分类</div>
      <div class="tab-bar-item">购物车</div>
      <div class="tab-bar-item">我的</div>
    </div> -->

    <!-- 四、使用组件 -->
    <Tabbar>

      <!-- 六、在此使用提取的TabbarItem组件 -->
      <!-- 七、这样之后发现该组件中的图片和名称都是写死的,所以修改TabbarItem.vue,添加插槽 -->
      <Tabba-item>
        <img slot="item-icon" src="./assets/img/tabbar/home.svg">
        <img slot="item-icon" src="./assets/img/tabbar/home-active.svg">
        <div slot="item-text">首页</div>
      </Tabba-item>
      <Tabba-item>
        <img slot="item-icon" src="./assets/img/tabbar/category.svg">
        <img slot="item-icon" src="./assets/img/tabbar/category-active.svg">
        <div slot="item-text">分类</div>
      </Tabba-item>
      <Tabba-item>
        <img slot="item-icon" src="./assets/img/tabbar/car.svg">
        <img slot="item-icon" src="./assets/img/tabbar/car-active.svg">
        <div slot="item-text">购物车</div>
      </Tabba-item>
      <Tabba-item>
        <img slot="item-icon" src="./assets/img/tabbar/mine.svg">
        <img slot="item-icon" src="./assets/img/tabbar/mine-active.svg">
        <div slot="item-text">我的</div>
      </Tabba-item>
    </Tabbar>
  </div>
</template>

<script>
  // 三、抽离成组件后,在此导入,注册成组件,然后在上边使用
  // const Tabbar = ()=> import('./components/tabbar/Tabbar')
  // const TabbaItem = () => import ('./components/tabbar/TabbarItem')
  // 这里不用懒加载导入,在index.js文件中才这样,也就是路由的时候才懒加载
  import Tabbar from './components/tabbar/Tabbar'
  import TabbaItem from './components/tabbar/TabbarItem'

  export default {
    name: 'App',
    components: {
      Tabbar,
      TabbaItem
    }
  }
</script>

<style>
  @import './assets/css/base.css';

  /* 二、封装成组件后,相关的css也移到xxx.vue组件的<style>标签中 */
  /* #tab-bar{
    display:flex;
    background-color: #F3F3F3;
    left: 0;
    right: 0;
    bottom:0;
    position:fixed;
    box-shadow: 1px -3px 10px rgb(100,100,100,0.35);
  }

  .tab-bar-item{
    flex:1;
    text-align: center;
    height:49px;  
  } */
</style>