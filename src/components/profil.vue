<template>
    <!-- profil client -->

    <div class="container">

        <h1 class="text-center">Mon Profil</h1>

        <!-- image du profil -->
        <div class="row">

            <div class="col-lg-4 image_profil">
                <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">

                    <!-- retour menu -->
                    <a class="nav-link nav_titre_profil" href="/" aria-selected="false"><img class="icon_titre_profil"
                            src="https://img.icons8.com/material-rounded/40/000000/circled-chevron-left.png" /></a>

                    <!-- image profil -->
                    <div class="avatar_box text-center">
                        <img v-if="client.image !== undefined" :src="require(`@/assets/${client.image}`)" class="avatar"
                            alt="avatar" />
                        <img v-else :src="pic" class="avatar" alt="avatar" />
                        <h6>{{client.nom}}</h6>
                        <label class="ajouter_image" for="file"><img
                                src="https://img.icons8.com/fluent-systems-filled/35/000000/add.png" /></label>
                        <input id="file" type="file" accept="image/jpeg" @change="uploadImage" />
                    </div>

                    <!-- mes information -->
                    <a class="nav-link nav_titre_profil active" id="v-pills-information-tab" data-toggle="pill"
                        href="#v-pills-information" role="tab" aria-controls="v-pills-information"
                        aria-selected="true"><img class="icon_titre_profil"
                            src="https://img.icons8.com/metro/25/000000/view-details.png" /> Mes informations</a>

                    <!-- mes commande -->
                    <a class="nav-link nav_titre_profil" id="v-pills-commande-tab" data-toggle="pill"
                        href="#v-pills-commande" role="tab" aria-controls="v-pills-commande" aria-selected="false"><img
                            class="icon_titre_profil"
                            src="https://img.icons8.com/android/25/000000/cardboard-box.png" /> Mes commandes</a>

                    <!-- information de paiement -->
                    <a class="nav-link nav_titre_profil" id="v-pills-paiement-tab" data-toggle="pill"
                        href="#v-pills-paiement" role="tab" aria-controls="v-pills-paiement" aria-selected="false"><img
                            class="icon_titre_profil"
                            src="https://img.icons8.com/ios-filled/30/000000/card-in-use.png" /> informations de
                        paiement</a>

                    <!-- mon abonnement -->
                    <a class="nav-link nav_titre_profil" id="v-pills-abonnement-tab" data-toggle="pill"
                        href="#v-pills-abonnement" role="tab" aria-controls="v-pills-abonnement" aria-selected="false">
                        <img class="icon_titre_profil"
                            src="https://img.icons8.com/material/30/000000/ruby-gemstone.png" /> Mon Abonnement</a>

                    <!-- changer le mdp -->
                    <a class="nav-link nav_titre_profil" id="v-pills-mdp-tab" data-toggle="pill" href="#v-pills-mdp"
                        role="tab" aria-controls="v-pills-mdp" aria-selected="false"><img class="icon_titre_profil"
                            src="https://img.icons8.com/android/25/000000/lock.png" /> sécurité</a>

                    <!-- deconnexion -->
                    <a class="nav-link nav_titre_profil" data-toggle="pill" href="#v-pills-deconnexion" role="tab"
                        aria-controls="v-pills-deconnexion" aria-selected="false" @click="logout"><img
                            class="icon_titre_profil" src="https://img.icons8.com/windows/30/000000/exit.png" />
                        Déconnexion</a>


                </div>
            </div>

            <!-- contenu du profil -->
            <div class="contenu_profil col-lg-8">
                <div class="tab-content" id="v-pills-tabContent">

                    <!-- mes information -->
                    <div class="tab-pane fade show active" id="v-pills-information" role="tabpanel"
                        aria-labelledby="v-pills-information-tab">


                        <div class="renseignement_box">

                            <!-- form -->
                            <form action="" @submit.prevent="update">
                                <h1 class="titre_page_nav text-center">Mes informations</h1>

                                <div class="row col-12">
                                    <!-- nom -->
                                    <div class="form-group col-lg-6">
                                        <label class="col-md-12 control-label" for="nom"> Nom: </label>
                                        <div class="col-lg-12">
                                            <input class="input_profil form-control" type="text" name="nom" id="nom"
                                                v-model="client.nom" />
                                        </div>
                                    </div>

                                    <!-- date de naissance -->
                                    <div class="form-group col-lg-6">
                                        <label class="col-md-12 control-label" for="date"> Date de naissance: </label>
                                        <div class="col-lg-12">
                                            <input class="input_profil form-control" type="date" name="date" id="date"
                                                v-model="client.date" />
                                        </div>
                                    </div>
                                </div>



                                <!-- sexe -->
                                <div class="form-group">
                                    <label class="col-md-12 control-label" for="sexe"> Sexe: </label>
                                    <div class="col-lg-6 sexe_renseignement">

                                        <div class="row">
                                            <input class="sexe_input" type="radio" id="Homme" name="sexe" value="Homme"
                                                v-model="client.sexe" />
                                            <label class="sexe_label" for="Homme">Homme</label>
                                        </div>

                                        <div class="row">
                                            <input class="sexe_input" type="radio" id="Femme" name="sexe" value="Femme"
                                                v-model="client.sexe" />
                                            <label class="sexe_label" for="Femme">Femme</label>
                                        </div>

                                        <div class="row">
                                            <input class="sexe_input" type="radio" id="Autre" name="sexe" value="Autre"
                                                v-model="client.sexe" />
                                            <label class="sexe_label" for="Autre">Autre</label>
                                        </div>

                                    </div>
                                </div>

                                <!-- pointure -->
                                <div class="form-group">
                                    <label class="col-md-12 control-label" for="pointure"> pointure: </label>
                                    <div class="col-lg-6">
                                        <b-form-select v-model="client.pointure" :options="options" name="pointure"
                                            id="pointure"></b-form-select>
                                    </div>
                                </div>

                                <!-- email -->
                                <div class="form-group">
                                    <label class="col-md-12 control-label" for="email"> Email: </label>
                                    <div class="col-lg-6">
                                        <input class="input_profil form-control" type="email" name="email" id="email"
                                            v-model="client.email" />
                                    </div>
                                </div>

                                <!-- adresse -->
                                <div class="form-group">
                                    <label class="col-md-12 control-label" for="email"> adresse: </label>
                                    <div class="col-lg-12">
                                        <input class="input_profil form-control" type="text" name="adresse" id="adresse"
                                            v-model="client.adresse" />
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
                                        <div class="col-lg-12">
                                            <input class="input_profil form-control" type="tel" name="cp" id="cp"
                                                v-model="client.cp" />
                                        </div>
                                    </div>

                                    <!-- pays -->
                                    <div class="form-group col-lg-6">
                                        <label class="col-md-12 control-label" for="pays"> pays: </label>
                                        <div class="col-lg-12">
                                            <input class="input_profil form-control" type="text" name="pays" id="pays"
                                                v-model="client.pays" />
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

                                <div class="form-group">
                                    <input type="submit" class="btn_jour" value="Sauvegarder les modifications" />
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

                    <div class="tab-pane fade" id="v-pills-paiement" role="tabpanel"
                        aria-labelledby="v-pills-paiement-tab">
                        <!-- information de paiement -->
                        <div class="row">
                            <div class="information_de_paiement">
                                <h1 class="titre_page_nav text-center">Informations de paiement</h1>

                                <div class="text-center col-12">

                                    <a class="btn_ajout_paiement" id="v-pills-information_paiement-tab"
                                        data-toggle="pill" href="#v-pills-information_paiement" role="tab"
                                        aria-controls="v-pills-information_paiement" aria-selected="false">
                                        Ajouter un nouveau mode de paiement</a>

                                </div>

                            </div>
                        </div>

                    </div>

                    <div class="tab-pane fade" id="v-pills-information_paiement" role="tabpanel"
                        aria-labelledby="v-pills-information_paiement-tab">
                        <!-- information paiement -->

                        <div class="row information_de_paiement">
                            <div class="col-12">
                                <div class="card_paiement">

                                    <div class="card-header header_paiement">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <p>Carte de crédit / débit<br>ou<br> <a href="#" class="paypal">PAYPAL
                                                        <img class="icon_paiement" src="../assets/icon_paypal.png"
                                                            alt=""></a></p>


                                            </div>
                                            <div class="col-md-6 text-right" style="margin-top: -5px;">
                                                <img class="icon_paiement" src="../assets/icon_visa.png" alt="">
                                                <img class="icon_paiement" src="../assets/icon_mastercard.png" alt="">
                                                <img class="icon_paiement" src="../assets/icon_amex.png" alt="">

                                            </div>
                                        </div>
                                    </div>


                                    <div class="card-body">
                                        <div class="form-group">
                                            <label for="cc-number" class="control-label label_card">Numéro de
                                                carte</label>
                                            <input type="tel" id="cc-number" class="input-lg form-control cc-number"
                                                autocomplete="cc-number" placeholder="•••• •••• •••• ••••" name="">
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="cc-exp" class="control-label label_card">Date
                                                        d'expiration</label>
                                                    <input type="tel" id="cc-exp" class="input-lg form-control cc-exp"
                                                        autocomplete="cc-exp" placeholder="•• / ••" name="">
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label for="cc-cvc" class="control-label label_card">Numéro
                                                        de
                                                        carte</label>
                                                    <input type="tel" id="cc-cvc" class="input-lg form-control cc-cvc"
                                                        autocomplete="off" placeholder="•••" name="">
                                                </div>
                                            </div>

                                        </div>


                                        <div class="form-group">
                                            <label for="numeric" class="control-label label_card">Nom du
                                                titulaire</label>
                                            <input type="text" class="input-lg form-control">
                                        </div>

                                        <div class="form-group text-center">
                                            <input type="submit" class="btn_jour" value="Ajouter" />
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="tab-pane fade" id="v-pills-abonnement" role="tabpanel"
                        aria-labelledby="v-pills-abonnement-tab">
                        <!-- mon abonnement -->
                        <div class="row">
                            <div class="mon_abonnement">
                                <h1 class="titre_page_nav text-center">mon Abonnement</h1>

                            </div>
                        </div>

                    </div>

                    <div class="tab-pane fade" id="v-pills-mdp" role="tabpanel" aria-labelledby="v-pills-mdp-tab">
                        <!-- changer le mdp -->
                        <div class="row text-center">
                            <div class="securite col-12">
                                <h1 class="titre_page_nav text-center">Changer mon mot de passe</h1>

                                <!--mon mot de passe -->
                                <div class="form-group">
                                    <label class="col-md-12 control-label" for="password"> mon Mot de passe:</label>

                                    <div class="col-lg-6">
                                        <input class="input_profil form-control" type="password" name="password"
                                            id="password" v-model="password" />
                                    </div>
                                </div>

                                <!-- nouveau mdp -->
                                <div class="form-group">
                                    <label class="col-md-12 control-label" for="forget"> Nouveau Mot de passe:</label>
                                    <div class="col-lg-6">
                                        <input class="input_profil form-control" type="password" name="forget"
                                            id="forget" v-model="forget" />
                                    </div>
                                </div>

                                <!-- oublier -->
                                <!-- <a class="" id="v-pills-mdp_oublié-tab" data-toggle="pill" href="#v-pills-mdp_oublié"
                                    role="tab" aria-controls="v-pills-mdp_oublié" aria-selected="false">
                                    mot de passe oublié</a> -->

                                <!-- enregistrer -->
                                <div class="form-group">
                                    <input  @click="updatepass" type="submit" class="btn_jour" value="Sauvegarder" />
                                </div>

                            </div>
                        </div>

                    </div>

                    <!-- <div class="tab-pane fade" id="v-pills-mdp_oublié" role="tabpanel"
                        aria-labelledby="v-pills-mdp_oublié-tab">
                       
                        <div class="row">
                            <div class="securite col-12 text-center">
                                <h1 class="titre_page_nav text-center">Réinitialiser Mot De Passe:</h1>
                                <div class="form-group" @submit.prevent="oublier2">
                                    

                                    <label class="col-md-12 control-label" for="forgetpassword"> Email: </label>
                                    <div class="col-lg-6">
                                        <input class="input_profil form-control" type="email" name="forgetpassword" id="forgetpassword" />
                                    </div>


                                    <div class="form-group">
                                        <input type="submit" class="btn_jour" value="Envoyer" />
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
 -->
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
                password: "",
                
                client: {},
                message: null,
                pic: null,
                options: [{
                        value: '35',
                        text: 'EU 35'
                    },
                    {
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
                    {
                        value: '48,5',
                        text: 'EU 48,5',

                    },
                    {
                        value: '49',
                        text: 'EU 49',

                    },
                    {
                        value: '49,5',
                        text: 'EU 49,5',

                    },
                    {
                        value: '50',
                        text: 'EU 50',

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
                            alert(`votre profil est à jour`);

                        } else {

                            this.message = "error: votre profil n'est pas mis à jour";
                            alert(`erreur: votre profil n'a pas été mis à jour`);
                        }
                    })
                    .catch((err) => {

                        console.log(err);
                    });
            },

            /* deconnexion */
            logout: function () {
                alert(`Déconnecté`);
                localStorage.removeItem("token");
                this.$router.push({
                    name: "login",
                    params: {
                        msg: "Déconnecté"
                    }
                });
            },
            
            updatepass: function () {
                this.axios.get("http://localhost:3000/client/updatepassword", {
                        password: this.password,
                    })
                    .then((result) => {
                        alert(result);
                    })
                    .catch((err) => {
                        alert(err);
                    });
            },

            /* update: function () {

                this.axios
                    .get(
                        "http://localhost:3000/client/updatepass/" + this.client.id,
                        this.client
                    )
                    .then((res) => {
                        if (res.status === 200) {
                            localStorage.setItem("token", JSON.stringify(res.data.token));
                            this.message = "votre profil est à jour";
                            alert(`votre profil est à jour`);

                        } else {

                            this.message = "error: votre profil n'est pas mis à jour";
                            alert(`erreur: votre profil n'a pas été mis à jour`);
                        }
                    })
                    .catch((err) => {

                        console.log(err);
                    });
            }, */
        },

    };
</script>

<style>
    @import url("https://use.fontawesome.com/releases/v5.6.3/css/all.css");

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

    .form-group {
        margin: 20px 0;
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
        box-shadow: 0 0 20px #6844ff;
        overflow: hidden;
    }


    .image_profil {
        width: 100%;
        height: 700px;
        background: #fff;
        padding: 0 !important;
    }

    input[type="file"] {
        display: none;
    }

    .ajouter_image {
        display: unset;
        cursor: pointer;
    }

    /* titre input */
    label {
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
        margin-bottom: 35px !important;
        padding: 0;

    }

    .nav_titre_profil {
        font-size: 23px;
        font-family: 'Bebas Neue', sans-serif;
        color: #333;
        margin-left: 5px;
        padding-left: 10px;
    }

    .icon_titre_profil {
        margin-right: 10px;
    }


    .nav-pills .nav-link.active,
    .nav-pills .show>.nav-link {
        color: #333 !important;
        background: #eeeeff !important;
        border-left: 5px solid #6844ff;
        width: 100%;
        padding-left: 15px;

    }

    .nav-pills .nav-link:hover {
        color: #444;
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
        background: #fff;
        height: 700px;
        width: 100%;
    }

    /* information de paiement */
    .information_de_paiement {
        background: #fff;
        height: 700px;
        width: 100%;
    }

    .btn_ajout_paiement {
        width: 100%;
        background: #111;
        color: #fff;
        border: 1px solid #111;
        padding: 15px 30px;
        outline: none;
        border-radius: 30px;
        font-weight: 500;
        font-size: 15px;
    }

    .btn_ajout_paiement:hover {
        background: #222;
        color: #fff;
        border: 1px solid #222;
        text-decoration: none
    }


    /* mon abonnement */
    .mon_abonnement {
        background: #fff;
        height: 700px;
        width: 100%;
    }

    /* securité */
    .securite {
        background: #fff;
        height: 700px;
        width: 100%;
    }

    /* paiement ajout */
    .label_card {
        color: #333 !important;
    }

    button:active {
        transform: scale(0.95);
    }

    button:focus {
        outline: none;
    }

    .btn_jour:active {
        transform: scale(0.95);
    }

    .btn_jour:focus {
        outline: none;
    }
</style>