import Vue from "vue";
import App from "./App";
import VeeValidate from "vee-validate";
import vuetify from "./vuetify"; // path to vuetify export
import VueRouter from "vue-router";
import FlagIcon from "vue-flag-icon-2";

import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import SeniorPlayerList from "@/components/seniorTeam/PlayerList";
import SeniorPlayerDetails from "@/components/seniorTeam/PlayerDetails";
import SeniorAutoUpdate from "@/components/seniorTeam/AutoUpdate";
import YouthPlayerList from "@/components/youthTeam/PlayerList";
import YouthPlayerDetails from "@/components/youthTeam/PlayerDetails";
import YouthAutoUpdate from "@/components/youthTeam/AutoUpdate";
import YouthPlayerForm from "@/components/youthTeam/addPlayer/PlayerForm";
import ForgottenPassword from "./components/ForgottenPassword";

Vue.use(VeeValidate, { inject: false });
Vue.use(VueRouter);
Vue.use(FlagIcon);

Vue.filter("tsiFormat", function(value) {
  return new Intl.NumberFormat().format(value);
});

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
  },
  {
    path: "/home",
    name: "Home Page",
    component: Home
  },
  {
    path: "/forgottenPassword",
    name: "ForgottenPassword Page",
    component: ForgottenPassword
  },
  {
    path: "/seniorTeam/playerList",
    name: "Senior Player List Page",
    component: SeniorPlayerList
  },
  {
    path: "/seniorTeam/playerDetails",
    name: "Senior Player Details Page",
    component: SeniorPlayerDetails
  },
  {
    path: "/seniorTeam/autoUpdate",
    name: "Senior Auto Update Page",
    component: SeniorAutoUpdate
  },
  {
    path: "/youthTeam/playerList",
    name: "Youth Player List Page",
    component: YouthPlayerList
  },
  {
    path: "/youthTeam/playerDetails",
    name: "Youth Player Details Page",
    component: YouthPlayerDetails
  },
  {
    path: "/youthTeam/autoUpdate",
    name: "Youth Auto Update Page",
    component: YouthAutoUpdate
  },
  {
    path: "/youthTeam/addPlayer",
    name: "Youth Add Player Page",
    component: YouthPlayerForm
  }
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
