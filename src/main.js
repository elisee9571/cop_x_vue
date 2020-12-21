//main.js permet d'importer nos module pour les intégrer dans nos pages
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import VueRouter from "vue-router";
import router from './router/index'

/* import dashboard */
import RouterPrefetch from 'vue-router-prefetch'
import BlackDashboard from "./plugins/blackDashboard";
import i18n from "./i18n"
Vue.use(BlackDashboard);
Vue.use(VueRouter);
Vue.use(RouterPrefetch);

/* import axios pour liée mon node et vue */
import axios from 'axios'; // module qui va traité les requettes http entre mon front et mon api
import Vuesaxios from 'vue-axios'; // permet de gere axios dans vue
Vue.use(Vuesaxios, axios);

/* import des liens bootstrap */
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

/* glide pour mon slide produit*/
import VueGlide from 'vue-glide-js'
import 'vue-glide-js/dist/vue-glide.css'
Vue.use(VueGlide)

/* effet d'apparition AOS */
import 'aos/dist/aos.css'; // You can also use  for styles

Vue.config.productionTip = false
    // mode developpeur = false
    // mode production = true

new Vue({
    router,
    i18n,
    // h un alias createElement
    render: h => h(App)
        // “mount” signifie le moment où votre composant est inséré dans le DOM*.
        // "DOM" est API pour nos page web, permet de lire et manipuler le contenue de la page.
        // afficher le code de la page "en gros"
        // Ce code crée une nouvelle instance de Vue et la monte sur l'élément HTML avec l'ID d'application. 
}).$mount('#app')

/* API est une interface de programation qui offre des services à d'autre logiciel tel que vue */