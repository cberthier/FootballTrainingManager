<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="title">
        <h1>{{player.firstName}} {{player.lastName}}</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="12" md="4" lg="4" xl="4">
        <basic-infos-card :player="player"/>
      </v-col>
      <v-col cols="12" sm="12" md="8" lg="8" xl="8">
        <caracteristics-card :player="player"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BasicInfosCard from "./BasicInfosCard";
import CaracteristicsCard from "./CaracteristicsCard";
export default {
  name: "PlayerDetails",
  components: { BasicInfosCard, CaracteristicsCard },
  data: function() {
    return {
      value: 6,
      max: 20,
      player: {
        id: 16,
        firstName: "Georges",
        lastName: "Ducroquet",
        age: { years: 24, days: 95 },
        speciality: "",
        nationality: "France",
        firstDayWithClub: "04-03-2018",
        keeper: {
          skillLevel: 2,
          maxSkillLevel: 2,
          skillEvolutions: [
            {
              skillLevel: 0,
              date: "2018-09-03"
            }
          ]
        },
        defending: {
          skillLevel: 5,
          maxSkillLevel: 5,
          skillEvolutions: [
            {
              skillLevel: 0,
              date: "2018-09-03"
            },
            {
              skillLevel: 2,
              date: "2018-09-17"
            }
          ]
        },
        playmaking: {
          skillLevel: 5,
          maxSkillLevel: 5,
          skillEvolutions: [
            {
              skillLevel: 0,
              date: "2018-09-03"
            }
          ]
        },
        winger: {
          skillLevel: 7,
          maxSkillLevel: 7,
          skillEvolutions: [
            {
              skillLevel: 0,
              date: "2018-09-03"
            }
          ]
        },
        passing: {
          skillLevel: 4,
          maxSkillLevel: 4,
          skillEvolutions: [
            {
              skillLevel: 0,
              date: "2018-09-03"
            },
            {
              skillLevel: 1,
              date: "2018-09-10"
            },
            {
              skillLevel: 2,
              date: "2018-09-17"
            }
          ]
        },
        scoring: {
          skillLevel: 3,
          maxSkillLevel: 3,
          skillEvolutions: [
            {
              skillLevel: 0,
              date: "2018-09-03"
            }
          ]
        },
        freeKick: {
          skillLevel: 2,
          maxSkillLevel: 2,
          skillEvolutions: [
            {
              skillLevel: 0,
              date: "2018-09-03"
            }
          ]
        }
      },
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