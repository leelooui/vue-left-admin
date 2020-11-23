const tableOption = {
  border: true,
  index: true,
  indexLabel: '序号',
  size: 'mini',
  stripe: true,
  menuAlign: 'center',
  menuWidth: 350,
  align: 'center',
  searchMenuSpan: 6,
  viewBtn: true,
  addBtn: true,
  editBtn: true,
  height: 'calc(100vh - 211px)',
  column: [{
    label: '角色ID',
    prop: 'id',
    align: 'center'
  }, {
    width: '200px',
    label: '角色编码',
    prop: 'roleCode',
    align: 'center'
  }, {
    width: '200px',
    label: '角色名称',
    prop: 'roleName',
    align: 'center'
  }, {
    width: '100px',
    label: '角色状态',
    prop: 'roleSts',
    align: 'center'
  }, {
    label: '角色类型',
    prop: 'roleType',
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

/** 角色已有资源列表 */
const resRoleTableOption = {
  rowKey: 'resCode',
  align: 'center',
  size: 'mini',
  menu: false,
  height: 400,
  selection: true,
  selectClearBtn: false,
  tip: false,
  refreshBtn: false,
  columnBtn: false,
  addBtn: false,
  column: [{
    label: '资源编码',
    prop: 'resCode',
    align: 'center'
  }]
}

/** 未授权资源列表 */
const resListTableOption = {
  rowKey: 'resCode',
  align: 'center',
  size: 'mini',
  menu: false,
  height: 400,
  selection: true,
  selectClearBtn: false,
  tip: false,
  refreshBtn: false,
  columnBtn: false,
  addBtn: false,
  column: [{
    label: '资源编码',
    prop: 'resCode',
    align: 'center'
  }, {
    label: '资源名称',
    prop: 'resName',
    align: 'center'
  }]
}

/** 角色已有菜单列表 */
const menuRoleTableOption = {
  rowKey: 'menuCode',
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
    label: '菜单编码',
    prop: 'menuCode',
    align: 'center'
  }]
}

/** 未授权菜单列表 */
const menuListTableOption = {
  rowKey: 'menuCode',
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
    label: '菜单编码',
    prop: 'menuCode',
    align: 'center'
  }, {
    label: '菜单名称',
    prop: 'menuName',
    align: 'center'
  }]
}

export {
  tableOption,
  resRoleTableOption,
  resListTableOption,
  menuRoleTableOption,
  menuListTableOption
}
