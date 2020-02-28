<template>
  <div id="app">
    <div id="tab-bar">
      <div class="tab-bar-item">首页</div>
      <div class="tab-bar-item">分类</div>
      <div class="tab-bar-item">购物车</div>
      <div class="tab-bar-item">我的</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {}
  }
</script>

<style>
  /* 三、我们可以把样式写到这里,但是,当初始化样式非常多的时候,写在这里同样会显得代码混乱,所以我们还是把css提取成单独的文件,
        然后在此处直接导入引用即可 
    body{
      margin:0;
      padding: 0;
    } 
  */

  /* 在<style>标签中导入css文件,使用@import 命令 */
  @import './assets/css/base.css';

  /* 四、让文字水平排列 */
  #tab-bar{
    display:flex;
    background-color: #F3F3F3;

     /* 在有滚动条的页面中，absolute会跟随页面滑动，fixed不会滑动。以下四个固定在屏幕底部 */
    left: 0;
    right: 0;
    bottom:0;
    position:fixed;

    /* 设置阴影 */
    box-shadow: 1px -3px 10px rgb(100,100,100,0.35);
  }

  /* 五、为了让文字均等平分占据整行,给每个div添加class属性,然后设置flex：1就可实现均等水平排列 
        让文字居中显示
  */
  .tab-bar-item{
    flex:1;
    text-align: center;
    /* 一般tabbar的高度都是49px */
    height:49px;  
  }
</style>