import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

export function getInfo() {
  return request({
    url: '/user-all-info',
    method: 'get'
  })
}
export function logout() {
  return request({
    url: '/logout',
    method: 'get'
  })
}
export function list() {
  return request({
    url: '/list',
    method: 'get'
  })
}
