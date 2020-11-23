<template>
  <div
    element-loading-text="配置加载中..."
    class="metadata"
  >
    <el-container>
      <el-header height="36px" style="border-bottom: 1px solid rgb(220, 223, 230)">
        <div style="display: inline-block; width: 100%; padding-bottom: 6px">
          <div v-show="page.pageSize < page.total" id="page-container" style="display: inline-block; margin-right: 20px">
            <el-pagination
              background
              layout="pager,total"
              :current-page.sync="page.current"
              :page-size.sync="page.pageSize"
              :total="page.total"
              @current-change="handleCurrentChange"
            />
          </div>
        </div>
      </el-header>
      <el-main :style="{padding: '12px' }" class="scrollbar">
        <avue-form
          ref="form"
          v-model="form"
          :option="option"
          @submit="handleSubmit"
          @error="error"
        />
      </el-main>
    </el-container>
  </div>
</template>
<script>

export default {
  name: 'MetaDataForm',
  props: {
    zoption: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      form: {},
      option: { column: [] },
      page: { current: 0, pageSize: 100, total: 0 }
    }
  },
  watch: {
    zoption: {
      deep: true,
      handler(newVal, oldVal) {
        this.initCfg()
      }
    }
  },
  created() {
    this.initCfg()
  },
  destroyed() {
    this.form = {}
  },
  methods: {
    initCfg() {
      this.page.total = this.zoption.column ? this.zoption.column.length : 0
      this.handleCurrentChange()
    },
    pages(array, pageNo, pageSize) {
      var pages = array.length <= pageSize ? 1 : Math.ceil(array.length / pageSize)
      if (pageNo > pages) pageNo = pages
      var offset = (pageNo - 1) * pageSize
      return offset + pageSize >= array.length
        ? array.slice(offset, array.length)
        : array.slice(offset, offset + pageSize)
    },
    handleCurrentChange() {
      setTimeout(() => {
        this.option.column = this.getPageData()
      }, 300)
    },
    getPageData() {
      var list = this.zoption.column
      var page = this.page
      var current = page.total < page.current ? 1 : page.current
      page.current = current
      return this.pages(list, current, page.pageSize)
    },
    error() {
      this.$alert('有必填项未填，请注意检查', '系统提示', {
        confirmButtonText: '确定',
        type: 'warning',
        callback: (action) => {}
      })
    },
    validate(form, done) {
      const columns = this.zoption.column
      const vform = this.form
      const page = this.page
      for (var i = 0; i < columns.length; i++) {
        var cell = columns[i]

        if (
          cell.rules.length !== 0 &&
          cell.rules[0].required &&
          !vform[cell.prop]
        ) {
          done()
          var index = i < page.pageSize ? 1 : Math.ceil(i / page.pageSize)
          this.$alert(
            '第' + index + '页，有必填项未填，请注意检查',
            '系统提示',
            {
              confirmButtonText: '确定',
              type: 'warning',
              callback: (action) => {}
            }
          )
          return
        }
      }
      this.save(form, done)
    },
    handleSubmit(form, done) {
      const columns = this.zoption.column
      if (this.page.pageSize > columns.length) {
        this.save(form, done)
      } else {
        this.validate(form, done)
      }
    }
  }
}
</script>
<style lang='scss'>
.metadata {
  .avue--detail .el-input.is-disabled .el-input__inner,
  .avue--detail .el-range-editor.is-disabled,
  .avue--detail .el-range-editor.is-disabled input,
  .avue--detail .el-textarea.is-disabled .el-textarea__inner {
    background-color: #f5f7fa;
  }
}
</style>>
