<template>
  <v-list-item>
    <v-list-item-icon>
      <v-tooltip left>
        <template v-slot:activator="{ on }">
          <v-icon v-on="on">{{icon}}</v-icon>
        </template>
        <span>{{tooltip}}</span>
      </v-tooltip>
    </v-list-item-icon>
    <v-list-item-subtitle>
      <v-icon v-for="n in (this.value)" :key="n" small>mdi-square</v-icon>
      <v-icon v-for="n in (this.max - this.value)" :key="this.max + n" small>mdi-square-outline</v-icon>
    </v-list-item-subtitle>
  </v-list-item>
</template>

<script>
export default {
  name: "ListItemIcon",
  props: { icon: String, tooltip: String, value: Number, max: Number }
};
</script>

<style scoped>
</style>