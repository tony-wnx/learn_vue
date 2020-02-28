<!--  -->
<template>
    <div id="tab-bar">
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
</style>