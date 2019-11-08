<template>
  <tr>
    <td class="subtitle-2">{{title}}</td>
    <td v-if="this.value === '' && this.max === ''" class="hidden-xs-only">Unknow</td>
    <td v-else-if="this.value === ''" class="hidden-xs-only">
      <v-icon
        v-for="n in this.max"
        class="skill-current"
        :small="$vuetify.breakpoint.mdAndDown"
      >mdi-square-outline</v-icon>
      <v-icon
        v-for="n in 20 - this.max"
        class="skill-default"
        :small="$vuetify.breakpoint.mdAndDown"
      >mdi-square-medium-outline</v-icon>
    </td>
    <td v-else-if="this.max === ''" class="hidden-xs-only">
      <v-icon
        v-for="n in this.value"
        class="skill-current"
        :small="$vuetify.breakpoint.mdAndDown"
      >mdi-square</v-icon>
      <v-icon
        v-for="n in 20 - this.value"
        class="skill-current"
        :small="$vuetify.breakpoint.mdAndDown"
      >mdi-help-rhombus-outline</v-icon>
    </td>
    <td v-else-if="this.max === this.value" class="hidden-xs-only">
      <v-icon
        v-for="n in this.value"
        class="skill-current"
        :small="$vuetify.breakpoint.mdAndDown"
      >mdi-square</v-icon>
      <v-icon
        v-for="n in 20 - this.value"
        class="skill-current"
        :small="$vuetify.breakpoint.mdAndDown"
      >mdi-square-medium-outline</v-icon>
    </td>
    <td v-else class="hidden-xs-only">
      <v-icon
        v-for="n in this.value"
        class="skill-current"
        :small="$vuetify.breakpoint.mdAndDown"
      >mdi-square</v-icon>
      <v-icon
        v-for="n in this.max - this.value"
        class="skill-default"
        :small="$vuetify.breakpoint.mdAndDown"
      >mdi-square-outline</v-icon>
      <v-icon
        v-for="n in 20 - this.max"
        class="skill-default"
        :small="$vuetify.breakpoint.mdAndDown"
      >mdi-square-medium-outline</v-icon>
    </td>
    <td>{{this.value | format}}/{{this.max | format}}</td>
  </tr>
</template>

<script>
export default {
  name: "TableRowCaracteristics",
  props: ["title", "value", "max"],
  filters: {
    format: function(value) {
      if (value === "") return "?";
      return value;
    }
  }
};
</script>

<style scoped>
</style>