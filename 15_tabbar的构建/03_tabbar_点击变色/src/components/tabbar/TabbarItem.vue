<!--  -->
<template>
    <div class="tab-bar-item" @click="isSelected">
      <!-- 二、添加修改插槽,相应的还要修改App.vue中激活状态的标签为：<img slot="item-icon-active">,红色和黑色两种状态
          各自替换各自的插槽 
      -->
      <!-- <slot name="item-icon"></slot> -->

      <!-- 四、在这里添加v-if判断,并在上边的div绑定点击事件 -->
      <slot v-if="!isClick" name="item-icon"></slot>
      <slot v-else name="item-icon-active"></slot>

      <!-- 五、当点击的时候,图标下的文字颜色也需要改变,我们不能再下边的<slot>标签中绑定样式,因为最后会被App.vue中的
        <div slot="item-text">首页</div>这部分内容全部替换掉,它上边会没有我们绑定的样式,所以,我们把下边部分用<div>
        包起来,然后在该div上绑定样式,这样该div内部的div会继承样式 -->
        <div :class={fontcolor:isClick}>
          <slot name="item-text"></slot>
        </div>
      
    </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
        isClick:true
      };
    },
    methods: {
      isSelected(){
        this.isClick=!this.isClick
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