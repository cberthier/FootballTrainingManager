<template>
  <v-container>
    <v-row>
      <v-col>
        <action-card
          title="Team Players"
          logo="mdi-account-group"
          href="/#/seniorTeam/playerList"
          description="Show all your team players with their characteristics and characteristics evolutions."
        />
      </v-col>
      <v-col>
        <action-card
          title="Auto Update"
          logo="mdi-sync"
          href="#"
          description="Upload csv file from Hattrick site to automatique update your team player."
        />
      </v-col>
      <v-col>
        <action-card
          title="Add Player"
          logo="mdi-account-plus"
          href="#"
          description="For some case, you can add a new player by specifying all of its characteristics manually."
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