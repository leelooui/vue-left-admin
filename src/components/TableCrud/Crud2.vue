<template>
  <div class="dashboard-container">
    <div class="e2table-container bg-white">
      <el-container>
        <el-aside v-show="openFrom" :width="lw" class="form-container">
          <div class="box-header">
            <div class="form-header">
              <div class="form-title"><i class="el-icon-tickets" style=" margin-right: 10px; margin-left: 10px; font-weight: bold;" /><span>Table2</span></div>
              <div class="form-but">
                <i v-show="openFrom" class="el-icon-s-fold arrow-but" @click="down(0)" />
              </div>
            </div>
            <el-form :label-position="labelPosition" :model="formInline" :size="formSize">
              <el-form-item :label-width="labelWidth" label="审批人">
                <el-input v-model="formInline.user" placeholder="审批人" />
              </el-form-item>

              <el-form-item :label-width="labelWidth" label="审批人">
                <el-input v-model="formInline.user" placeholder="审批人" />
              </el-form-item>

              <el-form-item :label-width="labelWidth" label="活动区域">
                <el-select v-model="formInline.region" placeholder="活动区域">
                  <el-option label="区域一" value="shanghai" />
                  <el-option label="区域二" value="beijing" />
                </el-select>
              </el-form-item>
              <el-form-item :label-width="labelWidth" label="活动区域">
                <el-select v-model="formInline.region" placeholder="活动区域">
                  <el-option label="区域一" value="shanghai" />
                  <el-option label="区域二" value="beijing" />
                </el-select>
              </el-form-item>
            </el-form>
            <div style="display: flex;">
              <el-button :size="formSize" style="flex: 1;">重置</el-button>
              <el-button type="primary" style="flex: 1;" :size="formSize" @click="onSubmit">查询</el-button>
            </div>
          </div>
        </el-aside>
        <el-main height="auto">
          <div class="table-but">
            <i v-show="!openFrom" class="el-icon-s-unfold arrow-but" style=" padding: 0px 10px 0px 0px; " @click="down(1)" />
            <el-button plain icon="el-icon-plus" size="mini">添加</el-button>
            <el-button plain icon="el-icon-s-release" size="mini">导入</el-button>
            <el-button plain icon="el-icon-document-delete" size="mini">导出</el-button>
            <el-button plain icon="el-icon-delete" size="mini">删除</el-button>
          </div>
          <el-table height="calc(100vh - 258px)" :data="listData" style="width: 100%" :size="formSize">
            <el-table-column type="selection" width="55" />
            <el-table-column prop="date" label="日期" width="180" />
            <el-table-column prop="name" label="姓名" width="180" />
            <el-table-column prop="address" label="地址" />
            <div slot="empty" class="avue-crud__empty"><div class="avue-empty"><div class="avue-empty__image" style="height: 50px;"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAxKSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgIDxlbGxpcHNlIGZpbGw9IiNGNUY1RjUiIGN4PSIzMiIgY3k9IjMzIiByeD0iMzIiIHJ5PSI3Ii8+CiAgICA8ZyBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0iI0Q5RDlEOSI+CiAgICAgIDxwYXRoIGQ9Ik01NSAxMi43Nkw0NC44NTQgMS4yNThDNDQuMzY3LjQ3NCA0My42NTYgMCA0Mi45MDcgMEgyMS4wOTNjLS43NDkgMC0xLjQ2LjQ3NC0xLjk0NyAxLjI1N0w5IDEyLjc2MVYyMmg0NnYtOS4yNHoiLz4KICAgICAgPHBhdGggZD0iTTQxLjYxMyAxNS45MzFjMC0xLjYwNS45OTQtMi45MyAyLjIyNy0yLjkzMUg1NXYxOC4xMzdDNTUgMzMuMjYgNTMuNjggMzUgNTIuMDUgMzVoLTQwLjFDMTAuMzIgMzUgOSAzMy4yNTkgOSAzMS4xMzdWMTNoMTEuMTZjMS4yMzMgMCAyLjIyNyAxLjMyMyAyLjIyNyAyLjkyOHYuMDIyYzAgMS42MDUgMS4wMDUgMi45MDEgMi4yMzcgMi45MDFoMTQuNzUyYzEuMjMyIDAgMi4yMzctMS4zMDggMi4yMzctMi45MTN2LS4wMDd6IiBmaWxsPSIjRkFGQUZBIi8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K" alt=""></div><p class="avue-empty__desc">暂无数据</p></div></div>
          </el-table>
          <Pagination
            :current-page="page.currentPage"
            :page-sizes="[20, 50, 100]"
            :page-size="page.pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="page.total"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </el-main>
      </el-container>
    </div>
  </div>
</template>
<style lang="scss">
.e2table-container {
  .box-header{display: flex; flex-direction: column; height: 100%;background: white;}
  .el-header,
  .el-main {
    padding: 0px;
  }
  .form-container{
    background: white;padding: 0px 10px;margin: 0px;border-right: 10px solid #f0f2f5;
  }
  .el-form {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
  }
  .form-header {
    display: inline-block;
    width: 100%;
    line-height: 36px;
  }
  .el-form-item, .el-select{width: 100%;}
  .arrow-but {
    cursor: pointer;
  }
  .form-title {
    color: #252b3a;
    font-size: 16px;
    font-weight: 700;
    line-height: 32px;
    display: inline-block;
  }
  .form-but {
    line-height: 36px;
    float: right;
    font-size: 18px;
    display: inline-block;
  }
  .table-but {
    width: 100%;
    border-bottom: 1px solid #dcdfe6;
    padding: 12px 10px;
  }
  .el-divider {
    margin: 0px;
  }
}
</style>
<script>
import Pagination from '@/components/Pagination'
export default {
  components: { Pagination },
  data() {
    return {
      formSize: 'mini',
      lw: '300px',
      labelWidth: '120px',
      openFrom: 1,
      currentPage: 1,
      labelPosition: 'top',
      activeNames: 1,
      formInline: {
        user: null,
        region: null
      },
      page: { currentPage: 0, pageSize: 20, total: 0 },
      listData: []
    }
  },
  methods: {
    handleSizeChange(val) {
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
    }
  }
}
</script>
