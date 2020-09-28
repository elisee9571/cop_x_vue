<template>
    <div class="container">
        <div class="col-12">
            <div class="row justify-content-center">
                <div class="col-12 mpo-container_box">
                    <form action="#" @submit.prevent="oublier">
                        <h1 class="mpo_titre" for="mpou">Réinitialiser le mot de passe</h1>

                        <input class="email_mpo" type="email" name="mpou" placeholder="Email" v-model="email" id="mpou">
                        <span><img class="icon_mpo"
                                src="https://img.icons8.com/ios-glyphs/24/000000/box-important.png" />Nous vous
                            enverrons un
                            e-mail pour réinitialiser votre mot de passe.</span>
                        <button class="envoyer_" type="submit"  >Envoyer</button>
                        <span><a class="a_mpo" href="/login">retour</a></span>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'mpo',
        data() {
            return {
                email: "",
            };
        },
        methods: {
            oublier: function () {
                this.axios.post("http://localhost:3000/client/forgetpassword", {
                        email: this.email,
                    })
                    .then(() => {
                        alert('un mail va vous être envoyé');
                        this.$router.push({ name: 'login'})
                    })
                    .catch(() => {
                        alert("erreur: le mail n'est pas reconnu");
                    });
            },
        },
    }
</script>

<style>
    .mpo_titre {
        color: #333;
        font-weight: bold;
        margin: 20px 0;
        font-family: 'Bebas Neue', sans-serif;
    }

    .envoyer_ {
        border-radius: 20px;
        border: 1px solid #262626;
        background-color: #262626;
        color: #FFFFFF;
        font-size: 12px;
        font-weight: bold;
        padding: 12px 45px;
        letter-spacing: 1px;
        text-transform: uppercase;
        transition: transform 80ms ease-in;
        margin: 20px 0;
    }

    .envoyer_:active {
        transform: scale(0.95);
    }

    .envoyer_:focus {
        outline: none;
    }
    .a_mpo{
        color: #333;
        outline: none;
        text-decoration: none;
    }
    .a_mpo:hover{
        color: #333;
        outline: none;
        text-decoration: none;
    }


    .email_mpo {
        background-color: #eee;
        border: none;
        padding: 12px 15px;
        margin-bottom: 8px;
        width: 100%;
    }

    .mpo-container_box {
        background-color: #fff;
        border-radius: 10px;
        padding: 0 50px;
        width: 600px;
        max-width: 90%;
        min-height: 500px;
        transform: translateY(30%);
    }

    .icon_mpo {
        filter: invert(0.5) !important;
        vertical-align: bottom !important;
        width: 20px;
        height: 20px;
        margin: 0 5px;
    }

     @media (min-width: 992px) {

        .email_mpo {
        width: 70%;
    }
    }

    
</style>