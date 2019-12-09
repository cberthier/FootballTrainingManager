<template>
  <v-chip
    v-if="value > oldValue"
    :small="$vuetify.breakpoint.mdOnly"
    :x-small="$vuetify.breakpoint.smAndDown"
    color="green"
  >
    <v-icon
      :small="$vuetify.breakpoint.mdOnly"
      :x-small="$vuetify.breakpoint.smAndDown"
      left
    >mdi-arrow-top-right</v-icon>
    {{ value }} ({{ oldValue }})
  </v-chip>
  <v-chip
    v-else-if="value < oldValue"
    :small="$vuetify.breakpoint.mdOnly"
    :x-small="$vuetify.breakpoint.smAndDown"
    color="red"
  >
    <v-icon
      :small="$vuetify.breakpoint.mdOnly"
      :x-small="$vuetify.breakpoint.smAndDown"
      left
    >mdi-arrow-bottom-right</v-icon>
    {{ value }} ({{ oldValue }})
  </v-chip>
  <span v-else>{{ value }}</span>
</template>

<script>
export default {
  name: "VChipSkill",
  props: ["value", "oldValue"],
  data: function() {
    return {};
  }
};
</script>

<style scoped>
</style>