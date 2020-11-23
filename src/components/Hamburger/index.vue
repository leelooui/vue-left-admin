<template>
  <div style="padding: 0 15px;" @click="toggleClick">
    <el-button
      :icon="isActive?'el-icon-s-fold':'el-icon-s-unfold'"
      size="medium"
      circle
      style=" box-shadow: rgba(132, 162, 244, 0.8) 0px 5px 10px;font-size: 18px;padding: 12px;"
    />
  </div>
</template>

<script>
export default {
  name: 'Hamburger',
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toggleClick() {
      this.$emit('toggleClick')
    }
  }
}
</script>

<style scoped>
.hamburger {
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
}
</style>
