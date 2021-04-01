import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import onlyInt from "vue-input-only-number";
import Panels from "./components/panel.vue";

Vue.use(onlyInt);
Vue.component("panel", Panels);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
