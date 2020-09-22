<template>
    <div>
        <button @click="validermail" value="test"></button>
    </div>
</template>

<script>
    export default {
        name: "valide",
        data() {
            return {
                email: this.$route.params.email,
            };
        },
        methods: {
            validermail: function () {
                this.axios.post("http://localhost:3000/client/validemail", {
                        email: this.email,
                    })
                    .then((result) => {
                        alert(result);
                    })
                    .catch((err) => {
                        alert(err);
                    });
            },
        },
    };
</script>

<style>

</style>