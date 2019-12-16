import Vue from 'vue'
import VueRouter from 'vue-router'
import header from '@/components/flheader'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    components: {
      default:() => import ('../views/Home.vue'),
      flheader:header
    }
  },
  {
    path: '/about',
    name: 'about',
    components: {
      default: () => import('../views/About.vue'),
      flheader:header
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
