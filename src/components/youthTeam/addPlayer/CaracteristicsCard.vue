<template>
  <v-card>
    <v-form>
      <v-container>
        <v-row :dense="$vuetify.breakpoint.xsOnly">
          <input-skill-level label="Keeper" name="keeper"/>
          <input-skill-level label="Defending" name="defending"/>
          <input-skill-level label="Playmaking" name="playmaking"/>
          <input-skill-level label="Winger" name="winger"/>
          <input-skill-level label="Passing" name="passing"/>
          <input-skill-level label="Scoring" name="scoring"/>
          <input-skill-level label="Free kick" name="freeKick"/>
        </v-row>
      </v-container>
    </v-form>
  </v-card>
</template>

<script>
import InputSkillLevel from "./InputSkillLevel";
export default {
  name: "CaracteristicsCard",
  components: { InputSkillLevel },
  data: function() {
    return {};
  }
};
</script>

<style scoped>
</style>
