<!--  -->
<template>
    <!-- 八、这里写死了,改成插槽动态替换 -->
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
    <div class="tab-bar-item">
      <slot name="item-icon"></slot>
      <slot name="item-text"></slot>
    </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
      };
    },
    computed: {},
    watch: {},
    methods: {

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

    /* 图片和底部文字之间的距离有些大,本来他们是紧挨着的,但是为什么他们之间会有距离呢?
      原因：内联元素img的对齐方式是按照文字的基线对齐,而不是按照文字的底线对齐,所以空出来的距离就是文字基线和文字底线
      之间的距离(https://blog.csdn.net/weixin_44368588/article/details/102747867),通过vertical-align属性可以去除
     */
     vertical-align: middle;
  }
</style>