import Vue from 'vue'
import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import Element from 'element-ui'
import './styles/element-variables.scss'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'// 如果使用中文语言包请默认支持，无需额外引入，请删除该依赖

import Avue from '@smallwei/avue'
import '@smallwei/avue/lib/index.css'
import '@/styles/index.scss' // global css
Vue.use(Avue)

import axios from 'axios'
window.axios = axios

import App from './App'
import store from './store'
import router from './router'
import { MetaDataForm, MetaDataTable } from '@/components/Metadata'
Vue.component('MetaDataForm', MetaDataForm)
Vue.component('MetaDataTable', MetaDataTable)
import './icons' // icon
import './permission' // permission control
import './utils/error-log' // error log
import * as filters from './filters' // global filters

import _ from 'lodash'
Vue.prototype._ = _

import VueFileAgent from 'vue-file-agent'
import 'vue-file-agent/dist/vue-file-agent.css'
Vue.use(VueFileAgent)

import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'
Vue.use(Viewer)

Vue.use(Element, {
  size: 'medium', // set element-ui default size
  locale: zhLocale // 如果使用中文，无需设置，请删除
})

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
