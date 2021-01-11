<template>

    <!-- myfooter -->
    <div class="container-fluid infooter">
        
                <div class="row col-12">

                <!-- info -->
                <div class="col-lg-4 col-md-12 info_info text-center">
                    <a href="/sneakers">sneakers</a>
                    <div class="w-100"></div>
                    <a href="/streetwear">streetwear</a>
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
                    <a href="https://www.instagram.com/_copx_/" target="_blank"><img
                            src="https://img.icons8.com/ios-filled/50/000000/instagram-new.png" /></a>
                    <a href="" target="_blank"><img src="https://img.icons8.com/android/50/000000/twitter.png" /></a>
                </div>

                <!-- newletter -->
                <div class="col-lg-4 col-md-12 newletter text-center">
                    <h6>Inscription à la newletter</h6>
                    <p style="padding: 20px 50px;">Abonne toi à la newletter pour ne pas rater notre actualité.</p>

                    <div class="input-group input-group_email">
                        <input id="newsletter" type="email" class="form-control input_email" placeholder="Email"
                            required>
                        <div class="input">
                            <button for="newsletter" class="btn_email" type="submit">Envoyer</button>
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
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    div .row {
        padding: 0 !important;
        margin: 0 !important;
        box-sizing: border-box;
    }

    .infooter {
        margin: 0;
        padding: 0;
        display: flex;
        align-items: flex-end;
        min-height: 60vh;
         }

    .reseaux h6,
    .newletter h6 {
        font-family: 'Bebas Neue', sans-serif !important;
        font-size: 30px !important;
        color: #cdcdcd;
        font-weight: unset;
    }

    p {
        font-family: 'Oswald', sans-serif !important;
        font-size: 20px;
        color: #cdcdcd;
    }

    .info_info a {
        font-size: 25px;
        font-family: 'Bebas Neue', sans-serif;
        color: #cdcdcd;
    }

    .info_info a:hover {
        color: #cdcdcd !important;
    }

    .info_info,
    .reseaux,
    .newletter {
        padding: 50px;
    }

    .reseaux a {
        filter: invert(0.8);
        margin: 5px;
    }

    /* input email/ btn email */
    .input_email {
        border-radius: 8px !important;
        background: #fff !important;
        color: #333 !important;
        font-size: 18px !important;
        padding: 5px 0 !important;
        padding-left: 10px !important;
    }

    .input_email:focus {
        box-shadow: 0 0 10px #6844ff !important;
        border: 1px solid #6844ff !important;
    }

    .btn_email {
        border: 2px solid rgba(104, 68, 255, 255);
        color: rgba(104, 68, 255, 255);
        padding: 7px 20px !important;
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

    @media (min-width: 0) {
        .input-group_email {
            padding: 0 50px;
        }
    }

    @media (min-width: 576px) {
        .input-group_email {
            padding: 0 100px;
        }
    }

    @media (min-width: 992px) {
        .input-group_email {
            padding: 0px;
        }
    }
</style>