<template>
  <el-dialog
    v-loading="loading"
    class="settings-dialog"
    title="切换主题"
    width="35%"
    :visible.sync="dialogVisible"
  >
    <div>
      <ul class="list-unstyled clearfix">
        <li v-for="(item,index) in themes" :key=" '' + index " style="float:left;width:16.66666%;padding:5px;" @click="themeChange(item, index)">
          <a
            href="javascript:"
            data-skin="skin-blue"
            style="display:block;box-shadow:0 0 3px rgba(0,0,0,0.4)"
            class="clearfix full-opacity-hover"
          >
            <span :style="'display:block;width:20%;float:left;height:13px;background:' + item.navbarBg" />
            <span :style="'display:block;width:80%;float:left;height:13px;background:' + item.navbarBg" />
            <span :style="'display:block;width:20%;float:left;height:30px;background:' + item.menuBg" />
            <span style="display:block;width:80%;float:left;height:30px;background:#f4f5f7" />
          </a>
          <p class="text-center no-margin">{{ item.name }}</p>
        </li>
        <!-- li style="float:left;padding:18px 0 0 45px;">
          <span class="icheck">
            <el-switch
              v-model="tagsView"
              active-color="#13ce66"
              inactive-color="#ff4949"
              :active-value="true"
              :inactive-value="false"
            /> 取消页签模式
          </span>
        </li -->
      </ul>
    </div>
  </el-dialog>
</template>

<script>

export default {
  data() {
    return {
      loading: false,
      dialogVisible: false,
      themes: [
        { navbarBg: '#dd4b39', menuBg: 'rgb(235, 237, 242)', navbarText: 'white',
          menuActiveText: '#36f',
          menuHover: 'white',
          menuText: '#222b45',
          sideBarWidth: '226px',
          subMenuActiveText: '#36f',
          subMenuBg: 'white',
          subMenuHover: 'white', name: '中国红' },
        { navbarBg: '#555299', menuBg: 'rgb(235, 237, 242)', navbarText: 'white',
          menuActiveText: '#36f',
          menuHover: 'white',
          menuText: '#222b45',
          sideBarWidth: '226px',
          subMenuActiveText: '#36f',
          subMenuBg: 'white',
          subMenuHover: 'white', name: '紫灰' },
        { navbarBg: '#00a65a', menuBg: 'rgb(235, 237, 242)', navbarText: 'white',
          menuActiveText: '#36f',
          menuHover: 'white',
          menuText: '#222b45',
          sideBarWidth: '226px',
          subMenuActiveText: '#36f',
          subMenuBg: 'white',
          subMenuHover: 'white', name: '绿灰' },
        { navbarBg: 'rgb(25, 81, 190)', menuBg: 'rgb(235, 237, 242)', navbarText: 'white',
          menuActiveText: '#36f',
          menuHover: 'white',
          menuText: '#222b45',
          sideBarWidth: '226px',
          subMenuActiveText: '#36f',
          subMenuBg: 'white',
          subMenuHover: 'white', name: '亮蓝' },
        { navbarBg: 'rgb(24, 144, 255)', menuBg: 'rgb(235, 237, 242)', navbarText: 'white',
          menuActiveText: '#36f',
          menuHover: 'white',
          menuText: '#222b45',
          sideBarWidth: '226px',
          subMenuActiveText: '#36f',
          subMenuBg: 'white',
          subMenuHover: 'white', name: '浅蓝' },
        { navbarBg: '#151a30', menuBg: 'rgb(235, 237, 242)', navbarText: 'white',
          menuActiveText: '#36f',
          menuHover: 'white',
          menuText: '#222b45',
          sideBarWidth: '226px',
          subMenuActiveText: '#36f',
          subMenuBg: 'white',
          subMenuHover: 'white', name: '黑' }
      ]
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      var theme = window.localStorage.getItem('theme')
      if (theme) {
        this.setTheme(theme)
      }
    },
    showDialog(flag) {
      this.dialogVisible = flag
    },
    setTheme(theme) {
      window.document.documentElement.setAttribute('theme', theme)
      window.localStorage.setItem('theme', theme)
      this.dialogVisible = false
    },
    themeChange(val, index) {
      var theme = 'primary' + index
      this.setTheme(theme)
      this.$store.dispatch('settings/changeSetting', {
        key: 'theme',
        value: val
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.settings-dialog {
  word-wrap: break-word;
  .list-unstyled {
    margin: 10px;
  }
  .list-unstyled {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .drawer-title {
    margin-bottom: 12px;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    line-height: 22px;
  }

  .drawer-item {
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    padding: 12px 0;
  }

  .drawer-switch {
    float: right;
  }
  .full-opacity-hover {
    opacity: 1;
    filter: alpha(opacity=1);
    border: 1px solid #fff;
  }
  .full-opacity-hover:hover {
    border: 1px solid #f00;
  }
}
</style>
