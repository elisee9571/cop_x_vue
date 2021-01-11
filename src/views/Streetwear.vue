<template>
  <div>
    <div class="btn_arrow">
      <i class="fas fa-chevron-up"></i>
    </div>
    <mynav /> <!-- import mynav -->

    <!-- input search -->
    <div class="container container1">
      <div class="row">
        <div class="searchbox" @search.prevent="search">
          <input type="search" v-model="nom" class="searchbox__input" placeholder="Recherche..." spellcheck="false">
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

        <!-- titre Streetwear -->
        <h1 class="order-1">Streetwear</h1>
      </div>
    </div>

    <pagestreetwear :produits="produits" /> <!-- import components pagestreetwear -->

    <div class="container voirplus_box">
      <div class="row">
        <div class="col"></div>
        <button class="btn_new" @click="voirplus">Voir plus</button>
        <div class="col"></div>
      </div>
    </div>

    <myfooter /> <!-- import myfooter -->
  </div>

</template>
<script>
  import pagestreetwear from "../components/pagestreetwear.vue"; /* import components pagestreetwear */
  import mynav from "../components/mynav.vue"; /* import components mynav */
  import myfooter from "../components/myfooter.vue"; /* import components mynav */

  export default {
    components: {
      pagestreetwear,
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
        .get("http://localhost:3000/produit/categorie/streetwear/9")
        .then((res) => {
          this.produits = res.data.produits;
        })
        .catch((err) => {
          alert(err);
        });
    },
    mounted() {
      /* arrow up */
      const btn_arrow = document.querySelector('.btn_arrow');
      btn_arrow.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        })
      })
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
          .get("http://localhost:3000/produit/order/streetwear")
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
          .get("http://localhost:3000/produit/prix/streetwear")
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
          .get("http://localhost:3000/produit/prix1/streetwear")
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