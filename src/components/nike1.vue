<template>
  <div>
    <mynav /> <!-- import mynav -->

    <!-- input search -->
    <div class="container container1">
      <div class="row">
        <div class="searchbox" @search.prevent="search"> 
          <input type="search" v-model="nom" class="searchbox__input" placeholder="Recherche...">
          <img class="searchbox__icon" src="https://img.icons8.com/ios-filled/50/000000/search.png" />
        </div>
      </div>
    </div>

    <!-- btn filtrer -->
    <div class="container">
      <div class="row  justify-content-between">
        <div class="order-2 dropdown">
          <button class="dropdown-toggle btn_filtrer" type="button" id="dropdownMenuButton" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            Filtrer
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#" @click="order">Tout</a>
            <a class="dropdown-item" href="#" @click="prix">Prix croissant</a>
            <a class="dropdown-item" href="#" @click="prix1">Prix décroissant</a>
          </div>
        </div>

        <!-- titre Sneakers -->
        <h1 class="order-1">Sneakers Nike</h1>
      </div>
    </div>

    <pagesneakers :produits="produits" /> <!-- import components pagesneakers -->
    <myfooter /> <!-- import myfooter -->
  </div>

</template>
<script>
  import pagesneakers from "../components/pagesneakers.vue"; /* import components pagesneakers */
  import mynav from "../components/mynav.vue"; /* import components mynav */
  import myfooter from "../components/myfooter.vue"; /* import components mynav */

  export default {
    components: {
      pagesneakers,
      mynav,
      myfooter //* import components */
    },
    data() {
      return {
        produits: {},
        nom: '',
        marque: this.$route.params.marque,
        /* categorie: this.$route.params.categorie, */
      };
    },
    created() {
      this.axios
        .get("http://localhost:3000/produit/marque/nike/sneakers")
        .then((res) => {
          this.produits = res.data.produits;
        })
        .catch((err) => {
          alert(err);
        });
    },

    methods: {
      //input rechercher 
      search: function () {
        this.axios
          .get("http://localhost:3000/produit/findBy/"+this.nom)
          .then((res) => {
            this.produits = res.data.produits;
          })
          .catch((err) => {
            alert(err);
          });
      },
      //filtrer le plus récent 
      order: function () {
        this.axios
          .get("http://localhost:3000/produit/order0/nike/sneakers")
          .then((res) => {
            this.produits = res.data.produits;
          })
          .catch((err) => {
            alert(err);
          });
      },

      //filtrer prix croissant
      prix: function () {
        this.axios
          .get("http://localhost:3000/produit/prix0/nike/sneakers")
          .then((res) => {
            this.produits = res.data.produits;
          })
          .catch((err) => {
            alert(err);
          });
      },

      // filtrer prix decroissant
      prix1: function () {
        this.axios
          .get("http://localhost:3000/produit/prix00/nike/sneakers")
          .then((res) => {
            this.produits = res.data.produits;
          })
          .catch((err) => {
            alert(err);
          });
      },

    },
  };
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>