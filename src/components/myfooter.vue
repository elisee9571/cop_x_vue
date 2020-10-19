<template>

    <!-- myfooter -->
    <div class="container-fluid infooter">
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
                <a href="https://www.instagram.com/_copx_/" target="_blank"><img src="https://img.icons8.com/ios-filled/50/000000/instagram-new.png" /></a>
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


</template>

<script>
    export default {
        name: "myfooter",
    }
</script>

<style>
    @import url("https://use.fontawesome.com/releases/v5.6.3/css/all.css");

    /* css */
    *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
div .row{
  padding: 0 !important;
  margin: 0 !important;
  box-sizing: border-box;
}

    .infooter { 
        width: 100%;
    }

    h6 {
        font-family: 'Bebas Neue', sans-serif;
        font-size: 30px !important;
        color: #808080;
    }

    p {
        font-family: 'Oswald', sans-serif;
        font-size: 20px;
        color: #808080;
    }

    .info_info a {
        font-size: 25px;
        font-family: 'Bebas Neue', sans-serif;
        color: #808080;
    }
    .info_info a:hover {
        color: #808080 !important;
    }

    .info_info,
    .reseaux,
    .newletter {
        padding: 50px;
    }

    .reseaux a {
        filter: invert(0.5);
        margin: 5px;
    }

    /* input email/ btn email */
    .input_email {
        border-radius: 8px !important;
    }

    .input_email:focus {
        box-shadow: 0 0 10px #6844ff !important;
        border: 1px solid #6844ff !important;
    }

    .btn_email {
        border: 2px solid rgba(104, 68, 255, 255);
        color: rgba(104, 68, 255, 255);
        padding: 5px 20px !important;
        border-radius: 8px !important;
        text-transform: uppercase;
        font-weight: 500 !important;
        background-color: transparent !important;
        transition: 0.4s linear;
    }

    .btn_email:hover {
        color: #fff;
        background-color: #6844ff !important;
        border: 2px solid #6844ff !important;
    }
    button:active {
        transform: scale(0.95);
    }
</style>