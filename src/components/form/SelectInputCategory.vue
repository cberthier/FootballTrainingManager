<template>
  <v-col cols="12" sm="6" md="6" lg="6" xl="6">
    <v-autocomplete
      label="Category"
      :name="category"
      v-model="category"
      type="text"
      :outlined="$vuetify.breakpoint.smAndUp"
      required
      :items="categories"
      :rules="[category => !!category || 'This field is required']"
      dense
    />
  </v-col>
</template>

<script>
export default {
  name: "SelectInputCategory",
  data: function() {
    return {
      category: "",
      categories: [
        "Goolkeeper",
        "Wing back",
        "Central Defender",
        "Winger",
        "Inner Midfielder",
        "Forward",
        "Substitute",
        "Reserve",
        "Extra1",
        "Extra2"
      ]
    };
  }
};
</script>

<style scoped>
</style>
