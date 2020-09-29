<template>
    
    <!-- page sneakers -->
    <div class="container-fluid">
        <div class="row">
            <!-- card produit -->
            <div class="container container2">
                <div class="row justify-content-center">
                    <div v-for="produit in produits" :key="produit.id" class="col-lg-3 col-md-5 col-sm-5 card">
                        <!-- marque produit -->
                        <h4>{{ produit.marque }}</h4>

                        <!-- image produit -->
                        <img class="imgBx" :src="require(`@/assets/${produit.Images[0].image}.png`)">

                        <!-- text produit -->
                        <div class="contentBx">
                            <h2>{{ produit.nom }}</h2>
                            <div class="size">
                                <h3>Tailles :</h3>
                                <span v-for="taille in produit.Tailles" :key="taille.id">{{ taille.taille }}</span>
                            </div>
                            <!-- voir produit -->
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
    export default {
        name: 'slider2',

        data() {
            return {
                produits: {},
            };
        },
        created() {
            this.axios
                .get("http://localhost:3000/produit/order2/6")
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
 
</style>