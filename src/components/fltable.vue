<template>
  <div class="main-table">
    <el-table
    :data="tableData"
    stripe
    border
    >
    <template  v-for="(item,key) in column">
      <el-table-column
      v-if="item.type === 'index'"
      :label="item.label"
      :width ="item.width"
      type="index"
      :key="key"
      align='center'
      />
      <el-table-column 
      v-else
      :label="item.label"
      :prop="item.prop"
      :width ="item.width"
      :key="key"
      align='center'
      />
    </template>
    </el-table>
    <el-pagination
      class="pagination"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pagination.currentPage"
      :page-sizes="pagination.pageSizes"
      :page-size="pagination.pageSize"
      :layout='pagination.layout'
      :total="pagination.total">
    </el-pagination>

  </div>
</template>

<script>
export default {
  name:'fltable',
  props:{
    tableData:{
      type: Array
    },
    column:{
      type: Array,
      default: []
    },
    paginationPop:{
      type:Object,
      default: null
    }
  },
  data() {
    return {
      pagination:{
        currentPage:1,
        pageSizes: [1, 10, 20],
        pageSize: 100,
        layout: 'total, sizes, prev, pager, next, jumper',
        total:0
      }
    }
  },
  methods: {
    initPagination(){
      if(this.paginationPop !== null || {}){
        this.pagination = this.paginationPop
        // console.log(this.paginationPop,'---')
      } else {
        return
      }
    },

    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      this.$emit('size-change',val)
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`);
      this.$emit('current-change',val)
    }
  },
  mounted() {
    this.initPagination()
  },

}
</script>

<style lang="less" scoped>
.main-table{
  .pagination{
    text-align: center;
    margin-top: 20px;
  }
}
</style>