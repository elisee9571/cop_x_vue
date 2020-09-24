<template>
  <!-- import mynav -->
  <div>
    <mynav />

    <div class="container-fluid card_box">
      <div class="row">



        <div class="container card_box">
          <div class="row">

            <div class="col-lg-6 col-md-12 col-12 img_produit_box">
              <h4 class="marque_shadow">{{ produit.marque }}</h4>
              <span class="arrow-left">
                <a href="/"><i class="fas fa-arrow-left"></i></a>
              </span>
              <img v-if="produit.Images" :src="require(`@/assets/${produit.Images[0].image}.png`)"
                class="img_produit" />
            </div>

            <div class="col-lg-6 col-md-12 col-12 info1">
              <div class="produit_nom_box">
                <div>
                  <h2 class="nom_produit">{{ produit.nom }}</h2>

                </div>

              </div>
              <div class="description">
                <h3 class="description_produit">Description</h3>
                <h2 class="description_produit_text">{{ produit.description }}</h2>
              </div>

              <div class="size-container">
                <h3 class="taille_produit">Tailles</h3>
                <div class="size1">{{ produit.Tailles[0].taille }}</div>
              </div>

              <div class="ref-container">
                <h3 class="taille_produit">Référence</h3>
                <div class="">N°{{ produit.ref }}</div>
              </div>

              <div class="buy-price">
                <a @click="ajouter(produit.id, produit.nom, produit.prix)" class="btn_ajouter">Ajouter au panier</a>
                <div class="prix">
                  <h2 class="prix_produit">{{ produit.prix }} €</h2>
                </div>
              </div>
            </div>

          </div>

        </div>




      </div>
    </div>

    <!-- import myfooter -->
    <myfooter />
  </div>
</template>

<script>
  import mynav from "../components/mynav.vue"; /* import components mynav */
  import myfooter from "../components/myfooter.vue"; /* import components mynav */


  export default {
    name: "pageproduit",

    data() {
      return { 
        Panier: {},
        produit: {},
        id: this.$route.params.id,
      };
    },
    created() {
      console.log(this.produits);
      this.getLocalStorage();
      this.axios
        .get("http://localhost:3000/produit/getById/" + this.id)
        .then((res) => {
          console.log(res);
          this.produit = res.data.produit;
        })
        .catch((err) => {
          alert(err);
        });
    },
    components: {
      mynav,
      myfooter //* import components */
    },
    
    methods:{
      ajouter: function(id, nom, prix){
          alert(`le produit ${nom}`);
          this.Panier = this.Panier || [];
          localStorage.removeItem("panier");

          if(this.Panier.length === 0 ){
              let quantite =1;
              this.Panier.push({
                  produitId: id,
                  nom: nom,
                  quantite: quantite,
                  prix_unitaire: prix,
                  soustotal: quantite * prix,
              });
          }
          else{
              let alreadyProduit = false;
              this.Panier.forEach((item) =>{
                  if(item.produitId === id){
                      item.quantite++;
                      item.soustotal = item.quantite * prix,
                      alreadyProduit = true;
                  }
              });
              if(alreadyProduit === false){
                  let quantite = 1;
                  this.Panier.push({
                       produitId: id,
                  nom: nom,
                  quantite: quantite,
                  prix_unitaire: prix,
                  soustotal: quantite * prix,
                  });
              }
          }
          localStorage.setItem("panier", JSON.stringify(this.Panier));
      },
      getLocalStorage(){
          let getLocalSt = localStorage.getItem("panier");
          if(getLocalSt != null || getLocalSt !== undefined){
              this.Panier = JSON.parse(getLocalSt);
              console.log(this.Panier);
          }
      },
  },



  };
</script>

<style>
  /* css */
  *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

  .card_box {
    margin-bottom: 71px;
  }

  /* box image produit */
  .img_produit_box .arrow-left{
    position: absolute;
    top: 6%;
    left: 6%;
    color: #fff !important;
    font-size: 20px;
    cursor: pointer;
  }
  .fa-arrow-left:before {
    text-decoration: none !important;
    outline: none !important;
    color: #fff !important;
  }

  .img_produit_box {
    position: relative;
    height: 475px;
    box-shadow: 0px 0px 40px #6844ff;
    transition: .5s;
    overflow: hidden;
    border-radius: 20px 0 0 20px;
    transform: translateY(10%);
  }

  .img_produit {
    width: 100%;
    transform: translateY(25%) rotate(-10deg);
  }

  .marque_shadow {
    top: 20%;
    left: -15%;
    font-size: 18em;
  }

  /* box titre description etc */
  .info1 {
    width: 100%;
    background-color: #fff;
    z-index: 1;
    padding: 35px 40px;
    box-shadow: 0px 0px 40px black;
    border-radius: 0 20px 20px 0;
    transform: translateY(10%);
  }

  /* nom produit */
  .produit_nom_box {
    padding: 0 0 10px 0;
  }

  .nom_produit {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 40px;
    font-weight: 600;
  }

  /* hr */
  .produit_nom_box,
  .description,
  .size-container {
    border-bottom: 1px solid #dadada;
  }

  /* description produit */
  .description {
    padding: 10px 0;
  }

  .description_produit {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 25px;
    display: flex;
    align-items: flex-start;
  }

  .description_produit_text {
    display: flex;
    align-items: flex-start;
    font-family: 'Oswald', sans-serif;
    font-size: 18px;
    text-align: start;
  }

  /* taille produit */
  .size-container {
    padding: 10px 0;
    margin-bottom: 10px;
  }

  .taille_produit {
    display: flex;
    align-items: flex-start;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 25px;
  }

  .size1 {
    width: 40px;
    height: 40px;
    border-radius: 6px;
    background-color: #eee;
    margin: 0 10px;
    text-align: center;
    line-height: 40px;
    font-size: 1.1rem;
    font-weight: 500;
    cursor: pointer;
    transition: .3s;
  }

  .size1.active {
    background: #6844ff;
    color: #fff;
  }

  /* prix produit */
  .buy-price {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .prix {
    color: #333;
    display: flex;
    align-items: flex-start;
    margin: 0 !important;
  }

  .prix_produit {
    font-size: 65px;
    font-family: 'Bebas Neue', sans-serif;
    margin: 0;
  }

  /* btn ajout panier */
  .btn_ajouter {
    border: 2px solid rgba(104, 68, 255, 255);
    color: rgba(104, 68, 255, 255);
    padding: 15px 20px;
    border-radius: 8px;
    text-transform: uppercase;
    font-weight: 500;
    transition: .3 linear;
    background-color: transparent !important;
    margin-right: 30px;
    transition: 0.4s linear;
    text-decoration: none !important;
  }

  .btn_ajouter:hover {
    background-color: #6844ff !important;
    color: #fff;
  }


  /* responsive card */
  @media (min-width: 0px) {

    /* box image produit */
    .img_produit_box {
      border-radius: 20px 20px 0 0;
      padding-top: 50px;
    }

    .img_produit {
      width: 100%;
      transform: translateY(10%)/*  rotate(-10deg) */;
    }

    /* box titre description etc */
    .info1 {
      border-radius: 0 0 20px 20px;
    }
  }

  @media (min-width: 576px) {

    /* box image produit */
    .img_produit_box {
      border-radius: 20px 20px 0 0;
    }

    /* box titre description etc */
    .info1 {
      border-radius: 0 0 20px 20px;
    }
  }

  @media (min-width: 768px) {

    /* box image produit */
    .img_produit_box {
      border-radius: 20px 20px 0 0;
      padding-top: 0px;
    }

    /* box titre description etc */
    .info1 {
      border-radius: 0 0 20px 20px;
    }
  }

  @media (min-width: 992px) {

    /* box image produit */
    .img_produit_box {
      border-radius: 20px 0 0 20px;
      height: 574px;
    }

    /* box titre description etc */
    .info1 {
      border-radius: 0 20px 20px 0;
    }
  }

  @media (min-width: 992px) {

    /* col-xl */
    /* box image produit */
    .img_produit_box {
      border-radius: 20px 0 0 20px;
      padding-top: 50px
    }

    /* box titre description etc */
    .info1 {
      border-radius: 0 20px 20px 0;
    }
  }
</style>