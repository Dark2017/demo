<template>
  <div class="main">
      <h2 class="title">Welcome</h2>
      <div class="account block">
        <span>Account:</span>
        <el-input placeholder="Please input"  v-model="account" clearable></el-input>
      </div>
      <div class="pasd block">
        <span>Password:</span>
        <el-input placeholder="Please input"  v-model="password" show-password clearable></el-input>
      </div>
      <div class="login block">
        <!-- <el-button class="login-btn">forget password</el-button> -->
        <el-button class="login-btn" @click="login">Login</el-button>
        <!-- <fl-button use="overtable">111</fl-button> -->
      </div>
    </div>
  
</template>

<script>
import {loading, Loading} from 'element-ui'

export default {
  data() {
    return {
      account:'',
      password:'',
    }
  },
  methods: {
    async login() {
      if(this.account == 'ljh' && this.password == '123456'){
        const {data} = await this.$api.mockToken()
        sessionStorage.token = data.token
        console.log(data)
        let load = Loading.service({text:'loading...'})
        setTimeout(() => {
          this.$router.push({
            path:'/'
          })
          load && load.close()
        }, 500);

      } else {
        this.$message.error('Account is no exist or error account')
      }

    }
  },
  mounted() {

  },
}
</script>

<style lang="less" scoped>
.main{
  width: 300px;
  margin: auto;
  .title{
    text-align: center;
  }
  .block{
    margin-top: 20px;
  }
  .login{
    text-align: right;
  }
  .login-btn{
    background: #37A0CE;
    color: white;
  }
}
</style>