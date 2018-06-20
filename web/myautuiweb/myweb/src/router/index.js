import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Index
    }
  ]
})
