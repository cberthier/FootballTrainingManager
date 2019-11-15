<template>
  <v-col cols="12" sm="6" md="6" lg="6" xl="6">
    <v-autocomplete
      label="Team"
      :name="team"
      v-model="team"
      type="number"
      :outlined="$vuetify.breakpoint.smAndUp"
      required
      :items="teams"
      :rules="[team => !!team || 'This field is required']"
      dense
    />
  </v-col>
</template>

<script>
export default {
  name: "SelectTeam",
  data: function() {
    return {
      team: "",
      teams: [1, 2, 3, 4, 5]
    };
  }
};
</script>

<style scoped>
</style>
