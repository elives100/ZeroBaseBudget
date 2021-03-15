import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbars/navCreate.vue";
import Navbar2 from "./components/navbars/navCheck.vue";
import Panels from "./components/panel.vue";
import onlyInt from "vue-input-only-number";
import VueSimpleAlert from "vue-simple-alert";
import { store } from "./store.js";

Vue.use(onlyInt);
Vue.use(VueSimpleAlert);

Vue.component("navbar", Navbar);
Vue.component("navbar-check", Navbar2);
Vue.component("panel", Panels);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
