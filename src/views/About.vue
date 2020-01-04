<template>
  <div class="about">
    <div class="main" style="text-align:center">
      <el-carousel :interval="5000" arrow="always" class="zoumadeng">
        <el-carousel-item v-for="(item,index) in carList" :key="index">
          <h3>{{ item.name }}</h3>
          <img class="car"  :src="item.url"/>
        </el-carousel-item>
      </el-carousel>
      <div class="hStore">
        <h1>About Page</h1>
        <h1>Count:{{$store.state.count}}</h1>
        <h2>Num:{{$store.state.Num}}</h2>
      </div>
      <div>
        <el-button @click="handleAddClick(1)">增加</el-button>
        <el-button @click="handleReduceClick(1)">减少</el-button>
        <el-button @click="Add(10)">加十</el-button>
        <el-button @click="clear()">清空</el-button>
        <!-- install test 全局注册组件 -->
        <install-test></install-test>
      </div>
      <h1>Total:{{$store.getters.totalCount}}</h1>
    </div>  
    <busconfig></busconfig>
  </div>
</template>
<script>
import busconfig from './busconfig'
import busdisplay from './busdisplay'
import {mapMutations} from 'vuex'

export default {
  name: '',
  components:{
    busdisplay,
    busconfig
  },
  data() {
    return {
      carList:[
        {
          name:'Ferrari',
          url:require('../assets/falali.jpg')
        },        
        {
          name:'fangchengshi',
          url:require('../assets/fangchengshi.jpg')
        },        
        {
          name:'Lamborghini',
          url:require('../assets/lanbojini.jpg')
        },        
      ]
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      // this.$api.mockData().then(res=>{
      //   const data = res.data
      //   // console.log(data)
      // }).catch(err=>{
      //   Promise.reject(err)
      // })
    },
    // 实际写法
    // handleAddClick (n) {
    //   this.$store.commit('addCount', n)
    // },
    // handleReduceClick (n) {
    //   this.$store.commit('reduceCount', n)
    // },
    // Add(n) {
    //   this.$store.commit('addNum', n)
    // },
    // clear() {
    //   this.$store.commit('clear')
    // },

    // 简写
    ...mapMutations({
      handleAddClick: 'addCount',
      handleReduceClick: 'reduceCount',
      Add: 'addNum',
      clear: 'clear'
    })
  }
}
</script>
<style lang="less" scoped>
.main{
  // text-align: center
  .hStore{
    margin-top: 30px;
  }
  .car{
    height: 100%;
    // width: 100%;
  }
  .zoumadeng{
    width: 500px;
    overflow: hidden;    
    position: relative;
    left: 37%;
  }
}
</style>
