/**
 * Created by PanJiaChen on 16/11/18.
 */

export function message(h, message, type) {
  h.$message({
    message: message || '操作成功',
    type: type || 'success'
  })
}

export function pages(array, pageNo, pageSize) {
  var pages = array.length <= pageSize ? 1 : Math.ceil(array.length / pageSize)
  if (pageNo > pages) pageNo = pages
  var offset = (pageNo - 1) * pageSize
  return offset + pageSize >= array.length
    ? array.slice(offset, array.length)
    : array.slice(offset, offset + pageSize)
}

export function arrEqual(arr1, arr2) {
  const newArr = []
  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      if (arr1[j] === arr2[i]) {
        newArr.push(arr1[j])
      }
    }
  }
  return newArr.length >= 1
}

export function filterTime(time) {
  //  补0
  const filterZero = (i) => {
    return i < 10 ? `0${i}` : i
  }
  let [t1, t2, t3, t4, t5] = [
    new Date(time).getFullYear(),
    filterZero(new Date(time).getMonth() + 1),
    filterZero(new Date(time).getDate()),
    filterZero(new Date(time).getHours()),
    filterZero(new Date(time).getMinutes())
  ]
  filterRang()
  function filterRang() {
    //  分钟取整运算
    const i = parseInt(t5)
    if (i >= 0 && i <= 10) {
      t5 = 10
    } else if (i >= 11 && i <= 20) {
      t5 = 20
    } else if (i >= 21 && i <= 30) {
      t5 = 30
    } else if (i >= 31 && i <= 40) {
      t5 = 40
    } else if (i >= 41 && i <= 50) {
      t5 = 50
    } else {
      // 小时进位
      t5 = `00`
      t4 = parseInt(t4) + 1
      filterHours(t4)
    }
  }
  function filterHours(i) {
    i = parseInt(i)
    // 现在是24小时制，可修改为12小时制
    if (i >= 0 && i < 24) {
      t4 = filterZero(i)
    } else {
      // 天数进位
      t4 = `00`
      t3 = parseInt(t3) + 1
      filterDay(t3)
    }
  }
  function filterDay(i) {
    //  获取当月有多少天
    const nowMD = parseInt(new Date(t1, t2, 0).getDate())

    i = parseInt(i)
    if (i >= 0 && i <= nowMD) {
      t3 = filterZero(i)
    } else {
      // 月份进位
      t3 = `01`
      t2 = parseInt(t2) + 1
      filterMonth(t2)
    }
  }
  function filterMonth(i) {
    i = parseInt(i)
    if (i >= 0 && i <= 12) {
      t2 = filterZero(i)
    } else {
      // 年进位
      t2 = `01`
      t1 = parseInt(t1) + 1
    }
  }
  return `${t1}-${t2}-${t3} ${t4}:${t5}`
}

/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string | null}
 */
export function parseTime(time, cFormat) {
  if (arguments.length === 0 || !time) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string')) {
      if ((/^[0-9]+$/.test(time))) {
        // support "1548221490638"
        time = parseInt(time)
      } else {
        // support safari
        // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
        time = time.replace(new RegExp(/-/gm), '/')
      }
    }

    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value ] }
    return value.toString().padStart(2, '0')
  })
  return time_str
}

/**
 *
 * @param {*} data  时间戳
 */
export function toHHmmss(data) {
  var hours = parseInt((data % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  var minutes = parseInt((data % (1000 * 60 * 60)) / (1000 * 60))
  var seconds = parseInt((data % (1000 * 60)) / 1000)
  var s = (hours < 10 ? ('0' + hours) : hours) + ':' + (minutes < 10 ? ('0' + minutes) : minutes) + ':' + (seconds < 10 ? ('0' + seconds) : seconds)
  return s
}
/**
 *  时间转 时间戳
 * @param {*} date
 */
export function toHHmmssTime(date) {
  return (date.getHours() * 60 * 60 * 1000 + date.getMinutes() + 60 * 1000 + date.getSeconds() * 1000)
}

/**
 * 数据对象去重
 * @param {*} arr
 * @param {*} key
 */
export function uniqueArrObj(arr, key) {
  const hash = {}

  return arr.reduce((newArr, item, index, arr) => {
    hash[item[key]] ? '' : hash[item[key]] = true && newArr.push(item)

    return newArr
  }, [])
}
/**
 * @param {number} time
 * @param {string} option
 * @returns {string}
 */
export function formatTime(time, option) {
  if (('' + time).length === 10) {
    time = parseInt(time) * 1000
  } else {
    time = +time
  }
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return (
      d.getMonth() +
      1 +
      '月' +
      d.getDate() +
      '日' +
      d.getHours() +
      '时' +
      d.getMinutes() +
      '分'
    )
  }
}

/**
 * @param {string} url
 * @returns {Object}
 */
export function getQueryObject(url) {
  url = url == null ? window.location.href : url
  const search = url.substring(url.lastIndexOf('?') + 1)
  const obj = {}
  const reg = /([^?&=]+)=([^?&=]*)/g
  search.replace(reg, (rs, $1, $2) => {
    const name = decodeURIComponent($1)
    let val = decodeURIComponent($2)
    val = String(val)
    obj[name] = val
    return rs
  })
  return obj
}

/**
 * @param {string} input value
 * @returns {number} output value
 */
export function byteLength(str) {
  // returns the byte length of an utf8 string
  let s = str.length
  for (var i = str.length - 1; i >= 0; i--) {
    const code = str.charCodeAt(i)
    if (code > 0x7f && code <= 0x7ff) s++
    else if (code > 0x7ff && code <= 0xffff) s += 2
    if (code >= 0xDC00 && code <= 0xDFFF) i--
  }
  return s
}

/**
 * @param {Array} actual
 * @returns {Array}
 */
export function cleanArray(actual) {
  const newArray = []
  for (let i = 0; i < actual.length; i++) {
    if (actual[i]) {
      newArray.push(actual[i])
    }
  }
  return newArray
}

/**
 * @param {Object} json
 * @returns {Array}
 */
export function param(json) {
  if (!json) return ''
  return cleanArray(
    Object.keys(json).map(key => {
      if (json[key] === undefined) return ''
      return encodeURIComponent(key) + '=' + encodeURIComponent(json[key])
    })
  ).join('&')
}

/**
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url) {
  const search = decodeURIComponent(url.split('?')[1]).replace(/\+/g, ' ')
  if (!search) {
    return {}
  }
  const obj = {}
  const searchArr = search.split('&')
  searchArr.forEach(v => {
    const index = v.indexOf('=')
    if (index !== -1) {
      const name = v.substring(0, index)
      const val = v.substring(index + 1, v.length)
      obj[name] = val
    }
  })
  return obj
}

/**
 * @param {string} val
 * @returns {string}
 */
export function html2Text(val) {
  const div = document.createElement('div')
  div.innerHTML = val
  return div.textContent || div.innerText
}

/**
 * Merges two objects, giving the last one precedence
 * @param {Object} target
 * @param {(Object|Array)} source
 * @returns {Object}
 */
export function objectMerge(target, source) {
  if (typeof target !== 'object') {
    target = {}
  }
  if (Array.isArray(source)) {
    return source.slice()
  }
  Object.keys(source).forEach(property => {
    const sourceProperty = source[property]
    if (typeof sourceProperty === 'object') {
      target[property] = objectMerge(target[property], sourceProperty)
    } else {
      target[property] = sourceProperty
    }
  })
  return target
}

/**
 * @param {HTMLElement} element
 * @param {string} className
 */
export function toggleClass(element, className) {
  if (!element || !className) {
    return
  }
  let classString = element.className
  const nameIndex = classString.indexOf(className)
  if (nameIndex === -1) {
    classString += '' + className
  } else {
    classString =
      classString.substr(0, nameIndex) +
      classString.substr(nameIndex + className.length)
  }
  element.className = classString
}

/**
 * @param {string} type
 * @returns {Date}
 */
export function getTime(type) {
  if (type === 'start') {
    return new Date().getTime() - 3600 * 1000 * 24 * 90
  } else {
    return new Date(new Date().toDateString())
  }
}

/**
 * @param {Function} func
 * @param {number} wait
 * @param {boolean} immediate
 * @return {*}
 */
export function debounce(func, wait, immediate) {
  let timeout, args, context, timestamp, result

  const later = function() {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp

    // 上次被包装函数被调用时间间隔 last 小于设定时间间隔 wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) context = args = null
      }
    }
  }

  return function(...args) {
    context = this
    timestamp = +new Date()
    const callNow = immediate && !timeout
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait)
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }

    return result
  }
}

/**
 * This is just a simple version of deep copy
 * Has a lot of edge cases bug
 * If you want to use a perfect deep copy, use lodash's _.cloneDeep
 * @param {Object} source
 * @returns {Object}
 */
export function deepClone(source) {
  if (!source && typeof source !== 'object') {
    throw new Error('error arguments', 'deepClone')
  }
  const targetObj = source.constructor === Array ? [] : {}
  Object.keys(source).forEach(keys => {
    if (source[keys] && typeof source[keys] === 'object') {
      targetObj[keys] = deepClone(source[keys])
    } else {
      targetObj[keys] = source[keys]
    }
  })
  return targetObj
}

/**
 * @param {Array} arr
 * @returns {Array}
 */
export function uniqueArr(arr) {
  return Array.from(new Set(arr))
}

/**
 * @returns {string}
 */
export function createUniqueString() {
  const timestamp = +new Date() + ''
  const randomNum = parseInt((1 + Math.random()) * 65536) + ''
  return (+(randomNum + timestamp)).toString(32)
}

/**
 * Check if an element has a class
 * @param {HTMLElement} elm
 * @param {string} cls
 * @returns {boolean}
 */
export function hasClass(ele, cls) {
  return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'))
}

/**
 * Add class to element
 * @param {HTMLElement} elm
 * @param {string} cls
 */
export function addClass(ele, cls) {
  if (!hasClass(ele, cls)) ele.className += ' ' + cls
}

/**
 * Remove class from element
 * @param {HTMLElement} elm
 * @param {string} cls
 */
export function removeClass(ele, cls) {
  if (hasClass(ele, cls)) {
    const reg = new RegExp('(\\s|^)' + cls + '(\\s|$)')
    ele.className = ele.className.replace(reg, ' ')
  }
}

export function deepCopy(e) {
  return JSON.parse(JSON.stringify(e))
}

export function avatarByName(name) {
  return name.length >= 3 ? name.substr(name.length - 2) : name
}

export function avatarByColor(index) {
  const colors = '#0066FF,#CC9000,#663300,#FF6600,#663333,#6633CC,#3333CC'.split(',')
  const clen = colors.length - 1
  return index <= clen ? colors[index] : colors[parseInt(clen / index)]
}

export function getEventByColor(index) {
  const EventColor = {
    lv0: 'rgba(234, 33, 33, 0.72)',
    lv1: 'rgba(255, 200, 44, 0.77)',
    lv2: 'rgba(39, 120, 220, 0.61)',
    lv3: 'rgba(39, 120, 220, 0.61)',
    lv4: 'rgba(97, 106, 229, 0.72)'
  }
  return EventColor['lv' + index] ? EventColor['lv' + index] : EventColor['lv4']
}
export function getDayCn(index) {
  const dayCns = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
  return dayCns[index]
}
/**
 *
 * @param {*} min
 */
export function formatHourMinutestr(str) {
  if (str !== '0' && str !== '' && str !== null) {
    return ((Math.floor(str / 60)).toString().length < 2 ? (Math.floor(str / 60)).toString()
      : (Math.floor(str / 60)).toString()) + '.' + ((str % 60).toString().length < 2 ? (str % 60).toString() : (str % 60).toString())
  } else {
    return ''
  }
}

export function fullAttr(arr) {
  var fullAttr = arr.map((item, index) => {
    if (index === 0) {
      return item
    } else {
      return item.substr(0, 1).toLocaleUpperCase() + item.substr(1)
    }
  })
  return fullAttr.join().replace(/,/g, '')
}

/**
 * 数据转换为树形（递归），示例：toTreeByRecursion(source, 'id', 'parentId', null, 'children')
 * @param {Array} source 数据
 * @param {String} idField 标识字段名称
 * @param {String} parentIdField 父标识字段名称
 * @param {Any} parentIdNoneValue 父级标识空值
 * @param {String} childrenField 子节点字段名称
 * @param {Object} treeOption tree树形配置
 */
export function toTreeByRecursion(
  source,
  idField,
  parentIdField,
  parentIdNoneValue,
  childrenField,
  treeOption
) {
  const treeOptions = {
    enable: false, // 是否开启转tree插件数据
    keyField: 'key', // 标识字段名称，默认为key
    valueField: 'value', // 值字段名称，默认为value
    titleField: 'title', // 标题字段名称，默认为title
    keyFieldBind: 'id', // 标识字段绑定字段名称，默认为id
    valueFieldBind: 'id', // 值字段名称绑定字段名称，默认为id
    titleFieldBind: 'name', // 标题字段名称绑定字段名称，默认为name
    path: 'path'
  }
  // 合并tree树形配置
  if (treeOption) {
    Object.assign(treeOptions, treeOption)
  }

  // 对源数据深度克隆
  const cloneData = deepCopy(source)

  var data = cloneData.filter(parent => {
    // 返回每一项的子级数组
    const branchArr = cloneData.filter(child => parent[idField] === child[parentIdField])
    // 绑定tree树形配置
    if (treeOptions.enable) {
      branchArr.map(child => {
        child[treeOptions.keyField] = child[treeOptions.keyFieldBind]
        child[treeOptions.valueField] = child[treeOptions.valueFieldBind]
        child[treeOptions.titleField] = child[treeOptions.titleFieldBind]
        return child
      })
    }

    // 如果存在子级，则给父级添加一个children属性，并赋值，否则赋值为空数组
    if (branchArr.length > 0) {
      parent[childrenField] = branchArr
    } else {
      parent[childrenField] = []
    }

    // 绑定tree树形配置
    if (treeOptions.enable) {
      parent[treeOptions.keyField] = parent[treeOptions.keyFieldBind]
      parent[treeOptions.valueField] = parent[treeOptions.valueFieldBind]
      parent[treeOptions.titleField] = parent[treeOptions.titleFieldBind]
    }

    return parent[parentIdField] === parentIdNoneValue // 返回第一层
  })
  return data
}

/**
 * 找树的父节点
 * @param {*} source 源数组
 * @param {*} idField ID列名
 * @param {*} parentIdField ID指向的父列名
 * @param {*} id 查询子列表
 */
export function filterParentPathTree(source,
  idField,
  parentIdField,
  id) {

}

/**
 * 找树的子节点
 * @param {*} source 源数组
 * @param {*} idField ID列名
 * @param {*} parentIdField ID指向的父列名
 * @param {*} id 查询子列表
 */
export function filterSubPathTree(source,
  idField) {
  var re = []
  const cloneData = deepCopy(source)
  function select(e) {
    if (e.children && e.children.length !== 0) {
      re.push(e[idField])
      e.children.map(select)
    } else {
      re.push(e[idField])
    }
  }
  re.push(cloneData[idField])
  cloneData.children.map(select)

  return re
}

/**
 *
 * @param {*} source 源数组
 * @param {*} idField ID列名
 * @param {*} parentIdField ID指向的父列名
 * @param {*} id 查询子列表
 */
export function filterAllPathTree(
  source,
  idField,
  parentIdField,
  id) {
  var arr = [] // 操作数组
  var re = [] // 结果  AND 是否匹配到
  var run = true // 运行
  const cloneData = deepCopy(source)
  cloneData.map(e => {
    var obj = {
      // menuCode: e.menuParentCode,
      children: [e],
      nextFuncTag: true // 下一个函数的起点标识
    }
    obj[idField] = e[parentIdField]
    arr.push(obj)
  })

  /**
   * 组查询 (无状态函数）
   * @e{Array} 下一个元素
   */
  function select(e) {
    if (!run) return
    // 截取段落
    e.nextFuncTag && (re = [])
    if (typeof (e[idField]) !== 'undefined') {
      re.push(e[idField])
    }
    if (e[idField] === id) {
      run = false
    } else// 下一级查询
    if (e.children && e.children.length !== 0) {
      e.children.map(select)
    }
  }

  arr.map(select)

  return re
}
/**
*JS颜色十六进制转换为rgb或rgba rgba（255，255，255，0.5）字符串
*sHex为传入的十六进制的色值
*alpha为rgba的透明度
*/
export function colorRgba(sHex, alpha) {
  // 十六进制颜色值的正则表达式
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/
  // 16进制颜色转为RGB格式
  let sColor = sHex.toLowerCase()
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = '#'
      for (let i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1))
      }
      sColor = sColorNew
    }
    // 处理六位的颜色值
    var sColorChange = []
    for (let i = 1; i < 7; i += 2) {
      sColorChange.push(parseInt('0x' + sColor.slice(i, i + 2)))
    }
    return 'rgba(' + sColorChange.join(',') + ',' + alpha + ')'
  } else {
    return sColor
  }
}
