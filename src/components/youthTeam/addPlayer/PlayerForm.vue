<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md8 lg8 xl6>
      <v-card class="elevation-12">
        <v-card-text>
          <h1 class="title">New Player</h1>
        </v-card-text>
        <v-card-text>
          <v-stepper v-model="e1" step="2">
            <v-stepper-header>
              <v-stepper-step :complete="e1 > 1" step="1">Basic Informtions</v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step :complete="e1 > 2" step="2">Caracteristics</v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
              <v-stepper-content step="1">
                <basic-informations-card/>

                <v-btn color="primary" @click="e1 = 2">Continue</v-btn>
              </v-stepper-content>

              <v-stepper-content step="2">
                <caracteristics-card/>

                <v-btn color="primary" @click="e1 = 1">Continue</v-btn>

                <v-btn text>Cancel</v-btn>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import BasicInformationsCard from "./BasicInformationsCard";
import CaracteristicsCard from "./CaracteristicsCard";
export default {
  name: "PlayerForm",
  components: { BasicInformationsCard, CaracteristicsCard },
  data: function() {
    return { e1: 0 };
  }
};
</script>

<style scoped>
</style>
