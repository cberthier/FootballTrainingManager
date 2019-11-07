<template>
  <v-card>
    <v-card-text class="title text-center">
      <h1 class="title">Warnings</h1>
    </v-card-text>
    <v-card-text class="text-center">
      <v-icon
        style="transform: rotate(90deg)"
        color="yellow"
        :x-large="$vuetify.breakpoint.smAndUp"
      >mdi-card</v-icon>
      <v-icon
        style="transform: rotate(90deg)"
        color="red"
        :x-large="$vuetify.breakpoint.smAndUp"
      >mdi-card</v-icon>
      <v-icon :x-large="$vuetify.breakpoint.smAndUp">mdi-cancel</v-icon>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "WarningsCard",
  props: ["value"]
};
</script>

<style scoped>
.v-card {
  min-height: 160px;
}
</style>