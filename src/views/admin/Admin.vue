<template>
  <vs-row vs-w="12">
    <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="3" vs-sm="3" vs-xs="3" >
      <div id="sideBar">
        
        <SideBar/>
      </div>
    </vs-col>

    <vs-col vs-type="flex" vs-justify="right" vs-align="left" vs-lg="9" vs-sm="9" vs-xs="9">
      <div class="contenedor">
        <h1>Title</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum assumenda magnam inventore!</p>
      </div>
      <!-- here is the content components -->
    </vs-col>

  </vs-row>   
</template>

<script>
  import SideBar from '@/components/SideBar'
  export default {
    name: 'Admin',
    components : {
        SideBar
    }

  }
</script>

<style>
  #admin {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
     text-align: center;   
    color: #2c3e50; 
  }


</style>