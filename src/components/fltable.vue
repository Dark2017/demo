<template>
  <div>
    <el-table
    :data="tableData"
    stripe
    >
      <el-table-column v-for="(item,key) in tableData" :key='key' prop = tableData.prop>
          
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name:'fltable',
  props:{
    tableData:{
      type: Array
    }
  },
  data() {
    return {
      
    }
  },
  methods: {
    
  },
}
</script>

<style lang="less" scoped>

</style>