import Home from '../views/Home.vue'
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


/* information */
import Faq from '../views/Faq.vue'; /* import du views Faq */
import Contact from '../views/Contact.vue'; /* import du views Contact */
import Membre from '../views/Membre.vue'; /* import du views Membre */


/* menu sneakers */
import nike1 from '../components/nike1.vue'; /* import du components nike1 */
import yeezy1 from '../components/yeezy1.vue'; /* import du components yeezy1 */
import adidas1 from '../components/adidas1.vue'; /* import du components adidas1 */
import jordan1 from '../components/jordan1.vue'; /* import du components jordan1 */

/* menu streetwear */
import nike2 from '../components/nike2.vue'; /* import du components nike2 */
import jordan2 from '../components/jordan2.vue'; /* import du components jordan2 */
import supreme2 from '../components/supreme2.vue'; /* import du components supreme2 */


/* components liée aux pages nouveauté */
import Sneakers from "../views/Sneakers.vue"; /* import du views Sneakers  */
import Streetwear from "../views/Streetwear.vue"; /* import du views Streetwear  */


/* components liée à la finalisation et au paiement */
import panier from '../views/panier.vue'; /* import du views panier */
import paiement from '../components/paiement.vue'; /* import du components paiement */
import paypal from '../components/paypal.vue'; /* import du components paypal */

/* import dashboard */
import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
const Dashboard = () =>
    import ( /* webpackChunkName: "dashboard" */ "@/pages/Dashboard.vue");
const Profile = () =>
    import ( /* webpackChunkName: "common" */ "@/pages/Profile.vue");
const Notifications = () =>
    import ( /* webpackChunkName: "common" */ "@/pages/Notifications.vue");
const Icons = () =>
    import ( /* webpackChunkName: "common" */ "@/pages/Icons.vue");
const Maps = () =>
    import ( /* webpackChunkName: "common" */ "@/pages/Maps.vue");
const Typography = () =>
    import ( /* webpackChunkName: "common" */ "@/pages/Typography.vue");
const TableList = () =>
    import ( /* webpackChunkName: "common" */ "@/pages/TableList.vue");

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
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
    /* fin admin user */


    /* client / utilisateur */
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
        path: "/validemail/:email",
        name: "validemail",
        component: validemail,
    },
    {
        path: "/updatepassword/:forget",
        name: "updatepassword",
        component: updatepassword,
    },
    /* fin client / utilisateur */


    /* information */
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
        path: "/membre",
        name: "Membre",
        component: Membre,
    },
    /* fin information */


    /* finalisation paiement */
    {
        path: "/paypal",
        name: "paypal",
        component: paypal,
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
    /* fin finalisation paiement */


    /* page principale nouveauté */
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
        path: "/pageproduit/:id",
        name: "pageproduit",
        component: () =>
            import ("../components/pageproduit.vue"),
    },
    /* fin page principale nouveauté */


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
    /* menu sneakers*/


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
    /* menu streetwear */
    {
        path: "/",
        component: DashboardLayout,
        redirect: "/dashboard",
        children: [{
                path: "dashboard",
                name: "dashboard",
                component: Dashboard
            },
            {
                path: "profile",
                name: "profile",
                component: Profile
            },
            {
                path: "notifications",
                name: "notifications",
                component: Notifications
            },
            {
                path: "icons",
                name: "icons",
                component: Icons
            },
            {
                path: "maps",
                name: "maps",
                component: Maps
            },
            {
                path: "typography",
                name: "typography",
                component: Typography
            },
            {
                path: "table-list",
                name: "table-list",
                component: TableList
            }
        ]
    },
    { path: "*", component: NotFound },
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes; /* permet d'expoter nos routes */