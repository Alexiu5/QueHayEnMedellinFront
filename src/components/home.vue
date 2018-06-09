<template>
    <div class="con-tab-Home">
        <Banner/>
        <Actualy/>
            <div class="separador-linea">
                <img src="../assets/lineas.png" id="separador" alt="separador" width="30%">
            </div>
        <Eventos/>
    </div>

</template>

<script>
    import Banner from '@/components/Banner'
    import Eventos from '@/components/Eventos'
    import Actualy from '@/components/Actualy'
    import UserRegister from '@/components/UserRegister'

    export default {
        name : "home",
        components: {
            Banner,
            Eventos,
            Actualy,
            UserRegister
        },
        methods: {
            saludar(){
                
            }
        },
        created(){
        }
    }
</script>

<style lang="scss" scoped>
    .separador-linea{
        width: 100%;
        img{
            position: relative;
            margin: 0px auto;
        }
    }
</style>