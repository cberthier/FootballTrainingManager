<template>
  <v-autocomplete
    :label="label"
    :name="name"
    v-model="period"
    type="text"
    :outlined="$vuetify.breakpoint.smAndUp"
    required
    :items="periods"
    :rules="[skill => !!skill || 'This field is required']"
    v-on:change="$emit('period-change',  period)"
    dense
  />
</template>

<script>
export default {
  name: "SelectPeriod",
  props: ["label", "name"],
  data: function() {
    return {
      period: "1 week",
      periods: [
        "1 week",
        "2 week",
        "3 week",
        "1 month",
        "2 month",
        "3 month",
        "All"
      ]
    };
  }
};
</script>

<style scoped>
</style>
