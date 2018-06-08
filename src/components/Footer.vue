<template>
  <section class="footer">
    <vs-row>
      <vs-col  v-tooltip="'col - 12'" vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
        <h3>
          Copyright © 2018, Todos los Derechos Reservados
        </h3>
      </vs-col>
    </vs-row>
  </section>
</template>

<script>
    export default {
        name: "footer"
    }
</script>

<style lang="scss">
  .footer {
    padding:2em 10px 3em;
    h3 {
      color: white;
      font-size: 14px;
      font-weight: lighter;
    }
  }
</style>
