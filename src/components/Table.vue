<template>
  <div class="table-main">
    <el-table
    >
      <template v-for="(item, index) in showData.column">
        <el-table-column 
          v-if="item.type === 'serialNum'"
          :key="index"
          label="序号"
          align='center'
          type="index"
        />
        <el-table-column 
          v-else
          :key="index"
          :prop="item.prop"
          align='center'
          :label="item.label"
        />
      </template>
    </el-table>

    <el-pagination>

    </el-pagination>
  </div>
</template>

<script>
const exSlot = {
  functional: true,
  props: {
    row: Object,
    render: Function,
    index: Number,
    column: {
      type: Object,
      default: null
    }
  },

  render: (h, data) => {
    const params = {
      row: data.props.row,
      index: data.props.index
    }

    if (data.props.column) params.column = data.props.column
    return data.props.render(h, params)
  }
}
export default {
  props:{
    data:{
      type: Object,
      default: ()=>{
        return {}
      }
    }
  },
  data() {
    return {
      defaultData: {
        column: [],
        records: [],
        widthArr: [],
        table: {
          border: false,
          stripe: true,
          size: 'medium',
          showHeader: true,
          pagination: true,
          'highlight-current-row': false,
          style: {
            width: '100%'
          }
        },
        pagination: {
          layout: 'total, sizes, prev, pager, next, jumper',
          background: true,
          totalPage: 0,
          total: 0,
          currentPage: 1,
          pageSize: 10,
          pageSizes: [10, 15, 20]
        }
      }
    }
  },
  methods: {
    showExslot(){
      console.log(exSlot,'----exSlot')
    }
  },
  mounted() {
    this.showExslot()
  },
  computed: {
    showData(){
      let newData = this.data
      const obj = {
        column: newData.column,
        records: newData.records,
        table: {
          ...this.defaultData.table,
          ...newData.table
        },
        pagination: {
          ...this.defaultData.pagination,
          ...newData.pagination
        }
      }
      console.log(obj,'obj')
      return obj
    }
  },
}
</script>

<style lang="less">

</style>