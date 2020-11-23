const tableOption = {
  rowKey: 'id',
  filterBtn: true,
  border: true,
  index: true,
  indexLabel: '序号',
  size: 'mini',
  stripe: true,
  menuAlign: 'center',
  menuWidth: 300,
  align: 'center',
  searchMenuSpan: 6,
  viewBtn: true,
  addBtn: true,
  editBtn: true,
  height: 'calc(100vh - 260px)',
  column: [{
    filterable: 'true',
    width: '200px',
    label: '用户编码',
    prop: 'userCode',
    align: 'center',
    searchLabelWidth: 80
  }, {
    filterable: 'true',
    width: '200px',
    label: '飞书员工',
    prop: 'feishuEmployeeId',
    align: 'center',
    search: true
  }, {
    width: '200px',
    label: '用户名称',
    prop: 'userName',
    align: 'center',
    searchLabelWidth: 80,
    search: true
  }, {
    width: '400px',
    label: '用户密码',
    prop: 'userPwd',
    align: 'center'
  }, {
    label: '用户状态',
    prop: 'userSts',
    align: 'center'
  }, {
    width: '200px',
    label: '用户邮箱',
    prop: 'userEmail',
    align: 'center'
  }, {
    width: '150px',
    label: '用户手机',
    prop: 'userMobile',
    align: 'center'
  }, {
    width: '150px',
    label: '登录时间',
    prop: 'loginDate',
    type: 'date',
    format: 'yyyy-MM-dd hh:mm:ss',
    align: 'center'
  }, {
    label: '创建人ID',
    prop: 'createBy',
    align: 'center'
  }, {
    width: '150px',
    label: '创建时间',
    prop: 'createTime',
    type: 'date',
    format: 'yyyy-MM-dd hh:mm:ss',
    align: 'center'
  }, {
    label: '更新人ID',
    prop: 'updateBy',
    align: 'center'
  }, {
    width: '150px',
    label: '更新时间',
    prop: 'updateTime',
    type: 'date',
    format: 'yyyy-MM-dd hh:mm:ss',
    align: 'center'
  }, {
    label: '版本号',
    prop: 'version',
    align: 'center'
  }]
}

/** 用户已有角色列表 */
const userRoleTableOption = {
  rowKey: 'roleCode',
  align: 'center',
  menu: false,
  size: 'mini',
  height: 400,
  selection: true,
  selectClearBtn: false,
  tip: false,
  refreshBtn: false,
  columnBtn: false,
  addBtn: false,
  column: [{
    label: '角色编码',
    prop: 'roleCode',
    align: 'center'
  }]
}

/** 未授权角色列表 */
const roleListTableOption = {
  rowKey: 'roleCode',
  align: 'center',
  menu: false,
  size: 'mini',
  height: 400,
  selection: true,
  selectClearBtn: false,
  tip: false,
  refreshBtn: false,
  columnBtn: false,
  addBtn: false,
  column: [{
    label: '角色编码',
    prop: 'roleCode',
    align: 'center',
    width: '160px'
  }, {
    label: '角色名称',
    prop: 'roleName',
    align: 'center'
  }]
}

export { tableOption, userRoleTableOption, roleListTableOption }
