import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

/* loading */
/* import loading from '../components/loading.vue'; */
/* import du components loading */

/* components liée à la page menu */
import Faq from '../views/Faq.vue'; /* import du views Faq */
import Contact from '../views/Contact.vue'; /* import du views Contact */

/* compenents liée à l'utilisateur */
import login from "../components/login.vue"; /* import du components login */
import register from "../components/register.vue"; /* import du components register */
import profil from '../components/profil.vue'; /* import du components profil */
import mpo from '../components/mpo.vue'; /* import du components mpo */
import validemail from '../components/validemail.vue'; /* import du components validemail */

/* components liée aux pages produits */
import Sneakers from "../views/Sneakers.vue"; /* import du views Sneakers  */
import Streetwear from "../views/Streetwear.vue"; /* import du views Streetwear  */
import Lifestyle from "../views/Lifestyle.vue"; /* import du views Lifestyle  */

/* components liée aux produits */
import panier from '../components/panier.vue'; /* import du components panier */
import paiement from '../components/paiement.vue'; /* import du components paiement */






Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: "/sneakers",
        name: "Sneakers",
        component: Sneakers,
        /* on déclare le views Sneakers */
    },
    {
        path: "/streetwear",
        name: "Streetwear",
        component: Streetwear,
        /* on déclare le views streetwear */
    },
    {
        path: "/lifestyle",
        name: "Lifestyle",
        component: Lifestyle,
        /* on déclare le views lifestyle */
    },
    {
        path: "/pageproduit/:id",
        name: "pageproduit",
        component: () =>
            import ("../components/pageproduit.vue"),
    },
    {
        path: '/register',
        name: 'register',
        component: register,
    },
    {
        path: '/login',
        name: 'login',
        component: login,
    },
    {
        path: '/mpo',
        name: 'mpo',
        component: mpo,
    },
    {
        path: "/profil",
        name: "profil",
        component: profil,
    },
    {
        path: "/panier",
        name: "panier",
        component: panier,
    },
    {
        path: "/paiement",
        name: "paiement",
        component: paiement,
    },
    {
        path: "/faq",
        name: "Faq",
        component: Faq,
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
    },
    {
        path: "/validemail/:email",
        name: "validemail",
        component: validemail,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router