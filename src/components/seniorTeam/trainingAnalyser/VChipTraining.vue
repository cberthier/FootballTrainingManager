<template>
  <v-chip v-if="value != null" label class="ml-2" :color="color()">{{value}}w</v-chip>
  <v-chip v-else label outlined class="ml-2">?</v-chip>
</template>

<script>
export default {
  name: "VChipTraining",
  props: ["value"],
  methods: {
    color() {
      if (this.value === 1) {
        return "green";
      } else if (this.value < 5) {
        return "lime";
      } else if (this.value < 10) {
        return "orange";
      }
      return "red";
    }
  },
  data: function() {
    return {};
  }
};
</script>

<style scoped>
</style>