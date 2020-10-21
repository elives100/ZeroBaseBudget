import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbars/navCreate.vue";
import Navbar2 from "./components/navbars/navCheck.vue";
import Panels from "./components/panel.vue";

Vue.component("navbar", Navbar);
Vue.component("navbar-check", Navbar2);
Vue.component("panel", Panels);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
