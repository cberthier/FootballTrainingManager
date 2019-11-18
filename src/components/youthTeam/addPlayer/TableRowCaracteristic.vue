<template>
  <tr>
    <td>{{label}}</td>
    <td>
      <v-autocomplete
        label="Min"
        name="min"
        v-model="min"
        type="text"
        :items="skillLevels"
        :rules="rulesMin"
        dense
      />
    </td>
    <td>/</td>
    <td>
      <v-autocomplete
        label="Max"
        name="max"
        v-model="max"
        type="text"
        :items="skillLevels"
        :rules="rulesMax"
        dense
      />
    </td>
    <td>{{min}}/{{max}}</td>
  </tr>
</template>

<script>
export default {
  name: "TableRowCaracteristic",
  props: ["label"],
  data: function() {
    return {
      min: "?",
      max: "?",
      skillLevels: [
        { text: "Unknown (?)", value: "?" },
        { text: "Non existent (0)", value: 0 },
        { text: "Disastrous (1)", value: 1 },
        { text: "Wretched (2)", value: 2 },
        { text: "Poor (3)", value: 3 },
        { text: "Weak (4)", value: 4 },
        { text: "Inadequate (5)", value: 5 },
        { text: "Passable (6)", value: 6 },
        { text: "Solid (7)", value: 7 },
        { text: "Ewcellent (8)", value: 8 },
        { text: "Formidable (9)", value: 9 },
        { text: "Outstanding (10)", value: 10 },
        { text: "Brilliant (11)", value: 11 },
        { text: "Magnificent (12)", value: 12 },
        { text: "World class (13)", value: 13 },
        { text: "Supernatural (14)", value: 14 },
        { text: "Titanic (15)", value: 15 },
        { text: "Extra terrestrial (16)", value: 16 },
        { text: "Mythical (17)", value: 17 },
        { text: "Magical (18)", value: 18 },
        { text: "Utopian (19)", value: 19 },
        { text: "Divine (20)", value: 20 }
      ],
      rulesMin: [
        min =>
          min <= this.max || this.max == "?" || "Min must be inferior to Max"
      ],
      rulesMax: [max => this.min <= max || "Max must be superior to Min"]
    };
  },
  beforeDestroy() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.onResize, { passive: true });
    }
  },

  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },

  methods: {
    onResize() {
      if (window.innerWidth < 800) {
        this.size = 10;
      } else {
        this.size = 20;
      }
    }
  }
};
</script>

<style scoped>
</style>
