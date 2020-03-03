<template>
  <div class="main">
    <p class="title">
      table Test I
    </p>
    <fltable :tableData='tableData' 
    :column='column' 
    @size-change='handleSizeChange'
    @current-change='handleCurrentChange'
    :paginationPop='pagination'
    />
    <p class="title">
      table Test II
    </p>
    <mytable :data="tableDataI">

    </mytable>
  </div>
</template>

<script>
import fltable from '@/components/fltable'
import mytable from '@/components/Table'
export default {
  name:'',
  components:{
    fltable,mytable
  },

  data() {
    return {

      tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
      column:[
        {
          type:'serialNum',
          label:'Number',
          width:'100px'
        },
        {
          label:'date',
          prop:'date'
        },        
        {
          label:'name',
          prop:'name',
        },        
        {
          label:'address',
          prop:'address'
        },
        ],
        pagination:{
          currentPage:1,
          pageSizes: [1, 10, 30],
          pageSize: 50,
          layout: 'total, sizes, prev, pager, next, jumper',
          total:4
        },

      tableDataI:{},
      
    }

  },

  methods: {
    init(){
      this.tableDataI = {
        column:this.column,
        records:this.tableData
      }
    },
    handleSizeChange(val){
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val){
      console.log(`当前页 ${val} 条`)
    }
  },
  mounted() {
    this.init()
  },
}
</script>

<style lang="less" scoped>
.main{
  .title{
    text-align: center;
    font-weight: bold;
    margin-bottom: 10px;
  }
}
</style>