<template>
  <v-col cols="12" sm="6" md="3" lg="3" xl="3">
    <v-autocomplete
      :label="label"
      :name="name"
      v-model="skill"
      type="text"
      :outlined="$vuetify.breakpoint.smAndUp"
      required
      :items="skillLevels"
      :rules="[skill => !!skill || 'This field is required']"
      dense
    />
  </v-col>
</template>

<script>
export default {
  name: "SelectInputLeadershipForm",
  props: ["label", "name"],
  data: function() {
    return {
      skill: "",
      skillLevels: [
        "Non existent (0)",
        "Disastrous (1)",
        "Wretched (2)",
        "Poor (3)",
        "Weak (4)",
        "Inadequate (5)",
        "Passable (6)",
        "Solid (7)",
        "Ewcellent (8)"
      ]
    };
  }
};
</script>

<style scoped>
</style>
