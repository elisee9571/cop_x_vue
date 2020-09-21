<template>
  <div>
    <mynav/> <!-- import mynav -->
    <pagestreetwear :produits="produits" />  <!-- import components pagestreetwear -->
    <myfooter/> <!-- import myfooter -->
  </div>
  
</template>
<script>
import pagestreetwear from "../components/pagestreetwear.vue"; /* import components pagestreetwear */
import mynav from "../components/mynav.vue";  /* import components mynav */
import myfooter from "../components/myfooter.vue"; /* import components mynav */

export default {
  components: {
    pagestreetwear, mynav, myfooter //* import components */
  },
  data() {
    return {
      produits: {},
    };
  },
  created() {
    this.axios
      .get("http://localhost:3000/produit/categorie/streetwear")
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
