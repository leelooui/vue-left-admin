## 后台管理系统模板 VUE-ADMIN

### 工程使用框架 
Vue.js Vuex Vue-Router Element UI 组件库 Avue.js
 
 ![主题1](/src/assets/1.png)
 ![主题2](/src/assets/2.png)
 ![主题3](/src/assets/3.png)
 ![主题4](/src/assets/4.png)
## 工程结构
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
│     └─ sys
└─ vue.config.js

```

## 开发说明

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
