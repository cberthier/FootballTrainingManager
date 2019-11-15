<template>
  <v-card>
    <v-form>
      <v-container>
        <v-row v-if="this.$vuetify.breakpoint.name == 'xs'" dense>
          <select-input-player-abilities label="Keeper" name="keeper"/>
          <select-input-player-abilities label="Defending" name="defending"/>
          <select-input-player-abilities label="Playmaking" name="playmaking"/>
          <select-input-player-abilities label="Winger" name="winger"/>
          <select-input-player-abilities label="Passing" name="passing"/>
          <select-input-player-abilities label="Scoring" name="scoring"/>
          <select-input-player-abilities label="Free kick" name="freeKick"/>
        </v-row>
        <v-simple-table v-else>
          <template>
            <tbody>
              <table-row-caracteristic-rating label="Keeper"/>
              <table-row-caracteristic-rating label="Defending"/>
              <table-row-caracteristic-rating label="Playmaking"/>
              <table-row-caracteristic-rating label="Winger"/>
              <table-row-caracteristic-rating label="Passing"/>
              <table-row-caracteristic-rating label="Scoring"/>
              <table-row-caracteristic-rating label="Free kick"/>
            </tbody>
          </template>
        </v-simple-table>
      </v-container>
    </v-form>
  </v-card>
</template>

<script>
import SelectInputPlayerAbilities from "@/components/form/SelectInputPlayerAbilities";
import TableRowCaracteristicRating from "./TableRowCaracteristicRating";
export default {
  name: "CaracteristicsCard",
  components: { SelectInputPlayerAbilities, TableRowCaracteristicRating },
  data: function() {
    return {};
  }
};
</script>

<style scoped>
</style>
