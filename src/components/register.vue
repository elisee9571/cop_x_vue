<template>

    <div class="container container_login" id="container">
        <div class="row">

            <div class="form-container sign-in-container" @submit.prevent="doregister">
                <form>
                    <h1 class="titre_sign">Créer un compte</h1>
                    <div class="social-container">
                        <a href="#" class="social"><img class="connection_icon" src="https://img.icons8.com/metro/26/000000/facebook-new--v2.png"/></a>
                        <a href="#" class="social"><img class="connection_icon" src="https://img.icons8.com/ios/26/000000/google-plus.png"/></a>
                    </div>
                    <span class="sous_titre">ou utiliser votre email pour vous inscrire</span>
                    <input class="input_login" type="text" name="nom" id="nom" placeholder="Nom Prénom" v-model="nom">
                    <input class="input_login" type="email" name="email" id="email" placeholder="Email" v-model="email">
                    <input class="input_login" type="password" name="password" id="password" placeholder="Mot de passe" v-model="password">
                    <button class="btn_sign">S'inscrire</button>
                    <a class="a_rejoindre" href="/login"><p class="p_rejoindre">Vous avez déja un compte? Cliquez-ici.</p></a>
                </form>
            </div>

            <div class="form-container sign-up-container" @submit.prevent="dologin">
                <form action="">
                    <h1 class="titre_sign">Se connecter</h1>
                    <div class="social-container">
                        <a href="#" class="social"><img class="connection_icon" src="https://img.icons8.com/metro/26/000000/facebook-new--v2.png"/></a>
                        <a href="#" class="social"><img class="connection_icon" src="https://img.icons8.com/ios/26/000000/google-plus.png"/></a>
                    </div>
                    <span class="sous_titre">ou utiliser votre compte</span>
                    <input class="input_login" type="email" name="email" id="emaillogin" placeholder="Email" v-model="emaillogin">
                    <input class="input_login" type="password" name="passwordlogin" id="passwordlogin"  placeholder="Mot de passe" v-model="passwordlogin">
                    <a href="/mpo" class="mdp_oublié">Mot de passe oublié</a>

                    <button class="btn_sign">Se connecter</button>
                </form>
            </div>

            <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-panel overlay-right">
                        <h1>BONJOUR !</h1>
                        <p class="text_sign">Rester connecté avec nous, veuillez vous connecter avec vos informations
                            personnelles
                        </p>
                        <button class="ghost" id="signUp">Se connecter</button>
                    </div>

                    <div class="overlay-panel overlay-left">
                        <h1>BONJOUR !</h1>
                        <p class="text_sign">Veuillez entrez vos coordonnées</p>
                        <button class="ghost" id="signIn">S'inscrire</button>
                    </div>
                </div>
            </div>

        </div>
    </div>

</template>

<script>
export default {
    name: "register",

    data() {
        return {
            nom: "",
            email: "",
            password: "",
            emaillogin: "",
            passwordlogin: ""
        }
    },
    components:{},
    methods:{
         dologin: function (){
            
            this.axios.post("http://localhost:3000/client/login",{
                email: this.emaillogin,
                password: this.passwordlogin
            })
            .then(res =>{
                if(res.data.token){
                    localStorage.setItem("token",res.data.token)
/* une fois les donnes recuperer et stockés il va nous renvoyer sur notre page profil*/
                    this.$router.push({name: 'profil'})
                    window.location.reload();
                }
                else{
                    this.$router.push({name: "register", params: {msg: "non connecté"} })
                    alert(`non connecté`);
                }
            })
            .catch(err => {
                console.log(err);
            })

        },
        doregister: function (){
            
            this.axios.post("http://localhost:3000/client/register",{
                nom:this.nom,
                email:this.email,
                password:this.password
            })
            .then(res =>{
                
                console.log(res);
                if(res.data.token){
                    
                    localStorage.setItem("token",res.data.token)
/* une fois les donnes recuperer et stockés il va nous renvoyer sur login */
                    this.$router.push({name: 'login'})
                    window.location.reload();
                }
                else{
                    this.$router.push({name: "register", params: {msg: "non connecté"} })
                    alert(`Vous devez valider votre mail.`);
                }
            })
            .catch(err => {
                console.log(err);
            })

        },
    },
    mounted(){
        const signUpButton = document.getElementById("signUp");
        const signInButton = document.getElementById("signIn");
        const container = document.getElementById("container");
        signUpButton.addEventListener("click", ()=>{
            container.classList.add("right-panel-active");
        });
         signInButton.addEventListener("click", ()=>{
            container.classList.remove("right-panel-active");
        });

    }
    
}
</script>

<style>
@import url("https://use.fontawesome.com/releases/v5.6.3/css/all.css");


    .titre_sign {
        color: #333;
        font-weight: bold;
        margin: 0;
        font-family: 'Bebas Neue', sans-serif;
    }

    .text_sign {
        color: #fff;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.5px;
        margin: 20px 0 30px;
        font-family: 'Oswald', sans-serif;
    }

    .sous_titre{
        font-size: 12px;
        font-family: 'Oswald', sans-serif;
    }

    .mdp_oublié {
        color: #333;
        font-size: 14px;
        text-decoration: none;
        margin: 15px 0;
        font-family: 'Oswald', sans-serif;
    }

    .btn_sign, .ghost {
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
    }

    button:active {
        transform: scale(0.95);
    }

    button:focus {
        outline: none;
    }

    button.ghost {
        background-color: transparent;
        border-color: #FFFFFF;
    }

    form {
        background-color: #FFFFFF;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 50px;
        height: 100%;
        text-align: center;
    }

    .input_login {
        background-color: #eee;
        border: none;
        padding: 12px 15px;
        margin: 8px 0;
        width: 100%;
    }

    .container_login {
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 0 40px rgba(0, 0, 0, 0.25), 0 0 40px rgba(0, 0, 0, 0.22);
        position: relative;
        overflow: hidden;
        width: 768px !important;
        max-width: 100%;
        min-height: 480px;
        transform: translate(0%, 45%);
    }

    .form-container {
        position: absolute;
        top: 0;
        height: 100%;
        transition: all 0.6s ease-in-out;
    }

    .sign-in-container {
        left: 0;
        width: 50%;
        z-index: 2;
    }

    .container.right-panel-active .sign-in-container {
        transform: translateX(100%);
    }

    .sign-up-container {
        left: 0;
        width: 50%;
        opacity: 0;
        z-index: 1;
    }

    .container.right-panel-active .sign-up-container {
        transform: translateX(100%);
        opacity: 1;
        z-index: 5;
        animation: show 0.6s;
    }

    @keyframes show {

        0%,
        49.99% {
            opacity: 0;
            z-index: 1;
        }

        50%,
        100% {
            opacity: 1;
            z-index: 5;
        }
    }

    .overlay-container {
        position: absolute;
        top: 0;
        left: 50%;
        width: 50%;
        height: 100%;
        overflow: hidden;
        transition: transform 0.6s ease-in-out;
        z-index: 100;
    }

    .container.right-panel-active .overlay-container {
        transform: translateX(-100%);
    }

    .overlay {
        background: linear-gradient(45deg, rgba(151, 120, 255, 255) 0%, rgba(104, 68, 255, 255) 100%);
        background: -webkit-linear-gradient(45deg, rgba(151, 120, 255, 255) 0%, rgba(104, 68, 255, 255) 100%);
        background: linear-gradient(45deg, rgba(151, 120, 255, 255) 0%, rgba(104, 68, 255, 255) 100%);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 0 0;
        color: #FFFFFF;
        position: relative;
        left: -100%;
        height: 100%;
        width: 200%;
        transform: translateX(0);
        transition: transform 0.6s ease-in-out;
    }

    .container.right-panel-active .overlay {
        transform: translateX(50%);
    }

    .overlay-panel {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 40px;
        text-align: center;
        top: 0;
        height: 100%;
        width: 50%;
        transform: translateX(0);
        transition: transform 0.6s ease-in-out;
    }

    .overlay-left {
        transform: translateX(-20%);
    }

    .container.right-panel-active .overlay-left {
        transform: translateX(0);
    }

    .overlay-right {
        right: 0;
        transform: translateX(0);
    }

    .container.right-panel-active .overlay-right {
        transform: translateX(20%);
    }

    .social-container {
        margin: 20px 0;
    }

    .social-container a {
        border: 1px solid #DDDDDD;
        border-radius: 50%;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        margin: 0 5px;
        height: 40px;
        width: 40px;
    } 
</style>