<template>
  <div class="home" id="Home">
    <!-- import Chargement -->
    <div class="loader">
      <svg width="200" height="250" viewBox="0 0 50 50">
        <polygon stroke-width="5" stroke="#fff" fill="none" points="20,1 40,40 1,40">
        </polygon>
        <text fill="#fff" x="3" y="55">Chargement</text>
      </svg>
    </div>
    <!-- fin chargement -->
    <!-- arrow up -->
    <div class="btn_arrow">
      <i class="fas fa-chevron-up"></i>
    </div>
    <!-- fin arrow -->
    <!-- navbar -->
    <header>
      <div class="container-fluid navigation">
        <nav class="navbar navbar-expand-lg navbar-light barnav">
          <!-- mon logo -->
          <span class="trait">
            <a style="font-weight:bolder;letter-spacing:-6px !important;" class="navbar-brand navlogo" data-text="COP X" href="/">COP X</a>
          </span>
          <!-- menu burger responsive icon -->
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <!-- menu deroulant -->
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto text-center navigationListe">
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
                  <a class="dropdown-item" href="/yeezy1">YEEZY</a>
                  <a class="dropdown-item" href="/adidas1">ADIDAS</a>
                  <a class="dropdown-item" href="/jordan1">JORDAN</a>
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
                  <a class="dropdown-item" href="/jordan2">JORDAN</a>
                  <a class="dropdown-item" href="/supreme2">SUPREME</a>
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
                  <img class="profil_icon" src="https://img.icons8.com/ios-filled/31/000000/user-male-circle.png" />
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="/profil">Profil</a>
                  <a class="dropdown-item" href="/faq">FAQ</a>
                  <a class="dropdown-item" href="/contact">Contact</a>
                </div>
              </li>
              <!-- mon panier -->
              <li class="nav-item">
                <a href="/panier" class="nav-link"><img class="profil_icon"
                    src="https://img.icons8.com/material/30/000000/shopping-cart--v1.png" />
                  <a class="badge badge-danger"></a>
                </a>

              </li>

            </ul>

          </div>

        </nav>
      </div>
    </header>
    <!-- fin navbar -->
    <!-- img home  -->
    <div id="hero">
      <div class="hero container">
        <div>
          <h1>Développe,<span></span></h1>
          <h1>l'attitude <span></span></h1>
          <h1>cop.<span></span></h1>
        </div>
      </div>
    </div>
    <!-- fin img home -->
    <div data-aos="fade-right">
      <h1 class="grand_titre" style="font-size: 40px;">Nos Nouveautés</h1>
    </div>
    <slider /> <!-- import slider -->
    <marque /> <!-- import marque -->
    <div data-aos="fade-right">
      <h1 class="grand_titre" style="font-size: 40px;">Les plus demandés</h1>
    </div>
    <slider2 /> <!-- import slider2 -->
    <offre /> <!-- import offre -->
    <div data-aos="fade-right">
      <h1 class="grand_titre" style="font-size: 40px;">Devenir membre</h1>
    </div>
    <abonnement /> <!-- import abonnement -->
    <myfooter /> <!-- import myfooter -->
  </div>
</template>

<script>

  import slider from "../components/slider.vue"; /* import components slider */

  import marque from "../components/marque.vue"; /* import components marque */

  import slider2 from "../components/slider2.vue"; /* import components slider2 */

  import offre from "../components/offre.vue"; /* import components offre */

  import abonnement from "../components/abonnement.vue"; /* import components abonnement */

  import myfooter from "../components/myfooter.vue"; /* import components myfooter */

  export default {
    name: 'Home',
    components: {
      myfooter,
      slider,
      marque,
      offre,
      slider2,
      abonnement,
    },
    mounted() {
      const loader = document.querySelector('.loader');

      window.addEventListener('load', () => {
        loader.classList.add('fondu-out');
      })

      /* arrow up */
      const btn_arrow = document.querySelector('.btn_arrow');
      btn_arrow.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        })

      });
      /* scroll event transparent */
      window.addEventListener("scroll", function () {
        var header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0);
      });
    },

  }
</script>
<style>
  /* chargement */
  svg text {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 7px;
    letter-spacing: 1px;
    animation: text 1s ease-in-out infinite;
    color: #6844ff !important;
  }

  @keyframes text {
    50% {
      opacity: 0.1;
    }
  }

  svg polygon {
    stroke-dasharray: 22;
    stroke-dashoffset: 1;
    animation: dash 4s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite alternate-reverse;
    box-shadow: 0 0 10px #6844ff !important;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 234;
    }
  }

  .loader {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #0f111a;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
  }

  .fondu-out {
    display: none;
    opacity: 0;
    transition: opacity 0.4s ease-out;
  }
  /* fin chargement */

  /* img home */
  @media (min-width: 0px) {
    #hero {
      display: none;
    }
  }

  @media (min-width: 992px) {
    header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 9999;
      padding: 30px 75px;
      transition: 0.6s;
    }

    header.sticky {
      padding: 0px 25px;
      background: #292d3e;
    }

    .barnav {
      width: 100% !important;
      font-size: 20px;
      background-color: transparent !important;
    }

    #hero {
      display: block;
      background-image: url(../assets/home.jpg);
      height: 100vh;
      background-size: cover;
      position: relative;
      z-index: 1;
    }
    #hero .hero h1 {
      font-family: 'Bebas Neue',sans-serif;
      font-size: 100px !important;
    }

    #hero::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      background-color: black;
      opacity: .7;
      z-index: -1;
      /* box-shadow: 0 0 300px #6844ff; */
    }

    #hero .hero {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 50px;
      justify-content: flex-start;
      transform: translate(0%, 75%);
    }

    #hero h1 {
      display: block;
      width: fit-content;
      font-size: 7rem;
      position: relative;
      color: transparent;
      animation: text_reveal .5s ease forwards;
      animation-delay: 1s;
    }

    #hero h1:nth-child(1) {
      animation-delay: 1s;
    }

    #hero h1:nth-child(2) {
      animation-delay: 2s;
    }

    #hero h1:nth-child(3) {
      animation: text_reveal_name .5s ease forwards;
      animation-delay: 3s;
    }

    #hero h1 span {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 0;
      background-color: crimson;
      animation: text_reveal_box 1s ease;
      animation-delay: .5s;
    }

    #hero h1:nth-child(1) span {
      animation-delay: .5s;
    }

    #hero h1:nth-child(2) span {
      animation-delay: 1.5s;
    }

    #hero h1:nth-child(3) span {
      animation-delay: 2.5s;
    }
  }

  @keyframes text_reveal_box {
    50% {
      width: 100%;
      left: 0;
    }

    100% {
      width: 0;
      left: 100%;
    }
  }

  @keyframes text_reveal {
    100% {
      color: white;
    }
  }

  @keyframes text_reveal_name {
    100% {
      color: #6844ff;
      font-weight: 500;
    }
  }

  /* fin img home */

  /* css home */
  .home {
    height: 100%;
    width: 100%;
  }

  h1.grand_titre {
    left: 10px;
    margin-bottom: 50px;
    padding-top: 100px !important;
    padding-bottom: 20px !important;
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* fin css home */

  /* arrow up */
  .btn_arrow {
    height: 50px;
    width: 50px;
    background: #292d3e;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    right: 20px;
    bottom: 20px;
    cursor: pointer;
    z-index: 9999 !important;
    box-shadow: 0 0 10px #fff;
    color: #fff;
  }

  /* fin arrow up */
</style>