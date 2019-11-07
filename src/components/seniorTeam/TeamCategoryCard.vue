<template>
  <v-card>
    <v-card-text class="title text-center">
      <h1 class="title">Team</h1>
    </v-card-text>
    <v-card-text class="text-center">
      <v-avatar color="#BB86FC" size="100" class="ml-2 hidden-xs-only">
        <span class="black--text display-2">{{value}}</span>
      </v-avatar>
      <v-avatar color="#BB86FC" size="75" class="ml-2 hidden-sm-and-up">
        <span class="black--text title">{{value}}</span>
      </v-avatar>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "TeamCategoryCard",
  props: ["value"]
};
</script>

<style scoped>
</style>