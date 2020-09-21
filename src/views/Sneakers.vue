<template>
  <div>
    <mynav/> <!-- import mynav -->
    <pagesneakers :produits="produits" />  <!-- import components pagesneakers -->
    <myfooter/> <!-- import myfooter -->
  </div>
  
</template>
<script>
import pagesneakers from "../components/pagesneakers.vue"; /* import components pagesneakers */
import mynav from "../components/mynav.vue";  /* import components mynav */
import myfooter from "../components/myfooter.vue"; /* import components mynav */

export default {
  components: {
    pagesneakers, mynav, myfooter //* import components */
  },
  data() {
    return {
      produits: {},
    };
  },
  created() {
    this.axios
      .get("http://localhost:3000/produit/categorie/sneakers")
      .then((res) => {
        this.produits = res.data.produits;
      })
      .catch((err) => {
        alert(err);
      });
  },
};
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
