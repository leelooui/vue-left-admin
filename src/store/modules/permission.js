import { constantRoutes } from '@/router'
import Layout from '@/layout/index'
import _ from 'lodash'
import { isExternal } from '@/utils/validate'

const state = {
  routers: [],
  addRouters: []
}
const mutations = {
  SET_ROUTERS: (state, routers) => {
    state.addRouters = routers
    state.routers = constantRoutes.concat(routers)
  }
}
const actions = {
  GenerateRoutes({ commit }, userMenus) {
    return new Promise(resolve => {
      const routes = asyncRouter(userMenus)
      commit('SET_ROUTERS', routes)
      resolve(routes)
    })
  }
}

export const asyncRouter = (routers) => {
  var parentMenus = routers.filter(router => !router.menuParentCode && router.menuSts !== 'D')
  parentMenus = _.orderBy(parentMenus, ['menuOrder'], ['asc'])
  return parentMenus.map(router => {
    var children = routers.filter(item => item.menuParentCode === router.menuCode && router.menuSts !== 'D')
    var childrens = children.map(item => {
      var meta = { title: item.menuName, icon: item.menuIcon }
      if (!meta.icon) {
        meta.icon = 'nested'
        meta.noCache = true
      }
      var menuUrl = item.menuUrl.includes('/:') ? _.split(item.menuUrl, '/:', 2)[0] : item.menuUrl
      return { component: loadView(menuUrl), path: isExternal(item.menuUrl) ? item.menuUrl : '/' + item.menuUrl, name: item.menuCode, meta: meta, hidden: item.menuSts === 'N' }
    })
    var meta = { title: router.menuName, icon: router.menuIcon }
    if (!meta.icon) {
      meta.icon = 'nested'
      meta.noCache = true
    }
    childrens = _.orderBy(childrens, ['menuOrder'], ['asc'])
    return { children: childrens, component: Layout, path: router.menuUrl, name: router.menuCode, meta: meta, hidden: router.menuSts === 'N' }
  })
}

export const loadView = (view) => {
  return (resolve) => require([`@/views/${view}`], resolve)
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
