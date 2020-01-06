<template>
  <v-chip
    outlined
    v-if="value > oldValue"
    :small="$vuetify.breakpoint.mdOnly"
    :x-small="$vuetify.breakpoint.smAndDown"
    pill
  >
    <v-avatar left color="green">+{{value - oldValue}}</v-avatar>
    {{ value }}
  </v-chip>
  <v-chip
    outlined
    v-else-if="value < oldValue"
    :small="$vuetify.breakpoint.mdOnly"
    :x-small="$vuetify.breakpoint.smAndDown"
    pill
  >
    <v-avatar left color="red">-{{oldValue - value}}</v-avatar>
    {{ value }}
  </v-chip>
  <v-chip
    outlined
    v-else
    :small="$vuetify.breakpoint.mdOnly"
    :x-small="$vuetify.breakpoint.smAndDown"
    pill
  >
    <v-avatar left color="white" class="black--text">=</v-avatar>
    {{ value }}
  </v-chip>
</template>

<script>
export default {
  name: "VChipFormStamina",
  props: ["value", "oldValue"],
  data: function() {
    return {};
  }
};
</script>

<style scoped>
</style>