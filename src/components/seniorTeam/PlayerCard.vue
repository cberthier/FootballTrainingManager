<template>
  <v-card>
    <v-card-title class="title">{{player.firstName}} {{player.lastName}}</v-card-title>
    <v-card-text class="pb-1">
      <v-avatar color="#BB86FC" size="22" class="mr-2">
        <span class="black--text subtitle-2">2</span>
      </v-avatar>
      <v-avatar color="#03DAC6" size="22">
        <span class="black--text subtitle-2">AT</span>
      </v-avatar>
    </v-card-text>
    <v-divider/>
    <v-list dense>
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
  name: "PlayerCard",
  components: { ListItemIcon },
  props: ["player"]
};
</script>

<style scoped>
</style>
