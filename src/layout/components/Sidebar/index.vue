<template>
  <div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <logo
        v-if="showLogo"
        :collapse="isCollapse"
        :app-name="appName"
        avatar=""
        class="sidebar-logo"
      />
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
        class="sidebar-menu"
      >
        <sidebar-item
          v-for="route in permission_routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
    <div class="sidebar-background" />
  </div>
</template>
<style lang="scss">
@import "~@/styles/variables.scss";
.sidebar-background {
  background-image: url(~@/assets/img/sidebar.jpg);
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 100%;
  display: block;
  top: 0;
  left: 0;
  background-size: cover;
  background-position: 50%;
}
.sidebar-container{
  .el-scrollbar {
    height: 100%;
    z-index: 2;
    @include navbar_primary($navbarBg);
  }
}
.sidebar-menu,
.sidebar-logo {
  z-index: 2;
}
</style>
<script>
import { mapGetters } from 'vuex'
import Logo from './Logo'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'
import { title } from '@/settings'
export default {
  components: { SidebarItem, Logo },
  computed: {
    ...mapGetters(['permission_routes', 'sidebar', 'userInfo']),
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo
    },
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    },
    appName() {
      return title
    }
  }
}
</script>
