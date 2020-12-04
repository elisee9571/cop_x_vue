<template>
  <div>
      <h1>Bonjour {{user.nom}} {{user.prenom}}</h1>
  </div>
</template>

<script>
import jwt from "vue-jwt-decode";
export default {
    name: "home",
    data() {
        return {
            user: {},
        }
    },
    created() {
        if(localStorage.getItem("auth")!=null){
            console.log(localStorage.getItem("auth"));
            this.user = jwt.decode(localStorage.getItem("token"));
            console.log(this.user);
            if(this.user.role != "admin") {
                localStorage.removeItem("token");
                localStorage.removeItem("auth");
                this.$router.push({ path: "/admin/login" });
            }
        } else {
            localStorage.removeItem("token");
            localStorage.removeItem("auth");
            this.$router.push({ path: "/admin/login" });
        }
    },
};
</script>

<style>

</style>