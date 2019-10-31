import Vue from "vue";
import App from "./App";
import VeeValidate from "vee-validate";
import vuetify from "./vuetify"; // path to vuetify export
import VueRouter from "vue-router";

import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Signup from "./components/Signup";

Vue.use(VeeValidate, { inject: false });
Vue.use(VueRouter);

Vue.config.productionTip = false;

const routes = [
  {
    path: "/",
    name: "Landing Page",
    component: LandingPage
  },
  {
    path: "/login",
    name: "Login Page",
    component: Login
  },
  {
    path: "/signup",
    name: "Signup Page",
    component: Signup
  } /* ,
  {
    path: "/home",
    name: "Home Page",
    component: Home
  },
  {
    path: "/seniorTeam/playerList",
    name: "Player List Page",
    component: SeniorPlayerList
  },
  {
    path: "/seniorTeam/playerDetails",
    name: "Player Details Page",
    component: SeniorPlayerDetails
  },
  {
    path: "/youthTeam/playerList",
    name: "Player List Page",
    component: YouthPlayerList
  },
  {
    path: "/youthTeam/playerDetails",
    name: "Player Details Page",
    component: YouthPlayerDetails
  },
  {
    path: "/components",
    name: "Components Page",
    component: Components
  } */
];

const router = new VueRouter({
  routes
});

/* eslint-disable no-new */
new Vue({
  vuetify,
  router,
  el: "#app",
  components: { App },
  template: "<App/>"
});
