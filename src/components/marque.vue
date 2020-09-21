<template>
    <div class="container">
        <div class="row">


            <div class="col-lg-2 col-md-4 col-4 marque_box marque_box_nike ">
                <div data-aos="zoom-in-right">
                    <img src="../assets/icon_nike.png" class="d-block img_marque marque_nike" alt="...">
                </div>
            </div>



            <div class="col-lg-2 col-md-4 col-4 marque_box marque_box_yeezy ">
                <div data-aos="fade-down-right">
                    <img src="../assets/icon_yeezy.png" class="d-block img_marque marque_yeezy" alt="...">
                </div>
            </div>


            <div class="col-lg-2 col-md-4 col-4 marque_box marque_box_airjordan ">
                <div data-aos="fade-up">
                    <img src="../assets/icon_airjordan.png" class="d-block img_marque marque_airjordan" alt="...">
                </div>
            </div>


            <div class="col-lg-2 col-md-4 col-4 marque_box marque_box_supreme ">
                <div data-aos="fade-up">
                    <img src="../assets/icon_supreme.png" class="d-block img_marque marque_supreme" alt="...">
                </div>
            </div>


            <div class="col-lg-2 col-md-4 col-4 marque_box marque_box_palace ">
                <div data-aos="fade-down-left">
                    <img src="../assets/icon_palace.png" class="d-block img_marque marque_palace" alt="...">
                </div>
            </div>


            <div class="col-lg-2 col-md-4 col-4 marque_box marque_box_offwhite ">
                <div data-aos="fade-left">
                    <img src="../assets/icon_offwhite.png" class="d-block img_marque marque_offwhite" alt="...">
                </div>
            </div>

        </div>
        <p class="info_marque text-center">et plein d'autres...</p>
    </div>
</template>

<script>
    export default {
        name: "marque",
    }
</script>

<style>
    /* css marque */
    /* box marque */
    .marque_box {
        /* box-shadow: 0 0 10px #6844ff !important;  */
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    .marque_box_nike {
        padding-top: 25px;
    }

    .marque_box_airjordan {
        padding-top: 25px;
    }

    .marque_box_offwhite {
        padding-top: 35px;
    }



    /* marque img taille séparer */
    .img_marque {
        display: flex;
        align-items: center;
        align-content: center;
        filter: invert(1);
        width: 100px;
        height: 100px;
        margin: 0;
        padding: 0;
    }

    .marque_nike {
        margin-left: 25px;
    }

    .marque_airjordan {
        margin-left: 25px;
    }

    .marque_yeezy {
        margin-top: 50px;
        width: 150px;
        height: 50px;
    }

    .marque_supreme {
        margin-left: -48px;
        width: 250px;
        height: 150px;
    }

    .marque_palace {
        margin-left: -20px;
        width: 190px;
        height: 125px;
    }

    .marque_offwhite {
        margin-left: 40px;
        width: 80px;
        height: 80px;
    }

    /* p info_marque */
    p.info_marque {
        color: #fff;
        font-family: 'Oswald', sans-serif;
        font-size: 20px !important;
    }
</style>