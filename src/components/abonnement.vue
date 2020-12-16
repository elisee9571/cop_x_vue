<template>
    <!-- test -->
    <!-- card abonnement -->

    <div class="body_parent">
        <div class="row justify-content-center">
            <section>
                <div v-for="abonnement in abonnements" :key="abonnement.id" class="carde">
                    <div class="face front">
                        <h3 class="pricing-card-header">{{ abonnement.nom }}</h3>
                        
                        <h1 style="margin-top:35px;">Pour seulement</h1>
                        <div class="price">{{ abonnement.prix }}<sup>€</sup><span>/mois</span></div>
                        
                        <h1 class="tirage" style="margin-top:35px;margin-left:0;padding:20px;">Bénéficiez d'offres spéciales en tant que Membre.</h1>
                    </div>
                   <div class="face back">
                       
                       <h1 class="tirage">{{ abonnement.description }}</h1>
                        <ul> 
                            <li>{{ abonnement.avantage1 }}</li>
                            <li>{{ abonnement.avantage2 }}</li>
                            <li>{{ abonnement.avantage3 }}</li>
                            <li>{{ abonnement.avantage4 }}</li>
                            <li>{{ abonnement.avantage5 }}</li>
                            <li>{{ abonnement.avantage6 }}</li>
                        </ul>
                        <a href="/Membre" class="order-btn">Découvrir</a>
                    </div>
                </div>
            </section>
        </div>
    </div>

</template>

<script>
    import AOS from 'aos';

    export default {
        name: 'abonnement',

        data() {
            return {
                abonnements: {},
            };
        },
        created() {
            this.axios
                .get("http://localhost:3000/abonnement/all")
                .then((res) => {
                    this.abonnements = res.data.abonnements;
                })
                .catch((err) => {
                    alert(err);
                });
        },
        mounted() {
            AOS.init()
        }

    }
</script>

<style>
    /* card abo */
    .body_parent {
        position: relative;
        overflow: hidden;
    }
    section {
        display: flex;
        justify-content: center !important;
        align-items: center !important;
        min-height: 100vh;
    }
    section::before {
        content: '';
        position: absolute;
        bottom: 10%;
        left: 50%;
        width: 600px;
        height: 600px;
        background: linear-gradient(45deg, #f0f, #22abfa);
        border-radius: 50%;
    }
    .carde{
        margin-top: 100px ;
        position: relative;
        width: 500px;
        height: 600px;
        transform-style: preserve-3d;
        perspective: 500px;
        text-align: center;
    }
    @media (min-width: 0px){
        .carde{
        width: 400px;
        height: 500px;
    }
    }
    @media (min-width: 768px){
        .carde{
        width: 500px;
        height: 550px;
    }
    }
    .carde .face {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
        border-radius: 15px;
        background: rgba(255, 255, 255, 0.03);
        backdrop-filter: blur(10px);
        transform-style: preserve-3d;
        transition: 1s;
        backface-visibility: hidden;
    }
    /* rotate */
    .carde:hover .face.front{
        transform: rotateY(180deg);
    }
    .carde .face.back{
        padding: 25px 25px;
        transform: rotateY(180deg);
    }
    .carde:hover .face.back{
        transform: rotateY(360deg);
    }
    /* front */
    .carde .face.front .pricing-card-header {
        background: linear-gradient(-200.7032957649deg, rgba(151, 120, 255, 255) 0%, rgba(104, 68, 255, 255) 100%);
        display: inline-block;
        color: #fff;
        padding: 12px 30px;
        border-radius: 0 0 20px 20px;
        font-size: 30px;
        font-family: 'Bebas Neue', sans-serif;
    }
    /* prix */
    .carde .face.front .price {
        font-size: 60px;
        color: #fff;
        margin: 20px 0;
        text-shadow: 3px 0 10px black;
        box-shadow: 0 0 40px rgba(104, 68, 255, 255);
        background: linear-gradient(-200.7032957649deg, rgba(151, 120, 255, 255) 0%, rgba(104, 68, 255, 255) 100%);
    }

    /* back */
    .carde .face.back ul li{
        list-style: none;
        color: #fff;
        font-size: 25px;
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