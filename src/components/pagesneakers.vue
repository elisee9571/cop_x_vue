<template>
    <div class="container-fluid container3">
        <div class="row ">
            <div class="container">
                <div class="row justify-content-center">
                    <div v-for="produit in produits" :key="produit.id" class="card">
                        <router-link :to="`/pageproduit/${produit.id}`">
                            <div class="imgBx">
                                <img class="imgBx" :src="require(`@/assets/${produit.Images[0].image}.png`)">
                            </div>
                        </router-link>
                        <div class="contentBx">
                            <h2 style="cursor:default;">{{ produit.nom }}</h2>
                            <div class="row">
                                <div class="price" v-if="produit.Stocks">{{ produit.Stocks[0].prix }} €</div>
                                <div class="orther">
                                    <router-link :to="`/pageproduit/${produit.id}`">
                                        <div class="panier"><i class="fas fa-shopping-cart"></i></div>
                                    </router-link>
                                    <div class="favoris"><i class="fas fa-heart"></i></div>
                                </div>
                            </div>
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
        props: ["produits","produit.Stocks"],
        /* permet de passer des accessoires à d'autres composants
        en gros permet de pouvoir utiliser "produits" sur d'autre pages
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
        background-color: #32325d;
        padding: 15px;
        color: #fff;
        font-family: 'Oswald',sans-serif;
        letter-spacing: 1px;
        font-size: 20px;
        cursor: pointer;
        transition: 0.4s linear;
        box-shadow: inset -3px -3px 9px #0f111a70, inset 3px 3px 9px #292d3e90;

    }

    .container1 .searchbox .searchbox__input::placeholder {
        visibility: hidden;
        color: rgb(82, 95, 127);
        font-weight: 400;
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
        transition: 0.4s linear;

    }

    .container1 :focus-within {
        max-width: 300px;

    }

    .container1 .searchbox .searchbox__input:focus-within {
        background-color: #32325d;
        padding-right: 50px;
        box-shadow: inset -3px -3px 9px #0f111a70, inset 3px 3px 9px #292d3e90;


    }

    /* btn filtrer */
    .btn_filtrer {
        color: #fff;
        /* color: rgb(82, 95, 127); */
        padding: 15px 30px;
        border: 1px solid transparent;
        border-radius: 8px;
        text-transform: uppercase;
        font-weight: bold;
        font-family: 'Bebas Neue', sans-serif;
        font-size: 18px;
        letter-spacing: 1px;
        transition: .3 linear;
        background-color: transparent;
        margin-right: 30px;
        transition: 0.4s linear;
        box-shadow: inset -3px -3px 9px #0f111a70, inset 3px 3px 9px #292d3e90;
    }

    .btn_filtrer:hover {
        box-shadow: -3px -3px 9px #0f111a70, 3px 3px 9px #292d3e90;
        
    }
    .voirplus_box{
        display: flex;
        justify-content: center;
        justify-items: center;
        padding: 0;
        margin-top: 100px;
        margin-bottom: -100px;
    }

    /* btn voir plus new */
    .btn_new {
        color: #fff;
        /* color: rgb(82, 95, 127); */
        padding: 15px 30px;
        border: 1px solid transparent;
        border-radius: 8px;
        text-transform: uppercase;
        font-weight: bold;
        font-family: 'Bebas Neue', sans-serif;
        font-size: 18px;
        letter-spacing: 1px;
        transition: .3 linear;
        background-color: transparent;
        /* margin-right: 30px; */
        transition: 0.4s linear;
        box-shadow: inset -3px -3px 9px #0f111a70, inset 3px 3px 9px #292d3e90;
    }

    .btn_new:hover {
        box-shadow:  -3px -3px 9px #0f111a70,  3px 3px 9px #292d3e90;
        
    }

    /* titre sneakers */
    h1 {
        color: #fff;
        font-size: 40px !important;
        font-family: 'Bebas Neue', sans-serif !important;
        margin-left: 5%;
    }

    /* card */
    .container3 .row .card .contentBx .row .orther {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 0;
        margin: 30px;

    }

    .container3 .card {
        font-family: 'Bebas Neue', sans-serif;
        justify-content: center;
        align-items: center;
        background-color: transparent;
        margin: 20px;
        position: relative;
        width: 300px;
        height: 420px;
        border-radius: 20px;
        box-shadow: -3px -3px 9px #0f111a70,  3px 3px 9px #292d3e90;
 }

    .container3 .card:hover {
        box-shadow:inset -3px -3px 9px #0f111a70, inset 3px 3px 9px #292d3e90;
 }

    .container3 .card .imgBx img {
        position: absolute;
        top: 25%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 200px;
    }

    .container3 .card .contentBx {
        position: absolute;
        width: 100%;
        height: 50%;
        text-align: center;
        top: 50%;
    }

    .container3 .card .contentBx .row {
        position: relative;
        height: 50%;
    }

    .container3 .card .contentBx .row .price {
        color: #fff;
        font-size: 25px;
        letter-spacing: 1px;
        cursor: pointer;
        margin: 27px 30px;
        display: flex;
        position: absolute;
        left: 0;
        padding: 5px 20px;
        border-radius: 20px;
        font-weight: 200;
        box-shadow: -3px -3px 9px #0f111a70,  3px 3px 9px #292d3e90;

    }

    .container3 .card .contentBx .row .price:hover {
        box-shadow:inset -3px -3px 9px #0f111a70, inset 3px 3px 9px #292d3e90;

    }

    .container3 .card .contentBx .row .panier {
        color: rgb(82, 95, 127);
        cursor: pointer;
        margin: 0 15px;
        padding: 10px 20px;
        border-radius: 20px;
        font-weight: bold;
        box-shadow: inset -3px -3px 9px #0f111a70, inset 3px 3px 9px #292d3e90;
    }

    .container3 .card .contentBx .row .panier:hover {
        color: #292a5a;
        box-shadow: -3px -3px 9px #0f111a70,  3px 3px 9px #292d3e90;
    }

    .container3 .card .contentBx .row .favoris {
        color: rgb(82, 95, 127);
        cursor: pointer;
        padding: 10px 20px;
        border-radius: 20px;
        font-weight: bold;
        box-shadow: inset -3px -3px 9px #0f111a70, inset 3px 3px 9px #292d3e90;
    }

    .container3 .card .contentBx .row .favoris:hover {
        color: #292a5a;
        box-shadow: -3px -3px 9px #0f111a70,  3px 3px 9px #292d3e90;
    }

    .container3 .card .contentBx h2 {
        padding: 0 30px;
        margin: 0;
        height: 50%;
        color: #fff;
        /* color: rgb(82, 95, 127); */
    }
</style>