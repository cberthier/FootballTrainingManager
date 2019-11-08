<template>
  <v-card>
    <v-container>
      <v-card-text class="title">
        <h1 class="title">Performances</h1>
      </v-card-text>
      <v-row>
        <v-col cols="12" sm="12" md="12" lg="6" xl="6">
          <v-list>
            <v-list-item>
              <v-list-item-title class="subtitle-2">Goalkeeper</v-list-item-title>
              <v-list-item-subtitle>-</v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-title class="subtitle-2">Central defender</v-list-item-title>
              <v-list-item-subtitle>-</v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-title class="subtitle-2">Wing back</v-list-item-title>
              <v-list-item-subtitle>-</v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col cols="12" sm="12" md="12" lg="6" xl="6">
          <v-list>
            <v-list-item>
              <v-list-item-title class="subtitle-2">Inner Midfielder</v-list-item-title>
              <v-list-item-subtitle>-</v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-title class="subtitle-2">Winger</v-list-item-title>
              <v-list-item-subtitle>-</v-list-item-subtitle>
            </v-list-item>
            <v-list-item>
              <v-list-item-title class="subtitle-2">Forward</v-list-item-title>
              <v-list-item-subtitle>7</v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "PerformancesCard",
  props: ["player"]
};
</script>

<style scoped>
</style>
