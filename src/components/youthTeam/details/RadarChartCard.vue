<template>
  <v-card>
    <v-container>
      <v-card-text class="title">
        <h1 class="title">Caracteristics</h1>
      </v-card-text>
      <radar-chart :chart="chart"/>
    </v-container>
  </v-card>
</template>

<script>
import RadarChart from "./RadarChart";
export default {
  name: "RadarChartCard",
  components: { RadarChart },
  data: function() {
    return {
      chart: {
        backgroundColorNow: "#FFCA2A",
        backgroundColorFutur: "rgba(93,253,203,0.3)"
      }
    };
  }
};
</script>

<style scoped>
</style>
