<template>
  <div>
    <mynav /><!-- import mynav -->
    <!-- card produit -->
    <div class="container-fluid card_box">
      <div class="row">
        <div class="container card_box">
          <div class="row">
            <!-- partie gauche -->
            <div class="col-lg-6 col-12 img_produit_box">
              <h4 class="marque_shadow">{{ produit.marque }}</h4>
              <span @click="retour" class="arrow-left">
                <i class="fas fa-arrow-left"></i>
              </span>
              <img v-if="produit.Images" :src="require(`@/assets/${produit.Images[0].image}.png`)"
                class="img_produit" />
            </div>
            <!-- fin partie gauche -->
            <!-- partie droite -->
            <div class="col-lg-6 col-12 info1">
              <!-- nom produit -->
              <div class="produit_nom_box">
                <div>
                  <h2 class="nom_produit">{{ produit.nom }}</h2>
                </div>
              </div>
              <!-- fin nom produit -->
              <!-- description produit -->
              <div class="description">
                <h3 class="description_produit">Description</h3>
                <h2 class="description_produit_text">{{ produit.description }}</h2>
              </div>
              <!-- fin description produit -->
              <div class="size-container">
                <div class="row">
                  <div style="margin:0;
                  padding:0;
                  display:flex;
                  align-items:center;" class="col-6">
                    <select style="color:#333;
                    font-size:15px;
                    font-size: 15px;
                    background: #cdcdcd;
                    padding:10px !important;
                    border: none;" class="form-control col-10">
                      <option id="add-prix" v-for="taille in produit.Stocks" :key="taille.id" style="background:#fff;">
                        {{ taille.taille }}
                        <span v-if="produit.Stocks[0].inStock">En stock</span>
                        <span v-else>En rupture de stock</span></option>
                    </select>
                  </div>
                  <!-- btn guides des tailles -->
                  <button style="padding:10px;
                  margin:0;
                  letter-spacing:1px;
                  font-size:20px;" type="button" class="btn btn-danger" data-toggle="modal"
                    data-target="#staticBackdrop">
                    Guide des tailles
                  </button>
                </div>
              </div>
              <!-- <div class="size1" v-for="taille in produit.Tailles" :key="taille.id">{{ taille.taille }}</div> -->
              <div class="row">
                <div class="ref-container col-6">
                  <h3 class="taille_produit">Référence</h3>
                  <div class="">N°{{ produit.ref }}</div>
                </div>
              </div>
              <br><br>
              <div class="buy-price">
                <button @click="ajouter(produit.id, produit.nom, produit.Images[0].image)" type="button"
                  class="btn_ajouter">
                  Ajouter au panier
                </button>

                <div class="prix">
                  <h2 id="add-prix" class="prix_produit" v-if="produit.Stocks">{{ produit.Stocks[0].prix }} €</h2>
                </div>
              </div>
            </div>
            <!-- fin partie droite -->
          </div>
        </div>
      </div>


      <offre /><!-- import myfooter -->
      <h1 class="grand_titre">Vous aimerez aussi</h1>
      <Aimer /><!-- import aimer -->

    </div>
    <!-- Modal guides tailles-->
    <div style="z-index:10000;" class="modal fade" id="staticBackdrop" data-keyboard="false" tabindex="-1"
      aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title description_produit" id="staticBackdropLabel">Guides des tailles</h2>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span style="color:black;font-size:30px;" aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="container-fluid">
              <div class="text-center">
                <p style="color:#555; padding:0 30px;">
                  Pour les paires de type
                  <strong style="font-weight:bold;color:#111;">YEEZY</strong>
                  la paire
                  <strong style="font-weight:bold;color:#111;">taille une demi-taile plus petit</strong>,
                  nous vous recommandons de prendre
                  <strong style="font-weight:bold;color:#111;">une demi-taille plus grand que votre taille
                    habituelle</strong>.
                </p>
                <p style="color:#555;padding:0 30px;">
                  Sinon pour les autres
                  <strong style="font-weight:bold;color:#111;">Marques</strong>
                  aucun soucis ça
                  <strong style="font-weight:bold;color:#111;">taille normalement</strong>.</p>
              </div>
              <table class="tableau_tailles">
                <thead>
                  <tr>
                    <th class="th_tailles">EU</th>
                    <th class="th_tailles">US</th>
                    <th class="th_tailles">UK</th>
                    <th class="th_tailles">CM</th>
                  </tr>
                </thead>
                <!-- tbody -->
                <tbody>
                  <tr>
                    <td class="td_tailles">35.5</td>
                    <td class="td_tailles">3.5</td>
                    <td class="td_tailles">2.5</td>
                    <td class="td_tailles">22.5</td>
                  </tr>

                  <tr>
                    <td class="td_tailles">36</td>
                    <td class="td_tailles">4</td>
                    <td class="td_tailles">3.5</td>
                    <td class="td_tailles">23</td>
                  </tr>

                  <tr>
                    <td class="td_tailles">36.5</td>
                    <td class="td_tailles">4.5</td>
                    <td class="td_tailles">4</td>
                    <td class="td_tailles">23.5</td>
                  </tr>

                  <tr>
                    <td class="td_tailles">37.5</td>
                    <td class="td_tailles">5</td>
                    <td class="td_tailles">4.5</td>
                    <td class="td_tailles">23.5</td>
                  </tr>

                  <tr>
                    <td class="td_tailles">38</td>
                    <td class="td_tailles">5.5</td>
                    <td class="td_tailles">5</td>
                    <td class="td_tailles">24</td>
                  </tr>

                  <tr>
                    <td class="td_tailles">38.5</td>
                    <td class="td_tailles">6</td>
                    <td class="td_tailles">5.5</td>
                    <td class="td_tailles">24</td>
                  </tr>

                  <tr>
                    <td class="td_tailles">39</td>
                    <td class="td_tailles">6.5</td>
                    <td class="td_tailles">6</td>
                    <td class="td_tailles">24.5</td>
                  </tr>

                  <tr>
                    <td class="td_tailles">40</td>
                    <td class="td_tailles">7</td>
                    <td class="td_tailles">6</td>
                    <td class="td_tailles">25</td>
                  </tr>

                  <tr>
                    <td class="td_tailles">40.5</td>
                    <td class="td_tailles">7.5</td>
                    <td class="td_tailles">6.5</td>
                    <td class="td_tailles">25.5</td>
                  </tr>

                  <tr>
                    <td class="td_tailles">41</td>
                    <td class="td_tailles">8</td>
                    <td class="td_tailles">7</td>
                    <td class="td_tailles">26.5</td>
                  </tr>

                  <tr>
                    <td class="td_tailles">42</td>
                    <td class="td_tailles">8.5</td>
                    <td class="td_tailles">7.5</td>
                    <td class="td_tailles">26.5</td>
                  </tr>

                  <tr>
                    <td class="td_tailles">42.5</td>
                    <td class="td_tailles">9</td>
                    <td class="td_tailles">8</td>
                    <td class="td_tailles">27</td>
                  </tr>

                  <tr>
                    <td class="td_tailles">43</td>
                    <td class="td_tailles">9.5</td>
                    <td class="td_tailles">8.5</td>
                    <td class="td_tailles">27.5</td>
                  </tr>

                  <tr>
                    <td class="td_tailles">44</td>
                    <td class="td_tailles">10</td>
                    <td class="td_tailles">9</td>
                    <td class="td_tailles">28</td>
                  </tr>

                  <tr>
                    <td class="td_tailles">44.5</td>
                    <td class="td_tailles">10.5</td>
                    <td class="td_tailles">9</td>
                    <td class="td_tailles">28.5</td>
                  </tr>

                  <tr>
                    <td class="td_tailles">45</td>
                    <td class="td_tailles">11</td>
                    <td class="td_tailles">10</td>
                    <td class="td_tailles">29</td>
                  </tr>

                  <tr>
                    <td class="td_tailles">45.5</td>
                    <td class="td_tailles">11.5</td>
                    <td class="td_tailles">10.5</td>
                    <td class="td_tailles">29.5</td>
                  </tr>

                  <tr>
                    <td class="td_tailles">46</td>
                    <td class="td_tailles">12</td>
                    <td class="td_tailles">11</td>
                    <td class="td_tailles">30</td>
                  </tr>

                  <tr>
                    <td class="td_tailles">47</td>
                    <td class="td_tailles">12.5</td>
                    <td class="td_tailles">11.5</td>
                    <td class="td_tailles">30.5</td>
                  </tr>

                  <tr>
                    <td class="td_tailles">47.5</td>
                    <td class="td_tailles">13</td>
                    <td class="td_tailles">12</td>
                    <td class="td_tailles">31</td>
                  </tr>

                  <tr>
                    <td class="td_tailles">48</td>
                    <td class="td_tailles">13.5</td>
                    <td class="td_tailles">12.5</td>
                    <td class="td_tailles">31.5</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- fin Modal guides tailles-->
    <!-- Modal panier -->
    <div style="z-index:10000;" class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h2 class="modal-title description_produit" id="exampleModalLabel">Panier</h2>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span style="color:black;font-size:30px;" aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            Votre produit a bien été ajouter dans votre panier
          </div>
          <div class="modal-footer">
            <div class="col-8"></div>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
          </div>
        </div>
      </div>
    </div>
    <!-- fin modal panier -->
    <myfooter /><!-- import myfooter -->
  </div>
</template>

<script>
  import mynav from "../components/mynav.vue"; /* import components mynav */
  import offre from "../components/offre.vue"; /* import components offre */
  import Aimer from "../components/Aimer.vue"; /* import components Aimer */
  import myfooter from "../components/myfooter.vue"; /* import components myfooter */

  export default {
    name: "pageproduit",
    data() {
      return {
        client: {},
        Panier: {},
        Stocks: {},
        produit: {},
        id: this.$route.params.id,

      };
    },
    created() {
      console.log(this.produits); /* panier */
      this.getLocalStorage(); /* panier */
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
      offre,
      Aimer,
      myfooter,
    },

    methods: {
      retour: function () {
        this.$router.go(-1);
      },
      ajouter: function (id, nom, image) {
        this.Panier = this.Panier || [];
        localStorage.removeItem("panier");

        if (status = true,
        this.Panier.length === 0) {
          alert(`Votre produit ${produit.nom} a bien été ajouter dans votre panier`);
          let quantite = 1;
          this.Panier.push({
            produitId: id,
            nom: nom,
            quantite: quantite,/* 
            prix_unitaire: prix,
            soustotal: quantite * prix, */
            image: image,/* 
            taille: taille, */
          });
        } else {
          let alreadyProduit = false;
          this.Panier.forEach((item) => {
            if (item.produitId === id) {
              item.quantite++;
              item.soustotal = item.quantite * prix
              alreadyProduit = true;
            }
          });

          if (alreadyProduit === false) {
            alert(`Désoler le ${produit.nom} est en rupture de stock !`);
            let quantite = 1;
            this.Panier.push({
              produitId: id,
              nom: nom,
              quantite: quantite,/* 
              prix_unitaire: prix,
              soustotal: quantite * prix, */
              image: image,/* 
              taille: taille, */
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
    },
  };
</script>

<style>
  .card_box h2,
  h3 {
    color: #333;
  }

  /* btn taille */
  div.dropdown.col-7 {
    margin: 0 !important;
    padding: 0 !important;
  }

  button.btn-light,
  .btn-danger {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 22px;
  }

  /* fin btn taille */

  /* checkbox tailles */
  .select-control .select-options .list-unstyled.sneakers {
    height: auto;
  }

  .select-control .select-options .list-unstyled {
    display: grid !important;
    overflow: auto !important;
    grid-template-columns: 25% 25% 25% 25%;
  }

  .list-unstyled {
    padding-left: 0 !important;
    list-style: none !important;
  }

  .select-control .select-options {
    box-shadow: 0 4px 3px 0 hsla(0, 0%, 72.2%, .6);
    background: #fff;
    display: table !important;
    height: 0;
    padding: 2.5px !important;
    position: absolute !important;
    top: 135% !important;
    width: 343px !important;
    z-index: 999 !important;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, .2), 0 6px 20px 0 rgba(0, 0, 0, .19) !important;
    transition: visibility .2s ease-out, opacity .2s linear !important;
  }

  .select-control .select-options .select-option {
    background: #fff !important;
    border: none !important;
    cursor: pointer !important;
    padding: 6px !important;
    text-align: center !important;
    height: 70px !important;
    user-select: none !important;
  }

  .select-control .select-options .select-option .inset {
    background: #fff !important;
    border: 1px solid #d9d9d8 !important;
    height: 100% !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: center !important;
    align-items: center !important;
  }

  /* fin checkout tailles */


  /* guides tailles */
  .tableau_tailles {
    border-collapse: collapse;
    min-width: 400px;
    width: auto;
    cursor: pointer;
    margin: auto;
  }

  .tableau_tailles thead tr {
    text-align: left;
  }

  .tableau_tailles th,
  td {
    padding: 15px 20px;
  }

  .tableau_tailles tbody tr:nth-child(even) {
    background-color: #f3f3f3;
  }

  .tableau_tailles .th_tailles {
    font-size: 20px;
  }

  .tableau_tailles .td_tailles {
    color: #333 !important;
    font-size: 20px;
  }

  /* fin guide taille */

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
    transform: translateY(25%) !important;
  }

  h4.marque_shadow {
    font-family: 'Bebas Neue', sans-serif;
    position: absolute;
    color: rgba(255, 255, 250, 0.04);
    top: 8%;
    left: -15%;
    font-size: 30em !important;
    font-weight: bolder !important;
    font-style: italic !important;
  }

  /* fin box image produit */

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
    margin: 0;
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
    margin-bottom: 10px;
  }

  .description_produit_text {
    display: flex;
    align-items: flex-start;
    font-family: 'Oswald', sans-serif;
    font-size: 18px;
    text-align: start;
  }

  /* fin description */
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
    margin: 0;
  }

  /* fin taille produit */
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

  /* prix produit */
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
    cursor: pointer;
    font-weight: bold;
  }

  .btn_ajouter:hover {
    background-color: #6844ff !important;
    color: #fff;
  }

  /* fin btn ajout panier */
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