<template>
  <div>
    <mynav /> <!-- import mynav -->
    <div class="container">
      <div class="columun">
        <h1 class="titre_panier">Panier</h1>
        <div class="row col-12 justify-content-center">
          <div class="panier_box col-12">
            <p class="p_vide text-center">Votre panier est vide</p>
          </div>
          <a class="poursuivre_achat" href="/"><p>Poursuivre mes achats<i class="fas fa-arrow-right"></i></p></a>

        </div>


      </div>
    </div>
    <myfooter /> <!-- import myfooter -->
  </div>
</template>

<script>
  import mynav from "../components/mynav.vue"; /* import components mynav */
  import myfooter from "../components/myfooter.vue"; /* import components mynav */ 

  export default {
    name: "panier",
     data() {
            return {
                client: {},
            };
        },
        created: function () {
            if (localStorage.getItem("token") === null) {
                this.$router.push({
                    name: "login"
                });
            }

        },
    components: {
      mynav,
      myfooter //* import components */
    },

  }
</script>

<style>
 
  /* panier vide */
  .panier_box {
    margin-top: 50px;
    border-top: 2px solid #808080;
    border-bottom: 3px solid #808080;
    width: 100%;
  }
  /* titre panier */
  .titre_panier{
    margin-top: 50px;
  }

/* text */
  .p_vide {
    font-size: 25px;
    line-height: 100px;
  }
  /* lien continuez achat */
  .poursuivre_achat{
    margin-top: 30px;
    font-size: 20px;
  }
  .poursuivre_achat:hover p{
    color: #505050;
  }
  .poursuivre_achat:hover{
    outline: none;
    text-decoration: none;
  }
  /* arrow */
  .poursuivre_achat p .fa-arrow-right{
    font-size: 15px !important;
    margin-left: 10px;
    vertical-align: middle;
  }
</style>