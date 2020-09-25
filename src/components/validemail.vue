<template>
    <div class="container">
        <div class="row²² text-center validation">
            <div class="column">
                <h1 class="h_valide">Votre mail est Validé</h1>
                <input type="submit" class="btn_voirplus" onclick="window.location.href ='/login'" value="Connexion">
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "validemail",
        data() {
            return {
                email: this.$route.params.email,
            };
        },

        created() {
            this.axios.post("http://localhost:3000/client/validemail/", {
                    email: this.email,
                })
                .then((res) => {
                    console.log(res);
                })
                .catch(err => {
                    alert(err);
                });
        },
    }
</script>

<style>
.h_valide{
    margin: 0;
    padding: 0;
}
.validation{
    margin-top: 15% !important;
    
}

</style>