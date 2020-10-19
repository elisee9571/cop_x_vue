<template>

    <div class="cacher">
          <div id="carouselExampleIndicators" class="carousel slide carousel1" data-ride="carousel">

                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>

                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="../assets/diapo1.jpg" class="d-block w-100 img_carousel" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../assets/diapo2.jpg" class="d-block w-100 img_carousel" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../assets/diapo3.jpg" class="d-block w-100 img_carousel" alt="...">
                    </div>
                </div>

                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
       
    </div>
</template>

<script>
    export default {
        name: "carousel",

    };
</script>

<style>

    .carousel1 {
        max-height: 80vh;
        overflow: hidden;
    }

    @media (min-width: 0px) {

        /* carousel cacher en dessous des 959px*/
        .cacher {
            display: none;
        }
    }

    @media (min-width: 992px) {

        /* carousel visible au dessus des 960px*/
        .cacher {
            display: block;
        }
    }
</style>