<template>

    <!-- navbar -->
    <div class="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-light">
            <!-- mon logo -->
            <span class="trait">
                <a class="navbar-brand navlogo" data-text="COP X" href="/">COP X</a>
            </span>
            <!-- menu burger responsive icon -->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- menu deroulant -->
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto text-center">

                    <!-- menu liste sneakers -->
                    <li class="nav-item active dropdown ">
                        <a class="nav-link " href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            <span>SNEAKERS</span>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="/sneakers">NOUVEAUTES</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="/nike1">NIKE</a>
                            <a class="dropdown-item" href="/yeezy1">YEZZY</a>
                            <a class="dropdown-item" href="/adidas1">ADIDAS</a>
                            <a class="dropdown-item" href="/jordan1">JORDAN</a>
                            <a class="dropdown-item" href="/off1">OFF-WHITE</a>
                        </div>
                    </li>

                    <!-- menu liste streetwear -->
                    <li class="nav-item dropdown ">
                        <a class="nav-link " href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            <span>STREETWEAR</span>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="/streetwear">NOUVEAUTES</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="/nike2">NIKE</a>
                            <a class="dropdown-item" href="/adidas2">ADIDAS</a>
                            <a class="dropdown-item" href="/jordan2">JORDAN</a>
                            <a class="dropdown-item" href="/off2">OFF-WHITE</a>
                            <a class="dropdown-item" href="/supreme2">SUPREME</a>
                            <a class="dropdown-item" href="/palace2">PALACE</a>
                            <a class="dropdown-item" href="/travis2">TRAVIS SCOTT</a>
                        </div>
                    </li>

                    <!-- menu lifestyle -->
                    <li class="nav-item dropdown ">
                        <div>
                            <a class="nav-link" href="lifestyle"><span>LIFESTYLE</span></a>
                        </div>
                    </li>
                </ul>

                <!-- mon icon profil -->
                <ul class="navbar-nav mr-auto text-center">

                    <li class="nav-item dropdown">
                        <a class="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            <img class="profil_icon"
                                src="https://img.icons8.com/ios-filled/31/000000/user-male-circle.png" />
                        </a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="/profil">PROFIL</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="/login">SE CONNECTER</a>
                            <a class="dropdown-item" href="/register">S'INSCRIRE</a>
                        </div>
                    </li>

                    <!-- mon panier -->
                    <li class="nav-item">
                        <a href="/panier" class="nav-link"><img class="profil_icon"
                                src="https://img.icons8.com/material/30/000000/shopping-cart--v1.png" /></a>
                    </li>

                </ul>

            </div>
        </nav>
    </div>

</template>

<script>
    export default {
        /* nom de ma pasge */
        name: "mynav",

    }
</script>

<style>
    @import url("https://use.fontawesome.com/releases/v5.6.3/css/all.css");

    /* css */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .container-fluid {
        width: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
        box-sizing: border-box !important;
    }

    /* icon de ma page */
    i {
        font-size: 30px !important;
        filter: invert(0.7) !important;

    }

    .profil_icon {
        filter: invert(0.4);
        vertical-align: middle;
    }

    /* icon de mon menu burger */
    .navbar-toggler {
        background: linear-gradient(45deg, rgba(151, 120, 255, 255), rgba(104, 68, 255, 255)) !important;
    }


    /* navbar */

    /* couleur navbar */

    nav {
        width: 100% !important;
        font-size: 20px;
        background-color: transparent !important;
    }

    ul li {
        padding: 10px 20px;
        z-index: 999 !important;
    }

    /* titre menu liste */
    span {
        color: #808080 !important;
        z-index: 999 !important;
    }


    /* hover effect de mon menu navbar */
    ul li span:before {
        content: '';
        width: 0px;
        height: 3px;
        background: #00bcd4;
        position: absolute;
        top: 100%;
        left: 0;
        transition: .5s;

    }

    ul li span:after {
        content: '';
        width: 0px;
        height: 3px;
        background: #f0f;
        position: absolute;
        top: 100%;
        right: 0;
        transition: .5s;

    }

    ul li:hover span:before {
        width: 50%;
        transform: translateX(100%);
    }

    ul li:hover span:after {
        width: 50%;
        transform: translateX(-100%);
    }



    /*logo navbar */

    .navlogo {
        position: relative;
        display: block;
        text-align: center;
        margin: 0;
        text-transform: uppercase;
        transition: .5s;
        padding: 5px 10px;
        color: transparent !important;
        font-size: 50px !important;
    }

    .navlogo:before,
    .navlogo:after {
        content: attr(data-text);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        padding: 5px 0;
        color: #262626;
        box-sizing: border-box;
        transition: .5s;
        transition-delay: .25s;
    }

    .navlogo:before {
        clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
        color: #00bcd4;
        transform: translate(10px, -2px);
    }

    .navlogo:after {
        clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0 100%);
        color: #f0f;
        transform: translate(-10px, 2px);
    }

    .navlogo:hover:before {
        clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
        color: #6844ff;
        transform: translate(0, 0);
    }

    .navlogo:hover:after {
        clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0 100%);
        color: #6844ff;
        transform: translate(0, 0);
    }


    /* trait logo */

    .trait {
        position: relative;
        overflow: hidden !important;
    }

    .trait:before {
        content: '';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
        left: -100%;
        height: 1px;
        background: #fff;
        transition: .5s;
    }

    .trait:hover:before {
        left: 100%;
    }


    /* shopping cart */
</style>