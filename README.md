# ljh

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 目录结构
```
src
├── assets-------------------------------------------------静态资源(图片等)
├── axios----------------------------------------------------axios(请求)
│   └── axios------------------------------------------------get、post请求封装
├── package.json-------------------------------------------包描述文件
├── components-------------------------------------------------组件
│   ├── dropdown---------------------------------------------下拉框
│   ├── flheader----------------------------------------头部导航栏
│   ├── fltable----------------------------------------表格
│   ├── HelloWorld----------------------------------------vue初始组件
│   ├── installTest----------------------------------------测试install组件
│   └── index----------------------------------------install方法安装组件
│    
├── mock-------------------------------------------------mock数据
│   └── mock.js------------------------------------------mock数据定义
├──plugins--------------------------------------------------模板
│   └── element------------------------------------------饿了么UI插件挂载
│ 
├──router
│   └── index---------------------------------------------路由配置
│ 
├──store
│   └── index---------------------------------------------vuex全局状态管理
│ 
└──views-----------------------------------------------页面
    ├── axios---------------------------------------------接口定义
    ├── main----------------------------------------------入口js文件
    └── other---------------------------------------------各个页面



```
