<template>
    <div class="container">
        <div class="row">
            <div class=" container2 container_slider">
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">

                    <div class="carousel-inner">
                        <div class="carousel-item active">


                            <div class="row justify-content-center">
                                <div v-for="produit in produits" :key="produit.id"
                                    class="text-center col-lg-3 col-md-4 col-7 slider_box ">
                                    <h4>{{ produit.marque }}</h4>

                                    <img class="imgBx" :src="require(`@/assets/${produit.Images[0].image}.png`)">

                                    <div class="row text-center">
                                        <div class="contentBx ">
                                            <h2 class="">{{ produit.nom }}</h2>

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


        <!-- <div>
            <vue-glide class="" v-model="active">
                <vue-glide-slide v-for="i in 5" :key="i">

                        <div class="">
                            <div v-for="produit in produits" :key="produit.id" class="">
                                <h4>{{ produit.marque }}</h4>

                                <img class="" :src="require(`@/assets/${produit.Images[0].image}.png`)">

                                <div class="">
                                    <div class="">
                                        <h2 class="">{{ produit.nom }}</h2>

                                        <div class="">
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
                    

                    
                </vue-glide-slide>
            </vue-glide>
        </div>
 -->


    </div>
</template>

<script>
  /*   import {
        Glide,
        GlideSlide
    } from 'vue-glide-js'; */

    export default {
        name: 'slider',

        /* components: {
            [Glide.name]: Glide,
            [GlideSlide.name]: GlideSlide
        }, */
        data() {
            return {
                produits: {},
                active: 3, // zero-based slide
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

       /*  mounted() {
            var input = document.querySelector('#options-start-at-input')

            var glide = new Glide('#options-start-at', {
                startAt: input.value,
                perView: 3
            })

            input.addEventListener('input', function (event) {
                glide.update({
                    startAt: event.target.value
                })
            })

            glide.mount()
        } */

    }
</script>

<style>
  
</style>