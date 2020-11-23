<template>
  <div class="home-warp">
    <WorldMap
      height="calc(100vh - 110px)"
      height1="180px"
      min-height="486px"
      text-color="#414952"
      :color2="['#168AE0','#6fb7fd']"
      area-color="#A9D0F5"
      regions-area-color="#2E9AFE"
      emphasis-color="#0174DF"
      border-color="white"
      pin-color="#0174DF"
      top5-color="#0174DF"
      title-color="#000000"
    />
  </div>
</template>
<style lang="scss">
.home-warp {
   padding: 0;
   position: relative;
}
</style>>
<script>
import WorldMap from './components/WorldMap'
export default {
  components: { WorldMap },
  data() {
    return { }
  }
}
</script>

