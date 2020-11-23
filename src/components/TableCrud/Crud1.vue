<template>
  <div class="dashboard-container">
    <div class="e1table-container bg-white">
      <el-container>
        <el-header height="auto" class="form-container">
          <div class="form-header">
            <div class="form-title"><i class="el-icon-tickets" style=" margin-right: 10px; margin-left: 10px; font-weight: bold;" /><span>Table</span></div>
            <div class="form-but">
              <i v-show="!openFrom" class="el-icon-arrow-down arrow-but" @click="down(1)" />
              <i v-show="openFrom" class="el-icon-arrow-up arrow-but" @click="down(0)" />
            </div>
          </div>
          <transition name="el-zoom-in-top">
            <el-form
              v-show="openFrom"
              :label-position="labelPosition"
              :model="formInline"
              :size="size"
            >
              <el-row :gutter="20" style="width:100%;margin: 0px;">
                <el-col :span="6">
                  <el-form-item :label-width="labelWidth" :model="formInline" label="单行文本">
                    <el-input v-model="formInline.test_input" style="width:100%" /></el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item :label-width="labelWidth" :model="formInline" label="多行文本">
                    <el-input v-model="formInline.test_textarea" type="textarea" :rows="2" style="width:100%" /></el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item :label-width="labelWidth" :model="formInline" label="下拉框">
                    <el-select v-model="formInline.test_select"><el-option label="label" style="width:100%" value="value" /> </el-select></el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item :label-width="labelWidth" :model="formInline" label="下拉多选">
                    <el-input v-model="formInline.test_select_multiple" style="width:100%" /></el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20" style="width:100%;margin: 0px;">
                <el-col :span="6">
                  <el-form-item :label-width="labelWidth" :model="formInline" label="单选框">
                    <el-input v-model="formInline.test_radio" style="width:100%" /></el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item :label-width="labelWidth" :model="formInline" label="复选框">
                    <el-input v-model="formInline.test_checkbox" style="width:100%" /></el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item :label-width="labelWidth" :model="formInline" label="日期选择">
                    <el-date-picker v-model="formInline.test_date" type="datetimerange" style="width:100%" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" /></el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item :label-width="labelWidth" :model="formInline" label="日期时间">
                    <el-date-picker v-model="formInline.test_datetime" type="daterange" style="width:100%" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" /></el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20" style="width:100%;margin: 0px;">
                <el-col :span="6">
                  <el-form-item :label-width="labelWidth" :model="formInline" label="用户选择">
                    <el-input v-model="formInline.test_user_code" style="width:100%" /></el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item :label-width="labelWidth" :model="formInline" label="机构选择">
                    <el-input v-model="formInline.test_office_code" style="width:100%" /></el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item :label-width="labelWidth" :model="formInline" label="区域选择">
                    <el-input v-model="formInline.test_area_code" style="width:100%" /></el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item :label-width="labelWidth" :model="formInline" label="状态">
                    <el-select v-model="formInline.status"><el-option label="label" style="width:100%" value="value" /> </el-select></el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </transition>
          <div class="table-but">
            <el-button plain icon="el-icon-plus" :size="size">添加</el-button>
            <el-button plain icon="el-icon-s-release" :size="size">导入</el-button>
            <el-button plain icon="el-icon-document-delete" :size="size">导出</el-button>
            <el-button plain icon="el-icon-delete" :size="size">删除</el-button>
          </div>
        </el-header>
        <el-main height="auto">
          <el-table ref="multipleTable" :height="th" :data="listData" style="width: 100%" :size="size" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55" />
            <el-table-column type="index" label="序号" width="60" />
            <el-table-column prop="test_input" label="单行文本" />
            <el-table-column prop="test_textarea" label="多行文本" />
            <el-table-column prop="test_select" label="下拉框" />
            <el-table-column prop="test_select_multiple" label="下拉多选" />
            <el-table-column prop="test_radio" label="单选框" />
            <el-table-column prop="test_checkbox" label="复选框" />
            <el-table-column prop="test_date" label="日期选择" />
            <el-table-column prop="test_datetime" label="日期时间" />
            <el-table-column prop="test_user_code" label="用户选择" />
            <el-table-column prop="test_office_code" label="机构选择" />
            <el-table-column prop="test_area_code" label="区域选择" />
            <el-table-column prop="test_area_name" label="区域名称" />
            <el-table-column prop="status" label="状态" />
            <el-table-column prop="update_date" label="更新时间" />
            <el-table-column prop="remarks" label="备注信息" />
            <div slot="empty" class="avue-crud__empty"><div class="avue-empty"><div class="avue-empty__image" style="height: 50px;"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAxKSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgIDxlbGxpcHNlIGZpbGw9IiNGNUY1RjUiIGN4PSIzMiIgY3k9IjMzIiByeD0iMzIiIHJ5PSI3Ii8+CiAgICA8ZyBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0iI0Q5RDlEOSI+CiAgICAgIDxwYXRoIGQ9Ik01NSAxMi43Nkw0NC44NTQgMS4yNThDNDQuMzY3LjQ3NCA0My42NTYgMCA0Mi45MDcgMEgyMS4wOTNjLS43NDkgMC0xLjQ2LjQ3NC0xLjk0NyAxLjI1N0w5IDEyLjc2MVYyMmg0NnYtOS4yNHoiLz4KICAgICAgPHBhdGggZD0iTTQxLjYxMyAxNS45MzFjMC0xLjYwNS45OTQtMi45MyAyLjIyNy0yLjkzMUg1NXYxOC4xMzdDNTUgMzMuMjYgNTMuNjggMzUgNTIuMDUgMzVoLTQwLjFDMTAuMzIgMzUgOSAzMy4yNTkgOSAzMS4xMzdWMTNoMTEuMTZjMS4yMzMgMCAyLjIyNyAxLjMyMyAyLjIyNyAyLjkyOHYuMDIyYzAgMS42MDUgMS4wMDUgMi45MDEgMi4yMzcgMi45MDFoMTQuNzUyYzEuMjMyIDAgMi4yMzctMS4zMDggMi4yMzctMi45MTN2LS4wMDd6IiBmaWxsPSIjRkFGQUZBIi8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K" alt=""></div><p class="avue-empty__desc">暂无数据</p></div></div>
          </el-table>
          <Pagination
            :size="size"
            :current-page="page.currentPage"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </el-main>
      </el-container>
    </div>
  </div>
</template>
<style lang="scss">
  .e1table-container {
      div {
        display: inline-block;
      }
      .el-header,
      .el-main {
        padding: 0px;
      }
      .el-form {
        border-bottom: 1px solid rgb(220, 223, 230);
        margin-top: 10px;
      }
      .form-header {
        width: 100%;
        line-height: 36px;
        border-bottom: 1px solid #dcdfe6;
      }
      .el-form-item__content{width: calc(100% - 120px);margin: 0px!important;}
      .el-form-item, .el-select{width: 100%;}
      .arrow-but {
        cursor: pointer;
      }
      .form-title {
        color: #36f;
        font-size: 16px;
        font-weight: 700;
        line-height: 52px;
      }
      .form-but {
        line-height: 52px;
        float: right;
        font-size: 18px;
        padding-right: 10px;
      }
      .table-but {
        width: 100%;
        border-bottom: 1px solid #dcdfe6;
        padding: 6px 10px;
      }
      .el-divider {
        margin: 0px;
      }
  }
</style>
<script>
import resize from '@/utils/resize'
import Pagination from '@/components/Pagination'
export default {
  components: { Pagination },
  mixins: [resize],
  data() {
    return {
      size: 'mini',
      labelWidth: '120px',
      openFrom: 1,
      th: '0px',
      labelPosition: 'left',
      multipleSelection: [],
      formInline: {
        test_input: null,
        test_textarea: null,
        test_select: null,
        test_select_multiple: null,
        test_radio: null,
        test_checkbox: null,
        test_date: null,
        test_datetime: null,
        test_user_code: null,
        test_office_code: null,
        test_area_code: null,
        status: null,
        remarks: null

      },
      page: { currentPage: 0, pageSize: 20 },
      listData: []
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.resize()
    })
  },
  methods: {
    handleSizeChange(val) {
      this.initData()
    },
    down(e) {
      this.openFrom = e
      this.lw = this.openFrom ? '300px' : '48px'
      setTimeout(this.resize, 350)
    },
    onSubmit() {},
    handleCurrentChange(val) {
      this.initData()
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    presize() {
      var fh = this.$el.querySelector('.form-container').offsetHeight + 208
      this.th = 'calc(100vh - ' + fh + 'px)'
    }
  }
}
</script>
