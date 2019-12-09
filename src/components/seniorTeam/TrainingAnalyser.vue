<template>
  <v-container fluid>
    <v-form>
      <v-row>
        <v-col>
          <select-period label="Period" name="period" v-on:period-change="periodUpdated"/>
        </v-col>
        <v-col>
          <select-skill-name label="Training" name="training" v-on:skill-change="trainingUpdated"/>
        </v-col>
      </v-row>
    </v-form>
    <v-row>
      <v-col>{{periodSelected}}</v-col>
      <v-col>{{trainingSelected}}</v-col>
    </v-row>
    <v-simple-table :dense="$vuetify.breakpoint.smAndDown">
      <template v-slot:default>
        <thead>
          <tr v-if="$vuetify.breakpoint.name == 'sm' || $vuetify.breakpoint.name == 'xs'">
            <th class="text-center">Name</th>
            <th class="text-center">Age</th>
            <th class="text-center">Form</th>
            <th class="text-center">Stamina</th>
            <th
              class="text-center"
              v-if="trainingSelected == 'None' || trainingSelected == 'Keeper'"
            >K</th>
            <th
              class="text-center"
              v-if="trainingSelected == 'None' || trainingSelected == 'Defending'"
            >D</th>
            <th
              class="text-center"
              v-if="trainingSelected == 'None' || trainingSelected == 'Playmaking'"
            >P</th>
            <th
              class="text-center"
              v-if="trainingSelected == 'None' || trainingSelected == 'Winger'"
            >W</th>
            <th
              class="text-center"
              v-if="trainingSelected == 'None' || trainingSelected == 'Passing'"
            >P</th>
            <th
              class="text-center"
              v-if="trainingSelected == 'None' || trainingSelected == 'Scoring'"
            >S</th>
            <th
              class="text-center"
              v-if="trainingSelected == 'None' || trainingSelected == 'FreeKick'"
            >F</th>
            <th class="text-center" v-if="trainingSelected != 'None'">Next Level</th>
          </tr>
          <tr v-else>
            <th class="text-center">Name</th>
            <th class="text-center">Age</th>
            <th class="text-center">Form</th>
            <th class="text-center">Stamina</th>
            <th
              class="text-center"
              v-if="trainingSelected == 'None' || trainingSelected == 'Keeper'"
            >Keeper</th>
            <th
              class="text-center"
              v-if="trainingSelected == 'None' || trainingSelected == 'Defending'"
            >Defending</th>
            <th
              class="text-center"
              v-if="trainingSelected == 'None' || trainingSelected == 'Playmaking'"
            >Playmaking</th>
            <th
              class="text-center"
              v-if="trainingSelected == 'None' || trainingSelected == 'Winger'"
            >Winger</th>
            <th
              class="text-center"
              v-if="trainingSelected == 'None' || trainingSelected == 'Passing'"
            >Passing</th>
            <th
              class="text-center"
              v-if="trainingSelected == 'None' || trainingSelected == 'Scoring'"
            >Scoring</th>
            <th
              class="text-center"
              v-if="trainingSelected == 'None' || trainingSelected == 'FreeKick'"
            >Freekick</th>
            <th class="text-center" v-if="trainingSelected != 'None'">Next Level</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="19" class="text-center grey darken-1">Keeper</td>
          </tr>
          <player-row
            v-for="player in playersByCategory.GOAL_KEEPER"
            :key="player.id"
            :player="player"
            :trainingSelected="trainingSelected"
          />
          <tr>
            <td colspan="19" class="text-center grey darken-1">Wing Back</td>
          </tr>
          <player-row
            v-for="player in playersByCategory.WING_BACK"
            :key="player.id"
            :player="player"
            :trainingSelected="trainingSelected"
          />
          <tr>
            <td colspan="19" class="text-center grey darken-1">Central Defender</td>
          </tr>
          <player-row
            v-for="player in playersByCategory.CENTRAL_DEFENDER"
            :key="player.id"
            :player="player"
            :trainingSelected="trainingSelected"
          />
          <tr>
            <td colspan="19" class="text-center grey darken-1">Winger</td>
          </tr>
          <player-row
            v-for="player in playersByCategory.WINGER"
            :key="player.id"
            :player="player"
            :trainingSelected="trainingSelected"
          />
          <tr>
            <td colspan="19" class="text-center grey darken-1">Inner Midfielder</td>
          </tr>
          <player-row
            v-for="player in playersByCategory.INNER_MIDFIELDER"
            :key="player.id"
            :player="player"
            :trainingSelected="trainingSelected"
          />
          <tr>
            <td colspan="19" class="text-center grey darken-1">Forward</td>
          </tr>
          <player-row
            v-for="player in playersByCategory.FORWARD"
            :key="player.id"
            :player="player"
            :trainingSelected="trainingSelected"
          />
          <tr>
            <td colspan="19" class="text-center grey darken-1">Substitute</td>
          </tr>
          <player-row
            v-for="player in playersByCategory.SUBSTITUTE"
            :key="player.id"
            :player="player"
            :trainingSelected="trainingSelected"
          />
          <tr>
            <td colspan="19" class="text-center grey darken-1">Reserve</td>
          </tr>
          <player-row
            v-for="player in playersByCategory.RESERVE"
            :key="player.id"
            :player="player"
            :trainingSelected="trainingSelected"
          />
          <tr>
            <td colspan="19" class="text-center grey darken-1">Extra 1</td>
          </tr>
          <player-row
            v-for="player in playersByCategory.EXTRA_1"
            :key="player.id"
            :player="player"
            :trainingSelected="trainingSelected"
          />
          <tr>
            <td colspan="19" class="text-center grey darken-1">Extra 2</td>
          </tr>
          <player-row
            v-for="player in playersByCategory.EXTRA_2"
            :key="player.id"
            :player="player"
            :trainingSelected="trainingSelected"
          />
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
import SelectPeriod from "@/components/form/SelectPeriod";
import SelectSkillName from "@/components/form/SelectSkillName";
import PlayerRow from "@/components/seniorTeam/trainingAnalyser/PlayerRow";
export default {
  name: "TrainingAnalyser",
  components: { SelectPeriod, SelectSkillName, PlayerRow },
  methods: {
    trainingUpdated(training) {
      console.log(training);
      this.trainingSelected = training;
    },
    periodUpdated(period) {
      console.log(period);
      this.periodSelected = period;
    }
  },
  data: function() {
    return {
      periodSelected: "1 week",
      trainingSelected: "None",
      playersByCategory: {
        GOAL_KEEPER: [
          {
            id: 1,
            firstName: "Dominique",
            lastName: "Oudard",
            age: 15,
            form: 8,
            lastForm: 7,
            stamina: 7,
            lastStamina: 7,
            speciality: "",
            nationality: "France",
            firstDayWithClub: "16-07-2018",
            keeper: 1,
            oldKeeper: 0,
            nextLevelKeeper: 1,
            defending: 7,
            oldDefending: 6,
            playmaking: 5,
            oldPlaymaking: 4,
            winger: 4,
            oldWinger: 3,
            passing: 1,
            oldPassing: 0,
            scoring: 5,
            oldScoring: 4,
            freeKick: 1,
            oldFreeKick: 0
          }
        ],
        WING_BACK: [
          {
            id: 2,
            firstName: "Amir",
            lastName: "Kolli",
            age: 15,
            form: 8,
            lastForm: 7,
            stamina: 7,
            lastStamina: 7,
            speciality: "",
            nationality: "France",
            firstDayWithClub: "15-09-2018",
            keeper: 0,
            oldKeeper: 0,
            nextLevelKeeper: 3,
            defending: 0,
            nextLevelDefending: 1,
            oldDefending: 0,
            playmaking: 8,
            oldPlaymaking: 9,
            winger: 0,
            oldWinger: 0,
            passing: 4,
            oldPassing: 4,
            scoring: 3,
            oldScoring: 3,
            freeKick: 0,
            oldFreeKick: 0
          },
          {
            id: 3,
            firstName: "Seydi",
            lastName: "Zoglo",
            age: 16,
            form: 8,
            lastForm: 7,
            stamina: 7,
            lastStamina: 7,
            speciality: "",
            nationality: "France",
            firstDayWithClub: "28-08-2018",
            keeper: 2,
            oldKeeper: 2,
            nextLevelKeeper: 5,
            defending: 6,
            oldDefending: 6,
            playmaking: 6,
            oldPlaymaking: 6,
            nextLevelPlaymaking: 3,
            winger: 7,
            oldWinger: 7,
            passing: 3,
            oldPassing: 3,
            scoring: 4,
            oldScoring: 4,
            freeKick: 0,
            oldFreeKick: 0
          }
        ],
        CENTRAL_DEFENDER: [
          {
            id: 4,
            firstName: "Lionel",
            lastName: "Castro",
            age: 16,
            form: 8,
            lastForm: 7,
            stamina: 7,
            lastStamina: 7,
            speciality: "",
            nationality: "France",
            firstDayWithClub: "03-09-2018",
            keeper: 0,
            oldKeeper: 0,
            nextLevelKeeper: 15,
            defending: 5,
            oldDefending: 5,
            playmaking: 0,
            oldPlaymaking: 0,
            winger: 0,
            oldWinger: 0,
            passing: 8,
            oldPassing: 8,
            scoring: 0,
            oldScoring: 0,
            freeKick: 0,
            oldFreeKick: 0,
            nextLevelFreeKick: 15
          },
          {
            id: 5,
            firstName: "Florian",
            lastName: "Paineau",
            age: 16,
            form: 8,
            lastForm: 7,
            stamina: 7,
            lastStamina: 7,
            speciality: "",
            nationality: "France",
            firstDayWithClub: "20-08-2018",
            keeper: 0,
            oldKeeper: 0,
            defending: 6,
            oldDefending: 6,
            playmaking: 0,
            oldPlaymaking: 0,
            winger: 5,
            oldWinger: 5,
            passing: 5,
            oldPassing: 5,
            scoring: 0,
            oldScoring: 0,
            freeKick: 0,
            oldFreeKick: 0
          }
        ],
        WINGER: [
          {
            id: 6,
            firstName: "Antoon",
            lastName: "Dehaes",
            age: 16,
            form: 5,
            lastForm: 7,
            stamina: 7,
            lastStamina: 7,
            speciality: "",
            nationality: "France",
            firstDayWithClub: "07-05-2018",
            keeper: 0,
            oldKeeper: 0,
            defending: 3,
            oldDefending: 3,
            playmaking: 6,
            oldPlaymaking: 6,
            winger: 4,
            oldWinger: 4,
            passing: 2,
            oldPassing: 2,
            scoring: 6,
            oldScoring: 6,
            freeKick: 0,
            oldFreeKick: 0
          },
          {
            id: 7,
            firstName: "Aubin",
            lastName: "Ruault",
            age: 17,
            form: 8,
            lastForm: 8,
            stamina: 7,
            lastStamina: 7,
            speciality: "",
            nationality: "France",
            firstDayWithClub: "19-02-2018",
            keeper: 0,
            oldKeeper: 0,
            defending: 6,
            oldDefending: 6,
            playmaking: 6,
            oldPlaymaking: 6,
            winger: 7,
            oldWinger: 7,
            passing: 4,
            oldPassing: 4,
            scoring: 5,
            oldScoring: 5,
            freeKick: 4,
            oldFreeKick: 4
          }
        ],
        INNER_MIDFIELDER: [
          {
            id: 8,
            firstName: "Yannick",
            lastName: "Bessières",
            age: 17,
            form: 8,
            lastForm: 7,
            stamina: 6,
            lastStamina: 7,
            speciality: "",
            nationality: "France",
            firstDayWithClub: "12-03-2018",
            keeper: 0,
            oldKeeper: 0,
            defending: 3,
            oldDefending: 3,
            playmaking: 6,
            oldPlaymaking: 6,
            winger: 3,
            oldWinger: 3,
            passing: 4,
            oldPassing: 4,
            scoring: 5,
            oldScoring: 5,
            freeKick: 0,
            oldFreeKick: 0
          },
          {
            id: 9,
            firstName: "Yoann",
            lastName: "Corbin",
            age: 17,
            form: 8,
            lastForm: 7,
            stamina: 7,
            lastStamina: 7,
            speciality: "",
            nationality: "France",
            firstDayWithClub: "08-02-2018",
            keeper: 0,
            oldKeeper: 0,
            defending: 5,
            oldDefending: 5,
            playmaking: 7,
            oldPlaymaking: 7,
            winger: 5,
            oldWinger: 5,
            passing: 5,
            oldPassing: 5,
            scoring: 5,
            oldScoring: 5,
            freeKick: 2,
            oldFreeKick: 2
          },
          {
            id: 15,
            firstName: "Rodolphe",
            lastName: "Martinez",
            age: 18,
            form: 8,
            lastForm: 7,
            stamina: 7,
            lastStamina: 7,
            speciality: "",
            nationality: "France",
            firstDayWithClub: "16-04-2018",
            keeper: 0,
            oldKeeper: 0,
            defending: 5,
            oldDefending: 5,
            playmaking: 5,
            oldPlaymaking: 5,
            winger: 7,
            oldWinger: 7,
            passing: 4,
            oldPassing: 4,
            scoring: 0,
            oldScoring: 0,
            freeKick: 4,
            oldFreeKick: 4
          }
        ],
        FORWARD: [
          {
            id: 10,
            firstName: "Dial",
            lastName: "Drame",
            age: 17,
            form: 8,
            lastForm: 7,
            stamina: 7,
            lastStamina: 7,
            speciality: "",
            nationality: "France",
            firstDayWithClub: "26-03-2018",
            keeper: 2,
            oldKeeper: 2,
            defending: 4,
            oldDefending: 4,
            playmaking: 4,
            oldPlaymaking: 4,
            winger: 6,
            oldWinger: 6,
            passing: 5,
            oldPassing: 5,
            scoring: 0,
            oldScoring: 0,
            freeKick: 0,
            oldFreeKick: 0
          },
          {
            id: 14,
            firstName: "Nguyen",
            lastName: "Vien Sac",
            age: 17,
            form: 8,
            lastForm: 7,
            stamina: 7,
            lastStamina: 7,
            speciality: "",
            nationality: "France",
            firstDayWithClub: "28-12-2017",
            keeper: 1,
            oldKeeper: 1,
            defending: 3,
            oldDefending: 3,
            playmaking: 1,
            oldPlaymaking: 1,
            winger: 4,
            oldWinger: 4,
            passing: 3,
            oldPassing: 3,
            scoring: 6,
            oldScoring: 6,
            freeKick: 5,
            oldFreeKick: 5
          }
        ],
        SUBSTITUTE: [
          {
            id: 11,
            firstName: "Aymeric",
            lastName: "Fardel",
            age: 17,
            form: 8,
            lastForm: 7,
            stamina: 7,
            lastStamina: 7,
            speciality: "",
            nationality: "France",
            firstDayWithClub: "13-05-2018",
            keeper: 0,
            oldKeeper: 0,
            defending: 8,
            oldDefending: 8,
            playmaking: 6,
            oldPlaymaking: 6,
            winger: 6,
            oldWinger: 6,
            passing: 4,
            oldPassing: 4,
            scoring: 0,
            oldScoring: 0,
            freeKick: 0,
            oldFreeKick: 0
          }
        ],
        RESERVE: [
          {
            id: 12,
            firstName: "Gilles",
            lastName: "Bouquet",
            age: 17,
            form: 8,
            lastForm: 7,
            stamina: 7,
            lastStamina: 7,
            speciality: "",
            nationality: "France",
            firstDayWithClub: "07-01-2018",
            keeper: 2,
            oldKeeper: 2,
            defending: 5,
            oldDefending: 5,
            playmaking: 2,
            oldPlaymaking: 2,
            winger: 5,
            oldWinger: 5,
            passing: 3,
            oldPassing: 3,
            scoring: 6,
            oldScoring: 6,
            freeKick: 4,
            oldFreeKick: 4
          }
        ],
        EXTRA_1: [
          {
            id: 13,
            firstName: "Grégory",
            lastName: "Boinet",
            age: 17,
            form: 8,
            lastForm: 7,
            stamina: 7,
            lastStamina: 7,
            speciality: "",
            nationality: "France",
            firstDayWithClub: "01-01-2018",
            keeper: 2,
            oldKeeper: 2,
            defending: 3,
            oldDefending: 3,
            playmaking: 5,
            oldPlaymaking: 5,
            winger: 5,
            oldWinger: 5,
            passing: 6,
            oldPassing: 6,
            scoring: 4,
            oldScoring: 4,
            freeKick: 0,
            oldFreeKick: 0
          }
        ],
        EXTRA_2: [
          {
            id: 16,
            firstName: "Georges",
            lastName: "Ducroquet",
            age: 18,
            form: 8,
            lastForm: 7,
            stamina: 7,
            lastStamina: 7,
            speciality: "",
            nationality: "France",
            firstDayWithClub: "04-03-2018",
            keeper: 7,
            oldKeeper: 7,
            defending: 3,
            oldDefending: 3,
            playmaking: 1,
            oldPlaymaking: 1,
            winger: 1,
            oldWinger: 1,
            passing: 1,
            oldPassing: 1,
            scoring: 1,
            oldScoring: 1,
            freeKick: 6,
            oldFreeKick: 6
          }
        ]
      }
    };
  }
};
</script>

<style scoped>
</style>