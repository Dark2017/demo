import axios from 'axios'
import Vue from 'vue'
import Myaxios from '@/views/axios/index'

Vue.prototype.axios = axios

const request = axios.create({
  timeout:3000,
  headers: {'Content-Type': 'application/json'}, //请求头
  responseType: 'json', //响应数据类型
  withCredentials: true,  //是否带cookie

})
//请求拦截器
request.interceptors.request.use(config=>{
  return config
}, err=>{
    console.log(err)
    return Promise.reject(err)
})

//响应拦截器
request.interceptors.response.use(res=>{
  return res
}, err=>{
    if (err && err.response) {
      switch (err.response.status) {
          case 400:
              err.message = '请求错误';
              break
          case 403:
              err.message = '拒绝访问';
              break
          case 404:
              err.message = '请求资源不存在';
              break
          case 408:
              err.message = '请求超时';
              break
          case 500:
              err.message = '服务器错误';
              break
          case 501:
              err.message = '服务未实现';
              break
          case 502:
              err.message = '网络错误';
              break
          case 503:
              err.message = '服务不可用';
              break
          case 504:
              err.message = '网络超时';
              break
          case 505:
              err.message = 'HTTP版本不受支持';
              break
          default:
              err.message = `连接出错!`
      }
  } else {
      err.message = '连接服务器失败!'
  }
  return Promise.reject(err.message)
})

/**
 * @url请求路径
 * @params请求查询参数
 * @config请求头配置
 */

export function post(url, data, config) {
  return request({
      url,
      method: "post",
      data,
      ...config
  })
}

/**
* @post请求
* @url请求路径
* @data请求参数
* @config请求头配置
*/

export function get(url, params, config) {
  return request({
      url,
      method: "get",
      params,
      ...config
  })
}

export default {
    ...Myaxios
}