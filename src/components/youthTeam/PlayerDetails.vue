<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="title">
        <h1>{{player.firstName}} {{player.lastName}}</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="12" md="4" lg="4" xl="4">
        <v-row>
          <v-col cols="12" class="pt-0">
            <basic-infos-card :player="player"/>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" sm="6" md="6" lg="6" xl="6" class="pt-1">
            <injuries-card :value="player.injuries"/>
          </v-col>
          <v-col cols="6" sm="6" md="6" lg="6" xl="6" class="pt-1">
            <warnings-card :value="player.injuries"/>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="12" md="8" lg="8" xl="8">
        <caracteristics-card :player="player"/>
      </v-col>

      <v-col cols="12" sm="6" md="6" lg="6" xl="6" class="pt-0">
        <v-row>
          <v-col cols="12" sm="6" md="6" lg="6" xl="6">
            <position-category-card :value="player.category"/>
          </v-col>
          <v-col cols="12" sm="6" md="6" lg="6" xl="6">
            <promotion-card :value="player.category"/>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="12" md="12" lg="12" xl="12" class="pt-1">
            <performances-card/>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" sm="6" md="6" lg="6" xl="6">
        <radar-chart-card/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BasicInfosCard from "./details/BasicInfosCard";
import CaracteristicsCard from "./details/CaracteristicsCard";
import PerformancesCard from "./details/PerformancesCard";
import RadarChartCard from "./details/RadarChartCard";
import PositionCategoryCard from "./details/PositionCategoryCard";
import PromotionCard from "./details/PromotionCard";
import InjuriesCard from "@/components/seniorTeam/details/InjuriesCard";
import WarningsCard from "@/components/seniorTeam/details/WarningsCard";
export default {
  name: "PlayerDetails",
  components: {
    BasicInfosCard,
    CaracteristicsCard,
    PerformancesCard,
    RadarChartCard,
    PositionCategoryCard,
    PromotionCard,
    InjuriesCard,
    WarningsCard
  },
  data: function() {
    return {
      player: {
        id: 16,
        firstName: "Reginald",
        lastName: "Clère",
        age: { years: 16, days: 29 },
        speciality: "",
        nationality: "France",
        firstDayWithClub: "17-08-2019",
        category: "AT",
        lastMatchDate: "27-10-2019",
        lastMatchRating: 7,
        lastMatchPosition: "AT",
        keeper: {
          skillLevel: 1,
          maxSkillLevel: null,
          skillEvolutions: [
            {
              skillLevel: 0,
              date: "2018-09-03"
            }
          ]
        },
        defending: {
          skillLevel: null,
          maxSkillLevel: 6,
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
          skillLevel: 1,
          maxSkillLevel: 3,
          skillEvolutions: [
            {
              skillLevel: 0,
              date: "2018-09-03"
            }
          ]
        },
        winger: {
          skillLevel: null,
          maxSkillLevel: null,
          skillEvolutions: [
            {
              skillLevel: 0,
              date: "2018-09-03"
            }
          ]
        },
        passing: {
          skillLevel: null,
          maxSkillLevel: 6,
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
          skillLevel: 6,
          maxSkillLevel: 6,
          skillEvolutions: [
            {
              skillLevel: 0,
              date: "2018-09-03"
            }
          ]
        },
        freeKick: {
          skillLevel: null,
          maxSkillLevel: null,
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