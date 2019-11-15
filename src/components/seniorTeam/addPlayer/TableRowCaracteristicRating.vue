<template>
  <tr>
    <td>{{label}}</td>
    <td>
      <v-rating
        v-model="rating"
        empty-icon="mdi-square-outline"
        full-icon="mdi-square"
        :length="length"
        :size="size"
        background-color
        hover
        dense
      />
    </td>
    <td>{{rating}}/20</td>
  </tr>
</template>

<script>
export default {
  name: "TableRowCaracteristicRating",
  props: ["label"],
  data: function() {
    return {
      length: 20,
      rating: 0,
      size: 20
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
