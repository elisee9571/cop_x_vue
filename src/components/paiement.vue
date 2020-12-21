<template>
    <div class="container">
        <!-- header -->
        <div class="nav_paiement">
            <div class="row" style="padding-top:20px !important;">
                <span class="trait">
                    <a style="font-weight:bolder;
                    letter-spacing:-6px !important;" 
                    class="navbar-brand navlogo"
                        data-text="COP X" href="/">COP X</a>
                </span>
                <div class="col-8 text-center">
                    <h1 class="titre_paiement" style="padding-top:20px;">paiement</h1>
                </div>
            </div>
        </div>
        <!-- fin header -->
        <!-- section all -->
        <div class="container-fluid">
            <div class="row col-12 justify-content-center">
                <!-- Section 1 -->
                <div class="row col-lg-7 col-12">
                    <form class="text-left" 
                    style="padding:0!important;
                    margin:0px!important;
                    background:unset;"
                        action="">
                        <!-- pays livraison -->

                        <div class="form-group">
                            <label class="col-12" for="pays"> PAYS DE LIVRAISON:
                            </label>
                            <div class="col-lg-6">
                                <b-form-select style="color:#808080;" v-model="client.pays" :options="pays" name="pays"
                                    id="pays"></b-form-select>
                            </div>
                        </div>

                        <!-- fin pays livraison -->
                        <!-- code reduction -->

                        <div class="form-group">
                            <label class="col-12" for="codes">CODE PROMO:</label>
                            <div style="padding:0 15px;">
                                <input class="col-lg-5 col-9 " type="text">
                                <button class="btn_jour" 
                                style="font-size:15px;
                            padding:5px 15px;
                            border-radius:5px;" type="submit">Appliquer</button>
                            </div>
                        </div>

                        <!-- fin code reduc -->
                        <!-- email -->
                        <div class="form-group">
                            <label class="col-md-12 " for="email"> ADRESSE EMAIL : </label>
                            <p style="padding:0 15px;" id="email">{{ client.email }}</p>
                        </div>
                        <!-- fin email -->
                        <!-- adresse -->
                        <div class="form-group">
                            <div class="row">
                                <label class="col-9" for="adresse"> ADRESSE DE LIVRAISON: </label>
                                <a class="col-2" href="/profil">modifier</a>
                            </div>

                            <p style="padding:0 15px;" id="adresse">{{ client.nom }}</p>
                            <p style="padding:0 15px;" id="adresse">{{ client.adresse }}</p>
                            <p style="padding:0 15px;" id="adresse">{{ client.ville }}</p>
                            <p style="padding:0 15px;" id="adresse">{{ client.cp }}</p>
                            <p style="padding:0 15px;" id="adresse">{{ client.pays }}</p>
                            <p style="padding:0 15px;" id="adresse">{{ client.tel }}</p>
                        </div>
                        <!-- fin adresse -->
                        <!-- option livraion -->
                        <div class="form-group">
                            <label class="col-md-12 control-label" for="livraison"> OPTION LIVRAISON: </label>
                            <div class="sexe_renseignement">
                                <table>
                                    <tr>
                                        <div class="column col-12">
                                            <div class="row col-12">
                                                <td class="col-10" for="Livraison_Standard">
                                                    <input class="sexe_input align-bottom" type="radio"
                                                        id="Livraison_Standard" name="livraison" value="10€"
                                                        v-model="client.livraison" required />
                                                    <label class="sexe_label" for="Livraison_Standard">Livraison
                                                        Standard</label>
                                                        <p style="font-size:17px;
                                                    padding-left:55px;
                                                    display:flex;
                                                    jutify-content:center;
                                                    align-items:center;">
                                                        <img class="icontext_info" 
                                                        style="width:18px;
                                                        height:18px;
                                                        margin-right:5px;" src="https://img.icons8.com/material/20/000000/info--v1.png" />
                                                    10 jours ouvrés</p>
                                                </td>
                                                <td class="col-2">
                                                    <label for="Livraison_Standard">10€</label>
                                                </td>
                                            </div>
                                            <hr style="border:1px solid #6844ff;">

                                            <div class="row col-12">
                                                <td class="col-10">
                                                    <input class="sexe_input align-bottom" type="radio" id="Livraison_24"
                                                        name="livraison" value="15€" v-model="client.livraison"
                                                        required />
                                                    <label class="sexe_label" for="Livraison_24">Livraison 24h</label>
                                                    <p style="font-size:17px;
                                                    padding-left:55px;
                                                    display:flex;
                                                    jutify-content:center;
                                                    align-items:center;">
                                                        <img class="icontext_info" 
                                                        style="width:18px;
                                                        height:18px;
                                                        margin-right:5px;" src="https://img.icons8.com/material/20/000000/info--v1.png" />
                                                    Livraison entre 7h et 22h</p>
                                                </td>
                                                <td class="col-2">
                                                    <label for="Livraison_24">15€</label>
                                                </td>
                                            </div>
                                        </div>

                                    </tr>
                                </table>



                            </div>
                        </div>
                        <!-- fin option livraison -->
                        <!-- adresse de facturation -->
                        <div class="form-group">
                            <h1 style="margin:10px 15px 20px;
                            font-size:30px !important;">paiement</h1>
                            <div class="row">
                                <label class="col-9" for="adresse"> ADRESSE DE FACTURATION: </label>
                                <a class="col-2" href="/profil">modifier</a>
                            </div>

                            <p style="padding:0 15px;" id="adresse">{{ client.nom }}</p>
                            <p style="padding:0 15px;" id="adresse">{{ client.adresse }}</p>
                            <p style="padding:0 15px;" id="adresse">{{ client.ville }}</p>
                            <p style="padding:0 15px;" id="adresse">{{ client.cp }}</p>
                            <p style="padding:0 15px;" id="adresse">{{ client.pays }}</p>
                            <p style="padding:0 15px;" id="adresse">{{ client.tel }}</p>
                            <!-- fin facturation -->
                            <hr style="border:1px solid #6844ff;">
                            <div class="row">
                                <label class="col-9" for="paiement"> TYPE DE PAIEMENT: </label>
                                <a class="col-2" href="/profil">modifier</a>



                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="">
                                            <div class="card-body">
                                                <div class="alert alert-success" v-if="nonce">
                                                    Votre paiement a bien été accepté.
                                                </div>
                                                <div style="background:crimson;" class="alert" v-if="error">
                                                    {{ error }}
                                                </div>
                                                <form>
                                                    <div class="form-group">
                                                        <label for="amount">Montant</label>
                                                        <div class="input-group">

                                                            <input type="number" id="amount" v-model="amount"
                                                                class="form-control" placeholder="Enter Amount" />
                                                            <div class="">
                                                                <span class="input-group-text">€</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="form-group">
                                                        <label class="label_paypal">Numéro de carte</label>
                                                        <div id="creditCardNumber" class="form-control" required></div>
                                                    </div>
                                                    <div class="form-group">
                                                        <div class="row">
                                                            <div class="col-7">
                                                                <label class="label_paypal">Date d'expiration</label>
                                                                <div id="expireDate" class="form-control" required>
                                                                </div>
                                                            </div>
                                                            <div class="col-4">
                                                                <label class="label_paypal">CVV</label>
                                                                <div id="cvv" class="form-control" required></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button class="btn btn-block"
                                                        @click.prevent="payWithCreditCard">
                                                        Pay with Credit Card
                                                    </button>

                                                    <div class="col-12" style="padding:0;" id="paypalButton"></div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-12">
                                    <input style="padding:10px 30px;
                                    border-radius:10px;" class="btn-success btn-block" type="submit" value="Commander">
                                </div>



                            </div>
                        </div>
                    </form>
                    <div style="padding:10px 15px;">
                        <p style="font-size:15px;letter-spacing:1px;">Vous acceptez nos <a href="/faq"
                                target="_blank">Modalités</a> ,
                            ainsi que <a href="/faq" target="_blank">nos politiques de
                                confidentialité</a> et <a href="/faq" target="_blank">de retour</a> .
                            Vous consentez à ce que certaines de vos données,
                            soient utilisées pour améliorer le processus d'achats et enregistrées par
                            COPX.</p>
                    </div>



                </div>
                <!-- fin section 1 -->
                <!-- section 2 -->
                <div class="col-lg-5 col-12 ">
                    <div class="form-group">
                        <!-- style="position:fixed;" -->
                         <div class="row">
                            <h1 class="col-8" style="padding:0;margin:0 10px;"> Articles</h1>
                            <a class="col-2" href="/panier">modifier</a>
                        </div> 
                        <hr style="border:1px solid #6844ff;">
                        <div class="form-group" >
                        <table class="table">
                            <tbody>
                                <tr v-for="(item,index) in panier" :key="index">
                                    <h1>{{ quantite}}</h1>
                                    <td class="img_Bxpanier">
                                        <img class="img_panier" :src="require(`@/assets/${item.image}.png`)">
                                    </td>
                                    <td>{{item.nom}}
                                        <!-- <br>{{item.produitId}} -->
                                        <br>Taille : {{item.taille}}
                                        <br>{{ item.prix_unitaire }}€ </td>
                                    <!-- <td>{{ (item.quantite * item.prix_unitaire).toFixed(2) }}€</td> -->
                                    <td>{{item.quantite}}</td>
                                </tr>
                            </tbody>
                        </table>

                        <hr style="border:1px solid #6844ff;">
                        <table>
                            <tbody>
                                <tr>
                                    <td class="col-10"> Sous-Total :</td>
                                    <td class="col-2">{{ total }}€</td>
                                </tr>
                                <tr>
                                    <td class="col-10"> Livraison :</td>
                                    <td class="col-2">{{ client.livraison }}</td>
                                </tr>
                                <tr>
                                    <td class="col-10"> Total:</td>
                                    <td class="col-2">{{ total }}€</td>
                                </tr>

                            </tbody>
                        </table>
                        </div>


                    </div>
                </div>
                <!-- fin section 2 -->

            </div>
        </div>
        <!-- fin section all -->
    </div>
</template>

<script>
    import VueJwtDecode from "vue-jwt-decode";
    import braintree from "braintree-web";
    import paypal from "paypal-checkout";
    export default {

        data() {
            return {
                hostedFieldInstance: false,
                nonce: "",
                error: "",
                amount: "",
                client: {},
                Panier: {},
                produit: {},
                pays: [{
                        value: 'Allemagne',
                        text: 'Allemagne'
                    },
                    {
                        value: 'Autriche',
                        text: 'Autriche'
                    },
                    {
                        value: 'Belgique',
                        text: 'Belgique'
                    },
                    {
                        value: 'Bulgarie',
                        text: 'Bulgarie',

                    },
                    {
                        value: 'Chypre',
                        text: 'Chypre'
                    },
                    {
                        value: 'Croatie',
                        text: 'Croatie'
                    },
                    {
                        value: 'Danemark',
                        text: 'Danemark'
                    },
                    {
                        value: 'Espagne',
                        text: 'Espagne'
                    },
                    {
                        value: 'Estonie',
                        text: 'Estonie',

                    },
                    {
                        value: 'Finlande',
                        text: 'Finlande'
                    },
                    {
                        value: 'France',
                        text: 'France'
                    },
                    {
                        value: 'Grece',
                        text: 'Grèce'
                    },
                    {
                        value: 'Hongrie',
                        text: 'Hongrie'
                    },
                    {
                        value: 'Irlande',
                        text: 'Irlande',

                    },
                    {
                        value: 'Italie',
                        text: 'Italie',

                    },
                    {
                        value: 'Lettonie',
                        text: 'Lettonie'
                    },
                    {
                        value: 'Lituanie',
                        text: 'Lituanie'
                    },
                    {
                        value: 'Luxembourg',
                        text: 'Luxembourg'
                    },
                    {
                        value: 'Malte',
                        text: 'Malte'
                    },
                    {
                        value: 'Pays-Bas',
                        text: 'Pays-Bas',

                    },
                    {
                        value: 'Pologne',
                        text: 'Pologne',

                    },
                    {
                        value: 'Portugal',
                        text: 'Portugal'
                    },
                    {
                        value: 'Republique_tcheque',
                        text: 'République tchèque'
                    },
                    {
                        value: 'Roumanie',
                        text: 'Roumanie'
                    },
                    {
                        value: 'Slovaquie',
                        text: 'Slovaquie'
                    },
                    {
                        value: 'Slovenie',
                        text: 'Slovénie'
                    },
                    {
                        value: 'Suede',
                        text: 'Suède'
                    },
                ]
            };
        },

        computed: {
            total: function () {
                let total = 0;
                for (let element of this.panier) {
                    total += element.prix_unitaire * element.quantite;
                }
                return total.toFixed(2);
            }
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
            // eslint-disable-next-line no-console
            console.log("this.$route.params.total", this.$route.params.total);
            if (this.$route.params.total !== undefined) {
                this.amount = this.$route.params.total;
            } else {
                this.$router.push("/panier");
            }
            if (!localStorage.getItem("panier")) {
                return;
            } else {
                this.panier = JSON.parse(localStorage.getItem("panier"));
            }

        },

        methods: {
            payWithCreditCard() {
                if (this.hostedFieldInstance) {
                    this.error = "";
                    this.nonce = "";
                    this.hostedFieldInstance
                        .tokenize()
                        .then((payload) => {
                            // eslint-disable-next-line no-console
                            console.log(payload);
                            this.nonce = payload.nonce;
                        })
                        .catch((err) => {
                            // eslint-disable-next-line no-console
                            console.error(err);
                            this.error = err.message;
                        });
                }
            },
        },
        mounted() {
            braintree.client
                .create({
                    authorization: "sandbox_38gr7jbp_vb92jb8h3pz9h522",
                })
                .then((clientInstance) => {
                    let options = {
                        client: clientInstance,
                        styles: {
                            input: {
                                "font-size": "20px",
                                "font-family": "Open Sans",
                            },
                        },
                        fields: {
                            number: {
                                selector: "#creditCardNumber",
                                placeholder: "•••• •••• •••• ••••",
                            },
                            cvv: {
                                selector: "#cvv",
                                placeholder: "•••",
                            },
                            expirationDate: {
                                selector: "#expireDate",
                                placeholder: "•• / ••",
                            },
                        },
                    };
                    return Promise.all([
                        braintree.hostedFields.create(options),
                        braintree.paypalCheckout.create({
                            client: clientInstance
                        }),
                    ]);
                })
                .then((instances) => {
                    const hostedFieldInstance = instances[0];
                    const paypalCheckoutInstance = instances[1];
                    // Use hostedFieldInstance to send data to Braintree
                    this.hostedFieldInstance = hostedFieldInstance;

                    // Setup PayPal Button
                    return paypal.Button.render({
                            env: "sandbox",
                            style: {
                                label: "paypal",
                                size: "responsive",
                                shape: "rect",
                            },
                            payment: () => {
                                return paypalCheckoutInstance.createPayment({
                                    flow: "checkout",
                                    intent: "sale",
                                    amount: parseFloat(this.amount) > 0 ? this.amount : 10,
                                    displayName: "Braintree Testing",
                                    currency: "USD",
                                });
                            },
                            // eslint-disable-next-line no-unused-vars
                            onAuthorize: (data, options) => {
                                return paypalCheckoutInstance
                                    .tokenizePayment(data)
                                    .then((payload) => {
                                        // eslint-disable-next-line no-console
                                        console.log(payload);
                                        this.error = "";
                                        this.nonce = payload.nonce;
                                    });
                            },
                            onCancel: (data) => {
                                // eslint-disable-next-line no-console
                                console.log(data);
                                // eslint-disable-next-line no-console
                                console.log("Payment Cancelled");
                            },
                            onError: (err) => {
                                // eslint-disable-next-line no-console
                                console.error(err);
                                this.error =
                                    "An error occurred while processing the paypal payment.";
                            },
                        },
                        "#paypalButton"
                    );
                })
                // eslint-disable-next-line no-unused-vars
                .catch((err) => {});
        },
    }
</script>

<style>
    /* nav_paiement */
     /*logo navbar */
    .nav_paiement .navlogo {
        position: relative !important;
        display: block;
        text-align: center;
        margin: 0;
        text-transform: uppercase;
        transition: .5s;
        padding: 5px 10px;
        color: transparent !important;
        font-size: 50px !important;
        font-weight: 500;
    }

    .nav_paiement .navlogo:before,
    .navlogo:after {
        content: attr(data-text);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        color: #0f111a;
        box-sizing: border-box;
        transition: .5s;
        transition-delay: .25s;
    }

    .nav_paiement .navlogo:before {
        clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
        color: #6844ff;
        transform: translate(0, 1px);
    }

    .nav_paiement .navlogo:after {
        clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0 100%);
        color: #6844ff;
        transform: translate(0, 0);
    }

    .nav_paiement .navlogo:hover:before {
        clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
        color: #00bcd4;
        transform: translate(10px, -2px);
    }

    .nav_paiement .navlogo:hover:after {
        clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0 100%);
        color: #f0f;
        transform: translate(-10px, 2px);
    }

    /* trait logo */
    .nav_paiement .trait {
        position: relative;
        overflow: hidden !important;
    }

    .nav_paiement .trait:before {
        content: '';
        position: absolute;
        top: 40%;
        transform: translateY(-50%);
        width: 100%;
        left: -100%;
        height: 1px;
        background: #fff;
        transition: .5s;
    }
    .nav_paiement .trait:hover:before {
        left: 100%;
    }

    /* fin nav paiement */

    /* section */
    .container .container-fluid .row .form-group {
        background: #292d3e;
        padding: 20px;
        margin: 7px;
        color: #fff;
        font-size: 18px;
    }

    /* fin section */
</style>