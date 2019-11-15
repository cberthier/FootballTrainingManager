<template>
  <tr>
    <td>{{label}}</td>
    <td>
      <v-rating
        v-model="value"
        empty-icon="mdi-square-outline"
        full-icon="mdi-square"
        :length="max"
        :size="size"
        background-color
        hover
        dense
      />
    </td>
    <td>{{value}}/{{max}}</td>
  </tr>
</template>

<script>
export default {
  name: "HumanCaracteristicsCard",
  props: { label: String, max: Number },
  data: function() {
    return { value: 0, size: 20 };
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
