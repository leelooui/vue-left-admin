var Dots = function(speed, alpha) {
  // 画布相关
  this.canvas
  this.ctx
  // 绘制点相关
  this.x
  this.y
  this.r
  this.a = alpha && alpha > 0 && alpha <= 1 ? alpha : 0.8
  // 移动相关
  this.speed = speed && speed > 0 ? speed : 2
  this.sx
  this.sy
  this.isMouseDot = 0
}

Dots.prototype = {
  // 初始化点的方法 x/y为可选参数 为生成点的位置 不传则随机生成
  init: function(canvas, x, y, isMouseDot) {
    this.canvas = canvas
    this.ctx = this.canvas.getContext('2d')
    this.x = x * 2 || Math.random() * this.canvas.width
    this.y = y * 2 || Math.random() * this.canvas.height
    this.r = Math.random() * 6 // 随机生成 <6 的半径值

    if (isMouseDot) this.isMouseDot = 1

    // 随机确定点的移动速度与方向 速度值在 [-this.speed, this.speed) 之间 提高数值可加快速度
    this.sx = isMouseDot ? 0 : Math.random() * this.speed * 2 - this.speed
    this.sy = isMouseDot ? 0 : Math.random() * this.speed * 2 - this.speed

    this.ctx.beginPath()
    this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI)
    this.ctx.fillStyle = 'rgba(255,255,255,' + this.a + ')'
    this.ctx.fill()
    this.ctx.closePath()
  },
  // 更新点位置
  update: function() {
    if (this.isMouseDot) return

    this.x = this.x + this.sx
    this.y = this.y + this.sy

    // 点超出canvas范围时另其"重生"
    if (this.x < 0 || this.x > this.canvas.width) {
      this.init(this.canvas)
    }
    if (this.y < 0 || this.y > this.canvas.height) {
      this.init(this.canvas)
    }

    this.ctx.beginPath()
    this.ctx.arc(this.x, this.y, this.r + 0.5, 0, 2 * Math.PI)
    this.ctx.fillStyle = 'rgba(255,255,255,' + this.a + ')'
    this.ctx.fill()
    this.ctx.closePath()
  },
  // 跟踪鼠标的点的位置更新 x/y为鼠标位置
  mouseDot: function(x, y) {
    this.x = x * 2
    this.y = y * 2
    this.ctx.beginPath()
    this.ctx.arc(this.x, this.y, this.r + 0.5, 0, 2 * Math.PI)
    this.ctx.fillStyle = 'rgba(255,255,255,' + this.a + ')'
    this.ctx.fill()
    this.ctx.closePath()
  }
}

function Wonder(opts) {
  var part = document.querySelector(opts.el)
  var canvas = document.createElement('canvas')
  var ctx = canvas.getContext('2d')
  var partStyle = window.getComputedStyle(part, null)
  var width = parseInt(partStyle.width)
  var height = parseInt(partStyle.height)
  var area = width * height // canvas区域面积
  var cssText = 'width: ' + width + 'px; height: ' + height + 'px;' + 'position: fixed; top: 0px; left: 0px; z-index: 999; opacity: 0.9;'

  canvas.setAttribute('style', cssText)
  canvas.width = (width * 2).toString()
  canvas.height = (height * 2).toString()

  part.appendChild(canvas)

  var dotsArr = []
  var dotsNum = opts.dotsNumber || parseInt(area / 5000)
  var maxDotsNum = dotsNum * 2
  var overNum = 0 // 超出最大数量的点的数量
  var dotsDistance = opts.lineMaxLength || 250 // 点之间产生连线的最大距离

  for (var i = 0; i < dotsNum; i++) {
    var dot = new Dots(opts.speed, opts.dotsAlpha)
    if (i < dotsNum - 1) {
      dot.init(canvas)
    } else {
      dot.init(canvas, 0, 0, 1)
    }
    dotsArr.push(dot)
  }
  var clickWithNew = opts.clickWithDotsNumber || 5
  document.addEventListener('click', createDot)
  function createDot(e) {
    var tx = e.pageX
    var ty = e.pageY
    if ((tx > 0 && tx < width) && (ty > 0 && ty < height)) {
      for (var i = 0; i < clickWithNew; i++) {
        var dot = new Dots(opts.speed, opts.dotsAlpha)
        dotsArr.push(dot)
        dotsNum += 1
        dot.init(canvas, tx, ty)
      }
    }
  }
  // var mouseDot, mouseDotIndex
  canvas.addEventListener('mouseenter', mouseDotEnter)
  canvas.addEventListener('mousemove', mouseDotMove)
  canvas.addEventListener('mouseleave', mouseDotLeave)
  function mouseDotEnter(e) {
    var tx = e.pageX
    var ty = e.pageY
    dot.init(canvas, tx, ty, 1)
  }
  function mouseDotMove(e) {
    var tx = e.pageX
    var ty = e.pageY
    if ((tx > 0 && tx < width) && (ty > 0 && ty < height)) {
      dot.mouseDot(tx, ty)
    }
  }
  function mouseDotLeave(e) {
    dot.init(canvas)
  }
  var requestAnimFrame = requestAnimationFrame
  requestAnimFrame(animateUpdate)
  function animateUpdate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height) // 清空canvas中原有的内容

    // 更新点的位置 数量超出最大值时舍弃旧的点
    if (dotsNum > maxDotsNum) {
      overNum = dotsNum - maxDotsNum
    }

    for (var i = overNum; i < dotsNum; i++) {
      // if (dotsArr[i].isMouseDot) console.log('aaa')
      if (dotsArr[i]) dotsArr[i].update()
    }

    // 绘制连线
    for (let i = overNum; i < dotsNum; i++) {
      for (var j = i + 1; j < dotsNum; j++) {
        // if (dotsArr[i].isMouseDot) console.log('bbb')
        // if (dotsArr[j].isMouseDot) console.log('ccc')
        var tx = dotsArr[i].x - dotsArr[j].x
        var ty = dotsArr[i].y - dotsArr[j].y
        var s = Math.sqrt(Math.pow(tx, 2) + Math.pow(ty, 2))
        if (s < dotsDistance) {
          ctx.beginPath()
          ctx.moveTo(dotsArr[i].x, dotsArr[i].y)
          ctx.lineTo(dotsArr[j].x, dotsArr[j].y)
          ctx.strokeStyle = 'rgba(61,144,247,' + (dotsDistance - s) / dotsDistance + ')'
          ctx.strokeWidth = 1
          ctx.stroke()
          ctx.closePath()
        }
      }
    }
    requestAnimFrame(animateUpdate)
  }
}

export default Wonder
