<template>
  <tr>
    <td>{{title}}</td>
    <td class="d-none d-sm-flex">
      <v-icon v-for="n in this.value" class="skill-current" small>mdi-square</v-icon>
      <v-icon v-for="n in 20 - this.value" class="skill-default" small>mdi-square-outline</v-icon>
    </td>
    <td>{{this.value}}/20</td>
  </tr>
</template>

<script>
export default {
  name: "TableRowCaracteristics",
  props: ["title", "value"]
};
</script>

<style scoped>
</style>