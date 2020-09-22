<template>
    <div class="container">
        <div class="row ">
            <div class="container2 container_slider">
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">

                    <div class="carousel-inner">
                        <div class="carousel-item active">

                            <div class="row justify-content-center">
                                <div v-for="produit in produits" :key="produit.id"
                                    class="text-center col-lg-3 col-md-4 col-7 slider_box ">
                                    <h4>{{ produit.marque }}</h4>

                                    <img class="imgBx" :src="require(`@/assets/${produit.Images[0].image}.png`)">


                                    <div class="contentBx">
                                        <h2>{{ produit.nom }}</h2>
                                        <div class="size">
                                            <h3>Tailles :</h3>
                                            <span>{{ produit.Tailles[0].taille }}</span>
                                        </div>

                                        <router-link :to="`/pageproduit/${produit.id}`">
                                            Voir plus
                                        </router-link>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>








        <!-- <div class="row">
            <div v-for="produit in produits" :key="produit.id" class="col-md-2 slider_box ">
                <h4>{{ produit.marque }}</h4>

                <img class="imgBx" :src="require(`@/assets/${produit.Images[0].image}.png`)">


                <div class="contentBx">
                    <h2>{{ produit.nom }}</h2>
                    <div class="size">
                        <h3>Taille :</h3>
                        <span></span>
                    </div>

                    <router-link :to="`/pageproduit/${produit.id}`">
                        Voir plus
                    </router-link>
                </div>

            </div>
        </div> -->







    </div>
</template>

<script>
    export default {
        name: 'slider2',

        data() {
            return {
                produits: {},
            };
        },
        created() {
            this.axios
                .get("http://localhost:3000/produit/order1/3")
                .then((res) => {
                    this.produits = res.data.produits;
                })
                .catch((err) => {
                    alert(err);
                });
        },

    }
</script>

<style>
    /* css */


.carousel-control-next-icon{
    margin-left: 50%;
}
.carousel-control-prev-icon{
    margin-right: 50%;
}


    /* .carousel-inner {
        background: #6844ff;
        
    } */



    /* slider container + card produit */
    .container_slider {
        width: 100%;
        overflow: hidden;
    }

    .container_slider .slider_box {
        position: relative;
        display: flex;
        width: 100%;
        height: 420px;
        background: #232323;
        border-radius: 20px;
        overflow: hidden;
        align-content: center !important;
        align-items: center !important;
        text-align: center;
        /* box-shadow: 0px 0px 40px black; */

        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin: 10px 30px;
        /* box-sizing: border-box; */
    }

    .container_slider .slider_box:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(45deg, #f0f, #22abfa);
        clip-path: circle(150px at 80% 20%);
        transition: 0.5s ease-in-out;
    }

    .container_slider .slider_box:hover:before {
        clip-path: circle(300px at 80% -20%);
    }

    /* marque */
    h4 {
        position: absolute;
        top: 30%;
        left: -20%;
        font-size: 12em;
        font-weight: 800;
        font-style: italic;
        color: rgba(255, 255, 250, 0.04);
    }

    /* img produit */
    .container_slider .slider_box .imgBx {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 10000;
        width: 100%;
        height: 40%;
        transition: 0.5s;
    }

    .container_slider .slider_box:hover .imgBx {
        top: 0%;
        transform: translateY(0%);
    }

    .container_slider .slider_box .imgBx {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -60%);
        width: 90%;
    }

    .container_slider .slider_box:hover .imgBx {
        transform: translate(-50%, -0%) rotate(-15deg);
        transition: 1s;
    }


    .container_slider .slider_box .contentBx {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 100px;
        text-align: center;
        transition: 1s;
        z-index: 10;
        left: 0;
    }

    .container_slider .slider_box:hover .contentBx {
        height: 210px;
    }

    /* titre produit slider_box */
    .container_slider .slider_box .contentBx h2 {
        position: relative;
        color: #fff;
        font-size: 30px;
        font-family: 'Bebas Neue', sans-serif;
        width: 100%;
    }

    /* size produit */
    .container_slider .slider_box .contentBx .size {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 8px 20px;
        transition: 0.5s;
        opacity: 0;
        visibility: hidden;
    }

    .container_slider .slider_box:hover .contentBx .size {
        opacity: 1;
        visibility: visible;
        transition-delay: 0.5s;
    }

    .container_slider .slider_box .contentBx .size h3 {
        color: #fff;
        font-size: 17px;
        text-transform: uppercase;
        margin-right: 10px;
        font-family: 'Oswald', sans-serif;
    }

    .container_slider .slider_box .contentBx .size span {
        width: 26px;
        height: 26px;
        text-align: center;
        line-height: 26px;
        font-size: 14px;
        display: inline-block;
        color: #111;
        background: #fff;
        margin: 0 5px;
        transition: 0.5s;
        color: #111;
        border-radius: 4px;
        cursor: pointer;
        transition: 0.4s linear;
    }

    .container_slider .slider_box .contentBx .size span:hover {
        background: #6844ff;
        color: #fff;
    }

    /* btn voir plus slider_box */
    .container_slider .slider_box .contentBx a {
        display: inline-block;
        padding: 10px;
        margin-top: 20px;
        text-decoration: none;
        font-weight: 500;
        opacity: 0;
        transform: translateY(50px);
        transition: 0.5s;
        border: 2px solid rgba(104, 68, 255, 255);
        color: rgba(104, 68, 255, 255);
        border-radius: 8px;
        text-transform: uppercase;
        font-weight: 500;
        transition: 0.4 linear;
        font-family: 'Oswald', sans-serif;
    }

    .container_slider .slider_box:hover .contentBx a {
        opacity: 1;
        transform: translateY(0px);
        transition-delay: 0.75s;
    }

    .container_slider .slider_box .contentBx a:hover {
        transition-delay: 0.1s;
        background: #6844ff;
        color: #fff;
        text-transform: uppercase;
    }
</style>