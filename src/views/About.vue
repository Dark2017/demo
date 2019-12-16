<template>
  <div class="about">
    <div class="main" style="text-align:center">
      <h1>About Page</h1>
      <h1>{{$store.state.count}}</h1>
      <h2>{{$store.state.Num}}</h2>
      <div>
        <el-button @click="handleAddClick(1)">增加</el-button>
        <el-button @click="handleReduceClick(1)">减少</el-button>
        <el-button @click="Add(10)">增加10</el-button>
        <install-test></install-test>
      </div>
      <h1>{{$store.getters.totalCount}}</h1>
    </div>  
    <busconfig></busconfig>
  </div>
</template>
<script>
import busconfig from './busconfig'
import busdisplay from './busdisplay'
export default {
  name: '',
  components:{
    busdisplay,
    busconfig
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
    handleAddClick (n) {
      this.$store.commit('addCount', n)
    },
    handleReduceClick (n) {
      this.$store.commit('reduceCount', n)
    },
    Add(n) {
      this.$store.commit('addNum', n)
    }
  }
}
</script>
<style lang="less" scoped>
.main{
  // text-align: center
}
</style>
