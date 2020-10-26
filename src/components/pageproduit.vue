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
                <div class="row">
                  <div class="size1" v-for="taille in produit.Tailles" :key="taille.id">{{ taille.taille }}</div>
                </div>
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

<!-- information commande, paiement etc -->
    <div class="container-fluid text-center">
      <div class="row ">
        <div class="col-12 card-info_box">

          <div class="row justify-content-center">
            <!-- authenticité -->
            <div class="col-lg-3 col-md-4 col-6 card-info">
              <div class="colmun">
                <i class="card-icon fas fa-award"></i>
                <p class="p_produit-info-t">100% neufs et authentiques</p>
                <br>
                <p class="p_produit-info">Tous les produits vendus
                  sont authentiques et neufs.</p>
              </div>
            </div>

            <!-- livraison -->
            <div class="col-lg-5 col-md-4 col-6 card-info">
              <div class="column">

                <i class="card-icon fas fa-box"></i>
                <p class="p_produit-info-t">Livraison et retours</p>
                <br>
                <p class="p_produit-info">Nous livrons uniquement dans l'Europe !</p>
              </div>
            </div>

            <!-- paiement -->
            <div class="col-lg-5 col-md-4 col-6 card-info">
              <div class="column">
                <i class="card-icon fas fa-credit-card"></i>
                <p class="p_produit-info-t">Paiement sécurisé</p>
                <br>
                <p class="p_produit-info">Toutes les transactions sont sécurisées 
                  grâce à un protocole crypté 3D Secure.</p>
              </div>
            </div>

            <!-- service client -->
            <div class="col-lg-3 col-md-4 col-6 card-info">
              <div class="column">
                <i class="card-icon fas fa-comments"></i>
                <p class="p_produit-info-t">Service client</p>
                <br>
                <p class="p_produit-info">Contactez-nous par mail du lundi au vendredi !</p>
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
        /* Panier: {}, */
        produit: {},
        id: this.$route.params.id,
      };
    },
    created() {
      /* console.log(this.produits);
      this.getLocalStorage(); */
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

    /* methods: {
      ajouter: function (id, nom, prix) {
        alert(`le produit ${nom}`);
        this.Panier = this.Panier || [];
        localStorage.removeItem("panier");

        if (this.Panier.length === 0) {
          let quantite = 1;
          this.Panier.push({
            produitId: id,
            nom: nom,
            quantite: quantite,
            prix_unitaire: prix,
            soustotal: quantite * prix,
          });
        } else {
          let alreadyProduit = false;
          this.Panier.forEach((item) => {
            if (item.produitId === id) {
              item.quantite++;
              item.soustotal = item.quantite * prix,
                alreadyProduit = true;
            }
          });
          if (alreadyProduit === false) {
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
      getLocalStorage() {
        let getLocalSt = localStorage.getItem("panier");
        if (getLocalSt != null || getLocalSt !== undefined) {
          this.Panier = JSON.parse(getLocalSt);
          console.log(this.Panier);
        }
      },
    }, */



  };
</script>

<style>
  /* css */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .card_box {
    margin-bottom: 71px;
  }

  /* box image produit */
  .img_produit_box .arrow-left {
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

  /* information commande etc */
  .p_produit-info-t{
    font-size: 30px !important;
    font-family: 'Bebas Neue', sans-serif;
  }
  .p_produit-info, .p_produit-info-t{
    font-size: 18px;
  }
   .card-info_box {
        padding: 0 20px;
        margin: 100px 0;
    }
    
    .card-info {
        width: 100%;
        padding: 0 25px;
        margin: 20px;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border-radius: 10px;
        box-shadow: 0 0 10px #22abfa;
        /* background: linear-gradient(40deg, rgba(151, 120, 255, 255), rgba(104, 68, 255, 255)); */
    }    
    .card-info p {
        margin-top: 20px;
        color: #fff;
        max-height: 0;
        opacity: 0;
        transition: .3s linear;
    }
    
    .card-info:hover p {
        max-height: 45px;
        opacity: 1;
    }
    
    .card-icon {
        filter: invert(0) !important;
        color: #fff !important;
        font-size: 28px !important;
        background: #6844ff;
        width: 60px;
        height: 60px;
        line-height: 60px !important;
        border-radius: 50%;
        transition: .3s linear;
    }
    
    .card-info:hover .card-icon {
        background: none;
        transition: 0.5s linear;
        color: #22abfa !important;
        transform: scale(1.6);
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
      transform: translateY(10%)
        /*  rotate(-10deg) */
      ;
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