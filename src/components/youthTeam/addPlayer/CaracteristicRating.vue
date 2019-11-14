<template>
  <v-rating
    v-model="rating"
    empty-icon="mdi-square-outline"
    full-icon="mdi-square"
    :length="length"
    background-color
    hover
  />
</template>

<script>
export default {
  name: "CaracteristicRating",
  data: function() {
    return { length: 20, rating: 3 };
  }
};
</script>

<style scoped>
</style>
