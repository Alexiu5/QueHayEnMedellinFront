import Vue from 'vue'
import Router from 'vue-router'
import vueResource from 'vue-resource'
import SinglePage from '@/components/SinglePage'
import UserRegister from '@/components/UserRegister'
import Admin from '@/views/admin/Admin'

import homeLayout from '@/views/layout/homeLayout'
import userConfig from '@/components/config/User-config'




Vue.use(Router)
Vue.use(vueResource)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: SinglePage
    },
    {
      path: '/register',
      name: 'Register',
      component: UserRegister
    },
    {
      path: '/admin',
      name: 'Admin',
      component: homeLayout,
      redirect: 'admin/main/',
      children: [
        {
          path: 'main/',
          name: 'Main',
          component: userConfig
        }]
    },
    {
      path: '/home/:userId',
      name: 'home',
      component: Admin
    },
  ]
})
