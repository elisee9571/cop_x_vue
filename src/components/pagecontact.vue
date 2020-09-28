<template>
    <!-- contact -->
    <div class="container">
        <div class="row">
            <div class="contactinfo_box col-lg-4 col-md-12 order-lg-1 order-2">
                <!-- info contact -->
                <div class="contactinfo">
                    <div class="row">
                        <div class="col text-lg-left text-center">
                            <h2 class="titre_contact"><a href="/">Contactez-nous</a></h2>

                            <div class="row justify-content-center">
                                <div class="info">

                                    <img class="icon_contact1"
                                        src="https://img.icons8.com/ios-filled/50/000000/email-open.png" />
                                    <span class="p_email">eltestnode@gmail.com</span>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="sci">
                        <div class="row">

                            <div class="col text-lg-center text-right">
                                <div class="h-100"></div>
                                <div class="h-100"></div>
                                <div class="h-100"></div>
                                <div class="h-100"></div>
                                <div class="h-100"></div>
                                <div class="h-100"></div>
                                <div class="h-100"></div>
                                <div class="h-50"></div>
                                <a href="" target="_blank"><img class="icon_contact"
                                        src="https://img.icons8.com/android/45/000000/facebook.png" /></a>


                                <a href="https://www.instagram.com/cop___x/" target="_blank"><img class="icon_contact"
                                        src="https://img.icons8.com/ios-filled/50/000000/instagram-new.png" /></a>


                                <a href="" target="_blank"><img class="icon_contact"
                                        src="https://img.icons8.com/android/50/000000/twitter.png" /></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <!-- form contact -->
            <div class="contactForm_box col-lg-8 col-md-12 order-lg-2 order-1 ">
                <div class="contactForm">
                    <h2>Envoyer un message</h2>

                    <form @submit.prevent="send" class="text-left" style="padding:0;">
                        <div class="formBox">
                            <div class="inputBox w50">
                                <input type="text" name="" required v-model="nom">
                                <span>Nom</span>
                            </div>
                            <div class="inputBox w50">
                                <input type="text" name="" required v-model="prenom">
                                <span>Prenom</span>
                            </div>
                            <div class="inputBox w50">
                                <input type="text" name="" required v-model="email">
                                <span>Email</span>
                            </div>
                            <div class="inputBox w50">
                                <input type="text" name="" required v-model="subject">
                                <span>Objet</span>
                            </div>
                            <div class="inputBox w100">
                                <textarea name="" required v-model="text"></textarea>
                                <span>Ecrire votre message ici</span>
                            </div>
                            <div class="inputBox w100">
                                <input type="submit" value="Envoyer">
                            </div>

                        </div>
                    </form>

                </div>
            </div>

        </div>
    </div>

</template>

<script>
    export default {
        name: 'pagecontact',

        data() {
            return {
                nom: "",
                email: "",
                subject: "",
                text: "",
            }
        },
        methods: {
            send: function () {

                this.axios.post("http://localhost:3000/sendmail", {
                        email: this.email,
                        nom: this.nom,
                        subject: this.subject,
                        text: this.text,

                    })
                    .then(() => {
                        alert('Votre mail à été envoyé')
                        this.$router.push({ name: 'Home'})
                        window.location.reload();
                    })
                    .catch(() => {
                        alert("erreur: Votre mail n'à pas été envoyé");
                    });



            },
        },
    }
</script>

<style>
    @media (min-width: 992px) {

        .contactinfo_box,
        .contactForm_box {
            margin: 100px 0 !important;
        }

    }

    .contactinfo_box,
    .contactForm_box {
        padding: 0 !important;
        margin: 0 !important;
        transform: translateY(12%);
    }

    /* container info */
    .contactinfo {
        height: 600px;
        background: linear-gradient(40deg, rgba(151, 120, 255, 255), rgba(104, 68, 255, 255));
        padding: 40px;
    }

    .titre_contact a {
        color: #fff !important;
        font-size: 30px;
        font-weight: 500;
        font-family: 'Bebas Neue', sans-serif;
        margin-bottom: 20px;
        outline: none;
        text-decoration: none;
    }

    .titre_contact a:hover {
        color: #fff;
        outline: none;
        text-decoration: none;
    }

    .icon_contact {
        opacity: 0.7;
        filter: invert(1);
        margin: 0 10px;
    }

    .icon_contact1 {
        width: 35px;
        margin-right: 10px;
        opacity: 0.7;
        filter: invert(1);
    }

    .info {
        padding: 0;
        margin: 0;
    }

    .p_email {
        color: #fff !important;
        opacity: 0.7;
        font-size: 18px;
        vertical-align: middle;

    }

    /* container form */
    .container .contactForm h2 {
        margin-bottom: 20px;
        color: black;
        font-size: 30px;
        font-weight: 500;
        font-family: 'Bebas Neue', sans-serif;
    }

    .contactForm {
        margin: 0;
        padding: 70px 50px;
        background: #fff;
        height: 100%;
        width: 100%;
        font-family: 'Oswald', sans-serif;
    }

    .container .contactForm .formBox {
        position: relative;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .container .contactForm .formBox .inputBox {
        position: relative;
        margin: 0 0 35px 0;
    }

    .container .contactForm .formBox .inputBox.w50 {
        width: 47%;
    }

    .container .contactForm .formBox .inputBox.w100 {
        width: 100%;
    }

    .container .contactForm .formBox .inputBox input,
    .container .contactForm .formBox .inputBox textarea {
        width: 100% !important;
        padding: 5px 0;
        resize: none;
        font-size: 18px;
        font-weight: 300;
        color: black;
        border: none;
        border-bottom: 1px solid #6844ff;
        outline: none;
    }

    .container .contactForm .formBox .inputBox textarea {
        min-height: 120px;
    }

    .container .contactForm .formBox .inputBox span {
        position: absolute;
        left: 0;
        padding: 5px 0;
        font-size: 18px;
        font-weight: 300;
        color: black;
        transition: 0.5s;
        pointer-events: none;
    }

    .container .contactForm .formBox .inputBox input:focus~span,
    .container .contactForm .formBox .inputBox textarea:focus~span,
    .container .contactForm .formBox .inputBox input:valid~span,
    .container .contactForm .formBox .inputBox textarea:valid~span {
        transform: translateY(-20px);
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 1px;
        color: #6844ff;
    }

    .container .contactForm .formBox .inputBox input[type="submit"] {
        position: relative;
        cursor: pointer;
        max-width: 150px;
        border: 2px solid rgba(104, 68, 255, 255);
        color: rgba(104, 68, 255, 255);
        border-radius: 8px;
        padding: 12px;
        text-transform: uppercase;
        font-weight: 500;
        transition: .3 linear;
        background: transparent;
    }

    .container .contactForm .formBox .inputBox input[type="submit"]:hover {
        background: #6844ff;
        color: #fff;
    }
</style>