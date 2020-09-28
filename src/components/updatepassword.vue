<template>
   <div class="container">
        <div class="col-12">
            <div class="row justify-content-center">
                <div class="col-12 mpo-container_box">
                    <form @submit.prevent="up">
                        <h1 class="mpo_titre" for="pass">Réinitialiser le mot de passe</h1>

                        <!-- <input class="email_mpo" type="password" name="uppass" placeholder="nouveau mot de passe"
                            v-model="forget" id="uppass"> -->
                            <input class="email_mpo" type="password" name="pass" placeholder="nouveau mot de passe"
                            v-model="password" id="pass" required>
                        <button class="envoyer_" type="submit">sauvegarder</button>
                    </form>
                </div>
            </div>
        </div> 
    </div>

</template>

<script>
    export default {
        name: "updatepassword",
        data() {
            return {
                forget: this.$route.params.forget,
                password: "",
            };
        },

        methods:{
            up: function () {
                this.axios.get("http://localhost:3000/client/updatepassword", {
                        password: this.password,
                        forget: this.forget,
                    })
                    .then(() => {
                        alert('Votre mot de passe à été modifié')
                        this.$router.push({ name: 'login'})
                    })
                    .catch(() => {
                        alert("erreur: Votre mot de passe n'à pas été modifié");
                        this.$router.push({ name: 'updatepassword'})
                    });
            },
        }
    }
</script>

<style>

</style>