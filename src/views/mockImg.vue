<template>
  <div class="main">
      <ul>
        <li class="mock" v-for="(item,key) in imgArr" :key="key">
          <el-image class="mock-img" 
          :src="item.thumbnail_pic_s" 
          @click="clickImg(item)"
          />
          <p><span>Mocker</span>:{{item.author_name}}</p>
        </li>
      </ul>
      <el-dialog title="watcher" :visible.sync="dialogVisible">
        <img :src="viewPictureUrl" style="width:100%"/>
      </el-dialog>
  </div>
</template>

<script>
export default {
  name:'',
  data() {
    return {
      //图集
      imgArr: [],
      //查看大图
      imgBigArr: [],
      dialogVisible: false,
      viewPictureUrl: ''
      
    }
  },
  
  methods: {
    mockData(){
      this.$api.randomMock().then(res=>{
        if(res.status === 200) {
          this.imgArr = res.data.data

          this.imgArr.forEach(item => {
            this.imgBigArr.push(item.thumbnail_pic_s) 
          })
          this.$message.success(res.statusText)

        } else {
          this.$message.error(res.statusText)
        }
      })
    },
    //查看大图
    clickImg(val){
      this.viewPictureUrl = val.thumbnail_pic_s
      this.dialogVisible = true
    }
  },

  mounted() {
    this.mockData()
  },
}
</script>

<style lang="less">
.main{
  .mock{
    display: inline-block;
    margin: 7px;
    .mock-img{
      cursor: pointer;
    }
    >p{
      text-align: center;
      >span{
        font-weight: bold;
      }
    }

  }
}
</style>