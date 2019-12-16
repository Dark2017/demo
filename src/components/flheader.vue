<template>
  <div class="header">
    <div class="left">
      welcome to left
    </div>
    <div class="middle">
      middle
    </div>
    <div class="right">
      <div class="text">click this img </div>
      <div class="direction">
        <img src="@/assets/logo.png">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'flheader',
  data() {
    return {
      
    }
  },
}
</script>

<style lang="less" scoped>
.header{
  background: red;
  position: fixed;
  width: 100%;
  display: flex;
  text-align: center;
  .left{
    // flex: 1;
    background-color: aqua;
  }
  .middle{
    flex: 1;
    background-color: blanchedalmond;
  }
  .right{
    // flex: 1;
    display: inline-flex;
    background-color: yellow;
    .direction > img{
      width: 50px;
      height: 50px;
      float: right;
      cursor: pointer;
    }
    .text{
      margin-top: 10px;
    }
  }
}
</style>