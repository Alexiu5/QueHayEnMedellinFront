<template>
  <section class="banners">
    <div class="logos">
      <img src="../assets/Logo.png" alt="">
    </div>
  </section>
</template>

<script>
    export default {
        name: "banner"
    }
</script>

<style lang="scss">
  .banners {
    background-image: url("../assets/fondoBanner.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    height: 60vh;
    position: relative;
  }
  .logos {
    position: absolute;
    left: 20px;
    top: 5px;
    img {
      width: 160px;
    }
  }

</style>
