<template>
  <div class="main">
    <div class="content">
      <ul class="content_left">
        <li v-for="(item,index) in bizConfig" 
        :key="index" 
        @click="tab(index)"
        :class="{active: itemNo === index + 1 && itemNo != ''}"
        >{{item.cname}}</li>
      </ul>
      <div class="content_right">
        <ul class="content_right_ul">
          <li v-for="(item,index) in content" 
          :key="index"
          :class="{active: typeItem === index + 1 && typeItem != ''}"
          @click="tabType(index)"
          >{{item.name}}</li>
        </ul>
        <busdisplay ref="busd" v-model='businessData'  ></busdisplay>      
      </div>
     </div> 
     <div class="footer">
        <el-button @click="$router.go(-1)">back</el-button>
     </div>
  </div>
</template>
<script>
import busdisplay from './busdisplay'
export default {
  components:{
    busdisplay
  },
  data() {
    return {
      itemNo: 1, //选中的侧边tab
      companyIndex: 0, //选中的公司index
      typeItem: 1, //选中的上面tab
      changeTab: false,//切换tab(上边，侧边)
      //业务配置数据切换
      content:[],
      //模拟业务配置接口获取的数据
      bizConfig:[
        {
          custNo:1,
          cname:'No1',          
          assgin:{
            moneny:10000,
            date:'2017-9-9',
            rateList:[
              {
                date:'2019-9-2',
                address:'xxx'
              },
              {
                date:'2019-9-21',
                address:'yyy'
              },             
              {
                date:'2019-9-1',
                address:'yyy'
              }
            ]            
          },
          contract:{
            moneny:20000,
            date:'2019-1-1',
            rateList:[
              {
                date:'2019-1-2',
                address:'xxx'
              },
              {
                date:'2019-5-21',
                address:'yyy'
              }
            ]
          }
        },
        {
          custNo:2,
          cname:'No2',          
          assgin:{
            moneny:20000,
            date:'2019-1-1',
            rateList:[
              {
                date:'2019-1-2',
                address:'xxx'
              },
              {
                date:'2019-5-21',
                address:'yyy'
              }
            ]
          },
          contract:{
            moneny:20000,
            date:'2019-10-1',
            rateList:[
              {
                date:'2019-1-2',
                address:'xuuxx'
              },
              {
                date:'2019-2-21',
                address:'yppyy'
              }
            ]
          }
        },
        {
          custNo:3,
          cname:'No3',          
          assgin:{
            moneny:200010,
            date:'2019-12-1',
            rateList:[
              {
                date:'2019-11-2',
                address:'xxyx'
              },
              {
                date:'2019-7-21',
                address:'ytyy'
              }
            ]
          },
          contract:{
            moneny:20000,
            date:'2019-1-1',
            rateList:[
              {
                date:'2019-1-2',
                address:'xxx'
              },
              {
                date:'2019-5-21',
                address:'yyy'
              }
            ]
          }
        }
      ]

    }
  },
  methods: {
    //mock数据
    init() {
      this.$api.mockData().then(res=>{
        const data = res.data 
        // this.bizConfig.push(data)
        console.log(data)
      })
    },
    //配置详情
    set(){
      this.content = []
      this.content.push({
        name:'money',
        ...this.bizConfig[this.companyIndex].assgin

      })
      this.content.push({
        name:'contract',
        ...this.bizConfig[this.companyIndex].contract
      })
    },
    //侧边tab切换
    tab(index){
      this.itemNo = index + 1 
      this.bizConfig.map((item,indexI)=>{
        if(item.custNo === index + 1){
          this.companyIndex = indexI
          return
        }
      })
      this.tabType(0) //切换侧边tab 上边tab默认回到第一个tab
      this.autoCancel()      
      this.changeTab = true
      this.set()
    },
    //上边tab切换
    tabType(index){
      this.typeItem = index + 1
      this.changeTab = true
      this.autoCancel()
    },

    //点击TAB（上、左）如果处于编辑状态则取消编辑
    autoCancel(){
      let row = this.$refs.busd.CancelObj.row
      let val = this.$refs.busd.CancelObj.val
      this.$refs.busd.Cancel(row,val)      
    }
  },
  mounted() {
    this.set()
    this.init()
  },
  computed: {
    //动态绑定数据：value
    businessData() {
      return this.content[this.typeItem-1] || {}
    },
    //给子组件返回选中Tab
    callback(){
      return this.changeTab
    },
  },
}
</script>
<style lang="less" scoped>
.main{
  .content{
    display: flex;
    .content_left{
      height: 100%;
      width: 300px;
      border: 1px solid #eeeeee;
      li{
        list-style-type: none;
        padding: 10px;
        cursor: pointer;
        text-align: center;
        font-size: 24px;        
        &.active{
          background: #5A65B0;
          color: #fff;
        }
      }
    }
    .content_right{
      flex: 1;
      height: 100%;
      .content_right_ul{
        display: flex;
        li{
          list-style-type: none;
          cursor: pointer;
          border-radius: 4px;
          padding: 10px;
          margin: 0 20px;
          border: 1px solid #eeeeee;
          font-size: 24px; 
            &.active{
            background: #5A65B0;
            color: #fff;
          }
        }        
      }
    }  
  }
  .footer{
    text-align: center;
    margin-top: 20px;
  }  

}
</style>