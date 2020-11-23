<template>
  <Chart
    id="map"
    :option="mapOption"
    :height="height"
    :min-height="minHeight"
    width="100%"
  />
</template>
<script>
import Chart from '@/components/Charts'
import 'echarts/map/js/world.js'
import { worldCoordMap, worldName } from './mapcfg'
import { colorRgba } from '@/utils'
export default {
  components: { Chart },
  props: {
    areaColor: {
      type: String,
      default: '#3f4357'
    },
    emphasisColor: {
      type: String,
      default: '#5768EF'
    },
    regionsAreaColor: {
      type: String,
      default: '#8871FC'
    },
    height: {
      type: String,
      default: '400px'
    },
    minHeight: {
      type: String,
      default: null
    },
    borderColor: {
      type: String,
      default: '#000000'
    },
    color2: {
      type: Array,
      default: () => ['#8871FC', '#21CEB9']
    },
    textColor: {
      type: String,
      default: '#fff'
    },
    pinColor: {
      type: String,
      default: '#8871ff'
    },
    top5Color: {
      type: String,
      default: '#8871ff'
    },
    height1: {
      type: String,
      default: '400px'
    },
    minHeight1: {
      type: String,
      default: null
    },
    titleColor: {
      type: String,
      default: '#fff'
    }
  },
  data() {
    return {
      index: 0,
      sum: null,
      list: [],
      mapOption: {},
      optionBar: {}
    }
  },
  created() {
    this.initData()
  },
  methods: {
    async initData() {
      var data = [{ name: '哈萨克斯坦', count: 10 }, { name: '法国', count: 10 }]
      var list = data.map((item) => {
        item.value = worldCoordMap[item.name] ? worldCoordMap[item.name] : []
        item.count = parseInt(item.count)
        return item
      })
      this.list = this._.orderBy(list, ['count'], ['desc'])
      this.initMap()
      this.updateDataMap()
    },
    intervalBegin() {
      var mapTimer = setInterval(() => {
        this.updateDataMap()
      }, 5000)
      this.$once('hook:beforeDestroy', () => {
        clearInterval(mapTimer)
      })
    },
    updateDataMap() {
      var list = this.list
      this.index = this.index > list.length ? 0 : this.index + 1
      this.mapOption.series[0].data = [list[this.index]]
    },
    getRegions() {
      var list = this.list
      this.sum = this._.sumBy(list, function(o) { return o.count })
      return list.map(item => {
        var alpha = item.count / this.sum * 100
        alpha = alpha < 0.6 ? 0.6 : alpha
        return {
          name: worldName[item.name],
          itemStyle: {
            normal: {
              areaColor: colorRgba(this.regionsAreaColor, alpha)
            }
          }
        }
      })
    },
    initMap() {
      var formatter = (params) => {
        return '{fline|国家：' + params.data.name + '}\n{fline|测试数据}'
      }
      /* var max = 480
      var min = 9
      var maxSize4Pin = 100
      var minSize4Pin = 20 */
      this.mapOption = {
        geo: {
          map: 'world',
          zoom: 1.5,
          top: '10%',
          label: {
            show: false,
            color: '#20fdfa',
            emphasis: {
              show: false,
              color: '#fff'
            }
          },
          roam: true,
          itemStyle: {
            normal: {
              borderColor: this.borderColor,
              areaColor: this.areaColor
            },
            emphasis: {
              areaColor: this.emphasisColor,
              borderWidth: 0
            }
          },
          regions: this.getRegions()
        },
        series: [
          {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            z: 1,
            data: [],
            symbolSize: 14,
            label: {
              normal: {
                show: true,
                formatter: formatter,
                position: 'top',
                backgroundColor: 'rgba(254,174,33,.8)',
                padding: [3, 16, 3, 16],
                borderRadius: 3,
                lineHeight: 20,
                color: '#ffffff',
                rich: {
                  fline: {
                    color: '#ffffff'
                  },
                  tline: {
                    color: '#ffffff'
                  }
                }
              },
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              color: 'rgba(254,174,33,.8)'
            }
          }]
        /* ,
          {
            name: '散点',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: [],
            symbolSize: function(val) {
              return val[2] / 10
            },
            label: {
              normal: {
                formatter: '{b}',
                position: 'right',
                color: this.textColor,
                show: false
              },
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: '#05C3F9'
              }
            }
          },
          {
            name: '点',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbol: 'pin', // 气泡
            symbolSize: (e, val) => {
              var a = (maxSize4Pin - minSize4Pin) / (max - min)
              var b = minSize4Pin - a * min
              b = maxSize4Pin - a * max
              return a * parseInt(val.name) + b
            },
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: '#fff',
                  fontSize: 9
                },
                formatter(val) {
                  return parseInt(val.name)
                }
              }
            },
            itemStyle: {
              normal: {
                color: this.pinColor // 标志颜色
              }
            },
            zlevel: 6,
            data: []
          },
          {
            name: 'top 5',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: [],
            symbolSize: 20,
            showEffectOn: 'render',
            rippleEffect: {
              brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
              show: false
            },
            itemStyle: {
              normal: {
                color: this.top5Color,
                shadowBlur: 10,
                shadowColor: '#00acea'
              }
            },
            zlevel: 1
          }
        ] */
      }
    }
  }
}
</script>
<style lang="scss">
.StudentMap{
   .el-card__body{display: flex;position: relative;}
   .gb-geo{
      background: #F44336;
      width: 14px;
      display: inline-block;
      height: 13px;
      vertical-align: middle;
      margin-right: 10px;
      border-radius: 3px;
    }
  .clearfix{
      width: 100%;
      display: flex;
      -webkit-box-pack: justify;
      justify-content: space-between;
      line-height: 1;
  }
}
</style>
