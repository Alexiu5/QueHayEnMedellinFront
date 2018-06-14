<template>
    <div class="app">
        <vs-row vs-type="flex" vs-align="center" vs-lg="10" vs-sm="10" vs-xs="10" id="container">
            <div class="product">
                <div id="image">
                    <img src="https://hayevento.com/imgs/b43e598d4c90cf4633259cc32ddcd1cd.jpg" width="100%" height="100%" alt="" srcset="">
                </div>
                <div id="detail">
                    <h1>title</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus debitis cupiditate nostrum iure id omnis, eius culpa facilis odio neque perspiciatis animi iusto illo, excepturi, iste dolore exercitationem possimus ducimus.</p>
                    <p>Medellin</p>
                    <p>hora</p>
                    <p>12 Abril al 13 Abril</p>
                    <h4>Teatro Jorge Eliecer Gaitán <br> Carrera 7 Nº 22-47</h4>
                </div>
                <div class="map">
                    
                </div>
            </div>
        </vs-row>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.app {
    background-color: #2a333c;
    color: #c05b5b;
    width: 100vw;
    height: 100vh;

    .product{
        box-shadow: 3px 9px 20px black;
        padding:1%;
        border-radius: 7px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: auto;
        margin:10% auto;
        background-color: white;
        width: 70vw;
        height: 100%;
        min-height: 400px;
    }

    #detail{
        padding:5%;
        h1{
            margin: 0px 0px 10% 0px;
            text-transform: uppercase;
        }
    }
}

</style>

