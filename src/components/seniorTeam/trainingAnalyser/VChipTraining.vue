<template>
  <v-container>
    <!-- <v-btn color="primary" dark @click.stop="dialog = true">Open Dialog</v-btn> -->
    <v-chip
      v-if="value != null"
      label
      class="ml-2"
      :color="color()"
      @click.stop="dialog = true"
    >{{value}}w</v-chip>
    <v-chip v-else label outlined class="ml-2" @click.stop="dialog = true">?</v-chip>
    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="headline">{{player.firstName}} {{player.lastName}}</v-card-title>

        <v-card-text>
          <v-text-field
            :label="skill"
            name="value"
            v-model="value"
            type="number"
            suffix="Week(s)"
            required
            :rules="numberPositifRules"
          />
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="dialog = false">Cancel</v-btn>

          <v-btn color="green darken-1" text @click="dialog = false">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: "VChipTraining",
  props: ["player", "skill", "value"],
  methods: {
    color() {
      if (this.value === 1) {
        return "green";
      } else if (this.value < 5) {
        return "lime";
      } else if (this.value < 10) {
        return "orange";
      }
      return "red";
    }
  },
  data: function() {
    return {
      numberPositifRules: [
        value => !!value || "This field is required",
        value => value > 0 || "This field must be greater than 0"
      ],
      dialog: false
    };
  }
};
</script>

<style scoped>
</style>