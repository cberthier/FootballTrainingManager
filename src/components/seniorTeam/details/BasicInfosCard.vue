<template>
  <v-card>
    <v-container>
      <v-list :dense="$vuetify.breakpoint.xsOnly">
        <v-list-item>
          <v-list-item-icon>
            <v-tooltip left>
              <template v-slot:activator="{ on }">
                <v-icon v-on="on" :large="$vuetify.breakpoint.smAndUp">mdi-airport</v-icon>
              </template>
              <span>First day with club</span>
            </v-tooltip>
          </v-list-item-icon>
          <v-list-item-subtitle>{{player.firstDayWithClub}}</v-list-item-subtitle>
        </v-list-item>
        <v-divider inset/>
        <v-list-item>
          <v-list-item-icon>
            <v-tooltip left>
              <template v-slot:activator="{ on }">
                <v-icon v-on="on" :large="$vuetify.breakpoint.smAndUp">mdi-cake-variant</v-icon>
              </template>
              <span>Age</span>
            </v-tooltip>
          </v-list-item-icon>
          <v-list-item-subtitle>{{player.age.years}} years {{player.age.days}} days</v-list-item-subtitle>
        </v-list-item>
        <v-divider inset/>
        <v-list-item>
          <v-list-item-icon>
            <v-tooltip left>
              <template v-slot:activator="{ on }">
                <v-icon v-on="on" :large="$vuetify.breakpoint.smAndUp">mdi-crown</v-icon>
              </template>
              <span>Speciality</span>
            </v-tooltip>
          </v-list-item-icon>
          <v-list-item-subtitle>{{player.speciality}}</v-list-item-subtitle>
        </v-list-item>
        <v-divider inset/>
        <v-list-item>
          <v-list-item-icon>
            <v-tooltip left>
              <template v-slot:activator="{ on }">
                <v-icon v-on="on" :large="$vuetify.breakpoint.smAndUp">mdi-certificate</v-icon>
              </template>
              <span>TSI</span>
            </v-tooltip>
          </v-list-item-icon>
          <v-list-item-subtitle>{{player.tsi | tsiFormat}}</v-list-item-subtitle>
        </v-list-item>
        <v-divider inset/>
        <v-list-item>
          <v-list-item-icon>
            <v-tooltip left>
              <template v-slot:activator="{ on }">
                <v-icon v-on="on" :large="$vuetify.breakpoint.smAndUp">mdi-cash-100</v-icon>
              </template>
              <span>Wage</span>
            </v-tooltip>
          </v-list-item-icon>
          <v-list-item-subtitle>{{player.wage | tsiFormat}} €/mois</v-list-item-subtitle>
        </v-list-item>
      </v-list>
    </v-container>
  </v-card>
</template>

<script>
import ListItemIcon from "@/components/seniorTeam/ListItemIcon";
export default {
  name: "BasicInfosCard",
  components: { ListItemIcon },
  props: ["player"]
};
</script>

<style scoped>
</style>