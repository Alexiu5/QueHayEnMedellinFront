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
              <svg width="70%" height="20px" viewBox="0 0 715 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="00-Login" transform="translate(-2144.000000, -729.000000)">
                    <g id="or" transform="translate(2146.000000, 717.000000)">
                      <path d="M0,26.4 L289.2,26.4" id="Line" stroke="#E7E7E7" stroke-width="2.4" stroke-linecap="square"></path>
                      <text font-family="Roboto-Regular, Roboto" font-size="33.6" font-weight="normal" fill="#929699">
                        <tspan x="341.133984" y="31">or</tspan>
                      </text>
                      <path d="M422.4,26.4 L711.6,26.4" id="Line" stroke="#E7E7E7" stroke-width="2.4" stroke-linecap="square"></path>
                    </g>
                  </g>
                </g>
              </svg>
              <svg width="60%" viewBox="0 0 721 472" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g id="00-Login" transform="translate(-2145.000000, -862.000000)">
                    <g id="Social-Login" transform="translate(2145.600000, 862.800000)">
                      <a href="#">
                        <g id="fb">
                          <rect id="Rectangle-3" fill-opacity="0.97" fill="#3B5998" x="0" y="0" width="720" height="124.8" rx="19.2"></rect>
                          <path d="M19.2,0 L124.8,0 L124.8,124.8 L19.2,124.8 C8.5961328,124.8 4.85131288e-15,116.203867 3.55271368e-15,105.6 L0,19.2 C-1.2985992e-15,8.5961328 8.5961328,5.50061248e-15 19.2,3.55271368e-15 Z" id="Rectangle-8" fill="#263C68"></path>
                          <path d="M83.7491405,38.4 L41.0492788,38.4 C39.5871172,38.4 38.4,39.5847461 38.4,41.0492788 L38.4,83.7491405 C38.4,85.2136732 39.5871172,86.4 41.0492788,86.4 L64.037621,86.4 L64.037621,67.8115787 L57.7827307,67.8115787 L57.7827307,60.5663703 L64.037621,60.5663703 L64.037621,55.2235527 C64.037621,49.0247777 67.8226437,45.6475795 73.3535665,45.6475795 C76.0052164,45.6475795 78.2790753,45.8459593 78.9421853,45.9321083 L78.9421853,52.4114602 L75.1057894,52.4130409 C72.0984786,52.4130409 71.5183561,53.8427979 71.5183561,55.9396167 L71.5183561,60.5639992 L78.6932227,60.5639992 L77.7550682,67.8084173 L71.5175657,67.8084173 L71.5175657,86.3976289 L83.7483501,86.3976289 C85.2120925,86.3976289 86.4,85.2097214 86.4,83.7491405 L86.4,41.0476981 C86.3992096,39.5847461 85.2128828,38.4 83.7491405,38.4 Z" id="FB" fill="#FFFFFF" fill-rule="nonzero"></path>
                          <text id="Login-with-Facebook" font-family="Roboto-Bold, Roboto" font-size="38.4" font-weight="bold" fill="#FFFFFF">
                            <tspan x="214.2375" y="72">LOGIN WITH FACEBOOK</tspan>
                          </text>
                        </g>
                      </a>
                      <g id="tw" transform="translate(0.000000, 172.800000)">
                        <rect id="Rectangle-3" fill="#00ACED" x="0" y="0" width="720" height="124.8" rx="19.2"></rect>
                        <path d="M19.2,0 L124.8,0 L124.8,124.8 L19.2,124.8 C8.5961328,124.8 4.85131288e-15,116.203867 3.55271368e-15,105.6 L0,19.2 C-1.2985992e-15,8.5961328 8.5961328,5.50061248e-15 19.2,3.55271368e-15 Z" id="Rectangle-8" fill="#0695CB"></path>
                        <text id="Login-with-Twitter" font-family="Roboto-Bold, Roboto" font-size="38.4" font-weight="bold" fill="#FFFFFF">
                          <tspan x="229.4625" y="72">LOGIN WITH TWITTER</tspan>
                        </text>
                        <path d="M85.1811765,52.958 L85.1811765,54.2169714 C85.1811765,67.3312571 75.5237647,82.334 57.9388235,82.334 C52.4498824,82.334 47.4691765,80.7602857 43.2,77.9276 C43.9115294,78.0325143 44.7247059,78.0325143 45.5378824,78.0325143 C50.0103529,78.0325143 54.1778824,76.4588 57.4305882,73.8359429 C53.2630588,73.7310286 49.7054118,70.8983429 48.4856471,66.9106286 C48.9938824,67.1214286 49.6037647,67.1214286 50.2136471,67.1214286 C51.1284706,67.1214286 51.9416471,67.0165143 52.7548235,66.8057143 C48.384,65.8624571 45.1312941,61.8747429 45.1312941,57.0496571 L45.1312941,56.9447429 C46.3510588,57.6781714 47.8757647,58.0988 49.4004706,58.2037143 C46.8592941,56.4201714 45.1312941,53.3766857 45.1312941,49.9145143 C45.1312941,48.1309714 45.6395294,46.4523429 46.4527059,44.9835429 C51.2301176,50.9636571 58.2437647,54.9504 66.2738824,55.2661143 C66.0705882,54.6356571 65.9689412,53.7963429 65.9689412,53.0629143 C65.9689412,47.6064 70.2381176,43.2 75.6254118,43.2 C78.3698824,43.2 80.8103529,44.3540571 82.5383529,46.2434857 C84.7736471,45.8228571 86.8075294,44.9835429 88.6362353,43.9344 C87.9256471,46.2434857 86.4,48.1309714 84.4696471,49.3899429 C86.4,49.0761714 88.2296471,48.5506286 89.9585882,47.8162286 C88.6362353,49.8096 87.0098824,51.4882286 85.1811765,52.958" id="Imported-Layers" fill="#FFFFFF"></path>
                      </g>
                      <g id="G+" transform="translate(0.000000, 345.600000)">
                        <rect id="Rectangle-3" fill="#F44336" x="0" y="0" width="720" height="124.8" rx="19.2"></rect>
                        <path d="M19.2,0 L124.8,0 L124.8,124.8 L19.2,124.8 C8.5961328,124.8 4.85131288e-15,116.203867 3.55271368e-15,105.6 L0,19.2 C-1.2985992e-15,8.5961328 8.5961328,5.50061248e-15 19.2,3.55271368e-15 Z" id="Rectangle-8" fill="#C53126"></path>
                        <text id="Login-with-Google" font-family="Roboto-Bold, Roboto" font-size="38.4" font-weight="bold" fill="#FFFFFF">
                          <tspan x="236.128125" y="69.6">LOGIN WITH GOOGLE</tspan>
                        </text>
                        <g id="google-plus" transform="translate(43.200000, 45.600000)" fill="#FFFFFF" fill-rule="nonzero">
                          <path d="M34.3638297,13.2631813 L16.5299193,13.2631813 L16.5299193,21.7894883 L25.49923,21.7894883 C24.2934929,25.3260184 21.3713777,27.473693 17.6374024,27.473693 C12.6453883,27.473693 8.26495964,23.0447872 8.26495964,17.9962808 C8.26495964,12.9515492 12.6453883,8.52641804 17.6374024,8.52641804 C20.0241247,8.52641804 22.0417219,9.31277003 23.4724854,10.7991007 L24.1217367,11.4745441 L30.2718137,5.12999473 L29.603299,4.46021334 C26.6921607,1.5422846 22.555161,0 17.63751,0 C7.7479692,0.000111019623 0,7.9049302 0,17.9962808 C0,28.0914062 7.7479692,36 17.6374024,36 C26.7536098,36 33.2306262,30.4825468 34.5410743,21.600977 C34.711862,20.4489263 34.7991391,19.23637 34.8,17.9962808 C34.8,16.6349582 34.6870025,15.1579532 34.49792,14.0466467 L34.3638297,13.2631813 Z" id="Shape"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
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
