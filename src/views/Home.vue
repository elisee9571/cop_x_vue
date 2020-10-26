<template>
  <div class="home" id="Home">
    <!-- import loading -->
    <div class="loader">
      <svg width="200" height="250" viewBox="0 0 50 50">
        <polygon stroke-width="1" stroke="#fff" fill="none" points="20,1 40,40 1,40">
        </polygon>
        <text fill="#fff" x="10" y="52">Loading</text>
      </svg>
    </div>


    <mynav /> <!-- import mynav -->
    <carousel /> <!-- import carousel -->
    <div data-aos="fade-right">
      <h1 class="grand_titre">Nos Nouveautés</h1>
    </div>
    <slider /> <!-- import slider -->
    <news /> <!-- import news -->
    <div data-aos="fade-right">
      <h1 class="grand_titre">Les plus demandés</h1>
    </div>
    <slider2 /> <!-- import slider2 -->
    <div data-aos="fade-right">
      <h1 class="grand_titre">Nos marques</h1>
    </div>
    <marque /> <!-- import marque -->
    <offre /> <!-- import offre -->
    <div data-aos="fade-right">
      <h1 class="grand_titre">Devenir membre</h1>
    </div>
    <abonnement /> <!-- import abonnement -->
    <myfooter /> <!-- import myfooter -->
  </div>
</template>

<script>
  import mynav from "../components/mynav.vue"; /* import components mynav */

  import carousel from "../components/carousel.vue"; /* import components carousel */

  import slider from "../components/slider.vue"; /* import components slider */

  import marque from "../components/marque.vue"; /* import components marque */

  import news from "../components/news.vue"; /* import components news */

  import slider2 from "../components/slider2.vue"; /* import components slider2 */

  import offre from "../components/offre.vue"; /* import components offre */

  import abonnement from "../components/abonnement.vue"; /* import components abonnement */

  import myfooter from "../components/myfooter.vue"; /* import components myfooter */

  export default {
    name: 'Home',
    components: {
      mynav,
      myfooter,
      carousel,
      slider,
      marque,
      news,
      offre,
      slider2,
      abonnement,
    },
    mounted() {
      const loader = document.querySelector('.loader');

      window.addEventListener('load', () => {
        loader.classList.add('fondu-out');
      })
    }


  }
</script>
<style>
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




  svg text {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 5px;
    letter-spacing: 1px;
    animation: text 1s ease-in-out infinite;
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
    background: #131313;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }

  .fondu-out {
    display: none;
    opacity: 0;
    transition: opacity 0.4s ease-out;
  }
</style>