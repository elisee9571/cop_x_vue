<template>
    <div class="container-fluid slider_marque">
        <div class="row">
            <vue-glide ref="slider" type="carousel">
                <vue-glide-slide class="col" style="height: 100px; width:100px; ">
                    <img src="../assets/icon_nike.png" class="img_marque marque_nike" alt="nike">
                </vue-glide-slide>
                <vue-glide-slide class="col" style="height: 100px; width:100px; ">
                    <img src="../assets/icon_yeezy.png" class="img_marque marque_yeezy" alt="yeezy">
                </vue-glide-slide>
                <vue-glide-slide class="col" style="height: 100px; width:100px; ">
                    <img src="../assets/icon_airjordan.png" class="img_marque marque_airjordan" alt="air jordan">
                </vue-glide-slide>
                <vue-glide-slide class="col" style="height: 100px; width:100px; ">
                    <img src="../assets/icon_supreme.png" class="img_marque marque_supreme" alt="supreme">
                </vue-glide-slide>
                <vue-glide-slide class="col" style="height: 100px; width:100px; ">
                    <img src="../assets/icon_palace.png" class="img_marque marque_palace" alt="palace">
                </vue-glide-slide>
                <vue-glide-slide class="col" style="height: 100px; width:100px; ">
                    <img src="../assets/icon_offwhite.png" class="img_marque marque_offwhite" alt="off-white">
                </vue-glide-slide>
                <vue-glide-slide class="col" style="height: 100px; width:100px; ">
                    <img src="../assets/icon_kaws.png" class="img_marque marque_kaws" alt="kaws">
                </vue-glide-slide>
                <vue-glide-slide class="col" style="height: 100px; width:100px; ">
                    <img src="../assets/icon_assc.png" class="img_marque marque_assc" alt="assc">
                </vue-glide-slide>
                <vue-glide-slide class="col" style="height: 100px; width:100px; ">
                    <img src="../assets/icon_travis.png" class="img_marque marque_travis" alt="travis scott">
                </vue-glide-slide>
                <vue-glide-slide class="col" style="height: 100px; width:100px; ">
                    <img src="../assets/icon_adidas.png" class="img_marque marque_adidas" alt="adidas">
                </vue-glide-slide>
                <vue-glide-slide>
                    <img src="../assets/icon_bape.png" class="img_marque marque_bape" alt="bape">
                </vue-glide-slide>
                <vue-glide-slide class="col" style="height: 100px; width:100px; ">
                    <img src="../assets/icon_asics.png" class="img_marque marque_asics" alt="asics">
                </vue-glide-slide>
                <vue-glide-slide class="col" style="height: 100px; width:100px; ">
                    <img src="../assets/icon_newbalance.png" class="img_marque marque_newbalance" alt="new balance">
                </vue-glide-slide>
                <vue-glide-slide class="col" style="height: 100px; width:100px; ">
                    <img src="../assets/icon_thenorthface.png" class="img_marque marque_thenorthface"
                        alt="The north face">
                </vue-glide-slide>
                <vue-glide-slide class="col" style="height: 100px; width:100px; ">
                    <img src="../assets/icon_fragment.png" class="img_marque marque_fragment" alt="fragment">
                </vue-glide-slide>
            </vue-glide>
        </div>
    </div>
</template>

<script>
    import {
        Glide,
        GlideSlide
    } from 'vue-glide-js'

    export default {
        name: "marque",
        components: {
            [Glide.name]: Glide,
            [GlideSlide.name]: GlideSlide
        },


    }
</script>

<style>
    .slider_marque {
        min-height: 100vh;
    }

    .slider_marque .row {
        min-height: 100vh;
        width: 100%;
        clip-path: polygon(100% 0, 100% 80%, 0 100%, 0 20%) !important;
        background-color: #6844ff;
        align-items: center;
    }

    /* box marque */
    .marque_box {
        /* box-shadow: 0 0 10px #6844ff !important;  */
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    .glide__slide {
        margin: 0 !important;
        padding: 0 !important;
    }

    /* marque img taille séparer */
    .img_marque {
        display: flex;
        align-items: center;
        filter: invert(1);
        width: 85px;
        height: 85px;
        margin: auto !important;
    }

    .marque_nike {
        height: 100px;
        width: 100px;
    }

    .marque_yeezy {
        transform: translateY(70%);
        width: 150px;
        height: 40px;
    }

    .marque_airjordan {
        height: 90px;
        width: 90px;
    }

    .marque_supreme {
        transform: translateY(-15%);
        width: 140px;
        height: 140px;
    }

    .marque_palace {
        width: 100px;
        height: 90px;
    }

    .marque_offwhite {
        width: 80px;
        height: 80px;
    }

    .marque_kaws {
        width: 125px;
        height: 80px;
    }

    .marque_assc {
        width: 90px;
        height: 80px;
    }

    .marque_travis {
        transform: translateY(-20%);
        width: 150px;
        height: 150px;
    }

    .marque_adidas {
        width: 105px;
        height: 80px;
    }

    .marque_bape {
        width: 180px;
        height: 90px;
    }

    .marque_asics {
        width: 180px;
        height: 90px;
    }

    .marque_newbalance {
        transform: translateY(20%);
        width: 100px;
        height: 70px;
    }

    .marque_thenorthface {
        transform: translateY(-20%);
        width: 125px;
        height: 150px;
    }

    .marque_fragment {
        transform: translateY(10%);
    }
</style>