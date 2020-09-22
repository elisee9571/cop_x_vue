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
    </div>
</template>

<script>
    export default {
        name: "offre",
    }
</script>

<style>
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
        overflow: hidden;
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

    .contenu_box {
        padding: 0;
        margin: 0;
    }

    .container-fluid .image_offre_box .image_offre {
        position: absolute;
        bottom: 0;
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
        top: 15%;
        transition: 1s;
    }

    .container-fluid .image_offre .contenu_box .text_contenu {
        color: #fff;
        font-size: 20px;
        font-family: 'Oswald', sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 10px;
        transition: 0.5s;
        opacity: 0;
        visibility: hidden;
        transform: translateY(-385%);

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
        transform: translateY(-100%);
    }

    .container-fluid .image_offre:hover .btn_decouvrir {
        opacity: 1;
        transform: translateY(-400%);
        transition-delay: 0.5s;
    }

    @media (min-width: 0px) {

        /* col- */
        .container-fluid .image_offre:hover .btn_decouvrir {
            opacity: 1;
            transform: translateY(-600%);
            transition-delay: 0.5s;
        }

        .container-fluid .image_offre .contenu_box .text_contenu {
            transform: translateY(-25rem);
            padding: 0 50px;
        }

        .container-fluid .image_offre .contenu_box h7 {
            font-size: 40px;
        }

        .container-fluid .image_offre .contenu_box .text_contenu_livraison{
            transform: translateY(-550%) !important;
        }
    }
    @media (min-width: 768px) {

        /* col- */
        .container-fluid .image_offre:hover .btn_decouvrir {
            opacity: 1;
            transform: translateY(-560%);
            transition-delay: 0.5s;
        }

        .container-fluid .image_offre .contenu_box .text_contenu {
            transform: translateY(-21rem);
            padding: 0 10px;
        }

        .container-fluid .image_offre .contenu_box h7 {
            font-size: 35px;
        }

        .container-fluid .image_offre .contenu_box .text_contenu_livraison{
            transform: translateY(-460%) !important;
        }
    }

    @media (min-width: 1140px) {

        .image_offre_box .image_offre {
            height: 100%;
        } 
         /* col- */
        .container-fluid .image_offre:hover .btn_decouvrir {
            opacity: 1;
            transform: translateY(-400%);
            transition-delay: 0.5s;
        }

        .container-fluid .image_offre .contenu_box .text_contenu {
            transform: translateY(-15rem);
            padding: 0 10px;
        }

        .container-fluid .image_offre .contenu_box h7 {
            font-size: 30px;
        }

        .container-fluid .image_offre .contenu_box .text_contenu_livraison{
            transform: translateY(-330%) !important;
        }
    }
    @media (min-width: 1281px) {

        .image_offre_box .image_offre {
            height: 100%;
        } 
         /* col- */
        .container-fluid .image_offre:hover .btn_decouvrir {
            opacity: 1;
            transform: translateY(-450%);
            transition-delay: 0.5s;
        }

        .container-fluid .image_offre .contenu_box .text_contenu {
            transform: translateY(-20rem);
            padding: 0 50px;
        }

        .container-fluid .image_offre .contenu_box h7 {
            font-size: 40px;
        }

        .container-fluid .image_offre .contenu_box .text_contenu_livraison{
            transform: translateY(-400%) !important;
        }
    }
</style>