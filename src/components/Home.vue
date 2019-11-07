<template>
  <v-container>
    <v-row :dense="$vuetify.breakpoint.xsOnly">
      <v-col cols="12" class="title">
        <h1>Senior Team</h1>
      </v-col>

      <v-col cols="12" sm="4" md="4" lg="4" xl="4" align-self="stretch">
        <action-card
          title="Team Players"
          logo="mdi-account-group"
          to="/seniorTeam/playerList"
          description="Show all your team players with their characteristics and characteristics evolutions."
        />
      </v-col>
      <v-col cols="12" sm="4" md="4" lg="4" xl="4" align-self="stretch">
        <action-card
          title="Auto Update"
          logo="mdi-sync"
          to="#"
          description="Upload csv file from Hattrick site to automatique update your team player."
        />
      </v-col>
      <v-col cols="12" sm="4" md="4" lg="4" xl="4" align-self="stretch">
        <action-card
          title="Add Player"
          logo="mdi-account-plus"
          to="#"
          description="For some case, you can add a new player by specifying all of its characteristics manually."
        />
      </v-col>
      <v-col cols="12" sm="4" md="4" lg="4" xl="4" align-self="stretch">
        <action-card
          title="Training Analyser"
          logo="mdi-chart-areaspline"
          to="#"
          description="Analyze your team to set up the best training according to your goal."
        />
      </v-col>
      <v-col cols="12">
        <v-divider dark></v-divider>
      </v-col>
      <v-col cols="12" class="title">
        <h1>Youth Team</h1>
      </v-col>
      <v-col cols="12" sm="4" md="4" lg="4" xl="4">
        <action-card
          title="Team Players"
          logo="mdi-account-group"
          to="/youthTeam/playerList"
          description="Show all your team players with their characteristics and characteristics evolutions."
        />
      </v-col>
      <v-col cols="12" sm="4" md="4" lg="4" xl="4">
        <action-card
          title="Auto Update"
          logo="mdi-sync"
          to="#"
          description="Upload csv file from Hattrick site to automatique update your team player."
        />
      </v-col>
      <v-col cols="12" sm="4" md="4" lg="4" xl="4">
        <action-card
          title="Add Player"
          logo="mdi-account-plus"
          to="#"
          description="For some case, you can add a new player by specifying all of its characteristics manually."
        />
      </v-col>
      <v-col cols="12" sm="4" md="4" lg="4" xl="4">
        <action-card
          title="Training Analyser"
          logo="mdi-chart-areaspline"
          to="#"
          description="Analyze your team to set up the best training according to your goal."
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ActionCard from "./ActionCard";
export default {
  name: "Home",
  components: { ActionCard }
};
</script>

<style scoped>
</style>