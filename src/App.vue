<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item to="/home">
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-group no-action>
          <template v-slot:activator>
            <v-list-item-action>
              <v-icon>mdi-numeric-1-box</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Senior Team</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item to="/seniorTeam/playerList">
            <v-list-item-action>
              <v-icon>mdi-account-group</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Team Players</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/seniorTeam/autoUpdate">
            <v-list-item-action>
              <v-icon>mdi-sync</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Auto Update</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/seniorTeam/addPlayer">
            <v-list-item-action>
              <v-icon>mdi-account-plus</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Add Player</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/seniorTeam/trainingAnalyser">
            <v-list-item-action>
              <v-icon>mdi-chart-areaspline</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Training Analyser</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>

        <v-list-group no-action>
          <template v-slot:activator>
            <v-list-item-action>
              <v-icon>mdi-numeric-2-box</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Youth Team</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item to="/youthTeam/playerList">
            <v-list-item-action>
              <v-icon>mdi-account-group</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Team Players</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/youthTeam/autoUpdate">
            <v-list-item-action>
              <v-icon>mdi-sync</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Auto Update</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="/youthTeam/addPlayer">
            <v-list-item-action>
              <v-icon>mdi-account-plus</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Add Player</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-chart-areaspline</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Training Analyser</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
      <v-btn text to="/">Football Training Manager</v-btn>

      <v-spacer></v-spacer>
      <v-menu left bottom>
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on">John Doe
            <v-icon>mdi-menu-down</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-content>
      <v-container class="fill-height">
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; Football Training Manager 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  })
};
</script>

<style>
</style>
