import Vue from 'vue'
import Router from 'vue-router'
import vueResource from 'vue-resource'
import SinglePage from '@/components/SinglePage'
import UserRegister from '@/components/UserRegister'
import PublicarEvent from '@/components/PublicarEvent'
import Admin from '@/views/admin/Admin'



Vue.use(Router)
Vue.use(vueResource)

export default new Router({
  mode: 'history',
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
      path: '/eventos',
      name: 'Eventos',
      component: PublicarEvent
    },
    {
      path: '/admin/',
      name: 'admin',
      component: Admin
    },
  ]
})
