<template>
  <v-card>
    <v-list>
      <v-list-item>
        <v-row>
          <v-col cols="12" sm="4" md="6" lg="6" xl="4">
            <h4>Team:
              <v-avatar color="#BB86FC" size="32" class="ml-2">
                <span class="black--text subtitle-2">2</span>
              </v-avatar>
            </h4>
          </v-col>
          <v-col cols="12" sm="4" md="6" lg="6" xl="4">
            <h4>Category:
              <v-avatar color="#03DAC6" size="32" class="ml-2">
                <span class="black--text subtitle-2">AT</span>
              </v-avatar>
            </h4>
          </v-col>
        </v-row>
      </v-list-item>
      <v-list-item>
        <v-list-item-icon>
          <v-tooltip left>
            <template v-slot:activator="{ on }">
              <v-icon v-on="on">mdi-cake-variant</v-icon>
            </template>
            <span>Age</span>
          </v-tooltip>
        </v-list-item-icon>
        <v-list-item-subtitle>{{player.age}} years 20 days</v-list-item-subtitle>
      </v-list-item>
      <v-divider inset/>
      <v-list-item>
        <v-list-item-icon>
          <v-tooltip left>
            <template v-slot:activator="{ on }">
              <v-icon v-on="on">mdi-crown</v-icon>
            </template>
            <span>Speciality</span>
          </v-tooltip>
        </v-list-item-icon>
        <v-list-item-subtitle>-</v-list-item-subtitle>
      </v-list-item>
      <v-divider inset/>
      <v-list-item>
        <v-list-item-icon>
          <v-tooltip left>
            <template v-slot:activator="{ on }">
              <v-icon v-on="on">mdi-certificate</v-icon>
            </template>
            <span>TSI</span>
          </v-tooltip>
        </v-list-item-icon>
        <v-list-item-subtitle>2200</v-list-item-subtitle>
      </v-list-item>
      <v-divider inset/>
      <list-item-icon icon="mdi-weight-lifter" tooltip="Form"/>
      <v-divider inset/>
      <list-item-icon icon="mdi-run" tooltip="Stamina"/>
    </v-list>
  </v-card>
</template>

<script>
import ListItemIcon from "./ListItemIcon";
export default {
  name: "BasicInfosCard",
  components: { ListItemIcon },
  props: ["player"]
};
</script>

<style scoped>
.v-card {
  min-height: 360px;
}
</style>