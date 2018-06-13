<template>
  <transition name="register-trans" enter-active-class="animated fadeIn">
    <section>
      <vs-row  class="container" vs-w="6  ">
        <vs-col vs-type="flex" vs-justify="left" vs-lg="12" vs-sm="6" vs-xs="12">
          <div class="form-container">
            <h3 class="title">Nuevo Registro</h3>
              <form @submit.prevent="sendInfo">

                <div class="form">
                    <vs-input 
                        :vs-valid.sync = "validos.firstName"
                        :vs-validation-function="(value) => value.length < 15 && value.length >= 3"
                        vs-success-text="Campo valido"
                        vs-danger-text="El Campo debe tener almenos 3 caracteres"
                        id="name"
                        vs-type="custom"
                        vs-color="dark" 
                        class="form-register-input" 
                        vs-label="Nombre" v-model="user.firstName"/>

                    <vs-input
                        :vs-valid.sync = "validos.lastName"
                        :vs-validation-function="(value) => value.length < 15 && value.length >= 3"
                        vs-success-text="Campo valido"
                        vs-danger-text="El Campo debe tener almenos 3 caracteres"
                        vs-type="custom"
                        class="form-register-input"
                        vs-color="dark"
                        id="lastName"
                        vs-label="Apellido"
                        v-model="user.lastName"/>

                    <vs-input
                        :vs-valid.sync = "validos.login"
                        :vs-validation-function="(value) => value.length < 15 && value.length >= 5"
                        vs-success-text="Campo valido"
                        vs-danger-text="El Campo debe tener almenos 5 caracteres"
                        vs-type="custom" 
                        class="form-register-input"
                        vs-color="dark"
                        id="username"
                        vs-label="Username"
                        v-model="user.login"/>

                    <div class="email">
                      <vs-input
                        :vs-valid.sync="validos.email"
                        vs-success-text="Correo Valido"
                        vs-danger-text="Verifique email"
                        vs-type="email"
                        name="email" class="form-register-input" vs-color="dark" id="email" vs-label="Email" v-model="user.email"/>
                    </div>

                    <vs-input 
                      :vs-valid.sync="validos.password"
                      vs-success-text="Password Valida"
                      vs-danger-text="The password must have at least 8 characters, 1 number, 1 special character"
                      vs-type="password"
                      class="form-register-input"
                      vs-color="dark"
                      id="password" vs-label="Contraseña" v-model="user.password"/>
                    
                    <vs-input 
                      :vs-valid.sync="validos.phone"
                      vs-success-text="Numero Valido"
                      vs-danger-text="The minimum is 10 and the maximum 20"
                      vs-min="10"
                      vs-type="number"
                      class="form-register-input"
                      vs-color="dark"
                      id="phone" vs-label="Celular" v-model="user.phone"/>

                    <vs-select 
                      v-on:change="onChangeProfile"
                      class="vs-w-12 left" id="profile" label="Rol - Perfil" v-model="user.idRole" :options="profiles"/>

                </div >
                    <div class="buttons">
                      <vs-button vs-type="dark-border" id="cancel" @click="cancel">Cancelar</vs-button>  
                      <vs-button type="submit" vs-type="primary-filled" class="btn-logn" id="send">Enviar</vs-button>  
                    </div>

              </form>
          </div>
        </vs-col>
      </vs-row>
    </section>
  </transition>
</template>

<script>
import axios from 'axios';

export default {
    name: 'UserRegister',

    components: {

    },

    data(){
      return {
        user : {
          firstName:'',
          lastName:'',
          login : '',
          email:'',
          password:'',
          phone:'',
          idRole: ''
        },
        validos: {
          firstName:false,
          lastName:false,
          login: false,
          email:false,
          password:false,
          phone:false,
          idRole: false,
        },
        profiles:[
            {text: 'Seleccione', value: 0},
        ],
        active:false,
        actives:2,
      }
    },
    
    methods : {

      sendInfo : function (){
        if(this.formValid()){
          console.log(this.user)
          axios.post('http://localhost:8080/user.create', this.user)
            .then(response =>{
              if(response.status == 201 || response.status == 202){
                  this.alert("Creacion de ususario", "Usuario creado correctamente")
              }
            })
            .catch(error=>{
              this.toast("Error","Error en la consulta al servidor")
            })
          

        }else{
            this.toast("Error","Los datos del formulario no están correctamete llenados")
        }
      },

      cancel : function(){
        this.$router.push('/');
      },

      onChangeProfile : function(val){
          if(val > 0 ){
            this.validos.idRole = true;
          }else{
            this.validos.idRole = false;
          }
      },

      formValid: function(){
        return this.validos.firstName 
                  && this.validos.lastName 
                  && this.validos.login 
                  && this.validos.email 
                  && this.validos.password 
                  && this.validos.phone
                  && this.validos.idRole
      },
      validEmail(){

      },
      createRoles : function(data){
          data.map((e)=>{
            if(e.active){
                this.profiles.push({text: e.name, value: e.id}
              )}
          })
      },

      toast: function(title, message){
        let hTitle = `<h3 style="font-family: 'Avenir', Helvetica, Arial, sans-serif;">${title}</h3>`
        let pMessage = `<p style="font-family: 'Avenir', Helvetica, Arial, sans-serif;">${message}</p>`


        this.$vs.notify({
          title:hTitle,
          text: pMessage,
          color:'primary'})
      },

      alert : function(title, message){
        this.$vs.confirm({
            title:title,
            text: message,
            textConfirm:'Aceptar',
            textCancel:'',
            color: 'success',
            confirm:()=>{
                this.cancel()
            },
            cancel:()=>{
              this.cancel()
            }
        })
      }
      
    },
    watch: {
       
    },
    created(){
      axios.get(`http://localhost:8080/role.list`)
        .then(response =>this.createRoles(response.data.roles)) 
        .catch(error => console.log(`Server error: ${error}`))
    }

}
</script>


<style lang="scss" scoped>
  .container{
      margin-top: 5vh;
      margin-bottom: 5vh;
      border-radius: 7px; 
      background-color: #fcfcfc;
      
    }

  .form-register-input, #profile{
    margin : 1.2rem .8rem 1.2rem .8rem;
  }

  .title{
    color: black;
    text-align: left;
    font-size: 1.5rem;
    font-weight: bold;
    margin: -20px 5px 20px 5px
  }

  .form-container{
    margin: 10vh auto;
    justify-content: left;
    align-items: left;
  }
  .form{
    background-color: #0000;
    margin:10px 0px;
    padding: 10px 0px;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: auto;
      .email{
        grid-column-start: 1;
        grid-column-end: span 2;
      }
  }

  .alertContent{
    color:black;
  }

  .buttons{
    position: relative;
    float: right;
  }

  .page{
    position: fixed;
    width: inherit;
  }
</style>





