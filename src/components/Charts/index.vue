<template>
  <div
    :id="id"
    :class="className"
    :style="{height:height,width:width,minHeight:minHeight,maxHeight:maxHeight}"
  />
</template>

<script>
import echarts from 'echarts'
import 'echarts/theme/macarons'
import resize from './mixins/resize'

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    id: {
      type: String,
      default: 'chart'
    },
    option: {
      type: Object,
      required: true
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '200px'
    },
    minHeight: {
      type: String,
      default: null
    },
    maxHeight: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      chart: null
    }
  },
  watch: {
    option: {
      deep: true,
      handler(newVal, oldVal) {
        if (this.chart) {
          this.chart.setOption(newVal, true)
        }
      }
    }
  },
  mounted() {
    this.initChart()
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById(this.id), 'macarons')
      this.chart.setOption(this.option)
    }
  }
}
</script>
