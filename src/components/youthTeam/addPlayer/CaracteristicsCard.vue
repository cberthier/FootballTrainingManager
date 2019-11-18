<template>
  <v-card>
    <v-form ref="form">
      <v-container>
        <v-simple-table>
          <template>
            <tbody>
              <table-row-caracteristic label="Keeper"/>
              <table-row-caracteristic label="Defending"/>
              <table-row-caracteristic label="Playmaking"/>
              <table-row-caracteristic label="Winger"/>
              <table-row-caracteristic label="Passing"/>
              <table-row-caracteristic label="Scoring"/>
              <table-row-caracteristic label="Free kick"/>
            </tbody>
          </template>
        </v-simple-table>
      </v-container>
    </v-form>
  </v-card>
</template>

<script>
import TableRowCaracteristic from "./TableRowCaracteristic";
export default {
  name: "CaracteristicsCard",
  components: { TableRowCaracteristic },
  data: function() {
    return {};
  }
};
</script>

<style scoped>
</style>
