
import {post, get} from '@/axios/axios';


// let url = process.env.VUE_APP_BASE_APIURL + '';
let url = 'https://www.test.com'

export default {
  
  mockData: data => post(url + '', data)
  
}
