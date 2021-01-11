<template>
    <div class="container_mpo">
        <form action="#" @submit.prevent="oublier">
            <h1 class="mpo_titre" for="mpou">Réinitialiser le mot de passe</h1>

            <input class="email_mpo" type="email" name="mpou" placeholder="Email" v-model="email" id="mpou">
            <span><img class="icon_mpo" src="https://img.icons8.com/ios-glyphs/24/000000/box-important.png" />Nous vous
                enverrons un
                e-mail pour réinitialiser votre mot de passe.</span>
            <button class="envoyer_" type="submit">Envoyer</button>
            <span><a class="a_mpo" href="/login">retour</a></span>
        </form>
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
                        this.$router.push({
                            name: 'login'
                        })
                    })
                    .catch(() => {
                        alert("ERREUR: le mail n'est pas reconnu !!!");
                    });
            },
        },
    }
</script>

<style>
    /* responsive */
    @media (min-width: 0px) {
        .container_mpo {
            background-color: #fff;
            border-radius: 0 !important;
            width: 100%;
            height: 100vh;
            margin: 0 !important;
            padding: 0 50px;
            position: absolute;
        }

    }

    @media (min-width: 960px) {

        .container_mpo {
            background-color: #fff;
            border-radius: 10px !important;
            width: 768px;
            max-width: 100%;
            height: 480px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }

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

    .a_mpo {
        color: #333;
        outline: none;
        text-decoration: none;
    }

    .a_mpo:hover {
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
        border-radius: 10px;
        box-shadow: inset -3px -3px 7px #ffffff73, inset 3px 3px 5px rgba(94, 104, 121, .2);
    }

    .icon_mpo {
        filter: invert(0.5) !important;
        vertical-align: bottom !important;
        width: 20px;
        height: 20px;
        margin: 0 5px;
    }

    @media (min-width: 0px) {

        .email_mpo {
            width: 100%;
        }
    }
    @media (min-width: 576px) {

        .email_mpo {
            width: 80%;
        }
    }
    @media (min-width: 768px) {

        .email_mpo {
            width: 70%;
        }
    }
</style>