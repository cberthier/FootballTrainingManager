<template>
  <tr>
    <td>{{title}}</td>
    <td class="hidden-xs-only">
      <v-icon
        v-for="n in this.value"
        :key="n"
        class="skill-current"
        :small="$vuetify.breakpoint.lgOnly"
      >mdi-square</v-icon>
      <v-icon
        v-for="n in 20 - this.value"
        :key="20+n"
        class="skill-default"
        :small="$vuetify.breakpoint.lgOnly"
      >mdi-square-outline</v-icon>
    </td>
    <td>{{this.value}}/20</td>
  </tr>
</template>

<script>
export default {
  name: "TableRowCaracteristics",
  props: { title: String, value: Number}
};
</script>

<style scoped>
</style>