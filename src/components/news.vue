<template>
    <div class="product-collection">
        <div class="container_news">
            <div class="product-collection-wrapper">
                <!-- product col left -->
                <div class="product-col-left flex">
                    <div class="product-col-content">
                        <h2 class="sm-title">Nouveauté</h2>
                        <h2 class="md-title">Sneakers</h2>
                        <p class="text-light">Aillez accès à nos Nouveautés SNEAKERS avant les autres et profitez pour vous inscrire en créant un compte 
                            pour pouvoir bénéficier d'un espace client.</p>
                        <button type="button" class="btn-dark">Voir plus</button>
                    </div>
                </div>

                <!-- product col right -->
                <div class="product-col-right">
                    <div class="product-col-r-top flex">
                        <div class="product-col-content">
                            <h2 class="sm-title">Nouveauté</h2>
                            <h2 class="md-title">Streetwear</h2>
                            <p class="text-light">Aillez accès à nos Nouveautés STREETWEAR avant les autres et profitez pour vous inscrire en créant un compte 
                            pour pouvoir bénéficier d'un espace client.</p>
                            <button type="button" class="btn-dark">Voir plus</button>
                        </div>
                    </div>

                    <div class="product-col-r-bottom">
                        <!-- left -->
                        <div class="flex">
                            <div class="product-col-content">
                                <!-- <h2 class="sm-title">Notre abonnement</h2> -->
                                <h2 class="md-title">Devenir membre</h2>
                                <p class="text-light">Pour seulement 
                                    <strong style="font-size: 20px;">7,99€</strong>
                                    profitez de notre abonnement premium avec comme <strong>AVANTAGES :</strong></p>
                                <p class="text-light text-left"><stong>Tirage au sort de la sneakers du mois</stong>
                                    <br>+ Service client Prioritaire
                                    <br>+ Accès aux nouvelles sorties en avant première
                                    <br>+ Bonus d'anniversaire
                                    <br>+ la Livraison rapide Offerte
                                    <br>-10% Lors de votre Première commande</p>
                                <button type="button" class="btn-dark">Voir plus</button>
                            </div>
                        </div>
                        <!-- right -->
                        <div class="flex">
                            <div class="product-col-content">
                                <h2 class="sm-title">Actus</h2>
                                <h2 class="md-title">best sellers </h2>
                                <p class="text-light">Nos best sellers rien que pour vous profitez et foncez vite ça part vite !!!</p>
                                <button type="button" class="btn-dark">Voir plus</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "news",
    }
</script>

<style>
    .container_news {
        width: 88vw;
        margin: 0 auto;
    }

    .lg-title,
    .md-title,
    .sm-title {
        font-family: 'Bebas Neue', sans-serif;
        padding: 0.6rem 0;
        text-transform: capitalize;
    }

    .lg-title {
        font-size: 2.5rem;
        font-weight: 500;
        text-align: center;
        padding: 1.3rem 0;
        opacity: 0.9;
    }

    .md-title {
        font-size: 2rem;
        font-family: 'Bebas Neue', sans-serif;
    }

    .sm-title {
        font-weight: 300;
        font-size: 1rem;
        text-transform: uppercase;
    }

    .text-light {
        font-family: 'Oswald', sans-serif;
        font-size: 1rem;
        font-weight: 600;
        line-height: 1.5;
        opacity: 0.5;
        margin: 0.4rem 0;
        text-shadow: 0 0 10px black;
    }


    /* product collection */

    .product-collection {
        padding: 3.2rem 0;
    }

    .product-collection-wrapper {
        padding: 3.2rem 0;
    }

    .product-col-left {
        background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)), url("../assets/p1.jpg") center/cover no-repeat;
    }

    .product-col-r-top {
        background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)), url("../assets/p2.png") center/cover no-repeat;
    }

    .flex {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        height: 50vh;
        padding: 2rem 1.5rem 3.2rem;
        margin: 5px;
    }

    .product-col-r-bottom>div:first-child {
        background: #ffcc00;
    }

    .product-col-r-bottom>div:last-child {
        background: #00ff66;
    }
    .product-col-content {
        text-align: center;
        color: white;
    }

    .product-collection .text-light {
        opacity: 1;
        font-size: 0.8;
        font-weight: 400;
        line-height: 1.7;
    }

    .btn-dark {
        background: black;
        color: white;
        outline: 0;
        border-radius: 25px;
        padding: 0.7rem 1rem;
        border: 0;
        margin-top: 1rem;
        cursor: pointer;
        transition: all 0.6s ease;
        font-size: 1rem;
        font-family: inherit;
        box-shadow: 0 0 10px black;
    }

    .btn-dark:hover {
        background-color: #6844ff !important;
    }


    /* Media Queries */

    @media screen and (min-width: 992px) {
        .product-items {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }

        .product-col-r-bottom {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media screen and (min-width: 1200px) {
        .product-items {
            grid-template-columns: repeat(3, 1fr);
        }

        .product {
            margin-right: 1rem;
            margin-left: 1rem;
        }

        .products .text-light {
            width: 50%;
        }
    }

    @media screen and (min-width: 1336px) {
        .product-items {
            grid-template-columns: repeat(4, 1fr);
        }

        .product-collection-wrapper {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }

        .flex {
            height: 60vh;
        }

        .product-col-left {
            height: 121.5vh;
        }
    }
</style>