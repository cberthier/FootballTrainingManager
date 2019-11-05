<template>
  <v-card>
    <v-container>
      <v-simple-table :dense="dense" :fixed-header="fixedHeader" :height="height">
        <template v-slot:default>
          <tbody>
            <table-row-caracteristics title="Keeper"/>
            <table-row-caracteristics title="Defending"/>
            <table-row-caracteristics title="Playmaking"/>
            <table-row-caracteristics title="Winger"/>
            <table-row-caracteristics title="Passing"/>
            <table-row-caracteristics title="Scoring"/>
            <table-row-caracteristics title="Free kick"/>
          </tbody>
        </template>
      </v-simple-table>
    </v-container>
  </v-card>
</template>
<script>
import TableRowCaracteristics from "./TableRowCaracteristics";
export default {
  name: "CaracteristicsCard",
  components: { TableRowCaracteristics },
  props: ["player"]
};
</script>

<style scoped>
</style>