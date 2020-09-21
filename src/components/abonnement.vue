<template>
    <div class="container">
        <div class="pricing-table">
            <div class="pricing-card">
                <h3 class="pricing-card-header">Premium</h3>
                <div class="price">7,99 <sup>€</sup><span>/mois</span></div>
                <ul>
                    <li class="tirage">Tirage au sort de la sneakers du mois</li>
                    <li>+ Service client Prioritaire </li>
                    <li>+ Accès aux nouvelles sorties en avant Première</li>
                    <li>+ Bonus d'anniversaire</li>
                    <li>+ Livraison rapide Offerte</li>
                    <li>-10% Lors de votre Première commande</li>
                </ul>
                <a href="/profil" class="order-btn">s'abonner</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'abonnement',
    }
</script>

<style>
.pricing-table {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: min(1600px, 100%);
    margin: auto;
    margin-bottom: 150px;
}

.pricing-card {
    flex: 1;
    height: 100%;
    max-width: 100%;
    background-color: #262626;
    margin: 20px 10px;
    text-align: center;
    cursor: pointer;
    overflow: hidden;
    color: #2d2d2d;
    transition: .3s linear;
    /* box-shadow: 0px 0px 20px black; */
    border-radius: 20px;
}

.pricing-card-header {
    background: linear-gradient(-200.7032957649deg, rgba(151, 120, 255, 255) 0%, rgba(104, 68, 255, 255) 100%);
    display: inline-block;
    color: #fff;
    padding: 12px 30px;
    border-radius: 0 0 20px 20px;
    font-size: 30px;
    transition: .4s linear;
    font-family: 'Bebas Neue', sans-serif;
}

.pricing-card:hover .pricing-card-header {
    box-shadow: 0 0 0 40em rgba(151, 120, 255, 255);
}


/* .pricing-card:hover {
    background: linear-gradient(45deg, #f0f, #22abfa);
} */

.price {
    font-size: 60px;
    color: #fff;
    margin: 20px 0;
    transition: .2 linear;
    text-shadow: 3px 0 10px black;
    box-shadow: 0 0 40px rgba(104, 68, 255, 255);
    background: linear-gradient(-200.7032957649deg, rgba(151, 120, 255, 255) 0%, rgba(104, 68, 255, 255) 100%);
}

.price sup,
.price span {
    color: #fff !important;
    font-size: 30px;
    font-weight: 700;
}

.pricing-card:hover,
.pricing-card:hover .price {
    color: #fff;
}

.tirage {
    font-size: 40px !important;
}

.pricing-card li {
    font-size: 25px;
    padding: 10px 0;
    color: #fff;
    font-family: 'Bebas Neue', sans-serif;
}

.order-btn {
    display: inline-block;
    margin-bottom: 40px;
    margin-top: 15px;
    border: 2px solid rgba(104, 68, 255, 255);
    color: rgba(104, 68, 255, 255);
    padding: 18px 40px;
    border-radius: 8px;
    text-transform: uppercase;
    font-weight: 500;
    transition: .3 linear;
}

.order-btn:hover {
    background-color: #6844ff;
    color: #fff;
    outline: none;
    text-decoration: none;
}

</style>