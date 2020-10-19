<template>
    <div class="container-fluid image_offre_box">
        <div class="row">
            <div class="col-lg-3 col-md-6 col-12 image_offre">

                <img src="../assets/offre_1.jpg" class="image_hover" alt="...">

                <div class="contenu_box text-center">
                    <h7>Actualité</h7>
                    <p class="text_contenu">Toutes les dernières paires limitées, neuves et authentiques.</p>
                    <a class="decouvrir" href="/sneakers"><button class="btn_decouvrir">Découvrir</button></a>
                </div>

            </div>

            <div class="col-lg-3 col-md-6 image_offre">

                <img src="../assets/offre_2.jpg" class="image_hover" alt="...">

                <div class="contenu_box text-center">
                    <h7>Paiement sécurisé</h7>
                    <p class="text_contenu">Afin de faciliter et accélérer vos paiement, découvrer nos modes.</p>
                    <a href="/faq"><button class="btn_decouvrir">Découvrir</button></a>
                </div>

            </div>

            <div class="col-lg-3 col-md-6 image_offre">

                <img src="../assets/offre_3.jpg" class="image_hover" alt="...">

                <div class="contenu_box text-center">
                    <h7>Livraison gratuite pour les membres</h7>
                    <p class="text_contenu text_contenu_livraison">Venez découvrir nos avantages en étant membre.</p>
                    <a href="/faq"><button class="btn_decouvrir">Découvrir</button></a>
                </div>


            </div>

            <div class="col-lg-3 col-md-6 image_offre">

                <img src="../assets/offre_4.jpg" class="image_hover" alt="...">

                <div class="contenu_box text-center">
                    <h7>Contactez-nous</h7>
                    <p class="text_contenu">N'hésitez pas à nous faire part de vos problèmes.</p>
                    <a href="/contact"><button class="btn_decouvrir">Découvrir</button></a>
                </div>

            </div>
        </div>
        <div>
            <p class="intro">Take.</p>
            <p class="intro">Ist.</p>
            <p class="intro">Easy.</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "offre",
    }
</script>

<style>
/* intro */
p.intro{
    font-family:'Segoe UI', 'Open Sans', 'Helvetica Neue', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 200px;
    font-weight: bold;
    color: transparent;
    letter-spacing: -10px;
    -webkit-background-clip: text;
    background-clip: text;
}
p.intro:nth-child(1){
    position: relative;
    top: 150px;
    background-image: linear-gradient(to right, #007cf0, #00dfd8);
    animation: anim-gradient 8s -2.6s infinite;
}
p.intro:nth-child(2){
    background-image: linear-gradient(to right, #7928CA,#FF0080);
    animation: anim-gradient 8s 0s infinite;
}
p.intro:nth-child(3){
    background-image: linear-gradient(to right, #FF4D4D, #F9CB28);
    position: relative;
    bottom: 150px;
    animation: anim-gradient 8s -5.2s infinite;
}


@keyframes anim-gradient {
    0%{
      color: black;
    }
    16.667% {
      color: black;
    }
    33.333% {
        color: transparent;
    }
    50% {
       color: transparent;
    }
    66.667% {
        color: black;
    }
    100% {
       color: black;
   }
}
    /* css */
    /* image offre box */
    .image_offre_box {
        padding-top: 100px !important;
        width: 100%;
    }

    /* image offre */
    .image_offre {
        padding: 0 !important;
        margin: 0 !important;
        box-sizing: border-box;
        width: 100%;

    }

    .image_offre_box .image_offre {
        width: 100%;
        /* overflow: hidden; */
    }

    .image_hover {
        width: 100% !important;
    }

    .image_offre_box .image_offre:hover .image_hover {
        opacity: 0.5;
        transition: 0.4s linear;
        padding: 0;
        margin: 0;

    }

    div .contenu_box {
        position: absolute;
        top: 33%;
    }

    .container-fluid .image_offre_box .image_offre {
        width: 100%;
        text-align: center;
        transition: 1s;
        z-index: 10;
        padding: 0;
        margin: 0;
    }

    /* contenu image offre */
    .container-fluid .image_offre .contenu_box h7 {
        width: 100%;
        color: #fff;
        font-size: 30px;
        font-family: 'Bebas Neue', sans-serif;
        position: absolute;
        top: 33%;
        transform: translateX(-50%);
        transition: 0.5s;
        z-index: 999;
    }

    .container-fluid .image_offre:hover .contenu_box h7 {
        top: -15%;
        transition: 1s;
    }

    .container-fluid .image_offre .contenu_box .text_contenu {
        color: #fff;
        font-size: 20px;
        font-family: 'Oswald', sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 50px;
        transition: 0.5s;
        opacity: 0;
        visibility: hidden;
        transform: translateY(100%);

    }

    .container-fluid .image_offre:hover .text_contenu {
        opacity: 1;
        visibility: visible;
        transition-delay: 0.5s;
    }

    .btn_decouvrir {
        background: black;
        color: #fff;
        border: 1px solid black;
        font-family: 'Bebas Neue', sans-serif;
        font-size: 25px;
        padding: 5px 40px;
        opacity: 0;
        transition: 0.5s;
        display: inline-block;
        text-decoration: none;
        transform: translateY(400%);
    }

    .container-fluid .image_offre:hover .btn_decouvrir {
        opacity: 1;
        transform: translateY(200%);
        transition-delay: 0.5s;
    }

    @media (min-width: 0px) {

        .container-fluid .image_offre .contenu_box h7 {
            font-size: 40px;
        }

        .container-fluid .image_offre .contenu_box .text_contenu {
            padding: 0 50px;
        }

        .container-fluid .image_offre .contenu_box .text_contenu_livraison {
            transform: translateY(150%) !important;
        }
    }

    @media (min-width: 768px) {

        .container-fluid .image_offre .contenu_box h7 {
            font-size: 40px;
            padding: 0 20px;
        }

        .container-fluid .image_offre .contenu_box .text_contenu {
            padding: 0 10px;
        }

        .container-fluid .image_offre .contenu_box .text_contenu_livraison {
            transform: translateY(150%) !important;
        }
    }

    @media (min-width: 1140px) {

        .container-fluid .image_offre .contenu_box .text_contenu {
            padding: 0 10px;
        }

        .container-fluid .image_offre .contenu_box h7 {
            font-size: 35px;
            padding: 0 20px;
        }

    }
</style>