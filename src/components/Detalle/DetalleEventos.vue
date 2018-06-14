<template>
    <div class="app">
        <vs-row vs-type="flex" vs-align="center" vs-lg="10" vs-sm="10" vs-xs="10" id="container">
            <div class="product">
                <div id="image">
                    <img src="https://hayevento.com/imgs/b43e598d4c90cf4633259cc32ddcd1cd.jpg" width="100%" height="100%" alt="" srcset="">
                </div>
                <div id="detail">
                    <h1>{{eventos.title}}</h1>
                    <div class="content-p">
                        <p>{{eventos.description}}</p>
                        <p>Medellin</p>
                        <p>{{eventos.hour}}</p>
                        <p>{{eventos.date}}</p>
                    </div>

                    <div class="place">
                        <h4>Teatro Jorge Eliecer Gaitán <br> {{eventos.address}} </h4>
                    </div>

                    <div class="buttons" style="margin:10px 0px;">
                        <vs-button @click='asistir'>Asistir</vs-button>
                    </div>
                </div>
                <div class="map">
                    <GmapMap
                        :center="markers.position"
                        :zoom="15"
                        map-type-id="terrain"
                        style="width: 100%; height: 50vh; margin:10px 0px;"
                        >
                        <GmapMarker
                            :key="index"
                            :position="markers.position"
                            :clickable="true"
                        />
                        </GmapMap>
                </div>
                <div class="div"></div>

                <!-- <div class="comments">
                    <h3>Comentarios</h3>

                        <div class="comment-section" style="width:50%; height:50%;">
                            <vs-card actionable>
                                <vs-card-header vs-title="A nice title" :vs-fill="true">
                                    <vs-avatar vs-size="large"/>
                                </vs-card-header>
                            </vs-card>
                        </div>
                </div> -->
                
            </div>
        </vs-row>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    data(){
        return {
            markers:{
                index : "Evento",
                latLeng : null,
                position:{
                    lat:6.258421, 
                    lng:-75.559425
                }
            },
            eventos: {
                id:'',
                title: '',
                description: '',
                longitude: '',
                latitude: '',
                date:'',
                hour: '',
                active: 1,
                address:'Carrera 7 Nº 22-47',
                userId: this.$route.params.userId,
                idEventType: 1,
                publishedDate: Date.now(),
                publishedActive: false,
                creationDate: Date.now(),
                updateDate: Date.now(),
                tagIds: [],
                country: '',
                depart:'',
                type:'',
                city:'',
                place: '',
                address: '',
            },
        }
    },
    methods: {
        fillData(data){
             this.eventos.id = data.id
             this.eventos.title = data.title
             this.eventos.description= data.description
             this.eventos.longitude= data.longitude
             this.eventos.latitude= data.latitude
             this.eventos.date= data.date
             this.eventos.hour= "21:00:00"
             this.eventos.active= data.active
             this.eventos.type = typesEvent[data.eventTypeId];
             this.eventos.cost= data.cost
             this.eventos.userId= data.userId
             this.eventos.idEventType= data.eventTypeId
             this.eventos.publishedActive= data.publishedActive
             this.eventos.publishedDate= data.publishedDate

             this.markers.position = {
               lat:data.latitude,
               lng:data.longitude
             }

      }, 
      asistir: function(){
          console.log("works")
      }
    },
    created(){
         axios.get(`http://localhost:8080/event.${this.$route.params.idEvent}`)
        .then(response => {
            console.log(response)
            this.fillData(response.data.event)
        })
        .catch(e => {
          console.log(e)
        })
    }
    

}
</script>

<style lang="scss" scoped>
.app {
    background-color: #2a333c;
    color: #c05b5b;
    width: 100vw;
    min-height: 100vh;
    height: 100%;

    .product{
        box-shadow: 3px 9px 20px black;
        padding:1.5rem;
        border-radius: 7px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: auto;
        margin:10% auto;
        background-color: white;
        width: 70vw;
        height: 100%;
        min-height: 90vh
    }

    #detail{
        padding:5%;
        h1{
            margin: 0px 0px 10% 0px;
            text-transform: uppercase;
        }

        #detail{
            .content-p, .buttons{
                padding: 10px 0px;
                margin: 1rem 0px;
            }
        }
        .map{
            margin: 30px 0px;
            width: 100%;
            // height: 100%;
            height: 10vh;
            max-height: 400px;
            background-color: red;
            
        }

        .comments{
            grid-column-start: 1;
            grid-column-end: span 2;
            width: 100%;
            height: 50vh;
            background-color: red;
            margin-bottom:30%;
            padding:30px;
            .comment-section{
                width: 100%;
                height: 100%;
            }
        }
    }
}

</style>

