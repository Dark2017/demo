<template>
  <div id="app">
    <router-view name="flheader"></router-view>
    <div class="img">
      <img src="./assets/logo.png">
    </div>
    <!-- <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button>el-button</el-button>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <router-view/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
*{
 padding: 0;
 margin: 0; 
}
.img{
  text-align: center;
}

</style>
