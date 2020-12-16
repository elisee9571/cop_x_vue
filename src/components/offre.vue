<template>
    <div class="features">
        <div class="container-fluid">
            <div class="features-wrapper">
                <!-- authentique -->
                <div class="feature-item">
                    <div class="featureBx">
                        <span class="feature-icon">
                            <i class="card-icon fas fa-award"></i>
                        </span>
                        <h1 class="feature-title">100% neufs et authentiques</h1>
                        <p class="text">Tous les produits vendus sont authentiques et neufs avec preuve à l'appuie
                            (tel qu'une facture,...).
                        </p>
                    </div>
                </div>
                <!-- securité -->
                <div class="feature-item">
                    <div class="featureBx">
                        <span class="feature-icon">
                            <i class="fas fa-credit-card"></i>
                        </span>
                        <h1 class="feature-title">Paiement sécurisé</h1>
                        <p class="text">Toutes les transactions sont sécurisées
                            grâce à un protocole crypté 3D Secure. Afin de faciliter et accélérer vos paiement.
                        </p>
                    </div>
                </div>
                <!-- livraison -->
                <div class="feature-item">
                    <div class="featureBx">
                        <span class="feature-icon">
                            <i class="card-icon fas fa-box">&ensp;& </i>
                            &ensp;<i class="fas fa-gem"></i>
                        </span>
                        <h1 class="feature-title">Livraison et Abonnement</h1>
                        <p class="text">Nous livrons en France mais aussi dans l'Europe !
                            Venez découvrir nos avantages ainsi que la possibilité d'avoir la
                            sneakers du mois en étant membre.</p>
                    </div>
                </div>
                <!-- service client -->
                <div class="feature-item">
                    <div class="featureBx">
                        <span class="feature-icon">
                            <!-- <i class="fas fa-envelope"></i> -->
                            <i class="card-icon fas fa-comments"></i>
                        </span>
                        <h1 class="feature-title">Service client</h1>
                        <p class="text">N'hésitez pas à nous faire part de vos problèmes.
                            Vous pouvez nous contactez par mail du lundi au vendredi !</p>
                    </div>
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
    /* offres */
    .features {
        position: relative;
        margin-top: 100px;
        overflow: hidden;
    }

    .features .container-fluid {
        min-height: 100vh;
    }

    .features .container-fluid::before {
        content: '';
        position: absolute;
        bottom: 15%;
        left: 15%;
        width: 600px;
        height: 600px;
        background: linear-gradient(45deg, #f0f, #22abfa);
        border-radius: 50%;
    }

    .features-wrapper {
        transform-style: preserve-3d;
    }

    .feature-item {
        text-align: center;
        padding: 2.5rem;
        backdrop-filter: blur(10px);
        transform-style: preserve-3d;
        transition: 1s;
        backface-visibility: hidden;
    }

    .feature-item p.text {
        color: #fff;
    }

    .feature-icon {
        color: #fff;
        font-size: 1.8rem;
    }

    .feature-title {
        color: #fff;
        margin: 0.6rem 0;
    }

    /* responsive */
    @media (min-width: 768px) {
        .features-wrapper {
            height: 100vh;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
        }

        .feature-item {
            border: none;
        }

        .feature-item:nth-child(odd) {
            border-right: 0.5px solid #cdcdcd;
        }
    }

    @media (min-width: 1200px) {
        .featureBx{
            padding-top: 3rem;
        }
        .features {
            clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 85%) !important;
            background: rgba(255, 255, 255, 0.03);
        }

        .features-wrapper {
            height: 100vh;
            grid-template-columns: repeat(4, 1fr);
            padding-top: 5rem;

        }

        .feature-item:nth-child(2) {
            border-right: 0.5px solid #cdcdcd;
        }

        .feature-item:nth-child(odd) .feature-icon {
            display: block;
            margin-top: 10rem;
        }
    }

    /* fin responsive */
</style>