<template>
  <div class="dashboard-container">
    <div class="dashboard-box">
      <VueFileAgent v-model="fileRecords" :upload-url="uploadUrl" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fileRecords: [],
      uploadUrl: 'https://example.com'
    }
  }
}
</script>
