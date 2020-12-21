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
                            <h2 style="margin-bottom:10px;">{{ produit.nom }}</h2>
                            <div class="size">
                                <h3>Prix :</h3>
                                <!-- <span v-for="taille in produit.Tailles" :key="taille.id">{{ taille.taille }}</span> -->
                                <h1 class="prix_card">{{ produit.prix }} €</h1>
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

</template>

<script>
    import "bootstrap/dist/css/bootstrap.css";
    import "bootstrap-vue/dist/bootstrap-vue.css";

    export default {
        name: "pagestreetwear",
        props: ["produits"],
        /* permet de passer des accessoires à d'autres composants
        en gros permet de pouvoir utiliser "produits" d'autre pages
        contraire de props "emit" */


    }
</script>

<style>
    @import url("https://use.fontawesome.com/releases/v5.6.3/css/all.css");
</style>