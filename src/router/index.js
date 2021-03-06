import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

/* loading */
/* import loading from '../components/loading.vue'; */
/* import du components loading */

/* components liée à la page menu */
/* menu sneakers */
import nike1 from '../components/nike1.vue'; /* import du components nike1 */
import yeezy1 from '../components/yeezy1.vue'; /* import du components yeezy1 */
import adidas1 from '../components/adidas1.vue'; /* import du components adidas1 */
import jordan1 from '../components/jordan1.vue'; /* import du components jordan1 */

/* menu streetwear */
import nike2 from '../components/nike2.vue'; /* import du components nike2 */
import jordan2 from '../components/jordan2.vue'; /* import du components jordan2 */
import supreme2 from '../components/supreme2.vue'; /* import du components supreme2 */


import Faq from '../views/Faq.vue'; /* import du views Faq */
import Contact from '../views/Contact.vue'; /* import du views Contact */
/* amdin user */
import adminhome from '../components/admin/home.vue'; /* import du components adminhome */
import login2 from "../components/login2.vue"; /* import du components adminlogin */

/* compenents liée à l'utilisateur */
import login from "../components/login.vue"; /* import du components login */
import register from "../components/register.vue"; /* import du components register */
import profil from '../components/profil.vue'; /* import du components profil */
import mpo from '../components/mpo.vue'; /* import du components mpo */
import validemail from '../components/validemail.vue'; /* import du components validemail */
import updatepassword from '../components/updatepassword.vue'; /* import du components updatepassword */

/* components liée aux pages produits */
import Sneakers from "../views/Sneakers.vue"; /* import du views Sneakers  */
import Streetwear from "../views/Streetwear.vue"; /* import du views Streetwear  */
import Lifestyle from "../views/Lifestyle.vue"; /* import du views Lifestyle  */

/* components liée aux produits */
import panier from '../views/panier.vue'; /* import du views panier */
import paiement from '../components/paiement.vue'; /* import du components paiement */
import paypal from '../components/paypal.vue'; /* import du components paypal */






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
    /* client */
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
    {
        path: "/updatepassword/:forget",
        name: "updatepassword",
        component: updatepassword,
    },
    {
        path: "/paypal",
        name: "paypal",
        component: paypal,
    },
    /* admin user */
    {
        path: "/admin/login",
        name: "adminlogin",
        component: login2
    },
    {
        path: "/admin/home",
        name: "adminhome",
        component: adminhome
    },

    /* menu sneakers */
    {
        path: '/nike1',
        name: 'nike1',
        component: nike1,
    },
    {
        path: '/yeezy1',
        name: 'yeezy1',
        component: yeezy1,
    },
    {
        path: '/adidas1',
        name: 'adidas1',
        component: adidas1,
    },
    {
        path: '/jordan1',
        name: 'jordan1',
        component: jordan1,
    },

    /* menu streetwear */
    {
        path: '/nike2',
        name: 'nike2',
        component: nike2,
    }, {
        path: '/jordan2',
        name: 'jordan2',
        component: jordan2,
    }, {
        path: '/supreme2',
        name: 'supreme2',
        component: supreme2,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router