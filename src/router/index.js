import Vue from 'vue'
import VueRouter from 'vue-router'
/* import Home from '../views/Home.vue' */

/* loading */
/* import loading from '../components/loading.vue'; */
/* import du components loading */

/* components liée à la page menu */
/* menu sneakers */
/* import nike1 from '../components/nike1.vue'; 
import yeezy1 from '../components/yeezy1.vue'; 
import adidas1 from '../components/adidas1.vue'; 
import jordan1 from '../components/jordan1.vue'; 


import nike2 from '../components/nike2.vue'; 
import jordan2 from '../components/jordan2.vue'; 
import supreme2 from '../components/supreme2.vue'; 

import Faq from '../views/Faq.vue';
import Contact from '../views/Contact.vue'; 

import adminhome from '../components/admin/home.vue'; 
import login2 from "../components/login2.vue"; 
 */

import login from "../components/login.vue";
import register from "../components/register.vue";
/* import profil from '../components/profil.vue'; 
import mpo from '../components/mpo.vue'; 
import validemail from '../components/validemail.vue'; 
import updatepassword from '../components/updatepassword.vue'; 


import Sneakers from "../views/Sneakers.vue"; 
import Streetwear from "../views/Streetwear.vue"; 
import Lifestyle from "../views/Lifestyle.vue"; 


import panier from '../views/panier.vue'; 
import paiement from '../components/paiement.vue'; 
import paypal from '../components/paypal.vue'; 
 */





Vue.use(VueRouter)

const routes = [
    /* {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: "/sneakers",
            name: "Sneakers",
            component: Sneakers,
           
        },
        {
            path: "/streetwear",
            name: "Streetwear",
            component: Streetwear,
            
        },
        {
            path: "/lifestyle",
            name: "Lifestyle",
            component: Lifestyle,
            
        },
        {
            path: "/pageproduit/:id",
            name: "pageproduit",
            component: () =>
                import ("../components/pageproduit.vue"),
        }, */
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
    /* {
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
    }, */
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router