<template>
    <!-- page paiement -->
    <div class="container-fluid body">
        <div class="row">

            <!-- container suite du panier pour commande achat -->
            <div class="col-lg-6 col-12 container_panier_box">
                <div class="row">
                    <div class="panier review-block">
                        

                    </div>

                    <div class="code col-12 review-block">
                        <div class="form-group col-6">
                            <label style="color: #fff;" class="col-md-6 control-label" for="code"> code promo: </label>
                            <div class="col-md-12">
                                <input class="input_profil form-control" type="text" id="send" oninput="result.value = send.value"/>
                            </div>
                        </div>

                    </div>

                    <div class="tt col-12">
                        <div class="content-box">
                            <div class="content-box__row">
                                <div class="row review-block">
                                    <div class="review-block__inner">
                                        <p>Sous-total</p>
                                    </div>
                                </div>
                                <div class="row ">
                                    <div class="review-block__inner">
                                        <p>Livraison</p>
                                    </div>
                                </div>
                                <div class="row review-block">
                                    <div class="review-block__inner">
                                        <p>Total</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


<!-- container pour l'achat -->
            <div class="container_paiement_box col-lg-5 col-11">
                <h1 class="titre_paiement">Paiement</h1>
                <div class="row col-12">
                    <!-- bar progress -->
                    <div class="progress-bar col-12">

                        <div class="step">
                            <p class="titre_step">Adresse</p>
                            <div class="bullet">
                                <span class="number_step">1</span>
                            </div>
                            <div class="check fas fa-check">
                            </div>
                        </div>

                        <div class="step">
                            <p class="titre_step">Option</p>
                            <div class="bullet">
                                <span class="number_step">2</span>
                            </div>
                            <div class="check fas fa-check">
                            </div>
                        </div>

                        <div class="step">
                            <p class="titre_step">Paiement</p>
                            <div class="bullet">
                                <span class="number_step">3</span>
                            </div>
                            <div class="check fas fa-check">
                            </div>
                        </div>

                        <div class="step">
                            <p class="titre_step">Valider</p>
                            <div class="bullet">
                                <span class="number_step">4</span>
                            </div>
                            <div class="check fas fa-check">
                            </div>
                        </div>
                    </div>
                </div>

                <!-- form -->
                <div class="form-outer form_box_all">

                    <form class="form_box" action="#" onsubmit="return checkReqFields()">
                        <!-- adresse -->
                        <div class="page slide-page">
                            <div class="titre_page">Renseignement :</div>
                            <div class="row">
                                <div class="field col-12">
                                    <input class="input_paiement col-lg-6 " type="text" placeholder="Nom Prénom *"
                                        v-model="client.nom" required />
                                </div>
                                <div class="field col-12">
                                    <input class="input_paiement col-12" type="text"
                                        placeholder="Adresse de livraison *" v-model="client.adresse" required>
                                </div>
                                <div class="field col-12">
                                    <input class="input_paiement col-12" type="text"
                                        placeholder="Adresse de livraison" />
                                </div>
                                <div class="field col-12">
                                    <input class="input_paiement col-lg-6" type="text" placeholder="Ville *"
                                        v-model="client.ville" required/>
                                </div>
                                <div class="field col-lg-6 col-12">
                                    <input class="input_paiement col-12" type="tel" placeholder="Code postale *"
                                        v-model="client.cp" required/>
                                </div>
                                <div class="field col-lg-6 col-12">
                                    <input class="input_paiement col-12" type="text" placeholder="Pays"
                                        v-model="client.pays" />
                                </div>
                                <div class="field col-lg-6 col-12">
                                    <input class="input_paiement col-12" type="email" placeholder="Adresse mail *"
                                        v-model="client.email" required/>
                                </div>
                                <div class="field col-lg-6 col-12">
                                    <input class="input_paiement col-12" type="tel" placeholder="Téléphone *"
                                        v-model="client.tel" required/>
                                </div>
                            </div>

                            <div class="field">
                                <button class="btn_paiement firstNext next">Suivant</button>
                                <!-- <input class="btn_paiement firstNext next" type="submit" value="Submit"> -->
                            </div>
                        </div>





                        <!-- option -->
                        <div class="page">
                            <div class="titre_page">Option :</div>

                            <div class="content-box">
                                <div class="content-box_row">
                                    <div class="row" style="padding: 16px !important;">
                                        <div class="radio_input">
                                            <input class="input-radios" type="radio" id="standard" name="livraison"
                                                v-model="client.livraison">
                                        </div>
                                        <div class="col" for="standard">
                                            <p style="display: flex;" class="p_livraison">Livraison Standard</p>
                                            <p style="display: flex;"><small>10 jours ouvrés</small></p>
                                        </div>
                                        <p class="col-1 p_livraison">5€</p>
                                    </div>
                                </div>
                            </div>

                            <div class="content-box">
                                <div class="content-box_row">
                                    <div class="row" style="padding: 16px !important;">
                                        <div class="radio_input">
                                            <input class="input-radios" type="radio" id="express" name="livraison"
                                                v-model="client.livraison">
                                        </div>
                                        <div class="col" for="express">
                                            <p style="display: flex;" class="p_livraison">Livraison Expresss</p>
                                            <p style="display: flex;"><small>Livraison en 24h entre 7h et 22h</small>
                                            </p>
                                        </div>
                                        <p class="col-1 p_livraison">10€</p>
                                    </div>
                                </div>
                            </div>



                            <div class="form-group col-12">
                            <label style="color: #fff;" class="col-md-12 control-label" for="code"> code promo: </label>
                            <div class="col-md-12">
                                <input class="input_profil form-control" type="text" id="result"/>
                            </div>
                        </div>

                            <div class="field btns">
                                <button class="btn_paiement prev-1 prev">Précédent</button>
                                <button class="btn_paiement next-1 next">Suivant</button>
                            </div>
                        </div>


                        <!-- paiement -->
                        <div class="page">
                            <div class="titre_page">Mode de paiement :</div>

                            <div class="row">
                                <div class="col-12">
                                    <div class="card_paiement">

                                        <div class="card-header header_paiement">
                                            <div class="row">

                                                <div class="col-md-6">
                                                    <p>Carte de crédit / débit<br>ou<br> <a href="#"
                                                            class="paypal">PAYPAL <img class="icon_paiement"
                                                                src="../assets/icon_paypal.png" alt=""></a></p>


                                                </div>

                                                <div class="col-md-6 text-right" style="margin-top: -5px;">
                                                    <img class="icon_paiement" src="../assets/icon_visa.png" alt="">
                                                    <img class="icon_paiement" src="../assets/icon_mastercard.png"
                                                        alt="">
                                                    <img class="icon_paiement" src="../assets/icon_amex.png" alt="">

                                                </div>

                                            </div>
                                        </div>


                                        <div class="card-body">
                                            <div class="form-group">
                                                <label for="cc-number" class="label_text control-label">Numéro de
                                                    carte</label>
                                                <input type="tel" id="cc-number" class="input-lg form-control cc-number"
                                                    autocomplete="cc-number" placeholder="•••• •••• •••• ••••" name=""
                                                    v-model="client.information_paiement">
                                            </div>

                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label for="cc-exp" class="label_text control-label">Date
                                                            d'expiration</label>
                                                        <input type="tel" id="cc-exp"
                                                            class="input-lg form-control cc-exp" autocomplete="cc-exp"
                                                            placeholder="•• / ••" name=""
                                                            v-model="client.information_paiement">
                                                    </div>
                                                </div>

                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label for="cc-cvc" class="label_text control-label">Numéro de
                                                            carte</label>
                                                        <input type="tel" id="cc-cvc"
                                                            class="input-lg form-control cc-cvc" autocomplete="off"
                                                            placeholder="•••" name=""
                                                            v-model="client.information_paiement">
                                                    </div>
                                                </div>
                                            </div>


                                            <div class="form-group">
                                                <label for="numeric" class="label_text control-label">Nom du
                                                    titulaire</label>
                                                <input type="text" class="input-lg form-control"
                                                    v-model="client.information_paiement">
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>




                            <div class="field btns">
                                <button class="btn_paiement prev-2 prev">Précédent</button>
                                <button class="btn_paiement next-2 next">Suivant</button>
                            </div>

                        </div>


                        <!-- valider -->
                        <div class="page">
                            <div class="titre_page">Récapitulatif :</div>

                            <div class="content-box">
                                <div class="content-box__row">
                                    <div class="row review-block">
                                        <div class="review-block__inner">
                                            <p>Contact</p>
                                        </div>
                                    </div>
                                    <div class="row review-block" style="padding-bottom: 70px !important;">
                                        <div class="review-block__inner">
                                            <p>Expédier à</p>
                                        </div>
                                    </div>
                                    <div class="row review-block">
                                        <div class="review-block__inner">
                                            <p>Paiement</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="content-box">
                                <div class="content-box__row">
                                    <div class="row review-block">
                                        <div class="review-block__inner">
                                            <p>Sous-total</p>
                                        </div>
                                    </div>
                                    <div class="row review-block">
                                        <div class="review-block__inner">
                                            <p>Livraison</p>
                                        </div>
                                    </div>
                                    <div class="row review-block">
                                        <div class="review-block__inner">
                                            <p>Total</p>
                                        </div>
                                    </div>
                                </div>
                            </div>







                            <div class="field btns">
                                <button class="btn_paiement prev-3 prev">Précédent</button>
                                <button class="btn_paiement submit">Valider</button>
                            </div>
                            <p class="petite_ligne">En confirmant votre commande vous acceptez <a href="/faq">nos
                                    conditions générales</a>, <a href="/faq">notre politique de confidentialité</a> et <a
                                    href="/faq">nos modalités concernant les retours</a>
                                et donnez votre autorisation pour que COP X conserve certaines de vos donnés dans le but
                                d'améliorer vos prochaines expériences de shopping.</p>
                        </div>


                    </form>
                </div>




            </div>
        </div>
    </div>

</template>

<script type="text/javascript">
    /* import $ from 'jquery' */

    export default {
        name: "paiement",

        data() {
            return {
                client: {},
            };
        },
        created: function () {
            if (localStorage.getItem("token") === null) {
                this.$router.push({
                    name: "login"
                });
            }

        },
        mounted() {
            /* Created By CodingNepal */
            const slidePage = document.querySelector(".slide-page");
            const nextBtnFirst = document.querySelector(".firstNext");
            const prevBtnSec = document.querySelector(".prev-1");
            const nextBtnSec = document.querySelector(".next-1");
            const prevBtnThird = document.querySelector(".prev-2");
            const nextBtnThird = document.querySelector(".next-2");
            const prevBtnFourth = document.querySelector(".prev-3");
            const submitBtn = document.querySelector(".submit");
            const progressText = [...document.querySelectorAll(".step p")];
            const progressCheck = [...document.querySelectorAll(".step .check")];
            const bullet = [...document.querySelectorAll(".step .bullet")];
            /* let max = 4; */
            let current = 1;

            nextBtnFirst.addEventListener("click", function () {
                slidePage.style.marginLeft = "-50%";
                bullet[current - 1].classList.add("active");
                progressCheck[current - 1].classList.add("active");
                progressText[current - 1].classList.add("active");
                current += 1;
            });
            nextBtnSec.addEventListener("click", function () {
                slidePage.style.marginLeft = "-100%";
                bullet[current - 1].classList.add("active");
                progressCheck[current - 1].classList.add("active");
                progressText[current - 1].classList.add("active");
                current += 1;
            });
            nextBtnThird.addEventListener("click", function () {
                slidePage.style.marginLeft = "-150%";
                bullet[current - 1].classList.add("active");
                progressCheck[current - 1].classList.add("active");
                progressText[current - 1].classList.add("active");
                current += 1;
            });
            submitBtn.addEventListener("click", function () {
                bullet[current - 1].classList.add("active");
                progressCheck[current - 1].classList.add("active");
                progressText[current - 1].classList.add("active");
                current += 1;
                setTimeout(function () {
                    alert("Your Form Successfully Signed up");
                    location.reload();
                }, 800);
            });

            prevBtnSec.addEventListener("click", function () {
                slidePage.style.marginLeft = "0%";
                bullet[current - 2].classList.remove("active");
                progressCheck[current - 2].classList.remove("active");
                progressText[current - 2].classList.remove("active");
                current -= 1;
            });
            prevBtnThird.addEventListener("click", function () {
                slidePage.style.marginLeft = "-50%";
                bullet[current - 2].classList.remove("active");
                progressCheck[current - 2].classList.remove("active");
                progressText[current - 2].classList.remove("active");
                current -= 1;
            });
            prevBtnFourth.addEventListener("click", function () {
                slidePage.style.marginLeft = "-100%";
                bullet[current - 2].classList.remove("active");
                progressCheck[current - 2].classList.remove("active");
                progressText[current - 2].classList.remove("active");
                current -= 1;
            });


            /* window.onload = function () {

                var $ = require('jquery') 

                $('.cc-number').payment('formatCardNumber');
                $('.cc-exp').payment('formatCardExpiry');
                $('.cc-cvc').payment('formatCardCVC');
                $('form').submit(function (e) {

                    e.preventDefault();

                    var $payement = $.payment.cardType($('.cc-number').val());
                    $('.cc-number').toggleInputErreur(!$payement.validateCardNumber($('.cc-number')
                        .val()));
                    $('.cc-exp').toggleInputErreur(!$payement.validateCardExpiry($('.cc-exp').payment(
                        'cardExpiryVal')));
                    $('.cc-cvc').toggleInputErreur(!$payement.validateCardCVC($('.cc-cvc').val(),
                        'cardType'));

                    $('.validation').removeClass('text-danger text-success');
                    $('.validation').addClass($('.has-error').length ? 'text-danger' : 'text-success');
                });
            } */
        }
    }
</script>

<style>
   /*  @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap'); */

    /* css */
    
    .body {
        background: #262626;
    }

    .container_panier_box {
        background: #202020;
        height: 100vh;
    }
    .panier{
        margin-top: 100px;
        height: 100px !important;
        width: 100%;
    }

    .tt .content-box {
        border-top: 1px solid #808080 !important;
        border-radius: 0 !important;
        border: none;
        margin-top: 20px;
    }


    /* input radio */
    .radio_input {
        padding: 0 10.5px 0;
        white-space: nowrap;
    }

    input[type="radio"],
    input[type="checkbox"] {
        height: 20px;
        width: 20px;
        vertical-align: middle;
    }

    /* partie récap */
    .review-block__inner {
        display: flex;
        flex: 1;
    }

    .review-block__inner p {
        margin: 12px 0 0;
        padding: 0 0 12px;
    }

    .review-block {
        display: flex;
    }

    .review-block~.review-block {
        margin-top: 0.8571428571em;
        padding-top: 0.8571428571em;
        border-top: 1px solid #808080;
    }

    .content-box {
        border: 1px solid #808080;
        border-radius: 5px;
        margin-top: 20px;
    }

    .content-box__row {
        padding: 16px;
    }


    /* container */
    .container_paiement_box {
        width: 100%;

        background: #262626;
        text-align: center;
        padding: 50px 35px 10px 35px;
        box-sizing: unset !important;
    }

    /* titre paiement */
    .container_paiement_box .titre_paiement {
        margin: 0 0 30px 0;
    }

    /* container */
    .container_paiement_box .form_box_all {
        width: 100%;
        overflow: hidden;
    }

    .form_box_all .form_box {
        display: flex;
        width: 400%;
    }

    /* page */
    .form_box_all .form_box .page {
        width: 25%;
        transition: margin-left 0.5s ease-in-out;
    }

    .form_box_all .form_box .page .titre_page {
        text-align: left;
        font-family: 'Bebas Neue', sans-serif;
        font-size: 30px;
        color: #fff;
        margin-bottom: 20px;
    }

    /* css form en row */
    .form_box {
        flex-direction: row !important;
        padding: 0;
        background: transparent;
    }

    /* info input */
    .form_box_all .form_box .page .field {
        height: 40px;
        /* width: 100%; */
        margin: 20px 0;
        color: #fff;
        position: relative;
        display: flex;

    }

    form .page .field .label {
        position: absolute;
        top: -30px;
        font-size: 20px;
        font-weight: 500;
    } 

    /* input */
    .form_box_all .form_box .page .field .input_paiement {
        height: 100%;
        border: 1px solid lightgray;
        border-radius: 5px;
        font-size: 18px;
        padding-left: 15px;
    }

    .input_paiement {
        height: 100%;
        border: 1px solid lightgray;
        border-radius: 5px;
        font-size: 18px;
        padding-left: 15px;
    }

    /* btn  */
    .form_box_all .form_box .page .field .btn_paiement {
        width: 100%;
        border: 2px solid rgba(104, 68, 255, 255);
        color: rgba(104, 68, 255, 255);
        height: calc(100% + 5px);
        margin-top: -20px;
        font-size: 18px;
        border-radius: 8px;
        text-transform: uppercase;
        font-weight: 600;
        transition: 0.4s linear;
        background-color: transparent !important;
    }

    .form_box_all .form_box .page .field .btn_paiement:hover {
        background-color: #6844ff !important;
        color: #fff;
    }

    /* btns */
    .form_box_all .form_box .page .btns .btn_paiement {
        margin-top: 10px;
    }

    .form_box .page .btns .btn_paiement .prev {
        margin-right: 3px;
        font-size: 17px;
    }

    .form_box .page .btns .btn_paiement .next {
        margin-left: 3px;
        font-size: 17px;
    }

    /* progress bar */
    .progress-bar {
        overflow: visible;
        flex-direction: row !important;
        background: transparent !important;
        margin-bottom: 40px;
    }

    .container .progress-bar {
        display: flex;
    }

    .container .progress-bar .step {
        position: relative;
        text-align: center;
        width: 100%;
    }

    /* titre étape */
    .progress-bar .step .titre_step {
        font-size: 20px;
        font-weight: 500;
        color: #fff;
        margin-bottom: 8px;
        transition: 0.2s;

    }

    .progress-bar .step .titre_step.active {
        color: #6844ff;
    }

    /* trait */
    .progress-bar .step .bullet {
        position: relative;
        margin: 0 40px !important;
        height: 25px;
        width: 25px;
        border: 2px solid #fff;
        display: inline-block;
        border-radius: 50%;
        transition: 0.3s;
        box-sizing: unset !important;
    }

    .progress-bar .step .bullet.active {
        border-color: #6844ff;
        background: #6844ff;

    }

    .progress-bar .step:last-child .bullet:before,
    .progress-bar .step:last-child .bullet:after {
        display: none;
    }

    .progress-bar .step .bullet:before,
    .progress-bar .step .bullet:after {
        position: absolute;
        content: '';
        bottom: 11px;
        right: -82px;
        height: 4px;
        width: 80px;
        background: #fff;
    }

    .progress-bar .step .bullet.active:after {
        background: #6844ff;
        transform: scaleX(0);
        transform-origin: left;
        animation: animate 0.3s linear forwards;
    }

    @keyframes animate {
        100% {
            transform: scaleX(1);
        }
    }

    span {
        z-index: unset !important;
    }

    /* number */
    .progress-bar .step .bullet span {
        font-weight: 500;
        font-size: 17px;
        line-height: 25px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        color: #fff !important;
    }

    .progress-bar .step .bullet.active span {
        display: none !important;
    }

    /* check */
    .progress-bar .step .check {
        position: absolute;
        top: 70%;
        font-size: 15px;
        transform: translate(315%, -50%);
        display: none;
    }

    .progress-bar .step .check.active {
        display: block;
        color: #fff;
    }

    /* paiement */
    .padding {
        padding: 5rem !important;
    }

    .icon_paiement {
        width: 36px;
    }

    .label_text {
        color: #fff !important;
        font-size: 20px;
    }

    /* valider */
    .p_livraison {
        color: #fff;
        font-size: 20px;
    }

    /* petite ligne */
    .petite_ligne {
        font-size: 15px;
    }

    /* tt */
    .total_paiement p {
        color: #fff;
    }

    .total {
        margin-left: 70%;
    }

    .total p {
        color: #fff;
    }
</style>