<template>

    <!-- page sneakers -->
    <div class="container-fluid">
        <div class="row">
            <!-- card produit -->
            <div class="container container2">
                <div class="row justify-content-center">
                    <div v-for="produit in produits" :key="produit.id" class="col-lg-3 card">
                        <!-- col-md-5 col-sm-5 -->
                        <!-- marque produit -->
                        <h4>{{ produit.marque }}</h4>

                        <!-- image produit -->
                        <img class="imgBx" :src="require(`@/assets/${produit.Images[0].image}.png`)">

                        <!-- text produit -->
                        <div class="contentBx">
                            <h2 style="margin-bottom:10px;">{{ produit.nom }}</h2>
                            <div class="row justify-content-center">
                                <p>À partir de :</p>
                                <h1 class="prix_card" v-if="produit.Stocks">{{ produit.Stocks[0].prix }} €</h1>
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
    export default {
        name: 'slider',

        data() {
            return {
                produits: {},
                stocks: {},
            };
        },
        created() {
            this.axios
                .get("http://localhost:3000/produit/order1/6")
                .then((res) => {
                    this.produits = res.data.produits;
                })
                .catch((err) => {
                    alert(err);
                });
        },

    }
</script>

/*
@media (min-width:0px) {
.container-fluid .container2 .card{
width: 185px;
}
}
*/
<style>
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
        height: 125px;
        text-align: center;
        transition: 1s;
        z-index: 10;
    }

    .container2 .card:hover .contentBx {
        height: 200px;
    }

    /* titre produit card */
    .container2 .card .contentBx h2 {
        position: relative;
        color: #fff;
        font-size: 25px;
        font-family: 'Bebas Neue', sans-serif;
        width: 100%;
        cursor: default;
        padding: 0 10px;
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

    /* btn voir plus card */
    .container2 .card .contentBx a {
        display: inline-block;
        padding: 10px;
        margin-top: 0px;
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
        font-weight: bold;
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

    /* .voirplus_box {
        margin-top: 100px;
        margin-bottom: 150px;
    } */

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