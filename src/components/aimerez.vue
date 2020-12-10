<template>
  <!-- Vous aimerez aussi -->
  <div class="container-fluid">
      <h1>Vous aimerez aussi</h1>
        <div class="row">

            <!-- card produit -->
            <div class="container container2">
                <div class="row justify-content-center">
                    <div v-for="produit in produits" :key="produit.id" class="col-lg-3 col-md-5 col-sm-5 card">
                        <h4>{{ produit.marque }}</h4>

                        <img class="imgBx" :src="require(`@/assets/${produit.Images[0].image}.png`)">


                        <div class="contentBx">
                            <h2>{{ produit.nom }}</h2>
                            <!-- <div class="size">
                                <h3>Tailles :</h3>
                                <span v-for="taille in produit.Tailles" :key="taille.id">{{ taille.taille }}</span>
                            </div> -->
                            
                            

                        </div>

                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
            return {
                produits: {},
            };
        },
        created() {
            this.axios
                .get("http://localhost:3000/produit/all")
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