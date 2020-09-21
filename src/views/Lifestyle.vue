<template>
  <div>
    <mynav/> <!-- import mynav -->
    <pagelifestyle :produits="produits" />  <!-- import components pagelifestyle -->
    <myfooter/> <!-- import myfooter -->
  </div>
  
</template>
<script>
import pagelifestyle from "../components/pagelifestyle.vue"; /* import components pagelifestyle */
import mynav from "../components/mynav.vue";  /* import components mynav */
import myfooter from "../components/myfooter.vue"; /* import components mynav */

export default {
  components: {
    pagelifestyle, mynav, myfooter //* import components */
  },
  data() {
    return {
      produits: {},
    };
  },
  created() {
    this.axios
      .get("http://localhost:3000/produit/categorie/lifestyle")
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
