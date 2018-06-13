<template lang="html">
    <div>
  <div id="sidebar" class="con-example-sidebar">
    <vs-sidebar
      style="width:100%"
      vs-static
      vs-parent="#sidebar"
      :vs-active.sync="active">

      <vs-sidebar-item @click="actives= 1" :vs-active="actives==1" vs-icon="question_answer">
            <router-link :to="{ name: 'RegistroUsuarios'}" append>Home</router-link>
          </vs-sidebar-item>

           <vs-sidebar-group vs-label="Eventos" vs-icon="event_note">
            <vs-sidebar-item @click="actives=21" :vs-active="actives==21"  vs-icon="note_add">
              <router-link :to="{name: 'Main'}"></router-link>
            </vs-sidebar-item>

            <vs-sidebar-item @click="actives=22" :vs-active="actives==22"  vs-icon="event_available">
              Mis eventos
            </vs-sidebar-item>
          </vs-sidebar-group>

          <vs-sidebar-item @click="actives=3" :vs-active="actives==3" vs-icon="verified_user">
            Configuracion
          </vs-sidebar-item>

          <vs-sidebar-group vs-label="Administración" vs-icon="event_note">
            <vs-sidebar-item @click="actives=11" :vs-active="actives==11"  vs-icon="note_add">
              Solicitudes de Eventos
            </vs-sidebar-item>

            <vs-sidebar-item @click="actives=12" :vs-active="actives==12"  vs-icon="event_available">
              Usuarios
            </vs-sidebar-item>

            <vs-sidebar-item @click="actives=13" :vs-active="actives==13"  vs-icon="event_available">
              Publicados
            </vs-sidebar-item>

            <vs-sidebar-item @click="actives=14" :vs-active="actives==14"  vs-icon="event_available">
              Historial
            </vs-sidebar-item>
          </vs-sidebar-group>

           <vs-sidebar-item @click="actives=4" :vs-active="actives==4" vs-icon="account_box">
              Salir
          </vs-sidebar-item>
    </vs-sidebar>
  </div>
    <div class="page-content">
        <pageContent>
            
        </pageContent>
    </div>
</div>
</template>

<script>
import pageContent from './pageContent'
import sidebarLink from '@/components/SidebarLink'
export default {
    components:{
        pageContent
    },
    data:()=>({
        active:false,
        actives:2,
    })
}
</script>

<style lang="scss" scoped>
.page-content{
    width: 83vw;
    position: relative;
    float: right;
    background-color:red;
    z-index: 15;
}
.con-example-sidebar{
    width: 17vw;
    height: 100vh;
    position: fixed;
    z-index: 10;
}
</style>


<script>
import pageContent from './pageContent'

export default {
    components:{
        pageContent
    },
    data(){
        return {
            active:true, 
            actives: 2
        }
    },
    methods:{
    }
}
</script>

