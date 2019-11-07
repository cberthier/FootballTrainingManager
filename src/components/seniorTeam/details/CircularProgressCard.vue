<template>
  <v-card>
    <v-card-text class="text-center">
      <h1 class="title hidden-xs-only">{{title}}</h1>
      <h1 class="subtitle-1 hidden-sm-and-up">{{title}}</h1>
    </v-card-text>
    <v-card-text class="text-center">
      <v-progress-circular
        class="hidden-xs-only"
        size="100"
        width="20"
        rotate="-90"
        :value="this.value/this.max*100"
      >{{value}}/{{max}}</v-progress-circular>
      <v-progress-circular
        class="hidden-sm-and-up"
        size="75"
        width="10"
        rotate="-90"
        :value="this.value/this.max*100"
      >{{value}}/{{max}}</v-progress-circular>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "CircularProgressCard",
  props: ["title", "value", "max"]
};
</script>

<style scoped>
</style>