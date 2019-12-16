const Mock = require('mockjs')//获取mockjs插件

//获取mock.Random对象
const Random = Mock.Random

const produceData = function(opt){
  console.log(opt,'opt')
  let articles = []
  for(let i = 0; i < 30; i++){//定义假数据生成规则
    let newArticleObject = {
      title: Random.csentence(5,30), // Random.csentence(min,max)
      thumbnail_pic_s: Random.dataImage('300x250','mock 图'),
      author_name: Random.cname(),
      date: Random.date() + ' ' + Random.time(),
      email: Random.email(),
      name: Random.cname()
    }
    articles.push(newArticleObject)

  }
  return{
    data: articles
  }
}

Mock.mock('/user',/post|get/i,produceData)//当post或get请求到/user路由时Mock会拦截

//mock数据定义 假url 随机生成数据
Mock.mock('https://www.test.com',
{
      "bizConfig|4":[{    //生成|num个如下格式名字的数据

          "id|+1":1,  //数字从当前数开始后续依次加一

          "name":"@cname",    //名字为随机中文名字

          "ago|18-28":25,    //年龄为18-28之间的随机数字

          "sex|1":["男","女"],    //性别是数组中的一个，随机的

          "job|1":["web","UI","python","php"]    //工作是数组中的一个

      }]
})

