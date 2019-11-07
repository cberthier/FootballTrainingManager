<template>
  <v-card>
    <v-container>
      <v-card-text class="title">
        <h1 class="title">Characteristics</h1>
      </v-card-text>
      <v-simple-table :dense="$vuetify.breakpoint.xsOnly">
        <template v-slot:default>
          <tbody>
            <table-row-caracteristics title="Keeper" :value="player.keeper.skillLevel"/>
            <table-row-caracteristics title="Defending" :value="player.defending.skillLevel"/>
            <table-row-caracteristics title="Playmaking" :value="player.playmaking.skillLevel"/>
            <table-row-caracteristics title="Winger" :value="player.winger.skillLevel"/>
            <table-row-caracteristics title="Passing" :value="player.passing.skillLevel"/>
            <table-row-caracteristics title="Scoring" :value="player.scoring.skillLevel"/>
            <table-row-caracteristics title="Free kick" :value="player.freeKick.skillLevel"/>
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