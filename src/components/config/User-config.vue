<template>
    <div class="config-container">
            <vs-row clas="row-config-table" >
                <div id="col-misdatos">
                    <div class="item" id="title">
                        <h3>información</h3>  
                    </div>
                    
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

                    <!-- <vs-select 
                      v-on:change="onChangeProfile"
                      class="vs-w-12 left" id="profile" label="Rol - Perfil" v-model="user.idRole" :options="profiles"/> -->
                    <div class="buttons">
                      <vs-button vs-type="dark-border" id="cancel" @click="cancel">Cancelar</vs-button>  
                      <vs-button type="submit" vs-type="primary-filled" class="btn-logn" id="send" @click="update">Editar</vs-button>  
                    </div>
                </div>

            </vs-row>
    </div>
</template>

<style lang="scss" scoped>
    .config-container{
        padding:2rem;
        width: 100vw;
        min-height: 100vh;  
        background-color: #2a333c;
        h3{
            // color:black; 
            font-size: 1.5em;
        }
    }

    #col-misdatos{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: auto;
        width: 50%;
        position: relative;
        margin: 0px auto;
        padding: 3%;
        border-radius: 7px;
        background-color: #fcfcfc;

        #title{
            margin:1rem;
            grid-column-start: 1;
            grid-column-end: span 2;

            h3{
                font-size: 2em;
                font-weight: 100;
                color:#000000;
                text-transform: capitalize;
                margin-bottom: 10px;
            }
        }
        .email{
            grid-column-start: 1;
            grid-column-end: span 2;
        }

        .buttons{
            margin-top: 10px;
            grid-column-start: 2;
            button{
                float: right;
            }
        }
       
    }

    .vs-input{
        width: 80%;
    }
    
</style>

<script>
    import axios from 'axios';
    export default {
        name:"User-config",
        data(){ 
            return {
             user : {
                id:"",
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
            },
                }
        },
        methods: {
            cancel:function(){
                this.$router.go(-1)    
            },
            validData: function(){
                return this.validos.firstName && this.validos.lastName && this.validos.login && this.validos.email && this.validos.password && this.validos.phone
            },
            update: function(){
                axios.post(`http://localhost:8080/user.update`, this.user)
                    .then((res)=>{
                        if(res.status == 200){
                            this.alert("Exitoso", "Usuario editado correctamente")
                            this.$router.push(-1)
                        }
                    })
                    .catch((err)=>console.log(err))
                    
            },
            searchUser : function(){
                axios.get(`http://localhost:8080/user.${this.$route.params.userId}`)
                .then((result)=>{
                    let e = result.data.user
                    this.user.id= e.id
                    this.user.firstName = e.firstName
                    this.user.lastName = e.lastName
                    this.user.login = e.login
                    this.user.password = e.password
                    this.user.email = e.email
                    this.user.phone = e.phone
                    this.user.idRole = e.idRole
                    
                })
                .catch((err)=>console.log('Ocurrió un erro en la consulta de usuario' + err))
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
        created(){
            this.searchUser()
        },
         mounted(){
            
        },

    }
</script>
