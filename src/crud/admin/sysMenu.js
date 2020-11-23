export const tableOption = {
  border: true,
  index: true,
  indexLabel: '序号',
  size: 'mini',
  stripe: true,
  menuAlign: 'center',
  align: 'center',
  searchMenuSpan: 6,
  viewBtn: true,
  addBtn: true,
  editBtn: true,
  height: 'calc(100vh - 211px)',
  column: [{
    label: '菜单ID',
    prop: 'id',
    align: 'center'
  }, {
    width: '200px',
    label: '菜单编码',
    prop: 'menuCode',
    align: 'center'
  }, {
    width: '200px',
    label: '菜单名称',
    prop: 'menuName',
    align: 'center'
  }, {
    width: '200px',
    label: '菜单层次',
    prop: 'menuLevel',
    align: 'center'
  }, {
    width: '200px',
    label: '父菜单编码',
    prop: 'menuParentCode',
    align: 'center'
  }, {
    width: '200px',
    label: '菜单排序',
    prop: 'menuOrder',
    align: 'center'
  }, {
    width: '200px',
    label: '菜单地址',
    prop: 'menuUrl',
    align: 'center'
  }, {
    width: '200px',
    label: '菜单系统',
    prop: 'menuSystem',
    align: 'center'
  }, {
    width: '200px',
    label: '菜单图标',
    prop: 'menuIcon',
    align: 'center'
  }, {
    width: '200px',
    label: '菜单状态',
    prop: 'menuSts',
    align: 'center'
  }, {
    width: '200px',
    label: '备注',
    prop: 'menuText',
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
