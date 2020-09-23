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
    <!-- myfooter -->
    <div class="container-fluid infooter infooter_panier">
        <div class="row">

            <!-- info -->
            <div class="col-lg-4 col-md-12 info_info text-center">
                <a href="/sneakers">sneakers</a>
                <div class="w-100"></div>
                <a href="/streetwear">streetwear</a>
                <div class="w-100"></div>
                <a href="/lifestyle">lifestyle</a>
                <div class="w-100"></div>
                <a href="/faq">politique de confidentialité</a>
                <div class="w-100"></div>
                <a href="/faq">mentions légales</a>
                <div class="w-100"></div>
                <a href="/faq">condition d'utilisateur</a>
            </div>

            <!-- réseaux -->
            <div class="col-lg-4 col-md-12 reseaux text-center">
                <h6>nos réseaux sociaux</h6>
                <a href="" target="_blank"><img src="https://img.icons8.com/android/45/000000/facebook.png" /></a>
                <a href="https://www.instagram.com/cop___x/" target="_blank"><img src="https://img.icons8.com/ios-filled/50/000000/instagram-new.png" /></a>
                <a href="" target="_blank"><img src="https://img.icons8.com/android/50/000000/twitter.png" /></a>
            </div>

            <!-- newletter -->
            <div class="col-lg-4 col-md-12 newletter text-center">
                <h6>Inscription à la newletter</h6>
                <p>Abonne toi à la newletter pour ne pas rater notre actualité</p>

                <div class="input-group">
                    <input type="email" class="form-control input_email" placeholder="Email" required>
                    <div class="input">
                        <button class="btn_email" type="submit">Envoyer</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
  </div>
</template>

<script>
  import mynav from "../components/mynav.vue"; /* import components mynav */
  /* import myfooter from "../components/myfooter.vue";*/ /* import components mynav */ 

  export default {
    name: "panier",
    components: {
      mynav,
      /* myfooter */ //* import components */
    },

  }
</script>

<style>
  /* footer */
  .infooter_panier {
    position: absolute;
    bottom: 0 !important;
    width: 100%;
  }

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