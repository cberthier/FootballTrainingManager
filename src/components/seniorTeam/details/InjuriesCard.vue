<template>
  <v-card>
    <v-card-text class="title text-center">
      <h1 class="title">Injuries</h1>
    </v-card-text>
    <v-card-text class="text-center">
      <v-badge overlap color="red">
        <template v-slot:badge>2</template>
        <v-icon :x-large="$vuetify.breakpoint.smAndUp">mdi-bandage</v-icon>
      </v-badge>

      <v-icon :x-large="$vuetify.breakpoint.smAndUp">mdi-human-handsup</v-icon>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "InjurieCard",
  props: ["value"]
};
</script>

<style scoped>
.v-card {
  min-height: 160px;
}
</style>