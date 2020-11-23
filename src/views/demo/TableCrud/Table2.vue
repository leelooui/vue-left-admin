<template>
  <MetaDataTable :option="option" :data="data" api="" />
</template>
<script>
export default {
  data() {
    return {
      page: {
        pageSize: 20
      },
      option: {
        filterBtn: false,
        viewBtn: true,
        addBtn: true,
        delBtn: true,
        editBtn: true,
        refreshBtn: true,
        columnBtn: false,
        searchBtn: true,
        menu: true,
        menuWidth: '220px',
        searchMenuSpan: 4,
        index: true,
        indexLabel: '序号',
        dialogTop: '5%',
        dialogWidth: '260px',
        span: 24,
        size: 'mini',
        stripe: true,
        border: false,
        headerAlign: 'center',
        align: 'center',
        tree: true,
        labelWidth: 100,
        height: 'calc( 100vh - 200px)',
        column: [{
          width: 130,
          label: '姓名',
          prop: 'name'
        }, {
          label: '性别1',
          prop: 'sex'
        }, {
          label: '测试',
          prop: 'test'
        }]
      },
      data: [{
        id: '1',
        name: '张三',
        age: 14,
        grade: 1,
        phone1: '17547400800',
        phone: '17547400800',
        icon: 'el-icon-time',
        test: 1,
        sex: '男'
      }, {
        id: '4',
        name: '王五',
        age: 10,
        grade: 1,
        test: 1,
        sex: '女',
        icon: 'el-icon-star-on',
        phone1: '17547400800',
        phone: '17547400800'
      }]
    }
  },
  methods: {
    onLoad(page) {
      // 模拟分页
      this.page.total = 40
    }
  }
}
</script>
