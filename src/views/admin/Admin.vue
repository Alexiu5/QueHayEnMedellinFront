<template>
    <div class="page-wrap">
      <div class="nav">
        <vs-button @click="active=!active" vs-type="primary-flat" id="navButton" vs-icon="menu"></vs-button>
      </div>
      
      <div id="parentx">
       <vs-sidebar :vs-active.sync="active">
          <div class="user-display">
            <vs-avatar vs-size="large" :vs-text="user.firstName || 'defualt'"/>
            <h3>{{user.login || "Defaut"}}</h3>
          </div>

          <vs-sidebar-item @click="changeState(1)" :vs-active="actives==1" vs-icon="question_answer">
            Inicio
          </vs-sidebar-item>

           <vs-sidebar-group vs-label="Eventos" vs-icon="event_note">
            <vs-sidebar-item @click="changeState(21)" :vs-active="actives==21"  vs-icon="note_add">
              Publicar Eventos
            </vs-sidebar-item>

            <vs-sidebar-item @click="changeState(22)" :vs-active="actives==22"  vs-icon="event_available">
              Mis eventos
            </vs-sidebar-item>
          </vs-sidebar-group>

          <vs-sidebar-item @click="changeState(3)" :vs-active="actives==3" vs-icon="verified_user">
            Configuracion
          </vs-sidebar-item>

          <vs-sidebar-group vs-label="Administración" vs-icon="event_note">
            <vs-sidebar-item @click="changeState(11)" :vs-active="actives==11"  vs-icon="note_add">
              Solicitudes de Eventos
            </vs-sidebar-item>

            <vs-sidebar-item @click="changeState(12)" :vs-active="actives==12"  vs-icon="event_available">
              Usuarios
            </vs-sidebar-item>

            <vs-sidebar-item @click="changeState(13)" :vs-active="actives==13"  vs-icon="event_available">
              Publicados
            </vs-sidebar-item>

            <vs-sidebar-item @click="changeState(14)" :vs-active="actives==14"  vs-icon="event_available">
              Historial
            </vs-sidebar-item>
          </vs-sidebar-group>
          

          <vs-sidebar-item @click="changeState(4)" :vs-active="actives==4" vs-icon="account_box">
            Salir
          </vs-sidebar-item>
          <!-- <vs-sidebar-item @click="changeState(5)" :vs-active="actives==5" vs-icon="card_giftcard">
            card
          </vs-sidebar-item> -->

        </vs-sidebar>
    </div>

    <section id="content-boilerplate" ref="boilerplate" >

      <Home v-if="actives == 1"></Home>
      <PublicarEvento v-else-if="actives == 21"></PublicarEvento>
      <Userconfig v-else-if="actives == 3"></userconfig>

      <EventSolicitudes v-else-if="actives == 11"></EventSolicitudes>
      <allUsers v-else-if="actives == 12"></allUsers>
      <Published v-else-if="actives == 13"></Published>
    </section>

  </div>
    <!-- <Footer/> -->

  
</template>
 <script>
  import Home from '@/components/Home'
  import Footer from '@/components/Footer'
  import PublicarEvento from '@/components/events/PublicarEvent'
  import Userconfig from '@/components/config/User-config'
  
  import allUsers from '@/components/administration/All-users'
  import Published from '@/components/administration/Published'
  import EventSolicitudes from '@/components/administration/Event-solicitudes'

    export default {
        name: "Admin",
        components:  {
          Home,
          Footer,
          PublicarEvento,
          Userconfig,
          allUsers,
          Published,
          EventSolicitudes
        },
        data:() =>({
          msg : 'user',
          active: false,
          actives : 1,
          seccion : null,
          user: {
            firstName : "",
            lastName : "",
            login : ""
          },
          pages: {
            home : true,
            config : false,
          }
        }),
        
        methods:{
          changeState: function(arg){
            this.actives = arg
            
          }
        },
        watch: {
          actives: function(){
              // this.changeState(this.actives);
          }
        },
    }
 </script>
 
<style lang="scss">
    body {
      background-color: #2a333c;
      color: #c05b5b;
    }

    .user-display{
        padding: .5rem;
        border-bottom: 1px solid black;
        color: #000000;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        text-align: center;
        margin: 1rem;
    }

    .nav-home {
      .ul-tabs {
        justify-content: flex-end;
        list-style: none;
        .tab-activo {
          background: white !important;
          border-radius: 0 !important;
          list-style: none;
        }
        .tabtext {
          color: white;
        }
      }
    }

    .nav{
      // background-color: black;
        width: 100%;
        padding: 1rem;
        height: 2rem;
        z-index: 5;
        // color:white;
        position: fixed;
        z-index: 999;

      #navButton{
        float: right;
        margin: 0px 1rem;
      }

    }

    label.label {
      text-align: left;
        font-weight: bold
    }

    .animated{
    animation-duration: .2s;
  }
  </style>
 