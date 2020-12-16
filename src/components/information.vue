<template>
    <div class="container-fluid">
        <div class="btn_arrow">
      <i class="fas fa-arrow-up icone"></i>
    </div>
        <div class="accordion" id="accordionExample">
            <h1 class="titre_faq">authenticité</h1>

            <div class="card">
                <div class="card-header" id="headingOne">

                    <button class="btn btn-block collapsed" data-toggle="collapse" data-target="#collapseOne"
                        aria-expanded="false" aria-controls="collapseOne">
                        <a class="accordion-link">Les articles sont-ils authentiques et neufs ?</a>
                    </button>

                </div>

                <div id="collapseOne" class="collapse" aria-labelledby="headingOne"
                    data-parent="#accordionExample">
                    <div class="card-body">
                        <p>Oui, tous les articles vendus sur Cop X sont neufs et authentiques. Avant d'arriver entre vos
                            mains, ils sont contrôlés pour assurer leur authenticité. Tous les produits sont neufs, et
                            proviennent directement de notre réseau de revendeurs particuliers et professionnels
                            sélectionnés individuellement pour leur expérience. Ils vous seront livrés dans leur boite
                            d'origine avec l'ensemble des accessoires.
                            Nous condamnons fermement la vente de contrefaçons qui tendent à ressembler de plus en plus
                            aux originaux.</p>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="headingTwo">

                    <button class="btn btn-block collapsed" type="button" data-toggle="collapse"
                        data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <a class="accordion-link">Pourquoi vos produit sont dure à trouver ?</a>
                    </button>

                </div>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                    <div class="card-body">
                        <p>Bonne question ! Ces produits sortent en quantités extrêmement
                            limitées
                            et sont en rupture de stock sur tous les sites internet et dans toutes les boutiques en
                            quelques heures,
                            minutes et parfois même quelques secondes.
                            Sur Wethenew, notre mission est de vous permettre de retrouver et d’obtenir ces articles,
                            bien sûr 100% neufs et authentiques, même après leur sortie. Nous travaillons en partenariat
                            avec un réseau
                            de revendeurs partenaires international pour obtenir et vous proposer la majorité des
                            tailles des produits
                            limités les plus récents.</p>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="headingThree">

                    <button class="btn btn-block collapsed" type="button" data-toggle="collapse"
                        data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <a class="accordion-link">Comment authentifiez-vous les produits ?</a>
                    </button>

                </div>
                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                    <div class="card-body">
                        <p>Tous les produits sont examinés, de la boîte
                            aux semelles pour s'assurer de leur authenticité. Ils sont ensuite comparés à des modèles
                            authentiques que nous gardons en stock spécialement pour le processus d'authentification.
                            Enfin, nous examinons les preuves d'achat, les références, et nous passons les paires sous
                            une lumière ultra-violet pour en révéler les détails uniquement présents sur les paires
                            authentiques.</p>
                    </div>
                </div>
            </div>

            <!-- taille produit -->
            <h1 class="titre_faq">Disponibilité</h1>
            <div class="card">
                <div class="card-header" id="heading4">

                    <button class="btn btn-block collapsed" type="button" data-toggle="collapse"
                        data-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                        <a class="accordion-link">Quelles sont les tailles maximales et minimales ?</a>
                    </button>

                </div>
                <div id="collapse4" class="collapse" aria-labelledby="heading4e" data-parent="#accordionExample">
                    <div class="card-body">
                        <p>Pour les produits que nous avons en stock, les tailles minimales et maximales dépendent des
                            modèles.</p>
                    </div>
                </div>
            </div>

            <!-- prix des produits -->
                <h1 class="titre_faq">Prix et réductions</h1>
            <div class="card">
                <div class="card-header" id="heading5">

                    <button class="btn btn-block collapsed" type="button" data-toggle="collapse"
                        data-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                        <a class="accordion-link">Comment déterminez-vous le prix des produits ?</a>
                    </button>

                </div>
                <div id="collapse5" class="collapse" aria-labelledby="heading5" data-parent="#accordionExample">
                    <div class="card-body">
                        <p>On vous explique tout : ces produits sortent en quantités extrêmement limitées
                            et sont en rupture de stock sur tous les sites internet et dans toutes les boutiques
                            ‘traditionnelles’.
                            <br>
                            Sur Cop X, notre mission est de vous permettre de retrouver et d’obtenir ces articles,
                            bien sûr 100% neufs et authentiques, même après leur sortie.
                            Les prix sont donc quotidiennement déterminés en fonction des cours du marché de revente.</p>
                    </div>
                </div>
            </div>
            
            <div class="card">
                <div class="card-header" id="heading6">

                    <button class="btn btn-block collapsed" type="button" data-toggle="collapse"
                        data-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                        <a class="accordion-link">Y'a-t'il des réductions ?</a>
                    </button>

                </div>
                <div id="collapse6" class="collapse" aria-labelledby="heading6" data-parent="#accordionExample">
                    <div class="card-body">
                        <p>Bien sûr, vous pouvez bénéficier de 15€ de réduction immédiate sur votre première commande en
                            vous inscrivant à notre newsletter en bas de la page d’accueil ou sur ce lien. Vous recevrez
                            par e-mail le code de réduction.</p>
                    </div>
                </div>
            </div>

            <!-- livraison -->
                <h1 class="titre_faq">Envoi et livraison</h1>
            <div class="card">
                <div class="card-header" id="heading7">

                    <button class="btn btn-block collapsed" type="button" data-toggle="collapse"
                        data-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                        <a class="accordion-link">Comment se passe la livraison ?</a>
                    </button>

                </div>
                <div id="collapse7" class="collapse" aria-labelledby="heading7" data-parent="#accordionExample">
                    <div class="card-body">
                        <p>La livraison s'effectue en France comme pour le reste de l'Europe via DHL à votre domicile,
                            remis contre signature et assuré. Une fois votre colis récupéré par le transporteur,
                            un mail comportant le numéro de tracking vous sera envoyé, afin que vous puissiez suivre
                            votre colis.
                            <br>
                            Nos délais de livraison sont en général de 10 jours ouvrés pour la France et de 12 à 15
                            jours ouvrés pour l'Europe.</p>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header" id="heading8">

                    <button class="btn btn-block collapsed" type="button" data-toggle="collapse"
                        data-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                        <a class="accordion-link">Combien coûte la livraison ?</a>
                    </button>

                </div>
                <div id="collapse8" class="collapse" aria-labelledby="heading8" data-parent="#accordionExample">
                    <div class="card-body">
                        <p>En France, la livraison standard est à 5€ et s’effectue en général en 7 à 10 jours ouvrés,
                            la livraison express est à 15€ et s'éffectue en général en 24h.
                            <br>
                            Si les délais de livraison ont été dépassés, n’hésitez pas à nous contactez sur notre page contact.
                            En cas de demande, veuillez vous munir de votre numéro de commande précédé d'un hashtag,
                            que vous pourrez retrouver dans votre email de confirmation de commande.</p>
                    </div>
                </div>
            </div>

            <div class="card">
                <div class="card-header" id="heading9">

                    <button class="btn btn-block collapsed" type="button" data-toggle="collapse"
                        data-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
                        <a class="accordion-link">Je n'est toujours pas reçu mon numéro de suivi ?</a>
                    </button>

                </div>
                <div id="collapse9" class="collapse" aria-labelledby="heading9" data-parent="#accordionExample">
                    <div class="card-body">
                        <p>En France, la livraison standard est à 5€ et s’effectue en général en 7 à 10 jours ouvrés,
                            la livraison express est à 15€ et s'éffectue en général en 24h.
                            <br>
                            Si les délais de livraison ont été dépassés, n’hésitez pas à nous contactez sur notre page contact.
                            En cas de demande, veuillez vous munir de votre numéro de commande précédé d'un hashtag,
                            que vous pourrez retrouver dans votre email de confirmation de commande.</p>
                    </div>
                </div>
            </div>

            <!-- politique de retours -->
                <h1 class="titre_faq">échanges et retours</h1>
            <div class="card">
                <div class="card-header" id="heading10">

                    <button class="btn btn-block collapsed" type="button" data-toggle="collapse"
                        data-target="#collapse10" aria-expanded="false" aria-controls="collapse10">
                        <a class="accordion-link"> Puis-je modifier ou annuler ma commande ?</a>
                    </button>

                </div>
                <div id="collapse10" class="collapse" aria-labelledby="heading10" data-parent="#accordionExample">
                    <div class="card-body">
                        <p>Un problème dans votre commande avant qu’elle soit expédiée ?
                            <br>
                            Veuillez-vous munir de votre numéro de commande précédés d’un hashtag, que vous pourrez
                            retrouver dans votre email de confirmation de commande,
                            puis contactez-nous sur notre page contact.</p>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="heading11">

                    <button class="btn btn-block collapsed" type="button" data-toggle="collapse"
                        data-target="#collapse11" aria-expanded="false" aria-controls="collapse11">
                        <a class="accordion-link">Puis-je échanger mes produits ?</a>
                    </button>

                </div>
                <div id="collapse11" class="collapse" aria-labelledby="heading11" data-parent="#accordionExample">
                    <div class="card-body">
                        <p>Un problème de taille ? Un changement de modèle souhaité ?
                            <br>
                            Il est possible de procéder à un échange quelle qu’en soit la raison, en respectant les
                            conditions de retours <a href="#">disponibles juste ici.</a></p>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="heading12">

                    <button class="btn btn-block collapsed" type="button" data-toggle="collapse"
                        data-target="#collapse12" aria-expanded="false" aria-controls="collapse12">
                        <a class="accordion-link">Puis-je me faire rembourser ?</a>
                    </button>

                </div>
                <div id="collapse12" class="collapse" aria-labelledby="heading12" data-parent="#accordionExample">
                    <div class="card-body">
                        <p>Un changement d'avis ?
                            <br>
                            Il est possible de procéder à un remboursement de votre commande quelle qu’en soit la
                            raison,
                            en respectant les conditions de retours<a href="#"> disponibles juste ici.</a></p>
                    </div>
                </div>
            </div>

            <!-- information de paiement -->
                <h1 class="titre_faq">Modes de paiement</h1>
            <div class="card">
                <div class="card-header" id="heading13">

                    <button class="btn btn-block collapsed" type="button" data-toggle="collapse"
                        data-target="#collapse13" aria-expanded="false" aria-controls="collapse13">
                        <a class="accordion-link">Quelles sont les modes de paiement ?</a>
                    </button>

                </div>
                <div id="collapse13" class="collapse" aria-labelledby="heading13" data-parent="#accordionExample">
                    <div class="card-body">
                        <p>Les méthodes de paiement acceptées sont les cartes de crédit (Visa, MasterCard – ou cartes de
                            débit pour les paiements étrangers)
                            ou le paiement via PayPal.</p>
                    </div>
                </div>
            </div>

            <!-- à propos de nous -->
                <h1 class="titre_faq">à propos de nous</h1>
            <div class="card">
                <div class="card-header" id="heading14">

                    <button class="btn btn-block collapsed" type="button" data-toggle="collapse"
                        data-target="#collapse14" aria-expanded="false" aria-controls="collapse14">
                        <a class="accordion-link">Comment nous contacter ?</a>
                    </button>

                </div>
                <div id="collapse14" class="collapse" aria-labelledby="heading14" data-parent="#accordionExample">
                    <div class="card-body">
                        <p>Rien de plus facile : il suffit de nous écrire sur notre page contact, 
                            nous sommes disponibles du lundi au vendredi de 10h à 19h !
                        </p>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="heading15">

                    <button class="btn btn-block collapsed" type="button" data-toggle="collapse"
                        data-target="#collapse15" aria-expanded="false" aria-controls="collapse15">
                        <a class="accordion-link">Avez-vous une boutique ?</a>
                    </button>

                </div>
                <div id="collapse15" class="collapse" aria-labelledby="heading15" data-parent="#accordionExample">
                    <div class="card-body">
                        <p>Pas encore !</p>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-header" id="heading16">

                    <button class="btn btn-block collapsed" type="button" data-toggle="collapse"
                        data-target="#collapse16" aria-expanded="false" aria-controls="collapse16">
                        <a class="accordion-link">Ou êtes-vous ?</a>
                    </button>

                </div>
                <div id="collapse16" class="collapse" aria-labelledby="heading16" data-parent="#accordionExample">
                    <div class="card-body">
                        <p>Nos locaux sont situés à Paris.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "information",

        mounted() {
      /* arrow up */
      const btn_arrow = document.querySelector('.btn_arrow');
      btn_arrow.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        })
      })
    },

    }
</script>

<style>
.card .card-header .btn, .navbar .navbar-nav > a.btn {
    margin: 0 !important;
    padding: 10px 0 !important;
}
    .accordion {
        width: 100%;
        max-width: 60rem;
        margin: 100px auto;
        padding: 0 1.5rem;
    }

    .accordion .card {
        background: #292d3e ;
        border-radius: 8px !important;
        margin-bottom: 1rem;
        padding: 1rem;
    }

    .accordion .card .card-header {
        font-size: 20px;
        color: #fff;
        text-decoration: none !important;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 5px 10px;
    }

    .accordion .card .card-body {
        overflow: hidden;
        position: relative;
        background: #292d3e;
    }

    .accordion .card .card-body::before {
        content: '';
        position: absolute;
        width: .6rem;
        height: 100%;
        background: #6844ff;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
    }

    .accordion .card .card-body p {
        font-size: 18px;
        padding-left: 5px;
        color: #cdcdcd;
    }

    /* titre question */
    .accordion-link {
        font-size: 20px;
        color: #fff;
        text-decoration: none !important;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 5px 10px;
        font-family: 'Oswald', sans-serif;
    }
    .accordion-link:hover {
        color: #6844ff;
    }

    .titre_faq{
        margin-top: 50px;
    }
    
</style>