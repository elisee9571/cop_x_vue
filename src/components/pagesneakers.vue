<template>

    <!-- page sneakers -->
    <div class="container-fluid">
        <div class="row">
            <!-- card produit -->
            <div class="container container2">
                <div class="row justify-content-center">
                    <div v-for="produit in produits" :key="produit.id" class="col-lg-3 col-md-5 col-sm-5 card">
                        <!-- marque produit -->
                        <h4>{{ produit.marque }}</h4>

                        <!-- image produit -->
                        <img class="imgBx" :src="require(`@/assets/${produit.Images[0].image}.png`)">

                        <!-- text produit -->
                        <div class="contentBx">
                            <h2 style="margin-bottom:10px;">{{ produit.nom }}</h2>
                            <div class="size">
                                <h3>Prix :</h3>
                                <!-- <span v-for="taille in produit.Tailles" :key="taille.id">{{ taille.taille }}</span> -->
                                <h1 class="prix_card">{{ produit.prix }} €</h1>
                            </div>
                            <!-- voir produit -->
                            <router-link :to="`/pageproduit/${produit.id}`">
                                Voir plus
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
    import "bootstrap/dist/css/bootstrap.css";
    import "bootstrap-vue/dist/bootstrap-vue.css";

    export default {
        name: "pagesneakers",
        props: ["produits"],
        /* permet de passer des accessoires à d'autres composants
        en gros permet de pouvoir utiliser "produits" d'autre pages
        contraire de props "emit" */

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


    /* input search */
    .container1 {
        width: 100%;
        height: 20vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .container1 .searchbox {
        position: relative;
        display: block;
        width: 100%;
        max-width: 60px;
        transition: 0.4s linear;
        overflow: hidden;
    }

    .container1 .searchbox .searchbox__input {
        display: block;
        appearance: none;
        width: 100%;
        border: none;
        outline: none;
        border-radius: 50px;
        background-color: #6844ff;
        padding: 15px;
        color: #6844ff;
        font-size: 20px;
        cursor: pointer;
        transition: 0.4s linear;

    }

    .container1 .searchbox .searchbox__input::placeholder {
        visibility: hidden;
    }

    .container1 .searchbox .searchbox__input:focus::placeholder {
        visibility: visible;
    }

    .container1 .searchbox .searchbox__icon {
        position: absolute;
        right: calc(60px / 2);
        top: 50%;
        transform: translate(50%, -50%);
        width: 20px;
        height: 20px;
        pointer-events: none;
        filter: invert(1);
        fill: #6844ff;
        transition: 0.4s linear;

    }

    .container1 :focus-within {
        max-width: 300px;

    }

    .container1 .searchbox .searchbox__input:focus-within {
        background-color: #0f111a;
        padding-right: 50px;
        box-shadow: inset 0 0 10px rgba(104, 68, 255, 255);
    }

    /* btn filtrer */
    .btn_filtrer {
        border: 2px solid rgba(104, 68, 255, 255);
        color: rgba(104, 68, 255, 255);
        padding: 15px 30px;
        border-radius: 8px;
        text-transform: uppercase;
        font-weight: 500;
        transition: .3 linear;
        background-color: transparent !important;
        margin-right: 30px;
        transition: 0.4s linear;
    }

    .btn_filtrer:hover {
        background-color: #6844ff !important;
        color: #fff;
    }

    /* titre sneakers */
    h1 {
        color: #fff;
        font-size: 40px !important;
        font-family: 'Bebas Neue', sans-serif !important;
        margin-left: 5%;
    }

    .container2 {
        width: 100%;
        margin: 0 auto;
    }

    .container2 .card {
        display: grid;
        width: 100%;
        height: 450px;
        background: #292D3E;
        border-radius: 20px;
        margin: 20px;
        overflow: hidden;
        box-shadow: 0px 0px 30px black;
    }

    .container2 .card:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(45deg, #f0f, #22abfa);
        clip-path: circle(150px at 80% 20%);
        transition: 0.5s ease-in-out;
    }

    .container2 .card:hover:before {
        clip-path: circle(300px at 80% -20%);
    }

    /* marque */
    .container2 h4 {
        position: absolute !important;
        top: 15% !important;
        left: -20% !important;
        font-size: 15em !important;
        font-weight: bolder !important;
        font-style: italic !important;
        color: rgba(255, 255, 250, 0.08) !important;
        font-family: 'Bebas Neue', sans-serif;
    }

    /* img produit */
    .container2 .card .imgBx {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 9900;
        width: 100%;
        transition: 0.5s;
    }

    .container2 .card:hover .imgBx {
        top: 0%;
        transform: translateY(0%);
    }

    .container2 .card .imgBx {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -60%);
        width: 90%;
    }

    .container2 .card:hover .imgBx {
        transform: translate(-50%, -0%) rotate(-15deg);
        transition: 1s;
    }


    .container2 .card .contentBx {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 100px;
        text-align: center;
        transition: 1s;
        z-index: 10;
    }

    .container2 .card:hover .contentBx {
        height: 210px;
    }

    /* titre produit card */
    .container2 .card .contentBx h2 {
        position: relative;
        color: #fff;
        font-size: 30px;
        font-family: 'Bebas Neue', sans-serif;
        width: 100%;
        cursor: default;
    }

    /* size produit */
    .container2 .card .contentBx .size {
        display: flex;
        justify-content: center !important;
        align-items: center !important;
        transition: 0.5s;
        opacity: 0;
        visibility: hidden;
        cursor: default;
    }

    .container2 .card:hover .contentBx .size {
        opacity: 1;
        visibility: visible;
        transition-delay: 0.5s;
    }

    .container2 .card .contentBx .size h3 {
        color: #fff;
        font-weight: 400;
        font-size: 14px;
        text-transform: uppercase;
        font-family: 'Oswald', sans-serif;
        margin: 10px 10px;
    }

    .container2 .card .contentBx .size .prix_card {
        margin: 0;
        padding: 0;
        display: flex;
        align-items: center;
    }

    /* .container2 .card .contentBx .size span {
        width: 40px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        font-size: 14px;
        display: inline-block;
        color: #111 !important;
        background: #fff;
        margin: 0 5px;
        transition: 0.5s;
        color: #111;
        border-radius: 4px;
        cursor: pointer;
        transition: 0.4s linear;
    } */

    /* btn voir plus card */
    .container2 .card .contentBx a {
        display: inline-block;
        padding: 10px;
        margin-top: 20px;
        text-decoration: none;
        opacity: 0;
        transform: translateY(50px);
        transition: 0.5s;
        border: 2px solid rgba(104, 68, 255, 255);
        color: rgba(104, 68, 255, 255);
        border-radius: 8px;
        text-transform: uppercase;
        transition: 0.4 linear;
        font-family: 'Oswald', sans-serif;
        font-weight: 500;
    }

    .container2 .card:hover .contentBx a {
        opacity: 1;
        transform: translateY(0px);
        transition-delay: 0.75s;
    }

    .container2 .card .contentBx a:hover {
        transition-delay: 0.1s;
        background: #6844ff;
        color: #fff;
        text-transform: uppercase;
    }

    /* btn voir plus */
    .btn_voirplus {
        border: 2px solid rgba(104, 68, 255, 255);
        color: rgba(104, 68, 255, 255);
        padding: 15px 30px;
        border-radius: 8px;
        text-transform: uppercase;
        font-weight: 500;
        transition: .3 linear;
        background-color: transparent !important;
        transition: 0.4s linear;
    }

    .btn_voirplus:hover {
        background-color: #6844ff !important;
        color: #fff;
    }

    button:active {
        transform: scale(0.95);
    }

    button:focus {
        outline: none;
    }

    .voirplus_box {
        margin-top: 100px;
        margin-bottom: 150px;
    }

    /* .container2 .card .contentBx a img {
        width: 15px;
    } */

    /* responsive card */
    @media (min-width: 0px) {

        /* col- */
        .container2 .card {
            height: 350px;
            width: 50%;
        }
    }

    @media (min-width: 576px) {

        /* col-sm */
        .container2 .card {
            height: 350px;
            width: 100%;
        }
    }

    @media (min-width: 768px) {

        /* col-md */
        .container2 .card {
            height: 400px;
            width: 100%;
        }
    }

    @media (min-width: 992px) {

        /* col-lg */
        .container2 .card {
            height: 400px;
            width: 100%;
        }
    }

    @media (min-width: 1280px) {

        /* col-xl */
        .container2 .card {
            height: 400px;
            width: 100%;
        }
    }
</style>