<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md6 lg6>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-card-text>
              <h1 class="title">Upload File</h1>
            </v-card-text>
            <v-card-text>
              <v-form>
                <v-file-input
                  label="File input"
                  accept=".csv"
                  chips
                  prepend-icon="mdi-file-delimited"
                ></v-file-input>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card>
            <v-list two-line>
              <v-list-item-group>
                <template v-for="(item, index) in uploadHistory">
                  <v-list-item :key="item.title">
                    <template>
                      <v-list-item-content>
                        <v-list-item-title v-text="item.fileName"></v-list-item-title>
                        <v-list-item-subtitle class="text--primary">{{item.nbPlayers}} players</v-list-item-subtitle>
                      </v-list-item-content>

                      <v-list-item-action>
                        <v-list-item-action-text v-text="item.date"></v-list-item-action-text>
                      </v-list-item-action>
                    </template>
                  </v-list-item>

                  <v-divider v-if="index + 1 < uploadHistory.length" :key="index"></v-divider>
                </template>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "AutoUpdate",
  data: function() {
    return {
      uploadHistory: [
        {
          date: "06/11/2019 11h06",
          fileName: "players_06_11_2019 à 11_06_48.csv",
          nbPlayers: "23"
        },
        {
          date: "16/01/2019 12h17",
          fileName: "players_23_05_2019 à 12_17_34.csv",
          nbPlayers: "23"
        },
        {
          date: "23/05/2019 12h17",
          fileName: "players_23_05_2019 à 12_17_34.csv",
          nbPlayers: "23"
        },
        {
          date: "23/05/2019 12h17",
          fileName: "players_23_05_2019 à 12_17_34.csv",
          nbPlayers: "23"
        }
      ]
    };
  }
};
</script>

<style scoped>
.v-card__text {
  text-align: center;
}
</style>
