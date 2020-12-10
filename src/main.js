import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

/* import axios pour liée mon node et vue */
import axios from 'axios';
import Vuesaxios from 'vue-axios';
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

new Vue({
    router,
    // h un alias createElement
    render: h => h(App)
        // “mount” signifie le moment où votre composant est inséré dans le DOM.
        // Ce code crée une nouvelle instance de Vue et la monte sur l'élément HTML avec l'ID d'application. 
}).$mount('#app')