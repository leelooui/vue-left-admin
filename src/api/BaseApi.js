import request from '@/utils/request'
export default (url) => {
  let baseUrl = url
  if (!baseUrl) {
    baseUrl = ''
  }
  baseUrl = baseUrl.trim()
  if (baseUrl.charAt(baseUrl.length - 1) !== '/') {
    baseUrl = baseUrl + '/'
  }
  return {
    get: (id) => {
      return request({
        url: baseUrl + id,
        method: 'get'
      })
    },
    save: (entity) => {
      return request({
        url: baseUrl,
        method: 'post',
        data: entity
      })
    },
    updateById: (entity) => {
      return request({
        url: baseUrl + entity.id,
        method: 'patch',
        data: entity
      })
    },
    removeById: (id) => {
      return request({
        url: baseUrl + id,
        method: 'delete'
      })
    },
    page: (page) => {
      return request({
        url: baseUrl + 'page/',
        method: 'post',
        data: page
      })
    },
    count: (page) => {
      return request({
        url: baseUrl + 'count/',
        method: 'post',
        data: page
      })
    },
    batchSave: (entitys) => {
      return request({
        url: baseUrl + 'batch/',
        method: 'post',
        data: entitys
      })
    },
    batchRemove: (ids) => {
      return request({
        url: baseUrl + 'batch/',
        method: 'delete',
        data: ids
      })
    }
  }
}
