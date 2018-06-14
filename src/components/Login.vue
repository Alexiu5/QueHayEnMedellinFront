<template>
  <vs-row vs-w="12">

    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="4" vs-sm="6" vs-xs="12" >
        <img src="../assets/logo.png" alt="" width="70%">
      <div class="left">
      </div>
    </vs-col>

    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="8" vs-sm="6" vs-xs="12">
      <div class="secitonlef-login">
        <vs-row vs-w="12">
          <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="6" vs-sm="12" vs-xs="12" >
            <div class="centerx" id="login-block">
              <vs-input 
                  :vs-valid.sync = "validos.username"
                  vs-success-text="Correo Valido"
                  vs-danger-text="Verifique email"
                  vs-type="email" 
                  vs-label="Email"
                  v-model="loginData.username"/>

              <vs-input 
                  :vs-valid.sync="validos.password"
                  vs-success-text="Password Valida"
                  vs-danger-text="The password must have at least 8 characters, 1 number, 1 special character"
                  vs-type="password"
                  vs-label="Password"
                  v-model="loginData.password"/>

              <div class="control_login">
                <vs-checkbox vs-color="primary" v-model="remember">Recordar Datos</vs-checkbox>
                <vs-button vs-color="primary" vs-type="danger-filled" class="btn-logn" @click="login(loginData)">INGRESAR</vs-button>
              </div>  

            </div>
          </vs-col>

          <!-- Crear cuenta de usuario -->
          <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="6" vs-sm="12" vs-xs="12">
            <div class="formslogin" >
              <vs-button vs-type="dark-filled" @click="createAccount()">CREAR UNA NUEVA CUENTA</vs-button>
              
            </div>
          </vs-col>
        </vs-row>
      </div>
    </vs-col>
  </vs-row>
</template>

<script>
    import axios from 'axios'
    import UserRegister from '@/components/UserRegister'
    import SideBar from '@/components/SideBar'

    export default {
        name: "login",
        components : {
            UserRegister,
            SideBar
        },
      data(){
        return {
          remember: false,
          loginData : {
            username : '',
            password : ''
          },
          validos:{
            username : false,
            password : false
          },
        }
      }, 
      methods : {
        login: function (user){
              if(this.formValid()){
                axios.post('http://localhost:8080/user.login', user)
                  .then((response) =>{
                    let res = response.data.exist
                    if(res[0]== 1 ){
                        this.$router.push(`/home/${res[1]}`)
                    }else{
                      this.alert('Iniciar sesion', 'Verifica usuario y/o contraseña')
                    }
                  })
                  .catch((error) => this.toast('oops', 'Error en la aplicacion, contacte con soporte'))
              }else{
                  this.toast('oops', 'Datos incorrectos')
              }
          },
        formValid: function(){
          return this.validos.username 
                    && this.validos.password 
        },
        createAccount: function(){
            this.$router.push('/register')  
          },

        clearFields : function(){
            this.loginData.username = ''
            this.loginData.password = ''
        },

        toast: function(title, message){
            // let hTitle = `<h3 style="font-family: 'Avenir', Helvetica, Arial, sans-serif;">${title}</h3>`
            let pMessage = `<p style="font-family: 'Avenir', Helvetica, Arial, sans-serif;">${message}</p>`


            this.$vs.notify({
              title:title,
              text: pMessage,
              color:'primary'})
          },

        alert : function(title, message){
            let pMessage = `<p style="font-family: 'Avenir', Helvetica, Arial, sans-serif;">${message}</p>`
            this.$vs.alert({
                title:title,
                text: pMessage,
                textConfirm:'Aceptar',
                textCancel:'',
                color: 'primary'
            })
          } 
        },
        
    }
</script>

<style lang="scss" scoped>
    .left{
        width: 10%;
        height: 80vh;
    }

    .formslogin{
      text-align: center; 
    }
</style>


<style lang="scss">
    h3{
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
    }
  .secitonlef-login {
    background: white;
    width: 100%;
    height: 80vh;
    .centerx {
      width: 80%;
      .con-input {
        &:nth-child(2) {
          margin-top: 40px;
        }
      }
      .vs-input{
        padding: 17px 10px;
        border: none !important;
        border-radius: 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.15) !important;
        outline: none;
      }
    }
    .vs-row, .vs-col {
      height: 100%;
    }
    
    .control_login {
      width: 100%;
      text-align: left;
      display: inline-flex;
      .con-check {
        font-size: 14px;
      }
      .btn-logn {
        width: 50% !important;
        margin-left: 2em;
      }
    }
  }
</style>
