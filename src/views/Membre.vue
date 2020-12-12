<template>
    <div>
        <mynav /><!-- import components mynav -->

        <div class="container-fluid">
            <h1>Devenir Membre CopX</h1>
            <div class="row text-center">
                <div class="col-12">
                    <h1 class="text-center" style="margin-left:0px;">Là où tous commence</h1>
                    <p class="text-center">En tant que Membre CopX, vous avez accès à des avantages hors du commun,
                        sur les produits, livraison, réduction et bien d'autre...
                        <br> Afin que rien ne vous arrête.</p>
                    <a href="/profil" class="order-btn">S'abonner</a>
                </div>
            </div>

            <div class="row">
                <div class="col-6">
                    <img src="../assets/membre3.jpg" alt="">
                </div>
                <div class="col-6">
                    <img src="../assets/membre2.jpg" alt="">
                </div>
            </div>

        </div>

        <myfooter /><!-- import components myfooter -->
    </div>

</template>

<script>
    import mynav from "../components/mynav.vue"; /* import components mynav */
    import myfooter from "../components/myfooter.vue"; /* import components myfooter */

    export default {
        components: {
            mynav,
            myfooter,
        },
    }
</script>

<style>

</style>