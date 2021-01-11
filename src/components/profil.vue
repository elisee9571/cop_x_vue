<template>
    <!-- profil client -->
    <div class="container-fluid container_back">

        <div class="container">

            <!-- image du profil -->
            <div class="row">

                <div class="col-lg-4 image_profil container_profil">
                    <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">

                        <!-- retour menu -->
                        <a class="nav-link nav_titre_profil" href="/" aria-selected="false"><img
                                class="icon_titre_profil"
                                src="https://img.icons8.com/material-rounded/40/000000/circled-chevron-left.png" />Menu</a>

                        <!-- image profil -->
                        <div class="avatar_box text-center">
                            <img v-if="client.image !== undefined" src="../assets/image_profil.jpg" class="avatar"
                                alt="avatar" /><!-- :src="client.image" -->
                            <img v-else :src="pic" class="avatar" alt="avatar" />
                            <label class="ajouter_image" for="file"><img
                                    src="https://img.icons8.com/fluent-systems-filled/35/000000/add.png" /></label>
                            <input class="input_ajouter-img" id="file" type="file" accept="image/jpeg"
                                @change="uploadImage" />
                            <h6 class="nom_profil">{{client.nom}}</h6>

                            <!--  <div class="file-upload">
                                <label for="file" class="file">choisir une image</label>
                                <input type="file" class="none" id="file" @change="onFileChange" />
                                <div class="valider">
                                    <div v-if="progress" class="progess-bar" :style="{ width: progress }">
                                        {{ progress }}
                                    </div>
                                    <button @click="onUploadFile" class="upload-button" :disabled="!this.selectedFile">
                                        valider
                                    </button>
                                </div>
                            </div> -->

                        </div>

                        <!-- mes information -->
                        <a class="nav-link nav_titre_profil active" id="v-pills-information-tab" data-toggle="pill"
                            href="#v-pills-information" role="tab" aria-controls="v-pills-information"
                            aria-selected="true"><i class="fas fa-align-left icon_titre_profil"></i> Mes
                            informations</a>

                        <!-- mes commande -->
                        <a class="nav-link nav_titre_profil" id="v-pills-commande-tab" data-toggle="pill"
                            href="#v-pills-commande" role="tab" aria-controls="v-pills-commande"
                            aria-selected="false"><i class="fas fa-box icon_titre_profil"></i> Mes commandes</a>

                        <!-- information de favoris -->
                        <a class="nav-link nav_titre_profil" id="v-pills-favoris-tab" data-toggle="pill"
                            href="#v-pills-favoris" role="tab" aria-controls="v-pills-favoris" aria-selected="false"><i
                                class="fas fa-heart icon_titre_profil"></i> Favoris</a>

                        <!-- mon abonnement -->
                        <a class="nav-link nav_titre_profil" id="v-pills-abonnement-tab" data-toggle="pill"
                            href="#v-pills-abonnement" role="tab" aria-controls="v-pills-abonnement"
                            aria-selected="false"><i class="fas fa-crown icon_titre_profil"></i> Mon Abonnement</a>

                        <!-- changer le mdp -->
                        <a class="nav-link nav_titre_profil" id="v-pills-mdp-tab" data-toggle="pill" href="#v-pills-mdp"
                            role="tab" aria-controls="v-pills-mdp" aria-selected="false"><i
                                class="fas fa-lock icon_titre_profil"></i> sécurité</a>

                        <!-- deconnexion -->
                        <a class="nav-link nav_titre_profil" @click="logout"><i
                                class="fas fa-sign-out-alt icon_titre_profil"></i>
                            Déconnexion</a>


                    </div>
                </div>

                <!-- contenu du profil -->
                <div class="contenu_profil col-lg-8 container_profil">
                    <div class="tab-content" id="v-pills-tabContent">

                        <!-- mes information -->
                        <div class="tab-pane fade show active" id="v-pills-information" role="tabpanel"
                            aria-labelledby="v-pills-information-tab">


                            <div class="renseignement_box">

                                <!-- form -->
                                <form action="" style="background: #dde1e7">
                                    <h1 class="titre_page_nav text-center">Mes informations</h1>

                                    <div class="row col-12">
                                        <!-- nom -->
                                        <div class="form-group col-lg-6">
                                            <label class="col-md-12 control-label" for="nom"> Nom: </label>
                                            <div class="col-lg-12" style="padding:0;">
                                                <input class="input_profil form-control" type="text" name="nom" id="nom"
                                                    v-model="client.nom" />
                                            </div>
                                        </div>

                                        <!-- date de naissance -->
                                        <div class="form-group col-lg-6">
                                            <label class="col-md-12 control-label" for="date"> Date de naissance:
                                            </label>
                                            <div class="col-lg-12" style="padding:0;">
                                                <input class="input_profil form-control"
                                                    style="padding: 0 0.75rem !important;
                                                    box-shadow: inset -3px -3px 7px #ffffff73, 
                                                    inset 3px 3px 5px rgba(94, 104, 121, .2); !important" 
                                                    type="date" name="date"
                                                    id="date" v-model="client.date" />
                                            </div>
                                        </div>
                                    </div>

                                    <!-- sexe -->
                                    <div class="form-group">
                                        <label class="col-md-12 control-label" for="sexe"> Sexe: </label>
                                        <div class="col-lg-6 sexe_renseignement">

                                            <div class="row">
                                                <input class="sexe_input" type="radio" id="Homme" name="sexe"
                                                    value="Homme" v-model="client.sexe" />
                                                <label class="sexe_label" for="Homme">Homme</label>
                                            </div>

                                            <div class="row">
                                                <input class="sexe_input" type="radio" id="Femme" name="sexe"
                                                    value="Femme" v-model="client.sexe" />
                                                <label class="sexe_label" for="Femme">Femme</label>
                                            </div>

                                            <div class="row">
                                                <input class="sexe_input" type="radio" id="Autre" name="sexe"
                                                    value="Autre" v-model="client.sexe" />
                                                <label class="sexe_label" for="Autre">Autre</label>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- pointure -->
                                    <div class="form-group">
                                        <label style="color:#333 !important;" class="col-md-12 control-label"
                                            for="pointure"> pointure: </label>
                                        <div class="col-lg-6">
                                            <b-form-select style="color:#333 !important;" v-model="client.pointure"
                                                :options="options" name="pointure" id="pointure"></b-form-select>
                                        </div>
                                    </div>

                                    <!-- email -->
                                    <div class="form-group">
                                        <label class="col-md-12 control-label" for="email"> Email: </label>
                                        <div class="col-lg-6">
                                            <input class="input_profil form-control" type="email" name="email"
                                                id="email" v-model="client.email" />
                                        </div>
                                    </div>

                                    <!-- adresse -->
                                    <div class="form-group">
                                        <label class="col-md-12 control-label" for="email"> adresse: </label>
                                        <div class="col-lg-12">
                                            <input class="input_profil form-control" type="text" name="adresse"
                                                id="adresse" v-model="client.adresse" />
                                        </div>
                                    </div>


                                    <!-- ville -->
                                    <div class="form-group">
                                        <label class="col-md-12 control-label" for="ville"> ville: </label>
                                        <div class="col-lg-6">
                                            <input class="input_profil form-control" type="text" name="ville" id="ville"
                                                v-model="client.ville" />
                                        </div>
                                    </div>


                                    <div class="row col-12">
                                        <!-- cp -->
                                        <div class="form-group col-lg-6">
                                            <label class="col-md-12 control-label" for="cp">cp: </label>
                                            <div class="col-lg-12" style="padding:0;">
                                                <input class="input_profil form-control" type="tel" name="cp" id="cp"
                                                    v-model="client.cp" />
                                            </div>
                                        </div>

                                        <!-- pays -->
                                        <div class="form-group col-lg-6">
                                            <label class="col-md-12 control-label" for="pays"> pays: </label>
                                            <div class="col-lg-12" style="padding:0;">
                                                <input class="input_profil form-control" type="text" name="pays"
                                                    id="pays" v-model="client.pays" />
                                            </div>
                                        </div>
                                    </div>

                                    <!-- tel -->
                                    <div class="form-group">
                                        <label class="col-md-12 control-label" for="tel"> téléphone: </label>
                                        <div class="col-lg-6">
                                            <input class="input_profil form-control" type="tel" name="tel" id="tel"
                                                v-model="client.tel" />
                                        </div>
                                    </div>

                                    <!-- mot de passe -->
                                    <!-- <div class="form-group">
                                        <label class="col-md-4 control-label" for="password"> Mot de passe:</label>

                                        <div class="col-lg-6">
                                            <input class="input_profil form-control" type="password" name="password"
                                                id="password" v-model="client.password" />
                                        </div>
                                    </div> -->

                                    <!-- btn profil a jour -->
                                    <div class="">
                                        <button @click="update" type="button" class="btn_new2" data-toggle="modal"
                                            data-target="#exampleModal">
                                            Sauvegarder les
                                            modifications
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div class="tab-pane fade" id="v-pills-commande" role="tabpanel"
                            aria-labelledby="v-pills-commande-tab">
                            <!-- mes commandes -->
                            <div class="row">
                                <div class="mes_commandes">
                                    <h1 class="titre_page_nav text-center">Mes commandes</h1>
                                </div>
                            </div>
                        </div>

                        <div class="tab-pane fade" id="v-pills-favoris" role="tabpanel"
                            aria-labelledby="v-pills-favoris-tab">
                            <!-- information de favoris -->
                            <div class="row">
                                <div class="information_de_favoris">
                                    <h1 class="titre_page_nav text-center">Mes Favoris</h1>
                                    <div class="center">

                                        <div id="player-list" class="list-group">
                                            <div v-for="produit in produits" :key="produit.id" class="list-group-item">
                                                <div class="handle flex-center">
                                                    <i class="fa fa-bars"></i>
                                                </div>
                                                <div class="thumbnail lex-center">
                                                    <router-link :to="`/pageproduit/${produit.id}`">
                                                        <img class="imgBx"
                                                            :src="require(`@/assets/${produit.Images[0].image}.png`)">
                                                    </router-link>
                                                </div>
                                                <div class="details">
                                                    <h2>{{ produit.nom }}</h2>
                                                    <p>{{ produit.marque }}</p>
                                                    <p>prix :{{ produit.marque }}</p>
                                                </div>
                                                <div class="btnn flex-center">
                                                    <i class="fa fa-heart"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                        <!-- fin information favoris -->

                        <!-- abonnement -->
                        <div class="tab-pane fade" id="v-pills-abonnement" role="tabpanel"
                            aria-labelledby="v-pills-abonnement-tab">
                            <!-- mon abonnement -->
                            <div class="row">
                                <div class="mon_abonnement">
                                    <h1 class="titre_page_nav text-center">mon Abonnement</h1>
                                </div>
                            </div>
                        </div>
                        <!-- fin abonnement -->

                        <!-- securité -->
                        <div class="tab-pane fade" id="v-pills-mdp" role="tabpanel" aria-labelledby="v-pills-mdp-tab">
                            <!-- changer le mdp -->
                            <div class="row text-center">
                                <div class="securite col-12" style="margin-top:150px;">
                                    <form action="#" style="background: #dde1e7;">
                                        <h1 class="mpo_titre" for="mpou">Réinitialiser le mot de passe</h1>

                                        <input style="width:70%;" class="email_mpo input_profil form-control" type="email" name="mpou" placeholder="Email"
                                            v-model="email" id="mpou">
                                        <span><img class="icon_mpo"
                                                src="https://img.icons8.com/ios-glyphs/24/000000/box-important.png" />Nous
                                            vous
                                            enverrons un
                                            e-mail pour réinitialiser votre mot de passe.</span>
                                        <div class="form-group">
                                            <input @click="oublier" type="submit" class="btn_new2" value="envoyer" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <!-- fin sécurité -->


                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
    import VueJwtDecode from "vue-jwt-decode";
    export default {
        name: "profil",
        data() {
            return {
                produits: {},
                password: "",
                email: "",
                client: {},
                pic: {},
                options: [{
                        value: '35,5',
                        text: 'EU 35,5'
                    },
                    {
                        value: '36',
                        text: 'EU 36'
                    },
                    {
                        value: '36,5',
                        text: 'EU 36,5'
                    },
                    {
                        value: '37',
                        text: 'EU 37',

                    },
                    {
                        value: '38',
                        text: 'EU 38'
                    },
                    {
                        value: '38,5',
                        text: 'EU 38,5'
                    },
                    {
                        value: '39',
                        text: 'EU 39'
                    },
                    {
                        value: '39,5',
                        text: 'EU 39,5'
                    },
                    {
                        value: '40',
                        text: 'EU 40',

                    },
                    {
                        value: '40,5',
                        text: 'EU 40,5'
                    },
                    {
                        value: '41',
                        text: 'EU 41'
                    },
                    {
                        value: '41,5',
                        text: 'EU 41,5'
                    },
                    {
                        value: '42',
                        text: 'EU 42'
                    },
                    {
                        value: '42,5',
                        text: 'EU 42,5',

                    },
                    {
                        value: '43',
                        text: 'EU 43',

                    },
                    {
                        value: '43,5',
                        text: 'EU 43,5'
                    },
                    {
                        value: '44',
                        text: 'EU 44'
                    },
                    {
                        value: '44,5',
                        text: 'EU 44,5'
                    },
                    {
                        value: '45',
                        text: 'EU 45'
                    },
                    {
                        value: '45,5',
                        text: 'EU 45,5',

                    },
                    {
                        value: '46',
                        text: 'EU 46',

                    },
                    {
                        value: '46,5',
                        text: 'EU 46,5'
                    },
                    {
                        value: '47',
                        text: 'EU 47'
                    },
                    {
                        value: '47,5',
                        text: 'EU 47,5'
                    },
                    {
                        value: '48',
                        text: 'EU 48'
                    },
                ]
            };
        },
        created: function () {
            if (localStorage.getItem("token") === null) {
                this.$router.push({
                    name: "login"
                });
            } else {
                this.client = VueJwtDecode.decode(localStorage.getItem("token"));
                console.log(this.client);
            }
            this.axios
                .get("http://localhost:3000/produit/order1/6")
                .then((res) => {
                    this.produits = res.data.produits;
                })
                .catch((err) => {
                    alert(err);
                });

        },
        methods: {
            uploadImage(e) {
                const image = e.target.files[0];
                const reader = new FileReader();
                reader.readAsDataURL(image);
                reader.onload = (e) => {
                    this.pic = e.target.result;
                    this.client.image = e.target.result;
                };
            },

            /* update profil */
            update: function () {

                this.axios
                    .put(
                        "http://localhost:3000/client/update/" + this.client.id,
                        this.client
                    )
                    .then((res) => {
                        if (res.status === 200) {
                            localStorage.setItem("token", JSON.stringify(res.data.token));
                            this.message = "votre profil est à jour";
                            alert("Votre profil est à jour.");

                        } else {

                            this.message = "error: votre profil  n'a pas été mis à jour";
                            alert(`ERREUR: votre profil n'a pas été mis à jour !!!`);
                        }
                    })
                    .catch((err) => {

                        console.log(err);
                    });
            },

            /* deconnexion */
            logout: function () {
                localStorage.removeItem("token");
                this.$router.push({
                    name: "login",
                    params: {
                        msg: "Déconnecté"
                    }
                });
            },
            /* forget password */
            oublier: function () {
                this.axios.post("http://localhost:3000/client/forgetpassword", {
                        email: this.email,
                    })
                    .then(() => {
                        alert('Un mail va vous être envoyé');
                    })
                    .catch((err) => {
                        alert(err);
                    });
            },
        },
        mounted() {
            let player = document.getElementById("player-list");
            new Sortable(player, {
                handle: '.handle',
                animation: 200
            })
        },

    };
</script>

<style>
    @import url("https://use.fontawesome.com/releases/v5.6.3/css/all.css");

    .container_profil {
        margin-top: 50px;
        min-height: 100vh !important;
    }

    .container_back {
        background: #dde1e7;
    }

    /* css */
    .row {
        margin: 0;
        padding: 0;
    }

    .col-lg-12 {
        padding: 0;
        margin: 0;
    }

    .col-lg-6 {
        padding: 0 5px;
        margin: 0;
    }

    .renseignement_box .input_profil, .securite .input_profil{
    box-shadow: inset -3px -3px 7px #ffffff73, inset 3px 3px 5px rgba(94, 104, 121, .2);

    }
    .renseignement_box .input_profil:focus, .securite .input_profil:focus{
    box-shadow: inset -3px -3px 7px #ffffff73, inset 3px 3px 5px rgba(94, 104, 121, .2);

    }

    .form-group {
        margin: 20px 0;
    }

    .input_profil {
        color: #333 !important;
        font-family: 'Oswald', sans-serif !important;
        height: 100%;
        border: 1px solid #cad1d7 !important;
        border-radius: 4px !important;
        font-size: 18px !important;
        padding-left: 15px;
    }

    h6.nom_profil {
        color: #808080;
        font-family: 'Bebas Neue', sans-serif;
        font-size: 30px;
        font-weight: unset;
    }

    @media (min-width: 0px) {

        .col-lg-8 {
            padding: 0 !important;
            margin-bottom: 100px;
        }
    }

    @media (min-width: 992px) {

        .col-lg-8 {
            padding: 0 10px !important;
            margin-bottom: 100px;
        }
    }

    /* image profil */
    .avatar {
        width: 200px !important;
        height: 200px;
        border: 2px solid transparent;
        border-radius: 100%;
        box-shadow: -9px -9px 9px #ffffff73, 9px 9px 9px rgba(94, 104, 121, .2);
        overflow: hidden;
        margin-bottom: 20px;
    }
    .avatar:hover {
        box-shadow: 0px 0px 15px #6844ff;
    }


    .image_profil {
        width: 100%;
        height: 700px;
        background: #dde1e7;
        padding: 0 !important;
    }

    input[type="file"] {
        display: none;
    }

    .ajouter_image {
        display: unset;
        cursor: pointer;
        display: flex;
        position: absolute;
        left: 47%;
        bottom: 15%;
        background: #dde1e7;
        border-radius: 50%;
        box-shadow: 0 0 10px #6844ff;
    }

    /* titre input */
    .container_back label {
        font-size: 25px;
        color: #333;
        font-family: 'Bebas Neue', sans-serif;
        display: flex;
        text-align: start;
    }

    /*  */
    .form-group {
        width: 100%;

    }

    /* btn mettre à jour */
    .btn_jour {
        border: 2px solid rgba(104, 68, 255, 255);
        color: rgba(104, 68, 255, 255);
        padding: 15px 30px;
        border-radius: 8px;
        text-transform: uppercase;
        font-weight: 500;
        transition: .3 linear;
        background-color: transparent !important;
        transition: 0.4s linear;
        font-weight: bold;
        margin-top: 50px;
        font-weight: bold;
    }

    .btn_jour:hover {
        background-color: #6844ff !important;
        color: #fff;
    }

    button:focus {
        outline: none;
    }

    /* nav profil */
    .titre_page_nav {
        color: #333;
        margin: 20px 0;
        font-size: 40px;
    }

    .avatar_box {
        position: relative;
        margin-bottom: 35px !important;
        padding: 0;

    }

    .nav_titre_profil {
        font-size: 23px;
        font-family: 'Bebas Neue', sans-serif;
        color: #333 !important;
    }

    .icon_titre_profil {
        margin-right: 10px;

    }

    #v-pills-abonnement-tab .icon_titre_profil {
        margin-right: 7px;
    }

    #v-pills-abonnement-tab {
        padding-left: 12px;
    }

    #v-pills-abonnement-tab.active {
        padding-left: 20px;
    }

    #v-pills-mdp-tab {
        padding-left: 16px;
    }

    #v-pills-mdp-tab .icon_titre_profil {
        margin-right: 12px;
    }

    #v-pills-mdp-tab.active {
        padding-left: 20px;
    }


    .nav-pills .nav-link.active,
    .nav-pills .show>.nav-link {
        color: #333 !important;
        background: #efefef !important;
        border-left: 5px solid #6844ff;
        width: 100%;
        padding-left: 20px;
        color: #6844ff;
        box-shadow: -9px -9px 9px #ffffff73, 9px 9px 9px rgba(94, 104, 121, .2);

    }

    .nav-pills .nav-link.active .icon_titre_profil {
        color: #6844ff !important;

    }

    .nav-pills .nav-link:hover {
        color: #444;
        cursor: pointer;
    }

    /*  */
    .sexe_renseignement {
        display: flex;
        flex-direction: column;
    }

    .sexe_input {
        width: 10%;
        margin-top: 5px;
        margin-right: 10px;
    }

    .sexe_label {
        width: 50%;
        font-family: 'Oswald', sans-serif;
        font-size: 20px;
    }

    /* mes commande */
    .mes_commandes {
        background: #dde1e7;
        height: 100vh;
        width: 100%;
    }

    /* information de favoris */
    .information_de_favoris {
        background: #dde1e7;
        height: 100vh;
        width: 100%;
        position: relative;
    }

    .center {
        width: 90%;
        margin: 50px auto;
    }

    .center .list-group {
        width: 100%;
        background: #f5f5f5;
    }

    .center .flex-center {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .center .list-group .list-group-item {
        display: flex;
        margin: 0;
        padding: 0;
    }

    .center .list-group .list-group-item>div {
        padding: 15px 0;
    }

    .center .list-group .list-group-item .handle {
        width: 50px;
        background: #eee;
        border: 1px solid #ddd;
        cursor: pointer;
    }

    .center .list-group .list-group-item .handle i.fa {
        color: #555;
    }

    .center .list-group .list-group-item .handle:hover i.fa {
        color: #111;
    }

    .center .list-group .list-group-item .thumbnail {
        padding: 0 10px;
    }

    .center .list-group .list-group-item .thumbnail img {
        width: 125px;
    }

    .center .list-group .list-group-item .details {
        flex: 1;
    }

    .center .list-group .list-group-item .details h2 {
        font-size: 25px;
        color: #111;
        padding: 0 5px 3px;
    }

    .center .list-group .list-group-item .details p {
        font-size: 16px;
        color: #555;
        padding: 0 7px;
    }

    .center .list-group .list-group-item .btnn {
        width: 50px;
    }

    .center .list-group .list-group-item .btnn i.fa {
        color: #aaa;
    }

    .center .list-group .list-group-item .btnn:hover i.fa {
        color: #ff0000;
    }



    /* mon abonnement */
    .mon_abonnement {
        background: #dde1e7;
        min-height: 100vh;
        width: 100%;
    }

    /* securité */
    .securite {
        background: #dde1e7;
        min-height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center !important;
        justify-items: center !important;
    }
    .securite .form{
        display: flex;
        justify-content: center !important;
        justify-items: center !important;
    }


    /* btn new2 */
    .btn_new2 {
        color: rgb(82, 95, 127);
        padding: 15px 30px;
        border: 1px solid transparent;
        border-radius: 8px;
        text-transform: uppercase;
        font-weight: bold;
        font-family: 'Bebas Neue', sans-serif;
        font-size: 18px;
        letter-spacing: 1px;
        transition: .3 linear;
        background-color: transparent;
        margin-top: 30px;
        transition: 0.4s linear;
                box-shadow: -9px -9px 9px #ffffff73, 9px 9px 9px rgba(94, 104, 121, .2);

    }

    .btn_new2:hover {
                box-shadow: inset -9px -9px 9px #ffffff73, inset 9px 9px 9px rgba(94, 104, 121, .2);

        
    }
</style>