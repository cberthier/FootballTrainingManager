<template>
  <tr>
    <td class="subtitle-2">{{title}}</td>
    <td v-if="!!this.value && !!this.max" class="hidden-xs-only">Unknow</td>
    <td v-else-if="!!this.value" class="hidden-xs-only">
      <v-icon
        v-for="n in this.max"
        :key="n"
        class="skill-current"
        :small="$vuetify.breakpoint.mdAndDown"
      >mdi-square-outline</v-icon>
      <v-icon
        v-for="n in 20 - this.max"
        :key="20+n"
        class="skill-default"
        :small="$vuetify.breakpoint.mdAndDown"
      >mdi-square-medium-outline</v-icon>
    </td>
    <td v-else-if="!!this.max" class="hidden-xs-only">
      <v-icon
        v-for="n in this.value"
        :key="n"
        class="skill-current"
        :small="$vuetify.breakpoint.mdAndDown"
      >mdi-square</v-icon>
      <v-icon
        v-for="n in 20 - this.value"
        :key="20+n"
        class="skill-current"
        :small="$vuetify.breakpoint.mdAndDown"
      >mdi-help-rhombus-outline</v-icon>
    </td>
    <td v-else-if="this.max === this.value" class="hidden-xs-only">
      <v-icon
        v-for="n in this.value"
        :key="n"
        class="skill-current"
        :small="$vuetify.breakpoint.mdAndDown"
      >mdi-square</v-icon>
      <v-icon
        v-for="n in 20 - this.value"
        :key="20+n"
        class="skill-current"
        :small="$vuetify.breakpoint.mdAndDown"
      >mdi-square-medium-outline</v-icon>
    </td>
    <td v-else class="hidden-xs-only">
      <v-icon
        v-for="n in this.value"
        :key="n"
        class="skill-current"
        :small="$vuetify.breakpoint.mdAndDown"
      >mdi-square</v-icon>
      <v-icon
        v-for="n in this.max - this.value"
        :key="20+n"
        class="skill-default"
        :small="$vuetify.breakpoint.mdAndDown"
      >mdi-square-outline</v-icon>
      <v-icon
        v-for="n in 20 - this.max"
        :key="40+n"
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
  props: { title: String, value: Number, max: Number },
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