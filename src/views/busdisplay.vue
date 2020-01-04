<template>
  <div class="main">
    <div class="rongdan">
      <h3 class="title"><span class="line"></span>RondConfig</h3>
      <div class="peizhi">
        <span>Moneny：</span>
        <span>{{value.moneny}}</span>
      </div>
      <div class="peizhi">
        <span>Date：</span>
        <span>{{value.date}}</span>
      </div>
    </div>
    <div class="tiexian">
      <h3 class="title"><span class="line"></span>DiscountConfig</h3>
      <div>
      <!-- <el-input class="search" type="text" placeholder="please input address" v-model="key" clearable></el-input> -->
      <el-table
        :data="value.rateList"
        stripe
        style="width: 100%;z-index:1">
        <el-table-column prop="date" label="date">
          <template slot-scope="{row,$index}">
            <span v-if="!isEdit[$index]">{{row.date}}</span>
            <el-date-picker v-if="isEdit[$index]" type="date" v-model="date[$index]" value-format="yyyy-MM-dd"></el-date-picker>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="address">
          <template slot-scope="{row,$index}">
            <span v-if="!isEdit[$index]">{{row.address}}</span>
            <el-input v-if="isEdit[$index]" type="input" v-model='address[$index]'></el-input>
          </template>
        </el-table-column>
        <el-table-column label="opeartion" prop="opp">
          <template slot-scope="{row,$index}" >
            <el-button class="edit" v-if="!isEdit[$index]" :disabled="isEditable" @click="Edit(row,$index)">edit</el-button>
            <el-button class="edit" v-if="isEdit[$index]" @click="Save(row,$index)">save</el-button>
            <el-button class="edit" v-if="isEdit[$index]"  @click="Cancel(row,$index)">cancel</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- <el-pagination 
      class="pagination"
      layout="total, sizes, prev, pager, next, jumper"
      :current-page=1
      :page-size=1
      :total=2
      :page-sizes="[1,10]"
      @size-change ='sizechange'
      @current-change ='currentchange'
      >
      </el-pagination> -->
      </div>
      <!-- <table :tableData='tableData'></table> -->
    </div>
  </div>
</template>

<script>
import fltable from '../components/fltable'

export default {
  name:'',
  components:{fltable},
  props:{
    value:{
      type: Object,
      default: () => {}
    },

  },
  data() {
    return {
      //编辑禁用
      isEditable:false,
      // tableData:[
      //   {
      //     prop:111
      //   }
      // ],
      isEdit:[], //编辑
      key:'',
      date:[],
      address:[],
      CancelObj:{
        row:'',
        val:0,
      },
      // opeartion:{
      //   render: (h,parms)=>{
      //     const info = h(
      //       'span',
      //       {
      //         on:{
      //           click() {
      //             console.log(parms.row)
      //           }
      //         },
      //         style:{
      //               display: 'inline-block',
      //               margin:'10px',
      //               border: '1px solid' ,
      //               cursor: 'pointer',
      //               padding: '5px',
      //               background: '#eeeeee',
      //         },
      //         domProps:{
      //           innerhtml:'<span>eidt</span>'
      //         }
      //       }
      //       )
      //       const temp = []
      //       temp.push(info)
      //       return h('div',temp)
      //   },
      // }
    }
  },
  mounted() {
  },
  methods: {  
    //编辑
    Edit(row,val){
      this.CancelObj.row = row
      this.CancelObj.val = val
      this.$set(this.isEdit,val,true)
      this.$set(this.date,val,row.date)
      this.$set(this.address,val,row.address)
      this.isEditable = true
    },
    //保存
    Save(row,val){
      this.$set(this.isEdit,val,false)//目标数据,索引,值
      row.date = this.date[val]
      row.address = this.address[val]
      this.isEditable = false
    },
    //取消
    Cancel(row,val){
      this.$set(this.isEdit,val,false)
      this.isEditable = false
    },
    //页码组变化
    sizechange(val){
      console.log(val)//1 10
      let List = []
      let tmp = this.value.rateList
      // this.value.rateList.slice(0,val-1)
    },
    //当前页码
    currentchange(val){
      console.log(val)
    },
  },
}
</script>

<style lang="less" scoped>
.main{
  padding: 20px; 
  border: 1px solid #eeeeee;
  .rongdan{
    .peizhi{
      display: inline-block;
      width: 350px;
      margin: 20px 0;
    }
  }
  .title{
    height: 20px;
    font-size: 14px;
  }  
  .line{
    height: 100%;
    width: 3px;
    background: #4491d5;
    display: inline-block;
    margin-right: 10px;
    float: left;
  }      
  .edit{
    display: inline-block;
    margin:10px;
    // border: 1px solid;
    cursor: pointer;
    padding: 5px;
    background:#eeeeee;
  }
  .pagination{
    text-align: center;
    margin-top: 28px;
  }
  .search{
    width: 200px;
    margin-top: 10px;
  }
}
</style>