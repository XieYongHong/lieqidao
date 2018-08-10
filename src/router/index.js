import Vue from 'vue'
import Router from 'vue-router'

import homeMain from '@/page/home/index'
import Login from '@/page/login/register';

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name:'home',
      component: homeMain
    },
    {
      path:'/login',
      name:'login',
      component:Login
    }
  ]
})


export default router
