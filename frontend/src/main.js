import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import onlyInt from "vue-input-only-number";
import Panels from "./components/panel.vue";
import Fragment from "vue-fragment";

Vue.component("panel", Panels);

Vue.use(onlyInt);
Vue.use(Fragment.Plugin);

Vue.config.productionTip = false;
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
