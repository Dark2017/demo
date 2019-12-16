import installTest from './installTest'

//定义一个插件对象
const obj = {}

//install方法 全局注册组件
obj.install = (Vue) => {
  Vue.component('install-test',installTest)
}

//将对象暴露
export default obj