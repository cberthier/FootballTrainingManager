import Vue from "vue";
import App from "./App";
import VeeValidate from "vee-validate";
import vuetify from "./vuetify"; // path to vuetify export

Vue.use(VeeValidate, { inject: false });

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  vuetify,
  el: "#app",
  components: { App },
  template: "<App/>"
});
