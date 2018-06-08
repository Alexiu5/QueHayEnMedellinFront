<template>
  <section class="list-actualy indie-agenda">

    <div class="separator card">
      <img src="../assets/calendar-page.png" alt="" width="70">
      <h2>Relevantes</h2>
    </div>
    <div class="container">
      <vs-row class="cardes" >
        <div v-for="n in f">
          <vs-col vs-lg="4" vs-sm="6" class="left col">

            <p class="small">8:00 - 9:00 PM</p>
            <div class="indie-combo">
              <p class="indie-tag small">Medellin</p>
              <h3 class="mt-15">DEVENDRA BANHART <i class="pe-li-star em-0-5 va-t"></i></h3>
              <p class="indie-conte">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 B</p>
              <h4 class="indie-time">12 Abril al 13 Abril </h4>
              <h4>Teatro Jorge Eliecer Gaitán <br> Carrera 7 Nº 22-47</h4>
            </div>
          </vs-col>
        </div>

      </vs-row>
    </div>
  </section>
</template>

<script>
  export default {
    name: "actualy",
    components: {
    },
    data(){
      return {
        f: 3
      }
    }
  }
</script>

<style lang="scss">
  .list-actualy {
    position: relative;
    padding: 3em 0;
    .container {
      max-width: 1200px;
      margin: 0 auto;
    }
  }
  .date {
    display: block;
  }
  .card-border {
    display: block;
    border-left: 1px solid #e96259;
  }
  .indie-agenda {
    padding-top: 130px;
  }
  .separator {
    position: absolute;
    left: 50%;
    top: 0;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    z-index: 999;
    display: inline-block;
    margin-bottom: 2em;
    &.card {
      color: #e96259;
      font-size: 24px;
      padding: 20px 25px;
      border-radius: 4px;
      h2 {
        display: inline-block;
        vertical-align: top;
        margin-top: 17px;
      }
    }
  }
  .cardes {
    color: white;
   .small {
     font-size: 80%;
   }
    .indie-combo {
      padding: 10px 0;
      border-left: 2px solid #e96259;
      &>:not(.indie-tag):not(.indie-combo-img):not(img) {
        margin-left: 16px;
      }
    }
    .mt-15 {
      margin: 15px 0;
    }
    .indie-conte {
      margin: 10px 0;
    }
    .indie-tag {
      background-color: #e96259;
      color: #2a333c;
      display: inline-block;
      padding: .125em .5em .125em 1em;
      text-transform: uppercase;
    }
    .indie-time {
      text-transform: uppercase;
      margin-top: 10px;
    }
  }

  .col {
    padding: 0 15px;
  }

</style>
