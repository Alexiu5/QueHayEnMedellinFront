<template>

  <vs-row>
    <vs-col vs-offset="2" vs-type="flex" vs-justify="center" vs-align="center" vs-w="8">
      <div class="con-box">
        <div class="box">

           <form-wizard @on-complete="onComplete">
              <tab-content title="01 INFORMACION GENERAL"
                           icon="ti-user"  :before-change="validateFirstStep">

                <vs-row vs-align="flex-start">
                  <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-xs="12">
                    <div class="vs-w-12">
                      <h3 class="titleEvento">Datos del Evento</h3>
                      <label for="namevent" class="labelinpu">Nombre del Evento</label>
                      <vs-input id="namevent" class="inpu_name"
                        :vs-valid.sync="validos.name"
                        vs-success-text="Field is valid"
                        vs-danger-text="Field must have at least 5 characters"
                        :vs-validation-function="(value) => value.length > 1"
                        vs-type="custom" v-model="eventos.title"/>
                    </div>
                  </vs-col>
                </vs-row>
                <vs-row vs-align="flex-start">
                  <vs-col vs-type="flex" vs-justify="left" vs-align="left" vs-lg="6" vs-sm="12" vs-xs="12" >
                    <div class="con-select vs-w-12">
                      <vs-select
                        :vs-valid.sync="validos.county"
                        :vs-validation-function="validar()"
                        class="vs-w-12 left"
                        label="Pais:"
                        v-model="eventos.county"
                        :options="countrys"/>
                    </div>
                  </vs-col>
                  <vs-col vs-type="flex" vs-justify="left" vs-align="center" vs-lg="6" vs-sm="12" vs-xs="12" >
                    <div class="con-select vs-w-12">
                      <vs-select
                        :vs-valid.sync="validos.depart"
                        :vs-validation-function="validar()"
                        class="vs-w-12 left"
                        label="Departamento:"
                        v-model="eventos.depart"
                        :options="depaartament" :disabled="eventos.country == 0"/>
                    </div>
                  </vs-col>
                </vs-row>
                <vs-row vs-align="flex-start">
                  <vs-col vs-type="flex" vs-justify="left" vs-align="left" vs-lg="6" vs-sm="12" vs-xs="12" >
                    <div class="con-select vs-w-12">
                      <vs-select
                        :vs-valid.sync="validos.type"
                        :vs-validation-function="validar()"
                        class="vs-w-12 left"
                        label="Typo Evento:"
                        v-model="eventos.type"
                        :options="typesEvent"/>

                    </div>
                  </vs-col>
                  <vs-col vs-type="flex" vs-justify="left" vs-align="center" vs-lg="6" vs-sm="12" vs-xs="12" >
                    <div class="con-select vs-w-12">
                      <label class="labelinpu">Fecha del Evento</label>
                      <el-date-picker
                        :vs-valid.sync="validos.date"
                        :vs-validation-function="validar()"
                        v-model="eventos.date"
                        type="date"
                        placeholder="Pick a day">
                      </el-date-picker>
                    </div>
                  </vs-col>
                </vs-row>


              </tab-content>
              <tab-content title="02 UBICACION DEL EVENTO"
                           icon="ti-settings">
                <vs-card vs-color="success">
                  <vs-card-body class="addres">
                    <div class="add_detail">
                      <ul>
                        <li>
                          <vs-row vs-align="flex-start">
                            <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="6" vs-sm="12" >
                              <vs-select
                                :vs-valid.sync="validos.city"
                                :vs-validation-function="validar()"
                                class="vs-w-12"
                                label="Ciudad:"
                                v-model="eventos.city"
                                :options="citys" :disabled="eventos.depart == 0" />
                            </vs-col>
                            <vs-col vs-type="block" vs-justify="center" vs-align="center" vs-lg="6" vs-sm="12" >
                              <label for="place" class="labelinpu">Lugar:</label>
                              <vs-input id="place"
                                        :vs-valid.sync="validos.place"
                                        :vs-validation-function="(value) => value.length > 2"
                                        vs-success-text="Lugar Valido"
                                        vs-danger-text="Falta el Luega"
                                        vs-type="text" v-model="eventos.place"/>
                            </vs-col>
                          </vs-row>
                        </li>
                        <li>
                          <vs-row vs-align="flex-start">
                          <vs-col vs-type="block" vs-justify="center" vs-align="center" vs-lg="12" vs-sm="12" >
                            <vs-input class="direccion"
                                      :vs-valid.sync="validos.addres"
                                      :vs-validation-function="(value) => value.length > 4"
                                      vs-success-text="Correo Valido"
                                      vs-danger-text=""
                                      vs-type="text" vs-label-placeholder="Direccion" v-model="eventos.address"/>
                          </vs-col>
                        </vs-row></li>

                      </ul>
                    </div>
                    <vs-card-media vs-media="https://www.google.com/maps/about/images/mymaps/mymaps-desktop-16x9.png"></vs-card-media>
                  </vs-card-body>
                </vs-card>

                <h3 class="titleabout">Sobre el Evento</h3>
                <vs-row vs-align="flex-start">
                  <vs-col vs-type="block" vs-justify="center" vs-align="center" vs-lg="12" vs-sm="12" >
                   <div class="con-input con-about">
                       <textarea class=" vs-input about"
                                 :vs-valid.sync="validos.about"
                                 :vs-validation-function="(value) => value.length > 4"
                                 vs-success-text="Correo Valido"
                                 vs-danger-text=""
                                 vs-type="text" vs-label-placeholder="Direccion" v-model="eventos.description"/>
                   </div>
                  </vs-col>
                </vs-row>
              </tab-content>
              <tab-content title="03 SECCION DE PAGO"
                           icon="ti-check">

                <h3 class="titleEvento">Formas de Pago</h3>
                <vs-card vs-color="danger">
                  <vs-card-header :vs-background-color="selectecost" vs-title="Free" vs-icon="error" :vs-fill="true"></vs-card-header>
                  <vs-card-body>
                    <vs-row vs-align="flex-start">
                      <vs-col vs-type="block" vs-justify="left" vs-align="left" vs-lg="6" vs-sm="12" >
                        <vs-radio vs-color="danger" v-model="eventos.cost" vs-value="0" class="cheekfree">$0.0 USD / <small>Event Free</small></vs-radio>
                      </vs-col>
                    </vs-row>

                  </vs-card-body>
                </vs-card>
                <br><br>

                <vs-card vs-color="warning">
                  <vs-card-header :vs-background-color="selectecost" vs-title="Agregar Pago" vs-icon="warning"></vs-card-header>
                  <vs-card-body>

                    <vs-row vs-align="flex-start">

                      <vs-col vs-type="block" vs-justify="left" vs-align="left" vs-lg="3" vs-sm="12" >
                        <vs-radio vs-color="danger" v-model="eventos.cost" vs-value="100">Credit Card</vs-radio>
                      </vs-col>
                      <vs-col class="left" vs-type="block" vs-justify="left" vs-align="left" vs-lg="6" vs-sm="12" >
                      <span>Safe money transfer using your bank account. Visa, Maestro, Discover, American Express.</span>
                    </vs-col>
                      <vs-col vs-type="block" vs-justify="left" vs-align="left" vs-lg="2" vs-sm="12" >

                        <svg width="100%" viewBox="0 0 212 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                          <defs>
                            <path d="M2.5,0 L57.5,0 C58.875,0 60,1.059 60,2.353 L60,37.647 C60,38.941 58.875,40 57.5,40 L2.5,40 C1.125,40 0,38.941 0,37.647 L0,2.353 C0,1.059 1.125,0 2.5,0 Z" id="path-1"></path>
                            <path d="M9.188,0.5 C14.188,0.5 18.25,4.562 18.25,9.562 C18.25,14.562 14.188,18.625 9.188,18.625 C4.188,18.625 0.125,14.562 0.125,9.562 C0.125,4.562 4.188,0.5 9.188,0.5 Z" id="path-3"></path>
                            <polygon id="path-5" points="0.375 0.875 6.625 0.875 6.625 2.125 0.375 2.125"></polygon>
                            <path d="M9.812,18.625 C4.812,18.625 0.75,14.562 0.75,9.562 C0.75,4.562 4.812,0.5 9.812,0.5 C14.812,0.5 18.875,4.562 18.875,9.562 C18.875,14.562 14.812,18.625 9.812,18.625 Z" id="path-7"></path>
                            <path d="M1.375,9.625 L1.375,8.375 L9.5,8.375 L9.5,9.625 L1.375,9.625 Z M1.375,0.875 L9.5,0.875 L9.5,2.125 L1.375,2.125 L1.375,0.875 Z M8.875,4.625 L0.75,4.625 L0.75,3.375 L8.875,3.375 L8.875,4.625 Z M8.875,7.125 L0.75,7.125 L0.75,5.875 L8.875,5.875 L8.875,7.125 Z" id="path-9"></path>
                            <polygon id="path-11" points="0 0.588 60 0.588 60 19.412 0 19.412"></polygon>
                            <path d="M2.5,0 L57.5,0 C58.875,0 60,1.059 60,2.353 L60,10.588 L0,10.588 L0,2.353 C0,1.059 1.125,0 2.5,0 Z" id="path-13"></path>
                            <path d="M0,0.412 L60,0.412 L60,8.647 C60,9.941 58.875,11 57.5,11 L2.5,11 C1.125,11 0,9.941 0,8.647 L0,0.412 Z" id="path-15"></path>
                            <polygon id="path-17" points="0.187 9.941 2 0 4.875 0 3.062 9.941"></polygon>
                            <path d="M9.5,1.294 L9,3.353 L8.75,3.235 C8.25,3.059 7.562,2.882 6.625,2.882 C5.5,2.882 5,3.353 5,3.765 C5,4.235 5.625,4.529 6.625,5 C8.312,5.706 9.062,6.588 9.062,7.706 C9.062,9.765 7.062,11.118 4.062,11.118 C2.812,11.118 1.562,10.882 0.875,10.588 L1.25,8.353 L1.625,8.588 C2.562,8.941 3.187,9.118 4.312,9.118 C5.187,9.118 6.062,8.765 6.062,8.118 C6.062,7.706 5.687,7.353 4.562,6.882 C3.5,6.412 2.062,5.588 2.062,4.176 C2.062,2.235 4.062,0.882 6.937,0.882 C8.062,0.882 8.937,1.118 9.5,1.294 Z" id="path-19"></path>
                            <path d="M8.875,0.059 L11.25,10 L8.563,10 C8.563,10 8.25,8.882 8.188,8.529 L4.5,8.529 C4.375,8.765 3.875,10 3.875,10 L0.875,10 L5.125,0.882 C5.438,0.235 5.938,0.059 6.625,0.059 L8.875,0.059 Z M5.312,6.412 L5.312,6.471 L7.688,6.471 C7.562,5.941 7,3.588 7,3.588 L6.812,2.706 C6.688,3.059 6.438,3.647 6.438,3.647 C6.438,3.647 5.562,5.824 5.312,6.412 Z" id="path-21"></path>
                            <path d="M7.75,0.059 L7.75,0 L10.875,0 L6.313,9.941 L3.25,9.941 L0.625,1.294 C2.438,2.176 4.125,3.882 4.625,5.471 L4.938,6.824 L7.75,0.059 Z" id="path-23"></path>
                            <path d="M5.312,0 C5.938,0.059 6.5,0.235 6.625,0.882 L7.625,5.412 C6.625,3.059 4.25,1.059 0.625,0.235 L0.688,0 L5.312,0 Z" id="path-25"></path>
                            <path d="M2.5,0 L57.5,0 C58.875,0 60,1.059 60,2.353 L60,37.647 C60,38.941 58.875,40 57.5,40 L2.5,40 C1.125,40 0,38.941 0,37.647 L0,2.353 C0,1.059 1.125,0 2.5,0 Z" id="path-27"></path>
                            <path d="M34.25,0.294 C34.563,0.294 34.875,0.588 34.875,0.882 L34.875,2.647 C34.875,3 34.625,3.235 34.25,3.235 L29.875,3.235 L29.875,3.824 L34.125,3.824 C34.5,3.824 34.75,4.059 34.75,4.412 L34.75,6.176 C34.75,6.529 34.5,6.765 34.125,6.765 L29.875,6.765 L29.875,7.353 L34.25,7.353 C34.625,7.353 34.875,7.588 34.875,7.941 L34.875,9.706 C34.875,10.059 34.625,10.294 34.25,10.294 L26.75,10.294 C26.438,10.294 26.125,10.059 26.125,9.765 C26.125,10.059 25.813,10.294 25.5,10.294 L23,10.294 C22.625,10.294 22.375,10.059 22.375,9.706 L22.375,6.294 L20.75,9.941 C20.688,10.176 20.438,10.294 20.188,10.294 L18.25,10.294 C18,10.294 17.813,10.176 17.688,9.941 L16.125,6.353 L16.125,9.706 C16.125,10.059 15.875,10.294 15.5,10.294 L10.5,10.294 C10.25,10.294 10.063,10.176 9.938,9.941 L9.063,7.941 L5.625,7.941 L4.688,9.941 C4.625,10.176 4.375,10.294 4.125,10.294 L1.438,10.294 C1.25,10.294 1.063,10.176 0.938,10 C0.813,9.824 0.813,9.588 0.875,9.412 L5.188,0.588 C5.313,0.353 5.5,0.235 5.75,0.235 L9.063,0.235 C9.313,0.235 9.5,0.353 9.625,0.588 L12.375,6.353 L12.375,0.824 C12.375,0.471 12.625,0.235 13,0.235 L16.25,0.235 C16.5,0.235 16.688,0.412 16.813,0.588 L19.313,5.353 L21.313,0.647 C21.375,0.412 21.625,0.294 21.875,0.294 L25.5,0.294 C25.813,0.294 26.125,0.529 26.125,0.824 C26.125,0.529 26.438,0.294 26.75,0.294 L34.25,0.294 Z M6.813,5 L7.938,5 L7.375,3.824 L6.813,5 Z" id="path-29"></path>
                            <path d="M10.688,7.882 C10.812,8 10.875,8.118 10.875,8.294 L10.875,9.706 C10.875,9.882 10.812,10 10.688,10.118 C10.562,10.235 10.438,10.294 10.25,10.294 L8.625,10.294 C8.5,10.294 8.312,10.235 8.188,10.118 L5.812,7.765 L3.438,10.118 C3.312,10.235 3.188,10.294 3,10.294 L1.5,10.294 C1.125,10.294 0.875,10.059 0.875,9.706 L0.875,0.882 C0.875,0.529 1.125,0.294 1.5,0.294 L3.188,0.294 C3.375,0.294 3.5,0.353 3.625,0.529 L5.875,2.941 L8.062,0.471 C8.188,0.353 8.375,0.294 8.562,0.294 L10.25,0.294 C10.438,0.294 10.562,0.353 10.688,0.471 C10.812,0.588 10.875,0.706 10.875,0.882 L10.875,2.412 C10.875,2.588 10.812,2.706 10.688,2.824 L8.188,5.353 L10.688,7.882 Z M2.125,6.765 L3.562,5.294 L2.125,3.882 L2.125,6.765 Z" id="path-31"></path>
                            <polygon id="path-33" points="0.875 3.588 2.375 0.412 3.875 3.588"></polygon>
                            <polygon id="path-35" points="0.5 6.294 0.5 0.412 3.438 3.353"></polygon>
                            <path d="M45.188,8.471 C45.375,8.706 45.5,9 45.5,9.294 L45.5,10.706 C45.5,11 45.375,11.294 45.125,11.529 C44.875,11.765 44.563,11.882 44.25,11.882 L42.75,11.882 C42.375,11.882 42.063,11.765 41.813,11.529 L39.875,9.588 L37.938,11.529 C37.688,11.765 37.313,11.882 37,11.882 L35.5,11.882 C35.25,11.882 35.063,11.824 34.875,11.706 C34.688,11.824 34.5,11.882 34.25,11.882 L26.75,11.882 C26.5,11.882 26.313,11.824 26.125,11.706 C25.938,11.824 25.75,11.882 25.5,11.882 L23,11.882 C22.313,11.882 21.75,11.353 21.75,10.706 L21.75,10.412 L21.375,11.294 C21.125,11.706 20.688,12 20.188,12 L18.25,12 C17.75,12 17.313,11.706 17.125,11.294 L16.75,10.412 L16.75,10.824 C16.75,11.471 16.188,12 15.5,12 L10.5,12 C9.938,12 9.5,11.706 9.313,11.235 L8.625,9.588 L6,9.588 L5.25,11.235 C5.063,11.647 4.625,11.941 4.125,11.941 L1.438,11.941 C1,11.941 0.625,11.765 0.375,11.412 C0.188,11.059 0.125,10.647 0.313,10.294 L4.625,1.471 C4.813,1.059 5.25,0.765 5.75,0.765 L9.063,0.765 C9.563,0.765 10,1.059 10.188,1.471 L11.75,4.706 L11.75,1.941 C11.75,1.294 12.313,0.765 13,0.765 L16.188,0.765 C16.688,0.765 17.125,1 17.313,1.412 L19.188,5 L20.688,1.471 C20.875,1 21.375,0.706 21.875,0.706 L25.5,0.706 C25.75,0.706 25.938,0.765 26.125,0.882 C26.313,0.765 26.5,0.706 26.75,0.706 L34.25,0.706 C34.5,0.706 34.688,0.765 34.875,0.882 C35.063,0.765 35.25,0.706 35.5,0.706 L37.188,0.706 C37.563,0.706 37.875,0.882 38.125,1.118 L39.875,3 L41.625,1.118 C41.875,0.824 42.188,0.706 42.563,0.706 L44.25,0.706 C44.563,0.706 44.875,0.824 45.125,1.059 C45.375,1.294 45.5,1.588 45.5,1.882 L45.5,3.412 C45.5,3.706 45.375,4 45.188,4.235 L43.063,6.353 L45.188,8.471 Z M25.5,10.706 L25.5,1.882 L21.875,1.882 L19.375,7.824 L16.25,1.882 L13.063,1.882 L13.063,10.118 L9.125,1.882 L5.813,1.882 L1.5,10.706 L4.188,10.706 L5.25,8.353 L9.5,8.353 L10.5,10.706 L15.5,10.706 L15.5,4.353 L18.25,10.706 L20.188,10.706 L23,4.294 L23,10.706 L25.5,10.706 Z M34.25,3.647 L34.25,1.882 L26.75,1.882 L26.75,10.706 L34.25,10.706 L34.25,8.941 L29.25,8.941 L29.25,7.176 L34.125,7.176 L34.125,5.412 L29.25,5.412 L29.25,3.647 L34.25,3.647 Z M42.75,10.706 L44.25,10.706 L44.25,9.294 L41.312,6.353 L44.25,3.412 L44.25,1.882 L42.562,1.882 L39.875,4.824 L37.188,1.882 L35.5,1.882 L35.5,10.706 L37,10.706 L39.875,7.882 L42.75,10.706 Z" id="path-37"></path>
                          </defs>
                          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="Artboard" transform="translate(-1720.000000, -920.000000)">
                              <g id="Page-1" transform="translate(-254.000000, -4.000000)">
                                <g id="Group" transform="translate(1974.000000, 924.000000)">
                                  <g id="Group-73">
                                    <mask id="mask-2" fill="white">
                                      <use xlink:href="#path-1"></use>
                                    </mask>
                                    <g id="Clip-72"></g>
                                    <polygon id="Fill-71" fill="#4361C3" mask="url(#mask-2)" points="-10 50 70 50 70 -10 -10 -10"></polygon>
                                  </g>
                                  <g id="Group-76" transform="translate(28.000000, 12.000000)">
                                    <mask id="mask-4" fill="white">
                                      <use xlink:href="#path-3"></use>
                                    </mask>
                                    <g id="Clip-75"></g>
                                    <polygon id="Fill-74" fill="#FFAF38" mask="url(#mask-4)" points="-9.875 28.625 28.25 28.625 28.25 -9.5 -9.875 -9.5"></polygon>
                                  </g>
                                  <g id="Group-79" transform="translate(29.000000, 16.000000)">
                                    <mask id="mask-6" fill="white">
                                      <use xlink:href="#path-5"></use>
                                    </mask>
                                    <g id="Clip-78"></g>
                                    <polygon id="Fill-77" fill="#FFAF38" mask="url(#mask-6)" points="-9.625 12.125 16.625 12.125 16.625 -9.125 -9.625 -9.125"></polygon>
                                  </g>
                                  <g id="Group-82" transform="translate(13.000000, 12.000000)">
                                    <mask id="mask-8" fill="white">
                                      <use xlink:href="#path-7"></use>
                                    </mask>
                                    <g id="Clip-81"></g>
                                    <polygon id="Fill-80" fill="#EB3636" mask="url(#mask-8)" points="-9.25 28.625 28.875 28.625 28.875 -9.5 -9.25 -9.5"></polygon>
                                  </g>
                                  <g id="Group-85" transform="translate(28.000000, 16.000000)">
                                    <mask id="mask-10" fill="white">
                                      <use xlink:href="#path-9"></use>
                                    </mask>
                                    <g id="Clip-84"></g>
                                    <polygon id="Fill-83" fill="#FFAF38" mask="url(#mask-10)" points="-9.25 19.625 19.5 19.625 19.5 -9.125 -9.25 -9.125"></polygon>
                                  </g>
                                  <g id="Group-91" transform="translate(76.000000, 10.000000)">
                                    <mask id="mask-12" fill="white">
                                      <use xlink:href="#path-11"></use>
                                    </mask>
                                    <g id="Clip-90"></g>
                                    <polygon id="Fill-89" fill="#F9F9F9" mask="url(#mask-12)" points="-10 29.412 70 29.412 70 -9.41153 -10 -9.41153"></polygon>
                                  </g>
                                  <g id="Group-94" transform="translate(76.000000, 0.000000)">
                                    <mask id="mask-14" fill="white">
                                      <use xlink:href="#path-13"></use>
                                    </mask>
                                    <g id="Clip-93"></g>
                                    <polygon id="Fill-92" fill="#09599E" mask="url(#mask-14)" points="-10 20.588 70 20.588 70 -10.00024 -10 -10.00024"></polygon>
                                  </g>
                                  <g id="Group-97" transform="translate(76.000000, 29.000000)">
                                    <mask id="mask-16" fill="white">
                                      <use xlink:href="#path-15"></use>
                                    </mask>
                                    <g id="Clip-96"></g>
                                    <polygon id="Fill-95" fill="#E59703" mask="url(#mask-16)" points="-10 21 70 21 70 -9.58824 -10 -9.58824"></polygon>
                                  </g>
                                  <g id="Group-103" transform="translate(99.000000, 15.000000)">
                                    <mask id="mask-18" fill="white">
                                      <use xlink:href="#path-17"></use>
                                    </mask>
                                    <g id="Clip-102"></g>
                                    <polygon id="Fill-101" fill="#00589F" mask="url(#mask-18)" points="-9.813 19.941 14.8745 19.941 14.8745 -10.00018 -9.813 -10.00018"></polygon>
                                  </g>
                                  <g id="Group-106" transform="translate(103.000000, 14.000000)">
                                    <mask id="mask-20" fill="white">
                                      <use xlink:href="#path-19"></use>
                                    </mask>
                                    <g id="Clip-105"></g>
                                    <polygon id="Fill-104" fill="#00589F" mask="url(#mask-20)" points="-9.125 21.118 19.5 21.118 19.5 -9.11729 -9.125 -9.11729"></polygon>
                                  </g>
                                  <g id="Group-109" transform="translate(111.000000, 15.000000)">
                                    <mask id="mask-22" fill="white">
                                      <use xlink:href="#path-21"></use>
                                    </mask>
                                    <g id="Clip-108"></g>
                                    <polygon id="Fill-107" fill="#00589F" mask="url(#mask-22)" points="-9.125 20 21.25 20 21.25 -9.94118 -9.125 -9.94118"></polygon>
                                  </g>
                                  <g id="Group-112" transform="translate(89.000000, 15.000000)">
                                    <mask id="mask-24" fill="white">
                                      <use xlink:href="#path-23"></use>
                                    </mask>
                                    <g id="Clip-111"></g>
                                    <polygon id="Fill-110" fill="#00589F" mask="url(#mask-24)" points="-9.375 19.941 20.875 19.941 20.875 -10.00018 -9.375 -10.00018"></polygon>
                                  </g>
                                  <g id="Group-115" transform="translate(86.000000, 15.000000)">
                                    <mask id="mask-26" fill="white">
                                      <use xlink:href="#path-25"></use>
                                    </mask>
                                    <g id="Clip-114"></g>
                                    <polygon id="Fill-113" fill="#F9A51A" mask="url(#mask-26)" points="-9.375 15.412 17.625 15.412 17.625 -9.99976 -9.375 -9.99976"></polygon>
                                  </g>
                                  <g id="Group-118" transform="translate(152.000000, 0.000000)">
                                    <mask id="mask-28" fill="white">
                                      <use xlink:href="#path-27"></use>
                                    </mask>
                                    <g id="Clip-117"></g>
                                    <polygon id="Fill-116" fill="#2AA0D0" mask="url(#mask-28)" points="-10 50 70 50 70 -10 -10 -10"></polygon>
                                  </g>
                                  <g id="Group-121" transform="translate(159.000000, 15.000000)">
                                    <mask id="mask-30" fill="white">
                                      <use xlink:href="#path-29"></use>
                                    </mask>
                                    <g id="Clip-120"></g>
                                    <polygon id="Fill-119" fill="#2AA0D0" mask="url(#mask-30)" points="-9.166 20.294 44.87505 20.294 44.87505 -9.76482 -9.166 -9.76482"></polygon>
                                  </g>
                                  <g id="Group-124" transform="translate(193.000000, 15.000000)">
                                    <mask id="mask-32" fill="white">
                                      <use xlink:href="#path-31"></use>
                                    </mask>
                                    <g id="Clip-123"></g>
                                    <polygon id="Fill-122" fill="#2AA0D0" mask="url(#mask-32)" points="-9.125 20.294 20.875 20.294 20.875 -9.706 -9.125 -9.706"></polygon>
                                  </g>
                                  <g id="Group-127" transform="translate(164.000000, 17.000000)">
                                    <mask id="mask-34" fill="white">
                                      <use xlink:href="#path-33"></use>
                                    </mask>
                                    <g id="Clip-126"></g>
                                    <polygon id="Fill-125" fill="#FFFFFF" mask="url(#mask-34)" points="-9.125 13.588 13.875 13.588 13.875 -9.58847 -9.125 -9.58847"></polygon>
                                  </g>
                                  <g id="Group-130" transform="translate(194.000000, 17.000000)">
                                    <mask id="mask-36" fill="white">
                                      <use xlink:href="#path-35"></use>
                                    </mask>
                                    <g id="Clip-129"></g>
                                    <polygon id="Fill-128" fill="#FFFFFF" mask="url(#mask-36)" points="-9.5 16.294 13.4375 16.294 13.4375 -9.58835 -9.5 -9.58835"></polygon>
                                  </g>
                                  <g id="Group-133" transform="translate(159.000000, 14.000000)">
                                    <mask id="mask-38" fill="white">
                                      <use xlink:href="#path-37"></use>
                                    </mask>
                                    <g id="Clip-132"></g>
                                    <polygon id="Fill-131" fill="#FFFFFF" mask="url(#mask-38)" points="-9.801 22 55.49971 22 55.49971 -9.29412 -9.801 -9.29412"></polygon>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>

                      </vs-col>
                    </vs-row>

                  </vs-card-body>
                </vs-card>

              </tab-content>
             <vs-button vs-color="#fb2900" vs-type="primary-filled" slot="prev">REGRESAR</vs-button>
             <vs-button vs-color="#fb2900" vs-type="primary-filled" slot="next">CONTINUAR</vs-button>
             <vs-button vs-color="#fb2900" vs-type="primary-filled" slot="finish">ENVIAR EVENTO</vs-button>
            </form-wizard>

          </div>

        <pre>
          {{ eventos }}
           {{ validos }}
        </pre>
      </div>
    </vs-col>
  </vs-row>



</template>

<script>

  import Countris from '@/data/CountriesList'
  import Depart from '@/data/DepartamentList'
  import City from '@/data/CityList'
  import axios from 'axios';

  export default {
    name: "publicar-event",
    data() {
      return {
        name_event: '',
        time1: '',
        date_event: '',
        popupActivo: false,
        countrys: [],
        depaartament: [],
        citys: [],
        typesEvent: [ {
          text: 'Seleccione Opcion', value: 0
        }],
        costs: 'Free',
        selectecost: 'danger',
        typeeve: 0,
        eventabout: '',

        eventos: {
          title: '',
          description: '',
          longitude: '',
          latitude: '',
          date:'',
          active: 1,
          idUser: 1,
          idEventType: 1,
          publishedDate: Date.now(),
          publishedActive: true,
          creationDate: Date.now(),
          updateDate: Date.now(),
          tagIds: [],
          county: '',
          depart:'',
          type:'',
          city:'',
          place: '',
          address: '',
          cost: 0
        },

        addre: {
          country: 0,
          depart: 0,
          city: 0,
          place: '',
          addres: '',
          postalcode: ''
        },
        validos:{
          name: false,
          county:false,
          depart:false,
          type:false,
          date:false,
          city:false,
          place: false,
          addres: false,
          about: false,
          cost: false
        },
        options1:[
          {text:'Selecciona 1', value: null},
          {text:'IT',value:1},
          {text:'Blade Runner',value:2},
          {text:'Thor Ragnarok',value:3},
        ],
      }
    },
    methods: {
      onComplete: () => {
        var datasend = JSON.stringify(this.eventos)

        console.log(datasend)
        axios({
          method: 'post',
          url: 'http://localhost:8080/event.create',
          data: datasend
        })
          .then(response => {

           console.log(response)
          })
          .catch(e => {
            console.log(e)
          })
      },
      validateFirstStep() {
        return new Promise((resolve, reject) => {
          if (this.validos.name) {
            resolve(true)
          } else {
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
        if (this.eventos.county != 0) this.validos.county = true
        else  this.validos.county = false

        if (this.eventos.depart != 0) this.validos.depart = true
        else  this.validos.depart = false

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

      axios.get(`http://localhost:8080/event.type.list`)
        .then(response => {
          // JSON responses are automatically parsed.
          var data = response.data
          this.createTypes(data.eventTypes)
        })
        .catch(e => {
          this.errors.push(e)
        })

    }
  }
</script>

<style lang="scss">
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
      width: 94%;
      padding: 17px 0;
    }
    .titleEvento {
      color: #2b333c;
      padding-top: 23px;
      padding-bottom: 15px;
      text-align: left;
      padding-left: 15px;
      font-weight: 400;
    }
    .vs-input {
      padding: 12px;
    }
  }
  .addres {
    display: inline-flex;
    .add_detail {
      width: 100%;
      padding-right: 20px;
      text-align: left;
      ul {
        list-style: none;
      }
      .direccion {
        margin-top: 20px;
      }
    }
    .con-vs-card-media {
      width: 70%;
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

</style>
