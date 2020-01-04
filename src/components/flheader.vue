<template>
  <div class="main">
    
    <div class="header">
      <div class="left">
        <div class="text">Welcome to left</div> 
      </div>
      <div class="middle">
        <div class="text">
          <i class="el-icon-refresh refresh" @click="$router.go(0)"/>
          <span>middle</span>
        </div> 
      </div>
      <div class="right">
        <div class="direction">
          <i class="btn-direction el-icon-menu" @click="direction()"></i>
          <span class="text" @click="dialogVisible = true">quit</span>
        </div>
      </div>
    </div>
      <!-- right导航栏 -->
      <el-collapse-transition>
        <drop v-if="dropDown" @close='direction' class="drop">
          <ul class="drop-ul">
            <li class="drop-li" v-for="(item,index) in itemList" :key="index" @click="dropClick(item,index)">
              {{item.routerName}}
              </li>
          </ul>
        </drop>
      </el-collapse-transition>
      <!-- left侧滑栏 -->
      <el-dialog
        title="Tips"
        :visible.sync="dialogVisible"
        width="20%"
        >
        <span>You will be quit</span>
        <span slot="footer" class="dialog-footer">
          <el-button  @click="dialogVisible = false">Cancel</el-button>
          <el-button class="login-btn" type="primary" @click="quit">Confirm</el-button>
        </span>
      </el-dialog>
  </div>
</template>

<script>
import drop from './dropdown'
export default {
  name:'flheader',
  components:{
    drop
  },
  data() {
    return {
      dropDown:false,
      itemList:[],
      dialogVisible:false,
      img:''
    }
  },
  mounted() {
    this.mockData()
    this.mockDataRandom()
  },
  methods: {
    //mock数据
    async mockData() {

      let {data} = await this.$api.mockData()
      this.itemList = data.bizConfig
      // console.log(data)
      // this.$api.mockData().then(res=>{
      //   const data = res.data.bizConfig
      //   this.itemList = data
      //   console.log(data)
      // })
    },

    mockDataRandom(){
      this.$api.randomMock().then(res=>{
        if(res.status === 200){
          // console.log(res)
          // console.log(res.data.data[0].thumbnail_pic_s)
          this.img = res.data.data[0].thumbnail_pic_s
        } else {
          console.log(res.statusText)
        }
      })
    },
    //导航栏
    direction() {
      this.dropDown = !this.dropDown
    },
    //导航栏菜单点击事件
    dropClick(val,index) {
      this.$router.push({name:val.routerName})
      this.dropDown = false
    },
    //退出登录
    quit() {
      sessionStorage.clear()
      this.$router.push({name:'login'})
      this.dialogVisible = false
    }
  },
}
</script>

<style lang="less" scoped>
@import '../views/common.less';
.main{
  // z-index: 9999;
  .header{
    background: linear-gradient(90deg, #4491d5 0%, #16c9bd 100%) !important;
    z-index: 9999;  
    background: red;
    position: fixed;
    width: 100%;
    display: flex;
    text-align: center;
    .left{
      // flex: 1;
      // background-color: blueviolet;
    }
    .middle{
      flex: 1;
      // background-color: blanchedalmond;
      .refresh{
        cursor: pointer;
      }
    }
    .right{
      // flex: 1;
      // display: inline-flex;
      // background-color: yellow;
      margin-right: 10px;
      .direction > img{
        width: 50px;
        height: 50px;
        float: right;
        cursor: pointer;
      }
      .btn-direction{
        margin: 5px;
        cursor: pointer;
      }
    }
    .text{
      // margin-top: 10px;
      cursor: pointer;
    }
  }
  .drop{
    text-align: center; 
    // height: auto;
    background: linear-gradient(90deg, #4491d5 0%, #16c9bd 100%) !important;
    z-index: 5001;
    .drop-ul{
      display: inline-block;
      padding-bottom: 20px;
      .drop-li{
        margin-top: 10px;
        cursor: pointer;
        list-style: none;
        // background: white;
      }
    }
  }

}
</style>