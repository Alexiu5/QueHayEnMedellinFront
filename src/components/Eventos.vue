<template>
  <section class="events-card">
    <div class="container">
      <vs-row class="menu-categoris" vs-type="flex" vs-justify="center" vs-w="12">
        <vs-col vs-type="flex" vs-align="center" vs-justify="center" vs-w="1" >
          <vs-button vs-type="danger-line-down" v-on:click="selCategory(1)">Conciertos</vs-button>
        </vs-col>
        <vs-col vs-type="flex" vs-align="center" vs-justify="center" vs-w="1">
          <vs-button vs-type="danger-line-down" v-on:click="category = 2">Rumbas</vs-button>
        </vs-col>
        <vs-col vs-type="flex" vs-align="center" vs-justify="center" vs-w="1">
          <vs-button vs-type="danger-line-down" v-on:click="category = 3">Festivales</vs-button>
        </vs-col>
        <vs-col vs-type="flex" vs-align="center" vs-justify="center" vs-w="1">
          <vs-button vs-type="danger-line-down" v-on:click="category = 4">Academicos</vs-button>
        </vs-col>
        <vs-col vs-type="flex" vs-align="center" vs-justify="center" vs-w="2">
          <vs-button vs-type="danger-line-down" v-on:click="category = 5">Al aire libre y deportes</vs-button>
        </vs-col>
        <vs-col vs-type="flex" vs-align="center" vs-justify="center" vs-w="1">
          <vs-button vs-type="danger-line-down" v-on:click="category = 6">Negocios</vs-button>
        </vs-col>
        <vs-col vs-type="flex" vs-align="center" vs-justify="center" vs-w="1">
          <vs-button vs-type="danger-line-down" v-on:click="category = 7">Teatro</vs-button>
        </vs-col>
        <vs-col vs-type="flex" vs-align="center" vs-justify="center" vs-w="1">
          <vs-button vs-type="danger-line-down" v-on:click="category = 8">Cultura</vs-button>
        </vs-col>
      </vs-row>
      <vs-row>
        <vs-col :key="index" v-for="even, index in dataEventos"  vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
          <div class="example-2 cards">
            <div class="wrapper" :style="{ backgroundImage:'url(' + even.imagen + ')' }">
              <div class="header">
                <div class="date">
                  <span class="day">{{ even.date.day }}</span>
                  <span class="month">{{ even.date.month }}</span>
                  <span class="year">{{ even.date.year }}</span>
                </div>
                <ul class="menu-content">
                  <li>
                    <a href="#" class="far fa-bookmark"></a>
                  </li>
                  <li><a href="#" class="far fa-heart"></a><span>{{ even.likes }}</span></li>
                  <li><a href="#" class="far fa-comment"></a><span>{{ even.coments }}</span></li>
                </ul>
              </div>
              <div class="data">
                <div class="content">
                  <span class="author">Jane Doe</span>
                  <h1 class="title"><a href="#">{{ even.name }}</a></h1>
                  <p class="text">{{ even.place }}</p>
                  <a href="#" class="button">Inscribirme</a>
                </div>
              </div>
            </div>
          </div>

        </vs-col>
      </vs-row>
    </div>
  </section>

</template>

<script>

  export default {
    name: "eventos",
    data() {
      return {
        category: null,
        evento: null,
        num: [1, 2, 3, 4, 4],
        dataEventos: [
          {
            name: 'Selecta at @ArmandoRecords',
            imagen: 'https://hayevento.com/imgs/b43e598d4c90cf4633259cc32ddcd1cd.jpg',
            place: 'Armando Records - Calle 85 # 14-46',
            ubicacion: 'Bogota',
            date: { day:'04',month:'ABR', year:'2018'},
            fecha: '04 Abril al 05 Abril',
            hora: '7:00 PM - 3:00 AM',
            likes: 2,
            coments: 20,
            category: 1
          },
          {
            name: 'JORGE DREXLER SALVA VIDAS DE HIELO BOGOTÁ',
            imagen: 'https://hayevento.com/imgs/91f9d6e47f07138a8ee44279e81abf08.jpg',
            place: 'Teatro Jorge Eliecer Gaitán - Carrera 7 Nº 22-47',
            ubicacion: 'Bogota',
            date: { day:'05',month:'ABR', year:'2018'},
            fecha: '04 Abril al 05 Abril',
            hora: '7:00 PM - 3:00 AM',
            likes: 2,
            coments: 20,
            category: 2
          },
          {
            name: 'Kinder Malo x Pimp Flaco',
            imagen: 'https://hayevento.com/imgs/c734b4a13260ce587fa9bb4e61941046.jpg',
            place: 'Lugar no especificado - Sitio Por Definir',
            ubicacion: 'Bogota',
            date: { day:'06',month:'ABR', year:'2018'},
            fecha: '04 Abril al 05 Abril',
            hora: '7:00 PM - 3:00 AM',
            likes: 20,
            coments: 20,
            category: 1
          },
          {
            name: 'Juantxo Skalari & La Rude Band en Colombia',
            imagen: 'https://hayevento.com/imgs/c5fee65ace5b9f12c54998414d986448.jpg',
            place: 'Boogaloop Club - carrera 13 N. 65 - 42',
            ubicacion: 'Bogota',
            date: { day:'06',month:'ABR', year:'2018'},
            fecha: '04 Abril al 05 Abril',
            hora: '7:00 PM - 3:00 AM',
            likes: 20,
            coments: 20,
            category: 3
          },
          {
            name: 'Tour Fantasmas XXII',
            imagen: 'https://hayevento.com/imgs/1fc2bb70244eb5ea069191de996bcd62.jpg',
            place: 'Plaza de Bolívar - Cra. 7 #11-10',
            ubicacion: 'Bogota',
            date: { day:'06',month:'ABR', year:'2018'},
            fecha: '06 Abril al 06 Abril',
            hora: '7:30 PM - 8:30 PM',
            likes: 20,
            coments: 20,
            category: 5
          },
          {
            name: 'Edición dulce pecado El Fabuloso',
            imagen: 'https://hayevento.com/imgs/dcf6ccc9aaf2b2c1adb44af77ac037e6.jpg',
            place: 'Plaza de Bolívar - Cra. 7 #11-10',
            ubicacion: 'Bogota',
            date: { day:'05',month:'ABR', year:'2018'},
            fecha: '05 Abril al 06 Abril',
            hora: '9:00 PM - 3:30 AM',
            likes: 20,
            coments: 20,
            category: 5
          },
          {
            name: 'ME ERICE BARRANQUILLA AMPARO GRISALES',
            imagen: 'https://hayevento.com/imgs/05dba2d33843765bc5b43d22b00e94e4.jpg',
            place: 'Plaza de Bolívar - Cra. 7 #11-10',
            ubicacion: 'Bogota',
            date: { day:'05',month:'ABR', year:'2018'},
            fecha: '05 Abril al 06 Abril',
            hora: '9:00 PM - 3:30 AM',
            likes: 20,
            coments: 20,
            category: 6
          },
          {
            name: 'CuleFiesta',
            imagen: 'https://hayevento.com/imgs/81bff250614d9b3a4282472b49796bfb.jpg',
            place: 'Plaza de Bolívar - Cra. 7 #11-10',
            ubicacion: 'Bogota',
            date: { day:'05',month:'ABR', year:'2018'},
            fecha: '05 Abril al 06 Abril',
            hora: '9:00 PM - 3:30 AM',
            likes: 20,
            coments: 20,
            category: 2
          },
          {
            name: 'Carmen (Ópera)',
            imagen: 'https://hayevento.com/imgs/2d81e643bc58d2d6d7231a923242f462.jpg',
            place: 'Plaza de Bolívar - Cra. 7 #11-10',
            ubicacion: 'Bogota',
            date: { day:'05',month:'ABR', year:'2018'},
            fecha: '05 Abril al 06 Abril',
            hora: '9:00 PM - 3:30 AM',
            likes: 20,
            coments: 20,
            category: 3
          },
          {
            name: 'Señor Loop en Bogotá (Armando Records)',
            imagen: 'https://hayevento.com/imgs/8d147191a27da1637c625520e0c1c150.jpg',
            place: 'Plaza de Bolívar - Cra. 7 #11-10',
            ubicacion: 'Bogota',
            date: { day:'05',month:'ABR', year:'2018'},
            fecha: '05 Abril al 06 Abril',
            hora: '9:00 PM - 3:30 AM',
            likes: 20,
            coments: 20,
            category: 4
          },
          {
            name: 'Concierto: ¡Complaceme! | Eduardo Moreno & Okocán',
            imagen: 'https://hayevento.com/imgs/d69004196714768125dc2b34c4fb2fa4.jpg',
            place: 'Plaza de Bolívar - Cra. 7 #11-10',
            ubicacion: 'Bogota',
            date: { day:'05',month:'ABR', year:'2018'},
            fecha: '05 Abril al 06 Abril',
            hora: '9:00 PM - 3:30 AM',
            likes: 20,
            coments: 20,
            category: 5
          },
          {
            name: 'Noches del Pub / Animal Party',
            imagen: 'https://hayevento.com/imgs/97b2f974ca5015d85f4bca108374d6b0.jpg',
            place: 'Plaza de Bolívar - Cra. 7 #11-10',
            ubicacion: 'Bogota',
            date: { day:'05',month:'ABR', year:'2018'},
            fecha: '05 Abril al 06 Abril',
            hora: '9:00 PM - 3:30 AM',
            likes: 20,
            coments: 20,
            category: 1
          }
        ],

      }
    },
    methods: {
      selCategory: (num) => {
       var data = this.dataEventos.indexOf(num)
       console.log(data)
      }
    }
  }
</script>

<style lang="scss">
  @import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,700);
  // Variables
  $regal-blue: #034378;
  $san-juan: #2d4e68;
  $bermuda: #77d7b9;
  $white: #fff;
  $black: #000;
  $open-sans: 'Open Sans',
  sans-serif;

  @mixin cf {
    &::before,
    &::after {
      content: '';
      display: table;
    }
    &::after {
      clear: both;
    }
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }
  h1 {
    font-family: $open-sans;
    font-weight: 300;
  }
  .events-card {
    padding: 3em 0;
  }
  .container {
    max-width: 1200px;
    margin:  0 auto;
  }
  .menu-categoris {
    button {
      .text {
        font-size: 15px;
      }
    }
  }
  // Base styles
  .cards {
    float: left;
    padding: 1em 1.7rem 2em;
    width: 100%;
    .menu-content {
      @include cf;
      margin: 0;
      padding: 0;
      list-style-type: none;
      li {
        display: inline-block;
      }
      a {
        color: $white;
      }
      span {
        position: absolute;
        left: 50%;
        top: 0;
        font-size: 10px;
        font-weight: 700;
        font-family: 'Open Sans';
        transform: translate(-50%, 0);
      }
    }
    .wrapper {
      background-color: $white;
      min-height: 329px;
      position: relative;
      overflow: hidden;
      box-shadow: 0 19px 38px rgba($black, 0.3), 0 15px 12px rgba($black, 0.2);
      &:hover {
        .data {
          transform: translateY(0);
        }
      }
    }
    .data {
      position: absolute;
      bottom: 0;
      width: 100%;
      transform: translateY(calc(70px + 1em));
      transition: transform 0.3s;
      .content {
        text-align: left;
        padding: 1em;
        position: relative;
        z-index: 1;
        background: -moz-linear-gradient(top, rgba(125,185,232,0) 0%, rgba(0,0,0,1) 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(top, rgba(125,185,232,0) 0%,rgba(0,0,0,1) 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to bottom, rgba(125,185,232,0) 0%,rgba(0,0,0,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#007db9e8', endColorstr='#000000',GradientType=0 ); /* IE6-9 */
      }
    }
    .author {
      font-size: 12px;
    }
    .title {
      margin-top: 10px;
      margin-bottom: 15px;
    }
    .text {
      height: 70px;
      margin: 0;
      font-size: 14px;
    }
    input[type='checkbox'] {
      display: none;
    }
    input[type='checkbox']:checked + .menu-content {
      transform: translateY(-60px);
    }
  }


  // Second example styles
  .example-2 {
    .wrapper {
      background-position: top;
      background-repeat: no-repeat;
      background-size: contain;
      background-color: transparent;
      &:hover {
        .menu-content {
          span {
            transform: translate(-50%, -10px);
            opacity: 1;
          }
        }
      }
    }
    .header {
      @include cf;
      color: $white;
      padding: 1em;
      .date {
        position: absolute;
        top: 0;
        left: 0;
        background-color: #e96158;
        color: $white;
        padding: 0.8em;
        span {
          display: block;
          text-align: center;
        }
        .day {
          font-weight: 700;
          font-size: 24px;
          text-shadow: 2px 3px 2px rgba($black, 0.18);
        }
        .month {
          text-transform: uppercase;
        }
        .month,
        .year {
          font-size: 12px;
        }
      }
    }
    .menu-content {
      float: right;
      li {
        margin: 0 5px;
        position: relative;
      }
      span {
        transition: all 0.3s;
        opacity: 0;
      }
    }
    .data {
      color: $white;
      transform: translateY(calc(70px + 4em));
    }
    .title {
      a {
        color: $white;
      }
    }
    .button {
      display: block;
      width: 100px;
      margin: 2em auto 1em;
      text-align: center;
      font-size: 12px;
      color: $white;
      line-height: 1;
      position: relative;
      font-weight: 700;
      &::after {
        content: '\2192';
        opacity: 0;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translate(0, -50%);
        transition: all 0.3s;
      }
      &:hover {
        &::after {
          transform: translate(5px, -50%);
          opacity: 1;
        }
      }
    }
  }

</style>
