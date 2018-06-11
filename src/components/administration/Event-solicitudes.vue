<template>
    <div class="config-container">
            <vs-row clas="row-config-table" >
                <h3>Solicitudes de Eventos</h3>
            </vs-row>
    </div>
</template>

<style lang="scss" scoped>
    .config-container{
        padding:2rem;
        width: 100vw;
        min-height: 100vh;  
        background-color: white;
        h3{
            color:black; 
            font-size: 1.5em;
        }
    }
    
</style>

<script>
    import axios from 'axios';
    export default {
        name:"User-solicitude",
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
                }
        },
        methods: {

            cancel:function(){
                this.$router.go('/')    
            },
            searchUser : function(){
                axios.get(`http://localhost:8080/user.${this.$route.params.userId}`)
                .then((result)=>{
                    let e = result.data.user
                    this.user.firstName = e.firstName
                    this.user.lastName = e.lastName
                    this.user.login = e.login
                    this.user.email = e.email
                    this.user.phone = e.phone
                    this.user.idRole = e.idRole
                    
                })
                .catch((err)=>console.log('Ocurrió un erro en la consulta de usuario' + err))
            }
        },
        created(){
            this.searchUser()
        },
         mounted(){
            
        },

    }
</script>
