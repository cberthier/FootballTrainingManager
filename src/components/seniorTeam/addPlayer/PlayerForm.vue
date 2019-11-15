<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm12 md10 lg8 xl6>
      <v-card class="elevation-12">
        <v-card-text>
          <h1 class="title">New Player</h1>
        </v-card-text>
        <v-card-text>
          <v-stepper v-model="e1" step="2">
            <v-stepper-header>
              <v-stepper-step :complete="e1 > 1" step="1">Basic Informtions</v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step :complete="e1 > 2" step="2">Human Caracteristics</v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step :complete="e1 > 3" step="3">Category</v-stepper-step>

              <v-divider></v-divider>

              <v-stepper-step :complete="e1 > 4" step="4">Player Caracteristics</v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
              <v-stepper-content step="1">
                <basic-informations-card/>

                <v-card-actions>
                  <v-spacer/>
                  <v-btn color="primary" class="mt-4" @click="e1 = 2">Next
                    <v-icon right>mdi-chevron-right</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-stepper-content>

              <v-stepper-content step="2">
                <human-caracteristics-card/>

                <v-card-actions>
                  <v-btn color="primary" class="mt-4" @click="e1 = 1">
                    <v-icon left>mdi-chevron-left</v-icon>Previous
                  </v-btn>
                  <v-spacer/>
                  <v-btn color="primary" class="mt-4" @click="e1 = 3">Next
                    <v-icon right>mdi-chevron-right</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-stepper-content>

              <v-stepper-content step="3">
                <category-card/>

                <v-card-actions>
                  <v-btn color="primary" class="mt-4" @click="e1 = 2">
                    <v-icon left>mdi-chevron-left</v-icon>Previous
                  </v-btn>
                  <v-spacer/>
                  <v-btn color="primary" class="mt-4" @click="e1 = 4">Next
                    <v-icon right>mdi-chevron-right</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-stepper-content>

              <v-stepper-content step="4">
                <player-caracteristics-card/>
                <v-card-actions>
                  <v-btn color="primary" class="mt-4" @click="e1 = 3">
                    <v-icon left>mdi-chevron-left</v-icon>Previous
                  </v-btn>
                  <v-spacer/>
                  <v-btn color="primary" class="mt-4" @click="e1 = 1">
                    <v-icon left>mdi-content-save</v-icon>Save
                  </v-btn>
                </v-card-actions>
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
import PlayerCaracteristicsCard from "./PlayerCaracteristicsCard";
import HumanCaracteristicsCard from "./HumanCaracteristicsCard";
import CategoryCard from "./CategoryCard";
export default {
  name: "PlayerForm",
  components: {
    BasicInformationsCard,
    PlayerCaracteristicsCard,
    HumanCaracteristicsCard,
    CategoryCard
  },
  data: function() {
    return { e1: 0 };
  }
};
</script>

<style scoped>
</style>
