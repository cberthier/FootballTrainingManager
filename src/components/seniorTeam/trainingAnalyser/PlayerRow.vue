<template>
  <tr>
    <td>{{ player.firstName }} {{ player.lastName }}</td>
    <td class="text-center">{{ player.age }}</td>
    <td class="text-center">
      <v-chip-form-stamina :value="player.form" :oldValue="player.lastForm"/>
    </td>
    <td class="text-center">
      <v-chip-form-stamina :value="player.stamina" :oldValue="player.lastStamina"/>
    </td>
    <td class="text-center" v-if="trainingSelected == 'None' || trainingSelected == 'Keeper'">
      <v-chip-skill :value="player.keeper" :oldValue="player.oldKeeper"/>
    </td>
    <td class="text-center" v-if="trainingSelected == 'Keeper'">
      <v-chip-training :player="player" skill="Keeper" :value="player.nextLevelKeeper"/>
    </td>
    <td class="text-center" v-if="trainingSelected == 'None' || trainingSelected == 'Defending'">
      <v-chip-skill :value="player.defending" :oldValue="player.oldDefending"/>
    </td>
    <td class="text-center" v-if="trainingSelected == 'Defending'">
      <v-chip-training :player="player" skill="Defending" :value="player.nextLevelDefending"/>
    </td>
    <td class="text-center" v-if="trainingSelected == 'None' || trainingSelected == 'Playmaking'">
      <v-chip-skill :value="player.playmaking" :oldValue="player.oldPlaymaking"/>
    </td>
    <td class="text-center" v-if="trainingSelected == 'Playmaking'">
      <v-chip-training :player="player" skill="Playmaking" :value="player.nextLevelPlaymaking"/>
    </td>
    <td class="text-center" v-if="trainingSelected == 'None' || trainingSelected == 'Winger'">
      <v-chip-skill :value="player.winger" :oldValue="player.oldWinger"/>
    </td>
    <td class="text-center" v-if="trainingSelected == 'Winger'">
      <v-chip-training :player="player" skill="Winger" :value="player.nextLevelWinger"/>
    </td>
    <td class="text-center" v-if="trainingSelected == 'None' || trainingSelected == 'Passing'">
      <v-chip-skill :value="player.passing" :oldValue="player.oldPassing"/>
    </td>
    <td class="text-center" v-if="trainingSelected == 'Passing'">
      <v-chip-training :player="player" skill="Passing" :value="player.nextLevelPassing"/>
    </td>
    <td class="text-center" v-if="trainingSelected == 'None' || trainingSelected == 'Scoring'">
      <v-chip-skill :value="player.scoring" :oldValue="player.oldScoring"/>
    </td>
    <td class="text-center" v-if="trainingSelected == 'Scoring'">
      <v-chip-training :player="player" skill="Scoring" :value="player.nextLevelScoring"/>
    </td>
    <td class="text-center" v-if="trainingSelected == 'None' || trainingSelected == 'FreeKick'">
      <v-chip-skill :value="player.freeKick" :oldValue="player.oldFreeKick"/>
    </td>
    <td class="text-center" v-if="trainingSelected == 'FreeKick'">
      <v-chip-training :player="player" skill="FreeKick" :value="player.nextLevelFreeKick"/>
    </td>
  </tr>
</template>

<script>
import VChipFormStamina from "./VChipFormStamina";
import VChipSkill from "./VChipSkill";
import VChipTraining from "./VChipTraining";
export default {
  name: "PlayerRow",
  components: { VChipFormStamina, VChipSkill, VChipTraining },
  props: ["player", "trainingSelected"],
  data: function() {
    return {};
  }
};
</script>

<style scoped>
</style>