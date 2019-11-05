<template>
  <tr>
    <td>{{title}}</td>
    <td>
      <v-icon v-for="n in 6" class="skill-current" small>mdi-square</v-icon>
      <v-icon v-for="n in 14" class="skill-default" small>mdi-square-outline</v-icon>
    </td>
  </tr>
</template>

<script>
export default {
  name: "TableRowCaracteristics",
  props: ["title"]
};
</script>

<style scoped>
</style>