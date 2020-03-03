<template>
  <div class="table-main">
    <el-table
      :border="showData.table.border"
      :data="showData.records"
      :style="showData.table.style"
      :stripe="showData.table.stripe"
      :size="showData.table.size"
      :highlight-current-row="showData.table['highlight-current-row']"
      :show-header="showData.table.showHeader"
      @selection-change="handleSelectionChange"
    >
      <template v-for="(item, index) in showData.column">
        <!-- 序号 -->
        <el-table-column
          v-if="item.type === 'serialNum'"
          :key="index"
          :min-width="item.width || showData.widthArr[index] || 50"
          label="序号"
          type="index"
        />

        <!-- 复选框 -->
        <el-table-column
          v-else-if="item.type === 'selection'"
          :key="index"
          :min-width="item.width || showData.widthArr[index] || 50"
          type="selection"
        />

        <!-- 单选框 -->
        <el-table-column
          v-else-if="item.type === 'index'"
          :key="index"
          :min-width="item.width || showData.widthArr[index] || 50"
          type="index"
          label="选择"
        >
          <template slot-scope="slot">
            <input
              :value="slot.row.id?slot.row.id:slot.row.roleId"
              type="radio"
              name="name"
              @change="radioChange(slot.row.id?slot.row.id:slot.row.roleId,slot.row)"
            >
          </template>
        </el-table-column>

        <!-- 操作栏 -->
        <el-table-column
          v-else-if="item.render"
          :prop="item.field"
          :label="item.title"
          :min-width="showData.widthArr.length > 1 && item.width || showData.widthArr[index]"
          :width="showData.widthArr.length < 1 && item.width || showData.widthArr[index]"
          :fixed="item.fixed"
          :key="index"
        >
          <template slot-scope="scope">
            <ex-slot
              :render="item.render"
              :row="scope.row"
              :index="scope.$index"
              :column="item"
            />
          </template>
        </el-table-column>

        <!-- 普通类型 -->
        <el-table-column
          v-else
          :prop="item.field"
          :label="item.title"
          :min-width="item.width || showData.widthArr[index]"
          :fixed="item.fixed"
          :key="index"
          :show-overflow-tooltip="true"
        />
      </template>
    </el-table>

    <el-pagination
      v-if="showData.table.pagination"
      :background="showData.pagination.background"
      :layout="showData.pagination.layout"
      :total="showData.pagination.total"
      :page-size="showData.pagination.pageSize"
      :current-page="showData.pagination.currentPage"
      :page-sizes="showData.pagination.pageSizes"
      class="pagination"
      @size-change="sizeChange"
      @current-change="currentChange"
    />
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
  name: 'FlTable',
  components: { exSlot },
  props: {
    data: {
      type: Object,
      default: () => {
        return {}
      }
    },
    auto: {
      type: Boolean,
      default: () => false
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
  computed: {
    showData() {
      let newData = {}
      if (this.auto) {
        newData.column = this.data.tableHeaders
        newData.records = this.data.records
        // 不要翻页组件情况
        if(this.data.pagination) {
          this.defaultData.table.pagination = false
        }
        newData.pagination = {
          total: this.data.total,
          totalPage: this.data.totalPage
        }
      } else {
        newData = this.data
      }
      const obj = {
        column: newData.column,
        records: newData.records,
        widthArr: this.data.widthArr || this.defaultData.widthArr,
        table: {
          ...this.defaultData.table,
          ...newData.table
        },
        pagination: {
          ...this.defaultData.pagination,
          ...newData.pagination
        }
      }
      return obj
    }
  },
  methods: {
    // 每页条数变化
    sizeChange(size) {
      this.$emit('sizeChange', size)
    },

    // 当前页码变化
    currentChange(currentPage) {
      this.$emit('currentChange', currentPage)
    },

    // 点击单选框
    radioChange(val, row) {
      this.$emit('changeRadio', row)
    },

    // 复选择框选择变化
    handleSelectionChange(rows) {
      this.$emit('handleSelectionChange', rows)
    }
  }
}
</script>

<style lang="less" scoped>
  .table-main {
    background: #ffffff;
    padding: 20px 0;
  }

  .el-table thead {
    color: #465667;
    font-size: 14px;
  }

  .el-table {
    color: #8e95b1;
    font-size: 14px;
  }

  .el-table--mini td,
  .el-table--mini th {
    padding: 10px 0;
  }

  .pagination {
    text-align: center;
    margin-top: 40px;
    background: #fff;
  }

  /deep/ .el-pagination.is-background .el-pager .active {
    /*background: #6c73c4;*/
    background: linear-gradient(270deg, #6c73c4 0%, #5960a3 75%, #6063b5 100%);
  }

  /deep/ .el-table--border th {
    text-align: center;
    font-size: 12px;
  }

  /deep/ .el-table--border td {
    text-align: center;
    font-size: 12px;
  }

  /deep/ .el-pagination .el-select .el-input .el-input__inner{
    height: auto;
  }
</style>

