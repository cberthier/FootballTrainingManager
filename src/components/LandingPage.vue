<template>
  <v-container>
    <div id="slogan">
      <h1 class="display-3">WELCOME TO FOOTBALL TRAINING MANAGER !!!</h1>
      <p>The best application to manage your youth team and senior team.</p>
      <p>
        <login-button class="btn-lg"></login-button>
        <signup-button class="btn-lg"></signup-button>
      </p>
    </div>
    <v-item-group :mandatory="mandatory" :multiple="multiple">
      <v-row>
        <v-col col="12" md="4">
          <v-card class="mx-auto">
            <v-img class="white--text align-end" src="https://placekitten.com/g/300/300"></v-img>
            <v-card-title>Automatique update</v-card-title>
          </v-card>
        </v-col>
        <v-col col="12" md="4">
          <v-card class="mx-auto">
            <v-img class="white--text align-end" src="https://placekitten.com/g/300/300"></v-img>
            <v-card-title>Graphic visualisation</v-card-title>
          </v-card>
        </v-col>
        <v-col col="12" md="4">
          <v-card class="mx-auto">
            <v-img class="white--text align-end" src="https://placekitten.com/g/300/300"></v-img>
            <v-card-title>Training priority</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-item-group>
  </v-container>
</template>

<script>
import LoginButton from "./buttons/LoginButton";
import SignupButton from "./buttons/SignupButton";

export default {
  name: "LandingPage",
  components: { LoginButton, SignupButton }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#slogan {
  padding: 3rem 1.5rem;
  text-align: center;
}

.card-body {
  text-align: center;

  background-color: #ffca2a;
  color: #356933;
}

.v-card__title {
  text-align: center;
}
</style>