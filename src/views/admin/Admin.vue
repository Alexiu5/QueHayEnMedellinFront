<template>
    <div class="page-wrap">
      <div class="nav">
        <vs-button @click="active=!active" vs-type="primary-flat" id="navButton" vs-icon="menu"></vs-button>
      </div>
      
      <div id="parentx">
       <vs-sidebar :vs-active.sync="active">
          <div class="user-display">
            <vs-avatar vs-size="large"/>
            <h3 id="userName">{{user.login || "Defaut"}}</h3>
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
          
          
            <vs-sidebar-item @click="cancel" :vs-active="actives==4" vs-icon="account_box">
              Salir
            </vs-sidebar-item>
        </vs-sidebar>
    </div>

    <section id="content-boilerplate" ref="boilerplate" >
      <Content></Content>
    </section>

  </div>
    <!-- <Footer/> -->

  
</template>
 <script>
  import axios from 'axios'
  import Home from '@/components/Home'
  import Footer from '@/components/Footer'
  import PublicarEvento from '@/components/events/PublicarEvent'
  import Userconfig from '@/components/config/User-config'
  
  import allUsers from '@/components/administration/All-users'
  import Published from '@/components/administration/Published'
  import EventSolicitudes from '@/components/administration/Event-solicitudes'
  import MyEvents from '@/components/events/MyEvents'

  import Content from '@/views/admin/Content.vue'

    export default {
        name: "Admin",
        components:  {
          Home,
          Footer,
          PublicarEvento,
          Userconfig,
          allUsers,
          Published,
          EventSolicitudes,
          MyEvents, 
          Content
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
          },
          userId:''
        }),
        
        methods:{
          redirect: function(arg){
            switch(arg){
              case 1:
                this.$router.push(`/home/${this.userId}`)
                break
              case 21:
                this.$router.push(`/home/${this.userId}/publicarevento`)
                break
              case 22:
                this.$router.push(`/home/${this.userId}/myevents`)
                break
              case 3:
                this.$router.push(`/home/${this.userId}/configuracion`)
                break
              case 11:
                this.$router.push(`/home/${this.userId}/listusers`)
                break
              case 12:
                this.$router.push(`/home/${this.userId}/eventsolicitudes`)
                break
              case 13:
                this.$router.push(`/home/${this.userId}/published`)
                break
            }
          },
          cancel: function(){
              this.$router.go('/')   
          },
          changeState: function(arg){
            this.actives = arg
            this.redirect(arg)
          },
          searchUser: function(){
            axios.get(`http://localhost:8080/user.${this.$route.params.userId}`)
              .then((res)=>{
                let data = res.data.user
                this.user = {
                  firstName : data.firstName,
                  lastName : data.lastName,
                  login: data.login
                }
              })
          }
        },
        created(){
          this.searchUser()
          this.userId = this.$route.params.userId
        },
        watch: {
        
        },
    }
 </script>
 
<style lang="scss">
    body {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      background-color: #2a333c;
      color: #c05b5b;
    }

    #userName{
      text-transform: capitalize;
      display: inline-block;
      margin-top: 10%;
      margin-left: 10px;
    }

    #separator{
      border-radius: 50%;
      width: 80%;
      margin: 5px auto;
      position: relative; 
      border: 1px solid red; 
    }

    .user-display{
        padding: .5rem;
        color: #000000;
        display: flex;
        // border-bottom: 1px solid hsla(0,0%,71%,.3);
        margin-bottom:10px;

        .con-vs-avatar{
          display: inline-block;
          text-align: center;
          overflow: hidden;
          box-shadow: 0 10px 30px -12px rgba(0,0,0,.42), 0 4px 25px 0 rgba(0,0,0,.12), 0 8px 10px -5px rgba(0,0,0,.2);
        }
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
 