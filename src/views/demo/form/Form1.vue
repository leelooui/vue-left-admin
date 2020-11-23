<template>
  <div style="margin: 0px 16px 16px 16px;">
    <el-row :gutter="24">
      <el-col :span="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>Avue 表单测试</span>
          </div>
          <meta-data-form ref="metaDataForm" :zoption="zoption" form-code="accident_cetdam" />

        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
const DIC = [{
  label: '男',
  value: 0
}, {
  label: '女',
  value: 1
}, {
  label: '未知',
  value: ''
}]
export default {
  data() {
    return {
      zoption: {
        labelPosition: 'top',
        column: []
      }
    }
  },
  created() {
    setTimeout(() => {
      this.createItem()
    }, 300)
  },
  methods: {
    createItem() {
      var columns = []
      var types = [
        { type: 'color', label: '颜色选择框' },
        { type: 'cascader', label: '级联框' },
        { type: 'checkbox', label: '多选框', dicData: DIC },
        { type: 'radio', label: '单选框', dicData: DIC },
        { type: 'select', label: '选择框', drag: true, multiple: true, dicData: DIC },
        /* { type: 'dynamic', label: '子表单' },*/
        { type: 'icon', label: '图标选择框' },
        { type: 'input', label: '输入框' },
        { type: 'map', label: '地图' },
        { type: 'number', label: '数字框' },
        { type: 'search', label: '搜索框' },
        { type: 'table', label: '表格' },
        { type: 'password', label: '密码框' },
        { type: 'switch', label: '开关框' },
        { type: 'rate', label: '评价框' },
        { type: 'tree', label: '树型选择框' },
        { type: 'array', label: '数组框' },
        { type: 'img', label: '图片数组框' },
        { type: 'url', label: '超链输入框' },
        { type: 'upload', label: '上传组件' },
        { type: 'time', label: '时间框' },
        { type: 'timerange', label: '时间范围' },
        { type: 'date', label: '日期框' },
        { type: 'datetime', label: '日期时间框' },
        { type: 'daterange', label: '日期范围' },
        { type: 'datetimerange', label: '日期时间范围' },
        { type: 'dates', label: '多个日期' },
        { type: 'week', label: '周' },
        { type: 'month', label: '月' },
        { type: 'year', label: '年' }
      ]
      for (var i = 0; i < 10; i++) {
        for (var j = 0; j < types.length; j++) {
          var obj = types[j]
          columns.push({ labelWidth: '120px', prop: obj.type + i + '' + j, ... obj, span: 12, rules: [{ required: true, message: '请输入', trigger: 'blur' }] })
        }
      }

      this.zoption.column = columns
    }
  }
}
</script>
