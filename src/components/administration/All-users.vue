<template>

    <div class="config-container">
        <div class="user-content">
            <h3>Lista de usuarios en el sistema</h3>
            <div class="table-container">
                <table class="table table-striped" summary="summary">
                    <thead>
                        <!-- <th>Id</th> -->
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Usuario</th>
                        <th>Email</th>
                        <!-- <th>password</th> -->
                        <th>Telefono</th>
                        <th>Active</th>
                        <th>Rol</th>
                        <th>Fecha de creación</th>
                        <th></th>
                        <!-- <th>Edit</th>
                        <th>Delete</th> -->
                    </thead>
                    <tbody>
                        <template v-for="item in usuario">
                            <tr>
                                <!-- <td>{{item.id}}</td> -->
                                <td>{{item.firstName}}</td>
                                <td>{{item.lastName}}</td>
                                <td>{{item.login}}</td>
                                <td>{{item.email}}</td>
                                <!-- <td>{{item.password}}</td> -->
                                <td>{{item.phone}}</td>
                                <td>{{item.active}}</td>
                                <td>{{item.idRole}}</td>
                                <td>{{item.creationDate}}</td>
                                <td>
                                <div class="con-s">
                                        <vs-switch 
                                            v-tooltip="'Activar / Desactivar'"
                                            vs-type="primary"
                                            v-model="item.active"
                                            :ref="item.active" vs-icon="check"
                                            @click="validateEvent(item.publishedActive,item.id)"/>
                                   </div>
                                </td>
                            </tr>
                        </template>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
    .config-container{
        // padding:1.5rem 0%;
        width: 100vw;
        min-height: 100vh;  
        background-color: #2a333c;
        
        .user-content{
            padding:2rem;
            width: 80vw;
            min-height: 100vh;  
            float: right;
            // margin: 0px auto;
            padding:10vh;
            position: relative;
            background-color: white;
            // border-radius: 7px; 
        }   
        h3{
            color:#F03E41; 
            font-size: 1.5em;
        }
    }

    .table-container{
        margin-top: 1.5rem;
    }

    .table {
        box-shadow: 0 1px 3px 0 rgba(0,0,0,0.12), 0 1px 2px 0 rgba(0,0,0,0.24);
            width: 100%;
            // max-width: 90%;
            background-color: #fff;
            border: 0;
            border-collapse: collapse;
            font-family: "RobotoDraft", "Roboto", "Helvetica Neue, Helvetica, Arial", sans-serif;
            color: #212121;
            margin-top: 2em;
        }
        .table th,
        .table td {
        text-align: left;
        padding: 10px;
        vertical-align: center;
        border: inherit;
        }
        .table thead tr {
        border-bottom: 1px solid #e1e1e1;
        }
        .table thead th {
        font-weight: 400;
        color: #A8A7A5;
        // border-bottom: 2px solid #000000;
        // vertical-align: center;
        // background-color: #F03E41;
        }
        .table caption + thead tr:first-child,
        .table colgroup + thead tr:first-child,
        .table thead:first-child tr:first-child {
        border-top: 0;
        }
        .table caption + thead tbody + .table caption + thead tbody,
        .table colgroup + thead tbody + .table colgroup + thead tbody,
        .table thead:first-child tbody + .table thead:first-child tbody {
        border-top: 1px solid #dedede;
        }
        .table caption {
        opacity: 0.5;
        font-size: 0.8em;
        text-transform: uppercase;
        font-style: italic;
        text-align: left;
        line-height: 2;
        margin: 1em 0;
        }
        .table-header-title {
        font-size: 2.4em;
        line-height: 3.2em;
        letter-spacing: 0;
        font-weight: 300;
        color: #212121;
        text-transform: inherit;
        margin-bottom: 1em;
        text-align: center;
        }
        .table-header-subtitle {
        font-size: 1.5em;
        line-height: 2.8em;
        letter-spacing: 0.01em;
        font-weight: 400;
        color: #212121;
        text-align: center;
        }
        .table-bordered thead tr {
        border-bottom-width: 2px;
        }
        .table-bordered tr {
        border-bottom: 1px solid #e1e1e1;
        }
        .table-condensed tr,
        .table-condensed th,
        .table-condensed td {
        padding: 0.8em;
        }
        .table-striped tbody tr:nth-child(odd) {
        background-color: #f6f6f6;
        }
        .table-hover tbody tr {
        transition: background-color 0.3s ease, opacity 0.3s ease;
        }
        .table-hover tbody tr:hover {
        background-color: #e7e7e7;
        }
        @media screen and (max-width: 768px) {
        .table-responsive-vertical .table {
            margin-bottom: 0;
            background-color: transparent;
        }
        .table-responsive-vertical .table thead,
        .table-responsive-vertical .table tfoot {
            display: none;
        }
        .table-responsive-vertical .table tbody {
            display: block;
        }
        .table-responsive-vertical .table tbody tr {
            display: block;
            border: 1px solid #e1e1e1;
            border-radius: 2px;
            margin-bottom: 1.6em;
        }
        .table-responsive-vertical .table tbody tr td {
            background-color: #fff;
            display: block;
            vertical-align: middle;
            text-align: right;
        }
        .table-responsive-vertical .table tbody tr td[data-title]:before {
            content: attr(data-title);
            float: left;
            font-size: inherit;
            font-weight: 400;
            color: #3f3f3f;
        }
        }
    
</style>

<script>
    import axios from 'axios';

    export default {
        name:"All-users",
        data(){ 
            return {
             active : true,
             usuario: []
            }
        },
        methods: {
            addData: function(data){
                data.map((e)=>{
                    this.usuario.push(e)
                })
            },
            cancel:function(){
                this.$router.go('/')    
            },
            validateEvent(value, id){
                axios.post(`http://localhost:8080/user.disable.${id}`)
                .then((result)=>{
                    if(result.status == 200 || result.status == 201){
                        this.toast("Info"," Cambios Realizados")
                    }
                })
                .catch((err)=>console.log(err))
                
            },
            toast: function(title, message){
                let hTitle = `<h3 style="font-family: 'Avenir', Helvetica, Arial, sans-serif;">${title}</h3>`
                let pMessage = `<p style="font-family: 'Avenir', Helvetica, Arial, sans-serif;">${message}</p>`


                this.$vs.notify({
                title:hTitle,
                text: pMessage,
                color:'primary'})
            },

        },
        created(){
            axios.get(`http://localhost:8080/user.list`)
                .then(result =>  this.addData(result.data.users))
                .catch((err)=>console.log('Ocurrió un erro en la consulta de usuario' + err))
        },
         mounted(){
            
        },

    }
</script>
