<template>
  <v-card>
    <v-card-text class="title text-center">
      <h1 class="title">Last Match</h1>
    </v-card-text>
    <v-simple-table :dense="$vuetify.breakpoint.xsOnly">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Date</th>
            <th class="text-left">Position</th>
            <th class="text-left">Rating</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{player.lastMatchDate}}</td>
            <td>{{player.lastMatchPosition}}</td>
            <td>{{player.lastMatchRating}}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-card>
</template>

<script>
export default {
  name: "MatchCard",
  props: ["player"]
};
</script>

<style scoped>
</style>