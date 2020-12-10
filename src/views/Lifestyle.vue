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

        <!-- titre lifestyle -->
        <h1 class="order-1">Lifestyle</h1>
      </div>
    </div>

    <pagelifestyle :produits="produits" /> <!-- import components pagelifestyle -->

    <div class="container voirplus_box">
      <div class="row">
        <div class="col"></div>
        <button class="btn_voirplus">Voir plus</button>
        <div class="col"></div>
      </div>
    </div>
    
    <myfooter /> <!-- import myfooter -->
  </div>

</template>
<script>
  import pagelifestyle from "../components/pagelifestyle.vue"; /* import components pagelifestyle */
  import mynav from "../components/mynav.vue"; /* import components mynav */
  import myfooter from "../components/myfooter.vue"; /* import components mynav */

  export default {
    components: {
      pagelifestyle,
      mynav,
      myfooter //* import components */
    },
    data() {
      return {
        produits: {},
        nom: '',
      };
    },
    created() {
      this.axios
        .get("http://localhost:3000/produit/categorie/lifestyle")
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
          .get("http://localhost:3000/produit/findBy/" + this.nom)
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
          .get("http://localhost:3000/produit/order/lifestyle")
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
          .get("http://localhost:3000/produit/prix/lifestyle")
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
          .get("http://localhost:3000/produit/prix1/lifestyle/9")
          .then((res) => {
            this.produits = res.data.produits;
          })
          .catch((err) => {
            alert(err);
          });
      },
      voirplus: function () {
        this.axios
          .get("http://localhost:3000/produit/categorie/streetwear")
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