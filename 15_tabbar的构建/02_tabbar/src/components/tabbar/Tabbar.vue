<!--  -->
<template>
      <!-- 五、发现这里的代码很多而且乱,所以把这里抽离成一个组件,在此定义插槽,在App.vue中使用抽离的组件替换插槽
            相应的css也提取到组件中  
            <tabbar></tabbar>只管tabbar的东西,而tabbarItem的东西不归他管,所以不放在这里面,抽取成组件
       -->
    <div id="tab-bar">
      <!-- <div class="tab-bar-item">
        <img src="../../assets/img/home.svg">
        <div>首页</div>
      </div>
      <div class="tab-bar-item">
        <img src="../../assets/img/category.svg">
        <div>分类</div>
      </div>
      <div class="tab-bar-item">
        <img src="../../assets/img/car.svg">
        <div>购物车</div>
      </div>
      <div class="tab-bar-item">
        <img src="../../assets/img/mine.svg">
        <div>我的</div>
      </div> -->
      <slot></slot>
    </div>
</template>

<script>
  export default {
    components: {}
  }
</script>

<style>

  #tab-bar{
    display:flex;
    background-color: #F3F3F3;
    left: 0;
    right: 0;
    bottom:0;
    position:fixed;
    box-shadow: 1px -3px 10px rgb(100,100,100,0.35);
  }

  /* 五、样式也一起提取到组件中 */
  /* .tab-bar-item{
    flex:1;
    text-align: center;
    height:49px;  
    font-size: 12px;
  }

  .tab-bar-item img{
    height:24px;
    width: 24px;
  } */
</style>