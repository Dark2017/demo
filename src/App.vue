<template>
  <div id="app">
    <router-view name="flheader"></router-view>
    <div class="img">
      <img src="./assets/earth.jpg">
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',

}
</script>

<style lang="less">
*{
  padding: 0;
  margin: 0; 
}
#app{
  overflow: scroll;
}
.img{
  text-align: center;
  /* margin-top: 10px; */
  background: black;
  img{
    margin-top: 16px;
  }
}

</style>
