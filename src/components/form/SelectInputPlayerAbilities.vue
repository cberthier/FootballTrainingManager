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
  name: "SelectInputPlayerAbilities",
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
        "Ewcellent (8)",
        "Formidable (9)",
        "Outstanding (10)",
        "Brilliant (11)",
        "Magnificent (12)",
        "World class (13)",
        "Supernatural (14)",
        "Titanic (15)",
        "Extra terrestrial (16)",
        "Mythical (17)",
        "Magical (18)",
        "Utopian (19)",
        "Divine (20)"
      ]
    };
  }
};
</script>

<style scoped>
</style>
