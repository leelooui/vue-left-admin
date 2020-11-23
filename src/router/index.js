import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Layout from '@/layout'
export const constantRoutes = [
  {
    path: '/',
    redirect: '/home',
    component: Layout,
    meta: {
      icon: 'el-icon-s-home'
    },
    children: [
      {
        path: '/home',
        component: () => import('@/views/dashboard/index'),
        name: 'home',
        meta: { title: '地图', noCache: true }
      }
    ]
  },
  {
    path: 'Forms',
    redirect: '/form',
    component: Layout,
    meta: {
      title: '表单',
      icon: 'el-icon-document-copy'
    },
    children: [
      {
        path: '/form',
        component: () => import('@/views/demo/form/index'),
        name: 'form',
        meta: { title: '表单分组', noCache: true }
      },
      {
        path: '/form1',
        component: () => import('@/views/demo/form/Form1'),
        name: 'form1',
        meta: { title: '表单分页', noCache: true }
      }
    ]
  },
  {
    path: 'Tables',
    redirect: '/Table1',
    component: Layout,
    meta: {
      title: '表格',
      icon: 'el-icon-document'
    },
    children: [
      {
        path: '/Table1',
        component: () => import('@/views/demo/TableCrud/Table1'),
        name: 'Table1',
        meta: { title: '表格表头设置', noCache: true }
      },
      {
        path: '/Table2',
        component: () => import('@/views/demo/TableCrud/Table2'),
        name: 'Table2',
        meta: { title: '表格CRUD', noCache: true }
      }
    ]
  },
  {
    path: 'buttons',
    redirect: '/button',
    component: Layout,
    meta: {
      title: '按钮',
      icon: 'el-icon-pear'
    },
    children: [
      {
        path: '/button',
        component: () => import('@/views/demo/button/index'),
        name: 'form',
        meta: { title: '按钮', noCache: true }
      }
    ]
  },
  {
    path: 'imgs',
    redirect: '/imgs',
    component: Layout,
    meta: {
      title: '图片展示',
      icon: 'el-icon-picture'
    },
    children: [
      {
        path: '/imgs',
        component: () => import('@/views/demo/img/index'),
        name: 'imgs',
        meta: { title: '图片展示', noCache: true }
      }
    ]
  },
  {
    path: 'ToDoList',
    redirect: '/ToDoList',
    component: Layout,
    meta: {
      title: 'ToDoList',
      icon: 'el-icon-tickets'
    },
    children: [
      {
        path: '/ToDoList',
        component: () => import('@/views/demo/toDoList/index'),
        name: 'ToDoList',
        meta: { title: 'ToDoList', noCache: true }
      }
    ]
  },
  { path: '*', component: () => import ('@/views/error/404'), hidden: true },
  { path: '/401', component: () => import ('@/views/error/401'), hidden: true },
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  }
]
const createRouter = () => new Router({
  // mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export default router
