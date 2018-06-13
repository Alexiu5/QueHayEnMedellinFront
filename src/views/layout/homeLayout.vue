<template lang="html">
    <div>
  <div id="sidebar" class="con-example-sidebar">
    <vs-sidebar
      style="width:100%"
      vs-static
      vs-parent="#sidebar"
      :vs-active.sync="active">

      <vs-sidebar-item @click="actives=1" :vs-active="actives==1" vs-icon="question_answer">
         <router-link to="/register">Home</router-link>
      </vs-sidebar-item>
      <vs-sidebar-item @click="actives=2" :vs-active="actives==2" vs-icon="gavel">
         History
      </vs-sidebar-item>
      <vs-sidebar-item @click="actives=3" :vs-active="actives==3" vs-icon="verified_user">
         Setings
      </vs-sidebar-item>
      <vs-sidebar-item @click="actives=4" :vs-active="actives==4" vs-icon="account_box">
         Perfile
      </vs-sidebar-item>
      <vs-sidebar-item @click="actives=5" :vs-active="actives==5" vs-icon="card_giftcard">
         card
      </vs-sidebar-item>
    </vs-sidebar>

  </div>
    <div class="page-content">
        <pageContent>
            
        </pageContent>
    </div>
</div>
</template>

<script>
import pageContent from './pageContent'
import sidebarLink from '@/components/SidebarLink'
export default {
    components:{
        pageContent
    },
    data:()=>({
        active:false,
        actives:2,
    })
}
</script>

<style lang="scss" scoped>
.page-content{
    width: 83vw;
    position: relative;
    float: right;
    background-color:red;
    z-index: 15;
}
.con-example-sidebar{
    width: 17vw;
    height: 100vh;
    position: fixed;
    z-index: 10;
}
</style>


<script>
import pageContent from './pageContent'

export default {
    components:{
        pageContent
    },
    data(){
        return {
            active:true, 
            actives: 2
        }
    }
}
</script>

