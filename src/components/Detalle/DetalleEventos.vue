<template>
    <div class="app">
        <vs-row vs-type="flex" vs-align="center" vs-lg="10" vs-sm="10" vs-xs="10" id="container">
            <div class="product">
                <div id="image" :style="{ backgroundImage:'url(' + mainEvent[0].imagen + ')' }">
                    
            </div>
                <div id="detail">
                    <h1>{{mainEvent[0].name}}</h1>
                    <div class="content-p">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis molestias amet cupiditate.</p>
                        <p>{{mainEvent[0].ubicacion}}</p>
                        <div class="date" style="margin-top:5%;">
                            <span class="day">{{ mainEvent[0].date.day }}</span>
                            <span class="month">{{ mainEvent[0].date.month }}</span>
                            <span class="year">{{ mainEvent[0].date.year }}</span>
                        </div>
                    </div>

                    <div class="place">
                        <h4>{{mainEvent[0].place}}</h4>
                    </div>

                    <div class="buttons" style="margin-top: 5%;">
                        <vs-button @click='asistir' style="width:100px;">Asistir</vs-button>
                    </div>
                </div>
                <div class="map">
                    <GmapMap
                        :center="markers.position"
                        :zoom="15"
                        map-type-id="terrain"
                        style="width: 100%; height: 50vh; margin:10% 10px;"
                        >
                        <GmapMarker
                            :key="index"
                            :position="markers.position"
                            :clickable="true"
                        />
                        </GmapMap>
                </div>
                
                <div id="comments" style="margin-top:10%" >
                    <h3>Comentarios</h3>

                    <div class="comment" style="margin-top:1rem;">
                         <vs-card actionable>
                            <vs-card-header vs-title="A nice title" vs-subtitle="A nice subtitle"  :vs-fill="true">
                                <vs-avatar vs-size="large" vs-text="Luis Daniel"/>
                            </vs-card-header>
                            <vs-card-body>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                            </vs-card-body>
                        </vs-card>
                    </div>
                </div>
                
            </div>
        </vs-row>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    data(){
        return {
            mainEvent:[], 
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
            eventData:[
                {
                    id:'12',
                    name: 'Selecta at @ArmandoRecords',
                    imagen: 'https://hayevento.com/imgs/b43e598d4c90cf4633259cc32ddcd1cd.jpg',
                    place: 'Armando Records - Calle 85 # 14-46',
                    ubicacion: 'Bogota',
                    date: { day:'04',month:'ABR', year:'2018'},
                    fecha: '04 Abril al 05 Abril',
                    hora: '7:00 PM - 3:00 AM',
                    likes: 17,
                    coments: 20,
                    category: 1
                },
                {
                    id:'13',
                    name: 'JORGE DREXLER SALVA VIDAS DE HIELO BOGOTÁ',
                    imagen: 'https://hayevento.com/imgs/91f9d6e47f07138a8ee44279e81abf08.jpg',
                    place: 'Teatro Jorge Eliecer Gaitán - Carrera 7 Nº 22-47',
                    ubicacion: 'Bogota',
                    date: { day:'05',month:'ABR', year:'2018'},
                    fecha: '04 Abril al 05 Abril',
                    hora: '7:00 PM - 3:00 AM',
                    likes: 18,
                    coments: 20,
                    category: 2
                },
                {
                    id:'14',
                    name: 'Kinder Malo x Pimp Flaco',
                    imagen: 'https://hayevento.com/imgs/c734b4a13260ce587fa9bb4e61941046.jpg',
                    place: 'Lugar no especificado - Sitio Por Definir',
                    ubicacion: 'Bogota',
                    date: { day:'06',month:'ABR', year:'2018'},
                    fecha: '04 Abril al 05 Abril',
                    hora: '7:00 PM - 3:00 AM',
                    likes: 19,
                    coments: 20,
                    category: 1
                },
                {
                    id:'15',
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
                    id:'16',
                    name: 'Tour Fantasmas XXII',
                    imagen: 'https://hayevento.com/imgs/1fc2bb70244eb5ea069191de996bcd62.jpg',
                    place: 'Plaza de Bolívar - Cra. 7 #11-10',
                    ubicacion: 'Bogota',
                    date: { day:'06',month:'ABR', year:'2018'},
                    fecha: '06 Abril al 06 Abril',
                    hora: '7:30 PM - 8:30 PM',
                    likes: 17,
                    coments: 20,
                    category: 5
                },
                {
                    id:'17',
                    name: 'Edición dulce pecado El Fabuloso',
                    imagen: 'https://hayevento.com/imgs/dcf6ccc9aaf2b2c1adb44af77ac037e6.jpg',
                    place: 'Plaza de Bolívar - Cra. 7 #11-10',
                    ubicacion: 'Bogota',
                    date: { day:'05',month:'ABR', year:'2018'},
                    fecha: '05 Abril al 06 Abril',
                    hora: '9:00 PM - 3:30 AM',
                    likes: 17,
                    coments: 20,
                    category: 5
                },
                {
                    id:'18',
                    name: 'ME ERICE BARRANQUILLA AMPARO GRISALES',
                    imagen: 'https://hayevento.com/imgs/05dba2d33843765bc5b43d22b00e94e4.jpg',
                    place: 'Plaza de Bolívar - Cra. 7 #11-10',
                    ubicacion: 'Bogota',
                    date: { day:'05',month:'ABR', year:'2018'},
                    fecha: '05 Abril al 06 Abril',
                    hora: '9:00 PM - 3:30 AM',
                    likes: 17,
                    coments: 20,
                    category: 6
                },
                {
                    id:'19',
                    name: 'CuleFiesta',
                    imagen: 'https://hayevento.com/imgs/81bff250614d9b3a4282472b49796bfb.jpg',
                    place: 'Plaza de Bolívar - Cra. 7 #11-10',
                    ubicacion: 'Bogota',
                    date: { day:'05',month:'ABR', year:'2018'},
                    fecha: '05 Abril al 06 Abril',
                    hora: '9:00 PM - 3:30 AM',
                    likes: 17,
                    coments: 20,
                    category: 2
                },
                {
                    id:'20',
                    name: 'Carmen (Ópera)',
                    imagen: 'https://hayevento.com/imgs/2d81e643bc58d2d6d7231a923242f462.jpg',
                    place: 'Plaza de Bolívar - Cra. 7 #11-10',
                    ubicacion: 'Bogota',
                    date: { day:'05',month:'ABR', year:'2018'},
                    fecha: '05 Abril al 06 Abril',
                    hora: '9:00 PM - 3:30 AM',
                    likes: 17,
                    coments: 20,
                    category: 3
                },
                {
                    id:'21',
                    name: 'Señor Loop en Bogotá (Armando Records)',
                    imagen: 'https://hayevento.com/imgs/8d147191a27da1637c625520e0c1c150.jpg',
                    place: 'Plaza de Bolívar - Cra. 7 #11-10',
                    ubicacion: 'Bogota',
                    date: { day:'05',month:'ABR', year:'2018'},
                    fecha: '05 Abril al 06 Abril',
                    hora: '9:00 PM - 3:30 AM',
                    likes: 17,
                    coments: 20,
                    category: 4
                },
                {
                    id:'22',
                    name: 'Concierto: ¡Complaceme! | Eduardo Moreno & Okocán',
                    imagen: 'https://hayevento.com/imgs/d69004196714768125dc2b34c4fb2fa4.jpg',
                    place: 'Plaza de Bolívar - Cra. 7 #11-10',
                    ubicacion: 'Bogota',
                    date: { day:'05',month:'ABR', year:'2018'},
                    fecha: '05 Abril al 06 Abril',
                    hora: '9:00 PM - 3:30 AM',
                    likes: 17,
                    coments: 20,
                    category: 5
                },
                {
                    id:'23',
                    name: 'Noches del Pub / Animal Party',
                    imagen: 'https://hayevento.com/imgs/97b2f974ca5015d85f4bca108374d6b0.jpg',
                    place: 'Plaza de Bolívar - Cra. 7 #11-10',
                    ubicacion: 'Bogota',
                    date: { day:'05',month:'ABR', year:'2018'},
                    fecha: '05 Abril al 06 Abril',
                    hora: '9:00 PM - 3:30 AM',
                    likes: 17,
                    coments: 20,
                    category: 1
                }
    ]
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
            let index = this.$route.params.idEvent
            this.mainEvent.push(this.eventData[index])
            console.log(this.mainEvent)
            //  axios.get(`http://localhost:8080/event.${this.$route.params.idEvent}`)
            // .then(response => {
            //     console.log(response)
            //     this.fillData(response.data.event)
            // })
            // .catch(e => {
            //   console.log(e)
            // })
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
        padding:0px 1.5rem ;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: auto;
        margin:5% auto;
        padding-top: 5%;
        background-color: white;
        width: 80vw;
        height: 100%;
        min-height: 90vh
    }

    #image, #comments{
        grid-column-start: 1;
        grid-column-start: span 2;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        width: 100%;
        height: 100%;
        min-height: 400px;
        // margin: 0px auto;  
    }

    #detail{

        margin: 10% 10px;
        padding:5% 0px;
        color: black;
        h1{
            font-size: 2rem;
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
            margin: 10% 10px;
            // width: 100%;
            // height: 100%;
            // grid-column-start: 1;
            // grid-column-start: span 2;
            
            
        }

        #comments{
         #comment{
             color:black;
             h2{
                 font-size: 14px;
             }
         }
        }
    }
}

</style>

