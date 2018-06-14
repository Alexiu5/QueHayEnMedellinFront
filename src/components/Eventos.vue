<template>
  <section class="events-card">
    <div class="container">
      <vs-row>
        <vs-col :key="index" v-for="(even, index) in dataEventos"  vs-type="flex" vs-justify="center" vs-align="center" vs-w="4">
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
                  <span class="button" @click="toDetail(index)" style="cursor:pointer">inscribirme</span>
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
  import axios from 'axios';

  export default {
    name: "eventos",
    data() {
      return {
        category: null,
        evento: null,
        num: [1, 2, 3, 4, 4],
        dataEventos: [
          
        ],

      }
    },
    methods: {
      selCategory: (num) => {
       var data = this.dataEventos.indexOf(num)
       console.log(data)
      },
      separatePath: function(path){
        let validPath = path.replace( /C:\\fakepath\\/i, "" );
        return validPath
      },
      splitDate: function(date){
        let fecha = date.split('-');
        return {day:fecha[2],month:fecha[1], year:fecha[0]}
      }, 
      toDetail: function (id){
        this.$router.push(`/detail/${id}`)
      },
      fill: function(events){
        events.map((e)=>{
          this.dataEventos.push({
            id:'11',
            name: e.title,
            imagen: `@/assets/events/${this.separatePath(e.img)}`,
            place: 'Plaza de Bolívar - Cra. 7 #11-10',
            ubicacion: 'Medellín',
            date: this.splitDate(e.date),
            fecha: e.date,
            hora: e.hour,
            likes: 17,
            coments: 20,
            category: 1
          })
        })
      }
    },
    created(){
      axios.get(`http://localhost:8080/event.list`)
      .then((res)=>{
        this.fill(res.data.events)
      })
      .catch((err)=>console.log(err))
      
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
