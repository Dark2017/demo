<template>
  <div class="main">
    <div class="input">
      <el-select filterable clearable v-model="inputData" ref="select">
        <el-option
        v-for="(item,key) in restaurants"
        :key="key"
        :label="item.value"
        :value="item.value"
        ></el-option>
       </el-select>
    </div>
    <div class="key-main">
      <div class="key" v-for="(item,key) in List" :key="key">
        <el-button class="keybtn" @click="clickdown(item)">{{item}}</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'',
  data() {
    return {
      restaurants: [],
      inputData:'',
      List:['Q','W','E','R','T','Y','U','I','O','P','A','S','D',
      'F','G','H','J','K','L','Z','X','C','V','B','N','M','←'],
    }
  },

  methods: {
    clickdown(val) {
      if(val == '←'){
        let Arr = this.inputData.split('')
        Arr.pop()
        this.inputData = Arr.join('')
      } else {
        this.inputData += val
      }
      console.log(this.$refs.select)
    },
    async loadAll() {
      let Arr = []
      let {data} = await this.$api.mockRest()
      this.restaurants = data.data
    },

  },
  mounted() {
    this.loadAll()
  },

}
</script>

<style lang="less" scoped>
.main{
  background: #d2d8de;
  .input{
    text-align: center;
    margin: auto;
    width: 500px;
  }
}
.key-main{
  text-align: center;
  width: 520px;
  margin: auto;
  .key{
    display: inline-block;
    .keybtn{
      background: #8C68CE;
      color: white;
    }
  }
}
</style>