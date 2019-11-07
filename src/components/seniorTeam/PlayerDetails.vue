<template>
  <v-container>
    <v-row :dense="$vuetify.breakpoint.xsOnly">
      <v-col cols="12" class="title">
        <h1>
          <flag iso="it"/>
          {{player.firstName}} {{player.lastName}}
        </h1>
      </v-col>
    </v-row>
    <v-row :dense="$vuetify.breakpoint.xsOnly">
      <v-col cols="12" sm="12" md="4" lg="4" xl="4">
        <basic-infos-card :player="player"/>
      </v-col>
      <v-col cols="12" sm="12" md="8" lg="8" xl="8">
        <v-row>
          <v-col cols="6" sm="3" md="3" lg="3" xl="3" class="pt-0">
            <circular-progress-card title="Form" :value="player.form" max="8"/>
          </v-col>
          <v-col cols="6" sm="3" md="3" lg="3" xl="3" class="pt-0">
            <circular-progress-card title="Stamina" :value="player.stamina" max="8"/>
          </v-col>
          <v-col cols="6" sm="3" md="3" lg="3" xl="3" class="pt-0">
            <position-category-card :value="player.category"/>
          </v-col>
          <v-col cols="6" sm="3" md="3" lg="3" xl="3" class="pt-0">
            <team-category-card :value="player.team"/>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6" md="6" lg="6" xl="6">
            <match-card :player="player"/>
          </v-col>
          <v-col cols="6" sm="3" md="3" lg="3" xl="3">
            <injuries-card :value="player.injuries"/>
          </v-col>
          <v-col cols="6" sm="3" md="3" lg="3" xl="3">
            <warnings-card :value="player.injuries"/>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="12" md="12" lg="6" xl="6">
        <caracteristics-card :player="player"/>
      </v-col>
      <v-col cols="12" sm="12" md="12" lg="6" xl="6">
        <v-row :dense="$vuetify.breakpoint.xsOnly">
          <v-col cols="6" sm="4" md="4" lg="6" xl="6" class="pt-2">
            <circular-progress-card title="Experience" :value="player.experience" max="20"/>
          </v-col>
          <v-col cols="6" sm="4" md="4" lg="6" xl="6" class="pt-2">
            <circular-progress-card title="Leadership" :value="player.leadership" max="8"/>
          </v-col>
          <v-col cols="12" sm="4" md="4" lg="12" xl="12" class="pt-2">
            <circular-progress-card title="Loyalty" :value="player.loyalty" max="20"/>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CircularProgressCard from "./CircularProgressCard";
import BasicInfosCard from "./BasicInfosCard";
import CaracteristicsCard from "./CaracteristicsCard";
import MatchCard from "./MatchCard";
import TeamCategoryCard from "./TeamCategoryCard";
import PositionCategoryCard from "./PositionCategoryCard";
import InjuriesCard from "./InjuriesCard";
import WarningsCard from "./WarningsCard";
export default {
  name: "PlayerDetails",
  components: {
    CircularProgressCard,
    BasicInfosCard,
    CaracteristicsCard,
    MatchCard,
    TeamCategoryCard,
    PositionCategoryCard,
    InjuriesCard,
    WarningsCard
  },
  data: function() {
    return {
      value: 6,
      max: 20,
      player: {
        id: 16,
        firstName: "Nirmal",
        lastName: "Kale",
        age: { years: 24, days: 95 },
        speciality: "",
        nationality: "Surinam",
        firstDayWithClub: "26-06-2019",
        form: 7,
        stamina: 7,
        experience: 6,
        leadership: 2,
        loyalty: 12,
        tsi: 211940,
        wage: 73464, //Salaire
        injuries: 0, //Blessure
        warnings: 0, //Cartons
        category: "MC",
        lastMatchDate: "30-10-2019",
        lastMatchRating: 9,
        lastMatchPosition: "MC",
        team: 1,
        keeper: {
          skillLevel: 1,
          maxSkillLevel: 1,
          skillEvolutions: [
            {
              skillLevel: 0,
              date: "2018-09-03"
            }
          ]
        },
        defending: {
          skillLevel: 6,
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
          skillLevel: 17,
          maxSkillLevel: 17,
          skillEvolutions: [
            {
              skillLevel: 0,
              date: "2018-09-03"
            }
          ]
        },
        winger: {
          skillLevel: 4,
          maxSkillLevel: 4,
          skillEvolutions: [
            {
              skillLevel: 0,
              date: "2018-09-03"
            }
          ]
        },
        passing: {
          skillLevel: 9,
          maxSkillLevel: 9,
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
          skillLevel: 5,
          maxSkillLevel: 5,
          skillEvolutions: [
            {
              skillLevel: 0,
              date: "2018-09-03"
            }
          ]
        },
        freeKick: {
          skillLevel: 5,
          maxSkillLevel: 5,
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