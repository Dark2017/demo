<template>
  <div class="canvas">
    <div class="count">
      {{time}}
      <!-- <img src="@assets/sun.jpg"/> -->
      <el-button @click="testAnmation">Start</el-button>
      <el-button @click="testAnmationEnd">end</el-button>
    </div>
  </div>
</template>

<script>
let ctx;
export default {
  data() {
    return {
      time:'',
      idfen:0,
    }
  },
  methods: {
    //初始化画布
    initCanavs() {
      // console.log('init canavs')
      //创建画布
      let canvas = document.createElement('canvas')
      //获取上下文2d 对象 就是画笔对象
      ctx = canvas.getContext('2d')
      //将画布插入
      let div = document.getElementsByClassName('canvas')[0]
      div.append(canvas)
      //将当前窗口高度、宽度赋予画布
      let winW = window.innerWidth
      let winH = window.innerHeight
      canvas.width = winW
      canvas.height = winH
    },
    //绘制笑脸
    drawSmile() {
      //新建一条path
      ctx.beginPath();  
      ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // 绘制
      ctx.moveTo(110, 75);
      ctx.arc(75, 75, 35, 0, Math.PI, false); // 口(顺时针)
      ctx.moveTo(65, 65);
      ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // 左眼
      ctx.moveTo(95, 65);
      ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // 右眼
      ctx.stroke();
    },
    //绘制测试
    testDraw() {
      //开始绘制
      ctx.beginPath();  
      //绘制填充三角形
      // ctx.moveTo(200,200)
      // ctx.lineTo(250,250)
      // ctx.lineTo(250,200)
      // ctx.closePath()
      // ctx.fill()
      
      //绘制半圆
      // ctx.arc(200,200,50,0,Math.PI,true)

      //绘制二次贝塞尔曲线
      // ctx.moveTo(10, 200); //起始点
      // let cp1x = 40, cp1y = 100;  //控制点
      // let x = 200, y = 200; // 结束点
      // ctx.quadraticCurveTo(cp1x, cp1y, x, y);
      // ctx.lineTo(10,200)
      // //轮廓的颜色
      // ctx.strokeStyle =`rgb(${this.randomInt(0, 255)},${this.randomInt(0, 255)},${this.randomInt(0, 255)})`;
      // //填充的颜色
      // ctx.fillStyle = 'rgb(' + Math.floor(255 - 42.5 ) + ',' + Math.floor(255 - 42.5 ) + ',0)';
      // ctx.fillRect(350,350,350,350)
      // ctx.font = '100px sans-serif'

      // ctx.fillText('1jh',350,100) //填充字体
      // ctx.strokeText('1cb',550,100) //轮廓字体

      //移动坐标原点 translate
      ctx.strokeRect(0,0,150,150)
      ctx.save()
      ctx.translate(150,150)
      ctx.rotate(Math.PI / 180 * 45) //旋转
      ctx.strokeRect(0,0,150,150)

      //绘制完毕
      ctx.stroke()

    },
    //动画测试
    testAnmation() {
      let sun = new Image()      
      let earth = new Image()
      let moon = new Image()
      let time = new Date()
      const _this = this //先将当前this存下来

      earth.src = require('@assets/earth.jpg')
      moon.src = require('@assets/moon.jpg')
      sun.src = require('@assets/sun.jpg')

      //进去onload之后this指向sun
      sun.onload = function() {
        ctx.clearRect(0, 0, 300, 300) //清空所有的内容
        //绘制太阳
        ctx.drawImage(sun, 125, 125, 50, 50)
        ctx.save()
        ctx.translate(150, 150)

        //绘制地球轨道
        ctx.beginPath();
        ctx.strokeStyle = "rgba(255,255,0,0.5)"
        ctx.arc(0, 0, 100, 0, 2 * Math.PI)
        ctx.stroke()  
        
        //绘制地球
        ctx.rotate(2 * Math.PI / 60 * time.getSeconds() + 2 * Math.PI / 60000 * time.getMilliseconds())
        ctx.translate(100, 0)
        ctx.drawImage(earth, -12,-12,25,25)
    
        //绘制月球轨道
        ctx.beginPath()
        ctx.strokeStyle = "rgba(255,255,255,.3)"
        ctx.arc(0, 0, 40, 0, 2 * Math.PI)
        ctx.stroke()
    
        //绘制月球
        ctx.rotate(2 * Math.PI / 6 * time.getSeconds() + 2 * Math.PI / 6000 * time.getMilliseconds())
        ctx.translate(40, 0)
        ctx.drawImage(moon, -3.5, -3.5,10,10)
        ctx.restore()
        requestAnimationFrame(_this.testAnmation)
        
      }
    
    },
    testAnmationEnd() {
      cancelAnimationFrame(this.testAnmation)
    },

    //随机整数
    randomInt(from, to){
      return parseInt(Math.random() * (to - from + 1) + from);
    }

  },
  mounted() {
    this.initCanavs()
    // this.drawSmile()
    // this.testDraw()
    // setTimeout(() => {
    //   this.testAnmation()
    // }, 2000);

    //时钟
    this.time = 'loading...'
    setInterval(()=>{
      let day = new Date()
      this.time = day.toLocaleTimeString()
    },1000 )
  },
}
</script>

<style lang="less" scoped>
.canvas{
  background: black;
  .count{
    color: white;
  }
}
</style>