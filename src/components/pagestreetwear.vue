<template>

    <div class="container-fluid container3">
        <div class="row ">
            <div class="container">
                <div class="row justify-content-center">
                    <div v-for="produit in produits" :key="produit.id" class="card">
                        <router-link :to="`/pageproduit/${produit.id}`">
                            <div class="imgBx">
                                <img class="imgBx" :src="require(`@/assets/${produit.Images[0].image}.png`)">
                            </div>
                        </router-link>
                        <div class="contentBx">
                            <h2 style="cursor:default;">{{ produit.nom }}</h2>
                            <div class="row">
                                <div class="price">{{ produit.Stocks[0].prix }} €</div>
                                <div class="orther">
                                    <router-link :to="`/pageproduit/${produit.id}`">
                                        <div class="panier"><i class="fas fa-shopping-cart"></i></div>
                                    </router-link>
                                    <div class="favoris"><i class="fas fa-heart"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
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
        props: ["produits", "stocks"],
        /* permet de passer des accessoires à d'autres composants
        en gros permet de pouvoir utiliser "produits" d'autre pages
        contraire de props "emit" */


    }
</script>

<style>
    @import url("https://use.fontawesome.com/releases/v5.6.3/css/all.css");
</style>