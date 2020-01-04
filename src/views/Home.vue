<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <div style="text-align:center">{{homeData}}</div>
    <HelloWorld msg="Welcome to Laker"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data () {
    return {
      homeData: 0
    }
  },
  mounted () {
    sessionStorage.count = this.$store.state.count
    this.homeData = sessionStorage.count
  }
}
</script>
