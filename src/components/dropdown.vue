<template>
  <div class="main" >
    <h3 class="head"><i class="el-icon-circle-close close" @click="close"></i></h3>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'',
  // props:{
  //   isDrop:{
  //     type: Boolean,
  //     default: false
  //   }
  // },
  data() {
    return {
      
    }
  },
  methods: {
    close() {
      this.$emit('close')
    }
  },
}
</script>

<style lang="less" scoped>
.main{
  position: fixed;
  background: white;
  // opacity: 1;
  top: 26px;
  height: auto;
  width: 100%;
  z-index: 5001;
  .head{
    text-align: right;
    .close{
      cursor: pointer;
      margin-right: 4px;
    }
  }

}
</style>