<template>
  <div class="navbar">
    <hamburger id="hamburger-container" :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />
    <breadcrumb id="breadcrumb-container" class="breadcrumb-container" />
    <div class="right-menu">
      <el-button type="text" @click="onSetting"><svg-icon icon-class="dashboard" />&nbsp;&nbsp;设置主题</el-button>
      <el-button icon="el-icon-bell" type="text">我的消息</el-button>
      <el-button icon="el-icon-s-custom" type="text">超级管理员</el-button>
      <el-button icon="el-icon-switch-button" type="text" @click="onLogout">退出登录</el-button>
    </div>
    <Settings ref="Settings" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import Settings from './Settings'
export default {
  components: {
    Breadcrumb,
    Hamburger,
    Settings
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar',
      'device'
    ])
  },
  methods: {
    onSetting() {
      this.$refs.Settings.showDialog(true)
    },
    onLogout() {
      this.$store.dispatch('user/resetToken').then(() => {
        window.location.reload()
      })
    },
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style lang="scss">
.navbar {
  height: 64px;
  overflow: hidden;
  position: relative;
  background: #f0f2f5;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
  .hamburger-container {
    line-height: 64px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;
    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }
  .breadcrumb-container {
    float: left;
  }
  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }
  .right-menu {
    margin-right: 20px;
    float: right;
    height: 100%;
    line-height: 64px;
    button i {font-size: 16px;}
    button {color:#47484a;}
    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      color: #5a5e66;
      vertical-align: text-bottom;
      &.hover-effect {
        cursor: pointer;
        transition: background .3s;
        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }
    .avatar-container {
      margin-right: 30px;
      .avatar-wrapper {
        margin-top: 5px;
        position: relative;
        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }
        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
