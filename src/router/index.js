import Vue from 'vue'
import Router from 'vue-router'
import vueResource from 'vue-resource'
import SinglePage from '@/components/SinglePage'

import Admin from '@/views/admin/Admin'
import home from '@/components/home'
import PublicarEvent from '@/components/events/PublicarEvent'
import MyEvents from '@/components/events/myEvents'
import editEvent from '@/components/events/EditEvent'
import Userconfig from '@/components/config/User-config'

import Allusers from '@/components/administration/All-users'
import EventSolicitudes from '@/components/administration/Event-solicitudes'
import Published from '@/components/administration/Published'

import EventDetail from '@/components/Detalle/DetalleEventos'




Vue.use(Router)
Vue.use(vueResource)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      component:SinglePage
    },
    {
      path: '/detail/:idEvent',
      component: EventDetail
    },
    {
      path: '/home/:userId',
      component:Admin,
      redirect:'/home/:userId/main/',
      children:[
        {
          path:'main/',
          component:home
        },
        {
          path:'publicarevento',
          component:PublicarEvent
        },
        {
          path:'myevents',
          component:MyEvents
        },
        {
          path:'configuracion',
          component:Userconfig
        },
        {
          path:'listusers',
          component:Allusers
        },
        {
          path:'eventsolicitudes',
          component:EventSolicitudes
        },
        {
          path:'published',
          component:Published
        },
        {
          path:'editEvento/:idEvent',
          component:editEvent
        } 
      ]
    }
  ]
})
