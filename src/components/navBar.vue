<template>
    <section>
        <vs-tabs class="nav-home" vs-color="rgb(233, 98, 89)" >
          <transition name="home-trans" enter-active-class="animated fadeIn" leave-active-class="animated fadeOutLeft">
            <vs-tab vs-label="Home">
                  <Home/>
            </vs-tab>
          </transition>
          
          <transition name="home-trans" style="animation:all .5s" enter-active-class="animated fadeInRight" leave-active-class="animated fadeOut">
            <vs-tab vs-label="Ingresar">
              <div class="con-tab-ejemplo">
                  <Login/>
              </div>
            </vs-tab>
          </transition>

          <transition name="home-trans" style="animation:all .5s" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
            <vs-tab vs-label="App">
              <div class="con-tab-ejemplo">
                  <Admin/>
              </div>
            </vs-tab>
          </transition>
        </vs-tabs>
      <Footer/>
  </section>
</template>

<script>

    import Home from '@/components/Home'  
    import Footer from '@/components/Footer'
    import Login from '@/components/Login'
    import Admin from '@/views/admin/Admin'
    export default {
    name: 'navBar',
    components : {
        Home,
        Footer,
        Login,
        PublicarEvento,
        Admin
        
    },
    data:()=>({        
      active:false,
      actives:1,
    })

  }    
</script>

<style>
    
</style>