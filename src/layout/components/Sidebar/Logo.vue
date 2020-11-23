<template>
  <div class="sidebar-logo-container" :class="{ collapse: collapse }">
    <div class="title">
      <span v-show="!collapse">{{ appName }}</span>
    </div>
    <div class="logo">
      <el-avatar :src="avatar" style="vertical-align:middle" />
      <span v-show="!collapse" class="user-title">超级管理员</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SidebarLogo',
  props: {
    collapse: {
      type: Boolean,
      required: true
    },
    appName: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar-logo-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  margin-bottom: 15px;
  .logo:after,
  .title:after {
    background-color:rgb(255 255 255 / 67%);
  }
  .title:after, .logo:after {
      content: "";
      position: absolute;
      bottom: 0;
      right: 15px;
      height: 1px;
      width: calc(100% - 30px);
      background-color: rgb(255 255 255 / 67%);
  }
  .logo {
    width: 100%;
    padding: 20px 12px;
    display: block;
    position: relative;
  }
  .user-title{
    font-size: 16px;
    color: white;
    vertical-align: middle;
    margin-left: 10px;
  }

  .title {
    text-align: center;
    padding: 30px 12px;
    display: block;
    position: relative;
    font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
    width: 100%;
    font-size: 22px;
    color: white;
    font-weight: bold;
  }
}
</style>
