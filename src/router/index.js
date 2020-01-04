import Vue from 'vue'
import VueRouter from 'vue-router'
import header from '@/components/flheader'
import { format } from 'path'

Vue.use(VueRouter)

const routes = [
  {
    path:'/login',
    name:'login',
    components:{
      default:() => import ('../views/login.vue'),
    },
    meta: { title: 'login'}
  },
  {
    path: '/',
    name: 'home',
    components: {
      default:() => import ('../views/Home.vue'),
      flheader:header
    },
    meta: {requireAuth: true, title: 'home'}

  },
  {
    path: '/about',
    name: 'about',
    components: {
      default: () => import('../views/About.vue'),
      flheader:header
    },
    meta: {requireAuth: true, title: 'about'}
  },
  {
    path:'/testTable',
    name:'testTable',
    components:{
      default: () => import('../views/testTable.vue'),
      flheader:header
    },
    meta: {requireAuth: true, title: 'testTable'}

  },
  {
    path:'/mockImg',
    name:'mockImg',
    components:{
      default: () => import('../views/mockImg.vue'),
      flheader:header
    },
    meta: {requireAuth: true, title: 'mockImg'}

  },
  {
    path:'/calculate',
    name:'calculate',
    components:{
      default: () => import('../views/calculate.vue'),
      flheader:header
    },
    meta: {requireAuth: true, title: 'calculate'}
  },
  {
    path:'/keyboard',
    name:'keyboard',
    components:{
      default: () => import('../views/keyboard.vue'),
      flheader:header
    },
    meta: {requireAuth: true, title: 'keyboard'}
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) =>{
  if(to.meta.title) {
    document.title = to.meta.title
  }
  if(to.meta.requireAuth){
    if(sessionStorage.token){
      next()
    } else {
      next({
        name:'login'
      })
    }
  } else {
    next()
  }
})



export default router
