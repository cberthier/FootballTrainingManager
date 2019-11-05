<template>
  <v-card>
    <v-card-text class="title text-center">
      <h1>{{title}}</h1>
    </v-card-text>
    <v-card-text class="text-center">
      <v-progress-circular
        size="100"
        width="15"
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