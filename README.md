## 事故研究

```
├─ .gitignore
├─ .travis.yml
├─ babel.config.js
├─ jest.config.js
├─ jsconfig.json
├─ package.json
├─ postcss.config.js
├─ public
│  └─ index.html
├─ README.md
├─ src
│  ├─ api
│  │  ├─ admin
│  │  │  ├─ sysDict.js
│  │  │  ├─ sysMenu.js
│  │  │  ├─ sysOrg.js
│  │  │  ├─ sysRes.js
│  │  │  ├─ sysRole.js
│  │  │  ├─ sysUser.js
│  │  │  └─ sysUserRole.js
│  │  ├─ appointment.js
│  │  ├─ base
│  │  │  └─ baseApi.js
│  │  ├─ event.js
│  │  ├─ eventParticipants.js
│  │  ├─ organization.js
│  │  ├─ service
│  │  │  └─ EventService.js
│  │  └─ user.js
│  ├─ App.vue
│  ├─ assets
│  │  ├─ 404_images
│  │  └─ custom-theme    
│  │     ├─ fonts
│  │     │  ├─ element-icons.ttf
│  │     │  └─ element-icons.woff
│  │     └─ index.css
│  ├─ components
│  │  ├─ Breadcrumb
│  │  │  └─ index.vue
│  │  ├─ Pagination
│  │  │  └─ index.vue 
│  │  ├─ SvgIcon
│  │  │  └─ index.vue
│  │  └─ TableCrud
│  │     └─ index.vue
│  ├─ crud
│  │  └─ admin
│  │     ├─ sysLookUp.js
│  │     ├─ sysMenu.js
│  │     ├─ sysOrg.js
│  │     ├─ sysRes.js
│  │     ├─ sysRole.js
│  │     └─ sysUser.js
│  ├─ filters
│  │  └─ index.js
│  ├─ icons
│  │  ├─ index.js
│  │  └─ svg
│  ├─ layout
│  │  ├─ components
│  │  │  ├─ AppMain.vue
│  │  │  ├─ index.js
│  │  │  ├─ Navbar.vue
│  │  │  └─ Sidebar
│  │  │     ├─ index.vue
│  │  │     ├─ Item.vue
│  │  │     ├─ Link.vue
│  │  │     ├─ Logo.vue
│  │  │     └─ SidebarItem.vue
│  │  ├─ index.vue
│  │  └─ mixin
│  │     └─ ResizeHandler.js
│  ├─ main.js
│  ├─ permission.js
│  ├─ router
│  │  └─ index.js
│  ├─ settings.js
│  ├─ store
│  │  ├─ getters.js
│  │  ├─ index.js
│  │  └─ modules
│  │     ├─ app.js
│  │     ├─ errorLog.js
│  │     ├─ permission.js
│  │     ├─ settings.js
│  │     ├─ tagsView.js
│  │     └─ user.js
│  ├─ styles
│  │  ├─ btn.scss
│  │  ├─ element-ui.scss
│  │  ├─ element-variables.scss
│  │  ├─ index.scss
│  │  ├─ mixin.scss
│  │  ├─ sidebar.scss
│  │  ├─ transition.scss
│  │  └─ variables.scss
│  ├─ utils
│  │  ├─ auth.js
│  │  ├─ clipboard.js
│  │  ├─ error-log.js
│  │  ├─ eventBus.js
│  │  ├─ get-page-title.js
│  │  ├─ index.js
│  │  ├─ open-window.js
│  │  ├─ permission.js
│  │  ├─ request.js
│  │  ├─ resize.js
│  │  ├─ scroll-to.js
│  │  └─ validate.js
│  └─ views
│     ├─ error
│     │  ├─ 401.vue
│     │  └─ 404.vue
│     ├─ fullcalendar
│     │  ├─ components
│     │  │  ├─ EventDetail.js
│     │  │  ├─ eventDetail.scss
│     │  │  ├─ index.js
│     │  │  ├─ Main.vue
│     │  │  ├─ MeetBottom.vue
│     │  │  ├─ OrgDrawer.vue
│     │  │  ├─ StrokeDialog.vue
│     │  │  └─ StrokeLeft.vue
│     │  └─ index.vue
│     ├─ meet
│     │  ├─ AddDialog.vue
│     │  └─ index.vue
│     ├─ stroke
│     │  ├─ components
│     │  │  ├─ DetailDialog.vue
│     │  │  ├─ PanelGroup.vue
│     │  │  └─ PanelTable.vue
│     │  └─ index.vue
│     └─ sys
│        ├─ sysLookUp
│        │  └─ index.vue
│        ├─ sysMenu
│        │  └─ index.vue
│        ├─ sysOrg
│        │  └─ index.vue
│        ├─ sysRes
│        │  └─ index.vue
│        ├─ sysRole
│        │  ├─ index.vue
│        │  ├─ SysMenuRoleDialog.vue
│        │  └─ SysResRoleDialog.vue
│        └─ sysUser
│           ├─ index.vue
│           └─ SysUserRoleDialog.vue
└─ vue.config.js

```


## 开发

```bash

# 安装依赖
npm install

# 建议不要直接使用 cnpm 安装依赖，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run dev
```

浏览器访问 http://localhost:9528

## 发布

```bash
# 构建测试环境
npm run build:stage

# 构建生产环境
npm run build:prod
```

## 其它

```bash
# 预览发布环境效果
npm run preview

# 预览发布环境效果 + 静态资源分析
npm run preview -- --report

# 代码格式检查
npm run lint

# 代码格式检查并自动修复
npm run lint -- --fix
```
