<template lang="html">
    <div id="sideBar" class="con-example-sidebar">
      <!-- <vs-button @click="active=!active" vs-type="danger-filled">show</vs-button> -->
      <vs-sidebar
        :vs-active.sync="active"
        vs-static
      >
        

        <vs-sidebar-item @click="actives=1" :vs-active="actives==1" vs-icon="question_answer">
          Dashboard
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
</template>

<script>
export default {
  name: "SideBar",
  data:()=>({
    active:true,
    actives:2,
  })
}
</script>

<style lang="scss">
  vs-sidebar-item{
    display: auto;
    color:white;
  }
</style>