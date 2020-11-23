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
    label: '角色ID',
    prop: 'id',
    align: 'center'
  }, {
    width: '200px',
    label: '资源编码',
    prop: 'resCode',
    align: 'center'
  }, {
    width: '200px',
    label: '资源名称',
    prop: 'resName',
    align: 'center'
  }, {
    width: '200px',
    label: '资源状态',
    prop: 'resSts',
    align: 'center'
  }, {
    width: '200px',
    label: '资源地址',
    prop: 'resUrl',
    align: 'center'
  }, {
    width: '200px',
    label: '排序',
    prop: 'resOrder',
    align: 'center'
  }, {
    width: '200px',
    label: '角色编码',
    prop: 'roleCode',
    align: 'center'
  }, {
    width: '200px',
    label: '备注',
    prop: 'systemCode',
    align: 'resRemark'
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
