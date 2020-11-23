<template>
  <div class="dashboard-container">
    <el-row :gutter="24">
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>分组表单编辑</span>
            <el-button
              style="float: right; padding: 3px 0"
              type="text"
            >操作</el-button>
          </div>
          <avue-form
            v-model="obj"
            :option="getOption(false)"
            @submit="submit"
          />
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>分组表单查看</span>
            <el-button
              style="float: right; padding: 3px 0"
              type="text"
            >操作</el-button>
          </div>
          <avue-form v-model="obj" :option="getOption(true)" @submit="submit" />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
var DIC = {
  VAILD: [
    {
      label: '真',
      value: 'true'
    },
    {
      label: '假',
      value: 'false'
    }
  ],
  SEX: [
    {
      label: '男',
      value: 0
    },
    {
      label: '女',
      value: 1
    }
  ]
}
export default {
  data() {
    return {
      type: 0,
      obj: { '$sex': '男', 'name': '邓轩伟', 'age': 123, 'datetime': '2020-10-02 12:00:00', 'sex': 0, 'province': '120000', 'checkbox': ['110000', '120000', '130000', '140000', '150000', '210000', '220000', '230000', '310000', '320000', '330000', '340000', '350000', '360000', '370000', '410000', '420000', '430000', '440000', '450000', '460000', '500000', '510000', '520000', '530000', '540000', '610000', '620000', '630000', '640000', '650000', '710000', '810000', '820000'], 'len': 'test', '$province': '天津市', '$checkbox': '北京市 | 天津市 | 河北省 | 山西省 | 内蒙古 | 辽宁省 | 吉林省 | 黑龙江 | 上海市 | 江苏省 | 浙江省 | 安徽省 | 福建省 | 江西省 | 山东省 | 河南省 | 湖北省 | 湖南省 | 广东省 | 广 西 | 海南省 | 重庆市 | 四川省 | 贵州省 | 云南省 | 西 藏 | 陕西省 | 甘肃省 | 青海省 | 宁 夏 | 新 疆 | 台湾省 | 香 港 | 澳 门' },
      option: {}
    }
  },
  computed: {
    title() {
      return this.type === 0 ? '编 辑' : '保 存'
    }
  },
  methods: {
    getOption(detail) {
      return {
        detail: detail,
        group: [
          {
            label: '用户信息',
            prop: 'jbxx',
            icon: 'el-icon-edit-outline',
            column: [
              {
                label: '姓名',
                prop: 'name',
                span: 12,
                rules: [
                  {
                    required: true,
                    message: '请输入姓名',
                    trigger: 'blur'
                  }
                ]
              },
              {
                label: '年龄',
                prop: 'age',
                type: 'number',
                span: 12,
                rules: [
                  {
                    required: true,
                    message: '请输入年龄',
                    trigger: 'blur'
                  }
                ]
              },
              {
                label: '日期时间',
                prop: 'datetime',
                type: 'datetime',
                span: 12,
                format: 'yyyy-MM-dd hh:mm:ss',
                valueFormat: 'yyyy-MM-dd hh:mm:ss',
                mock: {
                  type: 'datetime',
                  format: 'yyyy-MM-dd hh:mm:ss',
                  now: true
                }
              },
              {
                label: '性别',
                prop: 'sex',
                span: 12,
                type: 'radio',
                dicData: DIC.SEX,
                mock: {
                  type: 'dic'
                }
              }
            ]
          },
          {
            label: '退款申请',
            prop: 'tksq',
            icon: 'el-icon-view',
            column: [
              {
                label: '省份',
                prop: 'province',
                type: 'select',
                props: {
                  label: 'name',
                  value: 'code'
                },
                dicUrl: `https://cli.avuejs.com/api/area/getProvince`,
                rules: [
                  {
                    required: true,
                    message: '请选择省份',
                    trigger: 'blur'
                  }
                ]
              },
              {
                label: '多选',
                prop: 'checkbox',
                type: 'checkbox',
                all: true,
                props: {
                  label: 'name',
                  value: 'code'
                },
                span: 24,
                dicUrl: 'https://cli.avuejs.com/api/area/getProvince'
              }
            ]
          },
          {
            label: '用户信息',
            prop: 'yhxx',
            icon: 'el-icon-edit-outline',
            column: [
              {
                label: '测试长度',
                prop: 'len',
                maxlength: 5
              }
            ]
          }
        ]
      }
    },
    submit() {
      this.$message.success(JSON.stringify(this.obj))
    }
  }
}
</script>
