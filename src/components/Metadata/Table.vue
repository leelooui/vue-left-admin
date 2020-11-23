<template>
  <div class="crud-box">
    <div class="source">
      <slot name="tabHeader" />
      <avue-crud
        ref="crud"
        :page="page"
        :data="tableData"
        :table-loading="tableLoading"
        :option="option"
        @on-load="getList"
        @refresh-change="refreshChange"
        @row-del="rowDel"
        @row-save="rowSave"
        @row-update="rowUpdate"
        @search-change="searchChange"
      >
        <template slot="menu" slot-scope="scope">
          <slot :row="scope.row" name="menu" />
        </template>
        <template slot="menuLeft" slot-scope="scope">
          <slot :row="scope.row" name="menuLeft" />
        </template>
        <template slot="expand" slot-scope="scope">
          <slot :row="scope.row" name="expand" />
        </template>
        <template slot="tip" slot-scope="scope">
          <slot :row="scope.row" name="tip" />
        </template>
        <template slot="status" slot-scope="scope">
          <slot :row="scope.row" name="status" />
        </template>
        <template slot="sortOrder" slot-scope="scope">
          <slot :row="scope.row" name="sortOrder" />
        </template>
      </avue-crud>
    </div>
  </div>
</template>

<script>
import BaseApi from '@/api/BaseApi'
export default {
  props: {
    searchModel: {
      type: Function,
      default: null
    },
    api: {
      type: String,
      required: true
    },
    option: {
      type: [Object, Array],
      required: true
    },
    filterData: {
      type: Object,
      default: null
    },
    formModel: {
      type: Object,
      default: null
    },
    data: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
      tableData: [],
      page: {
        background: false,
        total: 0,
        currentPage: 1,
        pageSize: 100
      },
      tableLoading: false,
      baseApi: {}
    }
  },
  created() {
    if (!this.data) {
      this.baseApi = BaseApi(this.api)
    }
  },
  methods: {
    searchChange(params, done) {
      if (this.data) {
        this.tableData = this.data
        this.page.total = this.data.length
        return
      }
      var page = this.page
      this.tableLoading = true
      var model = { conditions: [], size: page.pageSize, current: page.currentPage }
      for (var key in params) {
        if (Array.isArray(params[key]) && params[key].length === 2) {
          model.conditions.push({ column: key, option: 'between', value: params[key][0], value2: params[key][1] })
        } else {
          model.conditions.push({ column: key, option: 'like', value: params[key] })
        }
      }
      params = this.searchModel ? this.searchModel(model, params) : model
      this.baseApi.page(
        params
      ).then(res => {
        this.tableData = res.data.records
        this.page.total = res.data.total
        this.tableLoading = false
        done()
      }).catch((error) => {
        this.$message(this, '请求失败' + error, 'warning')
        this.tableLoading = false
      })
    },
    getList(page, params) {
      if (this.data) {
        this.tableData = this.data
        this.page.total = this.data.length
        return
      }
      this.tableLoading = true
      var parameter = { size: page.pageSize, current: page.currentPage }
      this.filterData ? parameter.conditions = [{ column: this.filterData.column, option: this.filterData.option, valueList: this.filterData.valueList }] : ''
      this.baseApi.page(
        parameter
      ).then(res => {
        this.tableData = res.data.records
        this.page.total = res.data.total
        this.tableLoading = false
      }).catch((error) => {
        this.$message(this, '请求失败' + error, 'warning')
        this.tableLoading = false
      })
    },
    rowUpdate(row, index, done) {
      if (this.formModel) {
        row = Object.assign(row, this.formModel)
      }
      this.baseApi.updateById(row).then((res) => {
        const that = this
        if (res.data == null || res.data === '') {
          that.$message({ message: '更新失败' + res.msg, type: 'warning' })
          done()
          return
        }
        this.$message.success('更新成功')
        this.refreshChange()
        done()
      }).catch((error) => {
        this.$message(this, '更新失败' + error, 'warning')
        done()
      })
    },
    rowSave(row, done) {
      if (this.formModel) {
        row = Object.assign(row, this.formModel)
      }
      this.baseApi.save(row).then((res) => {
        if (res.code === 1) {
          this.$message.warning('添加失败' + res.msg)
        } else {
          this.$message.success('添加成功')
        }
        this.refreshChange()
        done()
      }).catch((error) => {
        this.$message(this, '添加失败' + error, 'warning')
        done()
      })
    },
    rowDel(row, index) {
      const that = this
      this.$confirm('是否确定删除？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(function() {
          return that.baseApi.removeById(row.id)
        })
        .then(data => {
          this.$message.success('删除成功')
          this.refreshChange()
        }).catch((error) => {
          this.$message(this, '删除失败' + error, 'warning')
          this.refreshChange()
        })
    },
    refreshChange() {
      this.getList(this.page)
    }
  }
}
</script>
<style lang="scss">
.crud-box{
    padding: 0px 16px 0px 16px;
    .avue-crud__pagination {
        position: relative;
        padding: 8px 0;
        text-align: right;
    }
    .avue-crud {
      width: 100%;
    }
    .avue-crud__left{
      margin-left: 12px;
    }
   .avue-crud .el-table--mini th, .avue-crud .el-table--mini td {
      padding: 0px !important;
      height: 32px;
    }
    .source {
      background: white;
      padding-top: 16px ;
      border-radius: 3px;
      box-shadow: 0px 5px 10px rgb(0 0 0 / 30%);
    }
}
</style>
