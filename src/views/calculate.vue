<template>
  <div class="main">
    <div class="tite">
      calculate
    </div>
    <div class="calculate">
      <el-input v-model="displayNum" disabled ></el-input>
      <div class="main-body">
        <div class="Num-main">
            <div class="cal-main">
              <el-button class="Num"  
              v-for="(item,key) in ListOne" 
              :key="key"
              @click="Num(item)"
              ><span class="Num-span">{{item}}</span></el-button>
              <el-button class="Num"   @click="operation('+')"><span class="Num-span">+</span></el-button>
            </div>
            <div class="cal-main">
              <el-button class="Num"  
              v-for="(item,key) in ListTwo" 
              :key="key"
              @click="Num(item)"
              ><span class="Num-span">{{item}}</span></el-button>
              <el-button class="Num"  @click="operation('-')"><span class="Num-span">-</span></el-button>
            </div>
            <div class="cal-main">
              <el-button class="Num"  
              v-for="(item,key) in ListThree" 
              :key="key"
              @click="Num(item)"
              ><span class="Num-span">{{item}}</span></el-button>
              <el-button class="Num"  @click="operation('/')"><span class="Num-span">/</span></el-button>
            </div>
            <div class="cal-main">
              <el-button class="Num"  @click="Zero('0')"><span class="Num-span">0</span></el-button>
              <el-button class="Num"  @click="point('.')"><span class="Num-span">·</span></el-button>
              <el-button class="Num"  @click="equl('=')"><span class="Num-span">=</span></el-button>
              <el-button class="Num"  @click="operation('*')"><span class="Num-span">*</span></el-button>
            </div>
            <div class="cal-main">
              <el-button class="Num"  @click="clear"><span class="Num-span">C</span></el-button>
              <el-button class="Num"  @click="clear"><span class="Num-span">C</span></el-button>
              <el-button class="Num"  @click="plus_minus"><span class="Num-span">+/-</span></el-button>
              <el-button class="Num"  @click="back"><span class="Num-span">←</span></el-button>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'',
  data() {
    return {
      displayNum:0,//输入的数字
      fuShu:1,
      ListOne:['1','2','3'],
      ListTwo:['4','5','6'],
      ListThree:['7','8','9'],
      operator:'', //当前运算符
    }
  },
  methods: {
    Zero(val){
      //如果第一位是0 反复输入0还是0
      if(/^0$/.test(this.displayNum)) {
        this.displayNum = 0
      } else if(!/[\-\+\*\/]0\.?/.test(this.displayNum)){
        this.displayNum += 0
      } else if(/[\-\+\*\/]0./.test(this.displayNum)){
        this.displayNum += 0
      }
    },
    //正负
    plus_minus() {
      this.$message.error('还没做')
      // this.fuShu++
      // if(this.fuShu % 2 === 0 ){
      //   let tm = this.displayNum + 'S'
      //   let ar = tm.split('')
      //   ar.unshift('-')
      //   ar.pop()
      //   this.displayNum = ar.join('')
      //   console.log('fushu')
      // } else {
      //   console.log('zhengshu')
      //   let tm = this.displayNum
      //   let ar = tm.split('')
      //   ar.shift()
      //   this.displayNum = ar.join('')
      // }

    },
    //输入数字
    Num(val) {
      if(/^0$/.test(this.displayNum)) {
        this.displayNum = ''
        this.displayNum += val
      }
      else
       this.displayNum += val
    },
    //当前运算符   val(运算符) 
    operation(val) {
      let Num // 算数
      let compNum // 被算数 
      let total // 计算值
      this.displayNum += val
      //当结果是负数时 如:-1-
      if(/^\-\d+(\.\d+)?[\-\+\*\/]/.test(this.displayNum)){
        // 拿到 后输入的运算符
        let tempNum = this.displayNum.replace('-','')
        let tempArr = this.displayNum.split('')
        tempArr.forEach((val,index)=>{
          if(val == '+' || val == '-' || val == '/' || val == '*' ){
            this.operator = val
            // console.log(val,'拿到 后输入的运算符')
          }
        })
      } else {
        this.operator = val
      }

      //输入运算符前是否有表达式没有计算 如 1+1- 输入-时计算1+1
      if(/^(\-|\+)?\d+(\.\d+)?[\-\+\*\/](\-|\+)?\d+(\.\d+)?[\-\+\*\/]$/.test(this.displayNum)) {
        if(/^\-\d+(\.\d+)?[\-\+\*\/]/.test(this.displayNum)){
          let tempNum = this.displayNum.replace('-','')
          let tempArr = this.displayNum.split('')
          tempArr.forEach((val,index)=>{
            if(val == '+' || val == '-' || val == '/' || val == '*' ){
              this.operator = val
            }
          })
            Num = '-' + tempNum.split(val)[0] 
            compNum = tempNum.split(val)[1]
            // console.log(tempNum)
            // console.log(Num,'取负数',val,'运算符',compNum,'被算数')
        } else {
          Num = this.displayNum.split(val)[0] 
          compNum = this.displayNum.split(val)[1]
        }
        //当输入下一个运算符时 将前面的表达式计算
        if(/^\-?\d+(\.\d+)?[\-\+\*\/]/.test(Num)){
          //拿到前面表达式的运算符
          // console.log('执行1次')
          let arr = Num.split('')
          let indexUse
          arr.forEach((element,index) => {
            if(element === '+' || element === '-' ){
              indexUse = index 
            } else if(element === '*' || element === '/'){
              indexUse = index
            }
          })
          let opr = Num.charAt(indexUse)
          // console.log('运算符',opr,'下标',indexUse)
          // 如果是负数 把负号去掉在进行分割
          if(/^\-\d+(\.\d+)?[\-\+\*\/]/.test(Num)){
            arr.shift()
            Num = arr.join('')
            total = this.computedValue('-' + Num.split(opr)[0],Num.split(opr)[1],opr)
          } else {
            total = this.computedValue(Num.split(opr)[0],Num.split(opr)[1],opr)
          }
          //计算表达式
          // console.log(Num.split(opr)[0],Num.split(opr)[1],this.operator)
          if(!isNaN(total))
            this.displayNum = `${total}${val}`
        } 
        else {
            // console.log('执行2次')
            total = this.computedValue(Num,compNum)
            // console.log('num:',Num,'compNum',compNum,'total',total)
            if(!isNaN(total))
              this.displayNum = `${total}${val}`
        }
        // console.log(`Num: ${Num} compNum: ${compNum}`)
      }
    },
    //加减乘除  Num(算数)  operator(运算符)  compNum(被算数)
    computedValue(Num,compNum,opr = this.operator){
        let tmp = parseFloat(Num)
        let temp = parseFloat(compNum)
        let total // 计算值
        switch(opr) {
          case '+':
            total = tmp + temp
            break;
          case '-':
            total = tmp - temp
            break;
          case '/':
            if(temp == 0){
              total = 0
              this.$message.error('result undefined!auto to zero')
            } else {
              total = tmp / temp
            }
            break;
          case '*':
            total = tmp * temp
            break;
        }
        // console.log('算数：',tmp,'被算数:',temp,'运算符:',opr)
        let tot = total + ''
        if(tot.indexOf('.') != -1){
          let tota = tot.split('.')[1]
          if(tota.length && tota.length >= 10){
            // console.log(total)
            return total.toFixed(10)

          }
          return total
        }
        else
          return total
    },
    //等于
    equl(val) {
      //等于前判断末尾是否是. 有则去掉.
      if(/^(\-|\+)?\d+(\.\d+)?[\-\+\*\/](\-|\+)?\d+(\.\d+)?\.$/.test(this.displayNum)) {
        let disArr= this.displayNum.split('')
        // console.log('--')
        disArr.pop()
        this.displayNum = disArr.join('')
      }
      this.operation(this.operator)
      //对运算结果处理
      if(/\-\d+(\.\d+)?[\-\+\*\/]/.test(this.displayNum)){
        // console.log('-')
        let arr = this.displayNum.split('')
        //出现负数 如 -3- 时，删除后面的运算符
        arr.pop() 
        this.displayNum = arr.join('')
      } else {
        //正数
        if(/[\-\+\*\/]$/.test(this.displayNum))
          this.displayNum = this.displayNum.replace(this.operator,'')
      }

    },
    //小数点
    point(val) {
      if(!/(\-)?\d+(\.\d+)?\.\d{1,}/.test(this.displayNum)) {
        this.displayNum += val
      } 
      else if(/^(\-|\+)?\d+(\.\d+)?[\-\+\*\/](\-|\+)?\d+(\d+)?$/.test(this.displayNum)) {
        this.displayNum += val
      } 
    },
    //AC清除数值
    clear() {
      this.displayNum = 0
      this.countOpr = 0
      this.fuShu = 0
    },
    //退格 只能退数字
    back() {
      if(this.displayNum !== '0'){
        if(!/[\+\-\*\/](?![0-9])/.test(this.displayNum)) {
          if(this.displayNum !== 0)
          this.displayNum = this.displayNum.substring(0,this.displayNum.length - 1)
          if(this.displayNum == ''){
            this.displayNum = '0'
          } 
        } 
      } 
    }

  },

  watch: {
    //对显示非法数据的处理
    displayNum() {
      //判断是否连续输入运算符 有则替换之前的运算符
      let disArr
      if(/[\-\+\*\/][\-\+\*\/]/.test(this.displayNum)){
        console.log('1')
        let ind 
        disArr= this.displayNum.split('')
        disArr.forEach((val,index)=>{
          if(val === '+' || val === '-' || val === '*' || val === '/'){
            ind = index
            disArr.splice(index,index)
          }
          return
        })
        this.displayNum = disArr.join('')
      } 
      //判断未输入运算符前是否连续输入小数点 有则删除
      if(/(\-)?\d+(\.\d+)?\.\.$/.test(this.displayNum)){
        console.log('2')
        disArr= this.displayNum.split('')
        disArr.pop()
        this.displayNum = disArr.join('')
      } 
      //判断运算符前一位是否有小数点 有则保留一个
      if(/(\-)?\d+(\.\d+)?\.[\-\+\*\/]/.test(this.displayNum)){
        console.log('3')
        let ind = this.displayNum.lastIndexOf('.')
        disArr= this.displayNum.split('')
        disArr.forEach((val,index)=>{
          if(index === ind){
            disArr.splice(index,index)
            return
          }
        })
        this.displayNum = disArr.join('')
        this.operation(this.operator)
      }
      //判断运算符后是否连续输入小数点  有则删除
      if(/^(\-|\+)?\d+(\.\d+)?[\-\+\*\/]\./.test(this.displayNum)){
        console.log('4')
        disArr= this.displayNum.split('')
        disArr.pop()
        this.displayNum = disArr.join('')
      }
      //允许输入
      if(this.displayNum.length){
        console.log(this.displayNum.length)
      }
    }
  },
}

</script>

<style lang="less" scoped>
.main{
  background: #d2d8de;
  .tite{
    text-align: center;
    font-weight: bold;
  }
  .calculate{
    margin: auto;
    width: 300px;
    .main-body{
      display: flex;
      background: #7FD1EB;
    }
    .cal-main{
      display: flex;
      :hover{
        background: #8C68CE;
      }
    }
    .Num{
      background: #A6C3EE;
      line-height: 5px;
      width: 30px;
      height: 30px;
      text-align: center;
      border-radius: 50%;
      margin: 16px;
      cursor: pointer;
      color: #858B9C;
      .Num-span{
        position: relative;
        left: -3px;
        font-weight: bold;
      }

    }

  }

  /deep/ .el-input__inner {
    text-align: right;
    font-size: 28px;
  }

  /deep/ .el-icon-back {
    position: relative;
    top: -3px;
    left: -1px;
  }

}
</style>