<template>
  <div>
    <mynav /> <!-- import mynav -->
    <div class="container-fluid">
      <div class="columun">
        <h1 class="titre_panier">Panier</h1>
        <div class="row col-12 justify-content-center">
          <div class="col-lg-8 col-12 col table_produit">
            <table class="table ">
              <tbody>
                <tr v-for="(item,index) in panier" :key="index">
                  <td>
                    <img class="profil_icon minus" src="https://img.icons8.com/ios/45/000000/minus.png"
                      @click="supprimer(index)" />
                  </td>
                  <td class="img_Bxpanier">
                    <img class="img_panier" :src="require(`@/assets/${item.image}.png`)">
                  </td>
                  <td>{{item.nom}}
                    <!-- <br>{{item.produitId}} -->
                    <br>Taille : {{item.taille}}
                    <br>{{ item.prix_unitaire }}€ </td>
                  <!-- <td>{{ (item.quantite * item.prix_unitaire).toFixed(2) }}€</td> -->
                  <td><input type="button" class="btn btn-dark" @click="updateqtn(index)" value="-"> {{item.quantite}}
                    <input type="button" class="btn btn-dark" @click="update(index)" value="+"></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="col-lg-4 col-12 table_achat">
            <table class="col-lg-8 col-12">
              <div class="partie_achat">
                <button class="btn_voirplus" @click="valide(index)">
                  Acheter maintenant</button>
                <br><br>
                <a class="continuer_achat" @click="retour">
                  <p>continuer mes achats</p>
                </a>
                <div class="row">
                  <td class="total_panier">Total: {{ total }}€
                    <p class="text_expedition"> + Frais d'expédition</p>
                  </td>
                </div>
              </div>
            </table>
          </div>
        </div>
        <p class="text_info"><img class="icontext_info" src="https://img.icons8.com/material/20/000000/info--v1.png" />
          Veuillez noter que les prix des articles dans le panier peuvent être modifiés.</p>
      </div>
    </div>
    <myfooter /> <!-- import myfooter -->
  </div>
</template>

<script>
  import mynav from "../components/mynav.vue"; /* import components mynav */
  import myfooter from "../components/myfooter.vue"; /* import components mynav */
  import VueJwtDecode from "vue-jwt-decode"; /* import du vuejwtdecode */

  export default {
    name: "mypanier",
    props: ["panier"],
    data() {
      return {
        client: {},
      };
    },
    computed: {
      total: function () {
        let total = 0;
        for (let element of this.panier) {
          total += element.prix_unitaire * element.quantite;
        }
        return total.toFixed(2);
      }
    },
    created: function () {
      if (localStorage.getItem("token") === null) {
        this.$router.push({
          name: "login"
        });
      }

    },
    methods: {
      retour: function (){
        this.$router.go(-1);
      },
      update: function (index) {
        this.panier[index].quantite++;
        this.panier[index].soustotal =
          this.panier[index].quantite * this.panier[index].prix_unitaire;
        console.log(this.panier);
        localStorage.removeItem("panier");
        localStorage.setItem("panier", JSON.stringify(this.panier));
      },
      /*  */
      updateqtn: function (index) {
        if (this.panier[index].quantite > 1) {
          this.panier[index].quantite--;
          console.log(this.panier);
          localStorage.removeItem("panier");
          localStorage.setItem("panier", JSON.stringify(this.panier));
        } else {
          this.supprimer(index);
        }
      },
      /*  */
      supprimer: function (index) {
        this.panier.splice(index, 1);
        localStorage.removeItem("panier");
        if (this.panier.lengh > 0) {
          localStorage.setItem("panier", JSON.stringify(this.panier));
        }
      },
      /*  */
      valide: function () {
        if (localStorage.getItem("token")) {
          var client = VueJwtDecode.decode(localStorage.getItem("token"));
          var produitId = [];
          var prix = [];
          var quantite = [];
          this.panier.forEach((item) => {
            produitId.push(item.produitId);
            prix.push(item.prix_unitaire);
            quantite.push(item.quantite);
          });
          this.axios.post("http://localhost:3000/commande/new", {
              clientId: client.id,
              panier: this.panier,
              produitId: produitId,
              prix: prix,
              quantite: quantite,
            })
            .then((res) => {
              console.log(res.data);
              this.$router.push({
                name: 'paiement',
                params: {
                  total: this.total
                },
              });
            })
            .catch((err) => {
              alert("error");
              console.log(err);
            });
        } else {
          this.$router.push({
            name: "login"
          });
        }
      },

    },
    components: {
      mynav,
      myfooter //* import components */
    },

  };
</script>

<style>
  .table_produit tr td{
    color: #fff !important;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 30px;
    letter-spacing: 1px;
  }
  td.total_panier{
    color: #fff;
    font-size: 30px;
    font-family: 'Bebas Neue', sans-serif;
    letter-spacing: 1px;

  }
  .table_produit,
  .table_achat {
    background: #292D3E;
    margin: 0 !important;

  }
  .table_produit tr {
    border-top: 3px solid transparent !important;
  }

  .text_info {
    font-size: 15px;
    margin: 10px 10%;

  }
  .btn-dark{
    padding: 10px !important;
  }

  .btn-dark:hover {
    background: #6844ff !important;
    
  }

  .text_expedition {
    font-size: 15px;
  }

  .icontext_info {
    filter: invert(0.8) !important;
    vertical-align: sub;
  }

  .minus {
    transform: translate(50%, 100%) !important;
    transition: 0.3s linear;
    cursor: pointer;
  }

  .img_panier {
    width: 100%;
  }

  .img_Bxpanier {
    width: 30%;
  }

  /* panier vide */
  .panier_box {
    margin-top: 50px;
    border-top: 2px solid #cdcdcd;
    border-bottom: 3px solid #cdcdcd;
    width: 100%;
  }

  /* titre panier */
  .titre_panier {
    margin-top: 50px;
  }
  /* lien continuez achat */
  .continuer_achat p {
    border-top: 1px solid #cdcdcd !important;
    border-bottom: 1px solid #cdcdcd !important;
    font-size: 20px;
    line-height: 50px;
    text-align: center;
  }
  .continuer_achat:hover p {
    color: #808080;
  }

  .continuer_achat:hover {
    outline: none;
    text-decoration: none;
  }

  @media (min-width: 0px) {
    .table_achat {
      padding-top: 75px;
      height: 280px;
      background: none;
      width: 100%;
      text-align: center;
      align-items: center;
      border: none;
    }
    
    .table_produit, tr td{
      color: #fff !important;
      font-family: 'Bebas Neue', sans-serif;
      font-size: 20px;
      letter-spacing: 0.5px;
    }

    .minus {
      transform: translate(50%, 100%) !important;
      transition: 0.3s linear;
      cursor: pointer;
      width: 25px;
    }
  }

  @media (min-width: 992px) {
    .table_achat {
      background: #292D3E;
      padding-left: 25px;
      height: unset;
    }
    .table_achat::before {
      content: '';
      position: absolute;
        width: 2px;
        height: 90%;
        background: #cdcdcd;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
    }

    .table_produit tr td{
      color: #fff !important;
      font-family: 'Bebas Neue', sans-serif;
      font-size: 30px;
      letter-spacing: 0.5px;
    }

    .minus {
      transform: translate(50%, 100%) !important;
      transition: 0.3s linear;
      cursor: pointer;
      width: 35px;
    }
  }
</style>