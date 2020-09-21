<template>
  <div>
    <mynav /> <!-- import mynav -->
    <myfooter /> <!-- import myfooter -->
  </div>
</template>

<script>
  import mynav from "../components/mynav.vue"; /* import components mynav */
  import myfooter from "../components/myfooter.vue"; /* import components mynav */

  export default {
    name: "panier",
    components: {
      mynav,
      myfooter //* import components */
    },

  }
</script>

<style>

</style>