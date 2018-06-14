<template>

  <vs-row>
    <vs-col vs-offset="2" vs-type="flex" vs-justify="left" vs-align="center" vs-w="8">
      <div class="con-box">
        <div class="box">

           <form-wizard @on-complete="onComplete">
              <tab-content title="01 INFORMACION GENERAL" icon="ti-user"  :before-change="validateFirstStep">
                <div id="infoGeneral">
                  <div class="grid-info-general" id="datosEvento">
                      <h3 class="titleEvento">Datos del Evento</h3>
                      <label for="namevent" class="labelinpu">Nombre del Evento</label>

                      <vs-input id="namevent" class="inpu_name"
                        :vs-valid.sync="validos.name"
                        vs-success-text="Field is valid"
                        vs-danger-text="Field must have at least 5 characters"
                        :vs-validation-function="(value) => value.length > 1"
                        vs-type="custom" 
                        v-model="eventos.title"/>
                    </div>

                    <div class="grid-info-general" id="country">
                      <div class="item">
                        <label for="pais" class="labelinpu labelSelect">Pais:</label>
                        <vs-select
                          id="pais"
                          :vs-valid.sync="validos.country"
                          :vs-validation-function="validar()"
                          class="vs-w-12 left"
                          v-model="eventos.country"
                          :options="countrys" :disabled="eventos.country == 0"/>
                      </div>
                    </div>

                       <!-- Item 2 and 3 -->
                    <div class="grid-info-general" id="state">
                      <div class="item">
                        <label for="pais" class="labelinpu labelSelect">Departamento:</label>
                        <vs-select
                          :vs-valid.sync="validos.depart"
                          :vs-validation-function="validar()"
                          class="vs-w-12 left"
                          label="Departamento:"
                          v-model="eventos.depart"
                          :options="depaartament" :disabled="eventos.country == 0"/>
                      </div>
                    </div>

                    
                    <div class="grid-info-general">
                      <div class="item" id="city">
                        <label for="Ciudad:" class="labelinpu labelSelect">Ciudad:</label>
                        <vs-select
                          id="ciudad"
                          :vs-valid.sync="validos.city"
                          :vs-validation-function="validar()"
                          class="vs-w-12"
                          v-model="eventos.city"
                          :options="citys" :disabled="eventos.depart == 0" />  
                        </div>
                      </div>

                    <div class="details-item" id="type" >
                      <div class="item">
                        <label for="pais" class="labelinpu labelSelect">Tipo de evento:</label>
                        <vs-select
                          :vs-valid.sync="validos.type"
                          :vs-validation-function="validar()"
                          class="vs-w-12 left"
                          v-model="eventos.type"
                          :options="typesEvent"/>

                      </div>

                      </div>

                      <div class="details-item" id="date">
                        <div class="item">
                          <label class="labelinpu labelSelect">Fecha del Evento</label>
                          <el-date-picker
                            format="yyyy-MM-dd"
                            type="date"
                            :vs-valid.sync="validos.date"
                            v-model="eventos.date"
                            placeholder="Pick a day"
                            @input="handleDateChange(eventos.date)"
                            >
                            
                          </el-date-picker>
                        </div>
                      </div>

                        <div class="item">
                          <label class="labelinpu labelSelect">Hora del evento</label>
                          <vs-input
                          class="vs-w-12 left"
                          v-model="eventos.hour"/>
                        </div>

                </div>
              </tab-content>

              
              <tab-content title="02 UBICACION DEL EVENTO" icon="ti-settings">
                <vs-card vs-color="success">
                  <vs-card-body class="addres">
                      <vs-col vs-w="12" vs-justify="center" vs-align="right">
                        <div class="details-item" id="map">
                             <GmapMap 
                             id="googleMap"
                             :zoom="15" 
                             :center="markers.position"
                             ref="map" @click="clicked">

                            <Gmap-Marker
                                :clickable="true"
                                :draggable="true"
                                :key="markers.index"
                                :position="markers.position"
                                ></Gmap-Marker>
                            </GmapMap>
                        </div>
                      </vs-col>
                  </vs-card-body>
                </vs-card>

                <h3 class="titleabout">Sobre el Evento</h3>
                   <div class="con-input con-about">
                       <textarea class=" vs-input about"
                                 :vs-valid.sync="validos.about"
                                 :vs-validation-function="(value) => value.length > 4"
                                 vs-success-text="Correo Valido"
                                 vs-danger-text=""
                                 vs-type="text" vs-label-placeholder="Direccion" v-model="eventos.description"/>
                   </div>

              </tab-content>              
                <vs-button vs-color="#fb2900" vs-type="primary-filled" slot="prev">REGRESAR</vs-button>
                <vs-button vs-color="#fb2900" vs-type="primary-filled" slot="next">CONTINUAR</vs-button>
                <vs-button vs-color="#fb2900" vs-type="primary-filled" slot="finish">ENVIAR EVENTO</vs-button>
            </form-wizard>

          </div>
      </div>
    </vs-col>
  </vs-row>
</template>


<script>
  import Countris from '@/data/CountriesList'
  import Depart from '@/data/DepartamentList'
  import City from '@/data/CityList'
  import dateUtil from 'element-ui/lib/utils/date';
  import axios from 'axios';

  export default {
    name: "editar-evento",
    data() {
      return {
        idEvent:'',
        name_event: '',
        time1: '',
        date_event: '',
        popupActivo: false,
        countrys: [],
        depaartament: [],
        citys: [],
        typesEvent: [ {
          text: 'Seleccione', value: 0
        }],
        selectecost: 'danger',
        typeeve: 0,
        eventabout: '',
        creditCard:{
          fullName:'',
          creditCardName:'',
          idOptions:[{text: 'Seleccione', value: 0},{text: 'CC', value: 1}, {text: 'CE', value: 2}, {text: 'NIT', value: 3}],
          idtype:'',
          idNumber:'',
          billingAddress:'',
          city:'',
          state:'',
          postalCode:'',
          creditCardNumber:'',
          expirationDate:'',
          securityCode:'',
        },
        creditCardValid:{
          fullName:true,
          creditCardName:true,
          idNumber: true,
          billingAddress:true,
          city:true,
          state:true,
          postalCode:true,
          creditCardNumber:true,
          expirationDate:true,
          securityCode:true,
          totalAmount:true,
          idtype:true
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
          cost: 250000
        },
        hora:"",
        addre: {
          country: 0,
          depart: 0,
          city: 0,
          place: '',
          addres: '',
          postalcode: ''
        },
        validos:{
          name: true,
          country:true,
          depart:true,
          type:true,
          date:true,
          city:true,
          place: true,
          addres: true,
          about: true
        },
        markers:{
            index : "Evento",
            latLeng : null,
            position:{
                lat:6.258421, 
                lng:-75.559425
            },
            edited:false
        }
      }
    },
    methods: {
      handleDateChange(date) {
          if(date instanceof Date){
            this.eventos.date = dateUtil.format(date, 'yyyy-MM-dd');
          }
      },
      validateAllFields(){
        let isValidos = this.creditCardValid.fullName && this.creditCardValid.creditCardNumber 
            && this.creditCardValid.idNumber && this.creditCardValid.idtype

        console.log(isValidos)
          return isValidos
      },
      clicked (e) {
        this.markers.position = {
          lat: e.latLng.lat(),
          lng: e.latLng.lng()
        }
      },
      saveCoordinates : function(){
          this.eventos.latitude = this.markers.position.lat
          this.eventos.longitude = this.markers.position.lng
          
        
      },
      alertMap : function(title, message){
            let pMessage = `<p style="font-family: 'Avenir', Helvetica, Arial, sans-serif;">${message}</p>`
            this.$vs.confirm({
                title:title,
                text: pMessage,
                textConfirm:'Aceptar',
                textCancel:'Cancelar',
                color: 'primary',
                confirm:()=>{
                  console.log("everything good")
                  this.saveCoordinates()
                }
            })
      },
        alert : function(title, message, color){
              let pMessage = `<p style="font-family: 'Avenir', Helvetica, Arial, sans-serif;">${message}</p>`
              this.$vs.alert({
                  title:title,
                  text: pMessage,
                  textConfirm:'Aceptar',
                  textCancel:'',
                  color: color
              })
          },
      validateSelect : function(val){
          if(val > 0 ){
           this.creditCardValid.idtype = true;
          }else{
            this.creditCardValid.idtype = false;
          }
      },
      onComplete: function (){
        if(this.validateAllFields()){
          let datasend = {
            "id": this.eventos.id,
            "title": this.eventos.title,
            "description": this.eventos.description,
            "longitude": this.eventos.longitude,
            "latitude": this.eventos.latitude,
            "date":`${this.eventos.date}`,
            "hour": this.eventos.hour,
            "address": " ",
            "active": this.eventos.active,
            "cost": this.eventos.cost,
            "idUser" : this.eventos.userId,
            "eventTypeId": this.eventos.idEventType,
            "publishedActive": this.eventos.publishedActive,
            "publishedDate": this.eventos.publishedDate
          }

          console.log(datasend)
          
          axios.post('http://localhost:8080/event.update', datasend)
          .then((res)=>{
            if(res.status == 200){
              this.alert("Completado", "Se ha realizado el cambio correctamente", "success")
              this.$router.go(-1)
            }
          })
          .catch((err)=>{
            this.alert("Error", "No se pudo actualizar el evento", "primary")
          })
          
        }else{
            this.toast("Error", "Verifica todos los campos")
        }
      },
      validateFirstStep() {
        return new Promise((resolve, reject) => {
          if (this.validos.name) {
            resolve(true)
          } else {
            this.toast("Error", "Datos Faltantes para poder continuar")
            resolve(false)
          }
        })
      },
      createTypes (data) {
        data.forEach(val => {
          this.typesEvent.push({ text: val.name, value: val.id })
        })
      },
      validar() {
        if (this.eventos.country != 0) this.validos.country = true
        else  this.validos.country = false

        if (this.eventos.depart != 0) this.validos.depart = true
        else  this.validos.depart = false

      },
      toast: function(title, message){
        let hTitle = `<h3 style="font-family: 'Avenir', Helvetica, Arial, sans-serif;">${title}</h3>`
        let pMessage = `<p style="font-family: 'Avenir', Helvetica, Arial, sans-serif;">${message}</p>`


        this.$vs.notify({
          title:hTitle,
          text: pMessage,
          color:'primary'})
      },
      alert : function(title, message, type){
        this.$vs.confirm({
            title:title,
            text: message,
            textConfirm:'Aceptar',
            textCancel:'',
            color: type,
            confirm:()=>{
                this.cancel()
            },
            cancel:()=>{
              this.cancel()
            }
        })
      },
      fillData(data){
             this.eventos.id = data.id
             this.eventos.title = data.title
             this.eventos.description= data.description
             this.eventos.longitude= data.longitude
             this.eventos.latitude= data.latitude
             this.eventos.date= data.date
             this.eventos.hour= "21:00:00"
             this.eventos.active= data.active
             this.eventos.type = 1;
             this.eventos.cost= data.cost
             this.eventos.userId= data.userId
             this.eventos.idEventType= data.eventTypeId
             this.eventos.publishedActive= data.publishedActive
             this.eventos.publishedDate= data.publishedDate

             this.markers.position = {
               lat:data.latitude,
               lng:data.longitude
             }

      }
    },
    created() {
      for (var i = 0; i < Countris.length; i++) {
        this.countrys.push({text: Countris[i], value: i})
      }

      for (var i = 0; i < Depart.length; i++) {
        this.depaartament.push({text: Depart[i], value: i})
      }

      for (var i = 0; i < City.length; i++) {
        this.citys.push({text: City[i], value: i})
      }

      axios.get(`http://localhost:8080/event.${this.$route.params.idEvent}`)
        .then(response => {
          this.fillData(response.data.event)
        })
        .catch(e => {
          console.log(e)
        })

      axios.get(`http://localhost:8080/event.type.list`)
        .then(response => {
          // JSON responses are automatically parsed.
          var data = response.data
          this.createTypes(data.eventTypes)
        })
        .catch(e => {
          this.errors.push(e)
        })


    },
    mounted(){
    },
    watch:{
      hora :function(){
        console.log(this.hora)
      }
    }
  }
</script>

<style lang="scss">
  .creditCardForm{
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: auto;
  }

  input {
    outline: none !important;
  }
  .con-box {
    padding-top: 40px;
    width: calc(100% - 30px)  !important;
    margin-left: 15px;
    margin-top: -40px;
    .box {
      margin-top: 15px;
      background: #fff;
      border-radius: 6px;
      -webkit-box-shadow: 0 20px 40px -15px rgba(0,0,0,.13);
      box-shadow: 0 20px 40px -15px rgba(0,0,0,.13);
      margin-bottom: 15px;
      padding-bottom: 10px;
    }
    .inpu_name {
      margin-top: 2em;
    }
    .el-date-editor.el-input {
      width: 100%;
      padding: 0px 0px;
    }
    .titleEvento {
      color: #2b333c;
      padding-top: 23px;
      padding-bottom: 15px;
      text-align: left;
      padding-left: 15px;
      font-weight: 400;
    }
  }
  .addres {
    display: inline-flex;
    padding: 10px;
    .add_detail {
      width: 100%;
      padding-right: 20px;
      text-align: left;
      ul {
        list-style: none;
      }
      .direccion {
        margin-top: 1.5rem;
      }
    }
    .con-vs-card-media {
      width: 100%;
    }

  }
  .modalwhidt {
    .vs-popup {
      width: calc(65% - 30px);
    }
  }
  .labelinpu {
    bottom: -9px;
    left: 14px;
    font-size: 15px;
    position: relative;
    display: block;
    font-weight: 500;
    color: #fb2a01;
    text-align: left;
  }
  .wizard-header {
    opacity: 0;
  }
  .wizard-tab-container {
    padding: 0 35px;
  }
  .stepTitle {
    padding-top: 15px;
  }
  .con-about {
    padding: 0 2em;
    .about {
      border: 1px solid rgba(0, 0, 0, 0.15);
      border-radius: 5px;
      width: 100%;
      min-height: 200px;
      outline: none;
      &:focus {
        -webkit-box-shadow: 0 3px 10px 0 rgba(0, 0, 0, .15);
        box-shadow: 0 3px 10px 0 rgba(0, 0, 0, .15);
        border: 1px solid rgba(var(--danger), .7);
      }
    }
  }
  .cheekfree, .con-radio {
    justify-content: left !important;
    text-align: left;
  }
  .titleabout {
    display: block;
    position: relative;
    margin-top: 2em;
    margin-bottom: 1em;
    text-align: left;
    padding-left: 25px;
  }

  #infoGeneral{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, .5r);
    
    .grid-info-general{
      margin: 10px 5px;
    }

    #country{
      select{
        width: 100px;
      }
    }

    #datosEvento{
      grid-column-start: 1;
      grid-column-end: span 3;
    }

    #type{
      grid-column-start: 1;
      grid-column-end: span 1;
    }

    #date{
      grid-column-start: 2;
      grid-column-end: span 1;
      grid-row-start: 3;
      grid-row-end: span 3; 
    }
  }

  .item{
    max-width: 100%;
    padding: 10px
  }

  .labelSelect{
    margin: 1.5rem -10px;
  }

  #googleMap{
    position:relative;
    float: right;
    width:50vw;
    height: 400px;
  }

  #totalAmmount{
    color:black;
    font-weight: bold;
  }

  #idType{
    text-transform:capitalize;
  }
</style>
