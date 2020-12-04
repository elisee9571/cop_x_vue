<template>
  <div>
<mypanier :panier="panier" />
  </div>
</template>

<script>
import mypanier from "../components/mypanier";
export default {
    components: {
        mypanier,
    },
    data(){
        return {
            panier: [],
        };
    },
    created() {
        if (!localStorage.getItem("panier")) {
            return;
        } else {
            this.panier = JSON.parse(localStorage.getItem("panier"));
        }
    },

}
</script>

<style>

</style>