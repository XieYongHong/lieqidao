import Vue from 'vue'
import Router from 'vue-router'

import homeMain from '@/page/home/index'
import Login from '@/page/login/register';

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  // base: __dirname,
  routes: [
    {
      path: '/',
      name:'墙er-首页',
      component: homeMain
    },
    {
      path:'/login',
      name:'墙er-注册页',
      component:Login
    }
  ]
})


export default router
