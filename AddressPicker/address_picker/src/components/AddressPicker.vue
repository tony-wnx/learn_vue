<!--  -->
<template>
<section class="container">
    <el-row>
      <el-select v-model="provinceValue" placeholder="请选择" @change="selectProvimce">
        <el-option
          v-for="(item,index) of provincearr"
          :key="index"
          :label="item.name"
          :value="item.id"
        ></el-option>
      </el-select>
      <el-select v-model="cityValue" placeholder="请选择" @change="selectcity">
        <el-option v-for="(item,index) of cityarr" :key="index" :label="item.name" :value="item.id"></el-option>
      </el-select>
      <el-select placeholder="请选择" v-model="RegionValue">
        <el-option
          v-for="(item,index) of regionarr"
          :key="index"
          :label="item.name"
          :value="item.id"
        ></el-option>
      </el-select>
    </el-row>
  </section>
</template>

<script>
  import { province } from '../assets/js/map.js'
 
export default {
 
  created () {
    this.provincearr = province
  },
  data () {
    return {
      arr: [1, 3, 4],
      province: [],
      cityarr: [],
      regionarr: [],
      provinceValue: '',
      cityValue: '',
      RegionValue: ''
    }
  },
  mounted () {
  },
  methods: {
 
    selectProvimce (id) {
      this.cityarr = [];
      this.regionarr = [];
      this.cityValue = '';
      this.RegionValue = '';
      for (let item of this.provincearr) {
        if (id == item.id) {
          console.log(item)
          this.cityarr = item.children
        }
      }
    },
    selectcity (id) {
      this.regionarr = [];
      this.RegionValue = '';
      for (let item of this.cityarr) {
        if (id == item.id) {
          this.regionarr = item.children
        }
      }
 
    }
  }
}
</script>

<style>
.container {
  width: 100%;
  height: 400px;
  overflow: hidden;
}
.box {
  width: 800px;
  height: 50px;
  line-height: 50px;
  background: red;
  color: #fff;
}
</style>