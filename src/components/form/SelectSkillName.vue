<template>
  <v-autocomplete
    :label="label"
    :name="name"
    v-model="skill"
    type="text"
    :outlined="$vuetify.breakpoint.smAndUp"
    required
    :items="skillsName"
    :rules="[skill => !!skill || 'This field is required']"
    v-on:change="$emit('skill-change',  skill)"
    dense
  />
</template>

<script>
export default {
  name: "SelectInputPlayerAbilities",
  props: ["label", "name"],

  data: function() {
    return {
      skill: "None",
      skillsName: [
        "None",
        "Keeper",
        "Defending",
        "Playmaking",
        "Winger",
        "Passing",
        "Scoring",
        "FreeKick"
      ]
    };
  }
};
</script>

<style scoped>
</style>
