<template>

    <!-- page sneakers -->
    <div class="container-fluid">
        <div class="row">

            <!-- card produit -->
            <div class="container container2">
                <div class="row justify-content-center">
                    <div v-for="produit in produits" :key="produit.id" class="col-lg-3 col-md-5 col-sm-5 card">
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

            <div class="container voirplus_box">
                <div class="row">
                    <div class="col"></div>
                    <button class="btn_voirplus">Voir plus</button>
                    <div class="col"></div>
                </div>
            </div>

        </div>
    </div>

</template>

<script>
    import "bootstrap/dist/css/bootstrap.css";
    import "bootstrap-vue/dist/bootstrap-vue.css";

    export default {
        name: "pagestreetwear",
        props: ["produits"],


    }
</script>

<style>
    @import url("https://use.fontawesome.com/releases/v5.6.3/css/all.css");
</style>