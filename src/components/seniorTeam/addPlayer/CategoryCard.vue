<template>
  <v-card>
    <v-form>
      <v-container>
        <v-row :dense="$vuetify.breakpoint.xsOnly">
          <v-col cols="12" sm="4" md="4" lg="4" xl="4">
            <v-text-field
              label="Injuries"
              name="injuries"
              v-model="injuries"
              type="number"
              :prepend-icon="showIcon('mdi-bandage')"
              :outlined="$vuetify.breakpoint.smAndUp"
              :rules="numberPositifRules"
            />
          </v-col>

          <v-col cols="12" sm="4" md="4" lg="4" xl="4">
            <v-text-field
              label="Warnings"
              name="warnings"
              v-model="warningsYellow"
              type="number"
              :outlined="$vuetify.breakpoint.smAndUp"
              :rules="numberPositifRules"
            >
              <template v-slot:prepend>
                <v-icon style="transform: rotate(90deg)" color="yellow">mdi-card</v-icon>
              </template>
            </v-text-field>
          </v-col>

          <v-col cols="12" sm="4" md="4" lg="4" xl="4">
            <v-text-field
              label="Warnings"
              name="warnings"
              v-model="warningsRed"
              type="number"
              :outlined="$vuetify.breakpoint.smAndUp"
              :rules="numberPositifRules"
            >
              <template v-slot:prepend>
                <v-icon style="transform: rotate(90deg)" color="red">mdi-card</v-icon>
              </template>
            </v-text-field>
          </v-col>
          <select-input-category/>
          <select-team/>
        </v-row>
      </v-container>
    </v-form>
  </v-card>
</template>

<script>
import SelectInputCategory from "@/components/form/SelectInputCategory";
import SelectTeam from "@/components/form/SelectTeam";
export default {
  name: "CategoryCard",
  components: { SelectInputCategory, SelectTeam },
  data: function() {
    return {
      injuries: null,
      warningsYellow: null,
      warningsRed: null,
      requiredRules: [value => !!value || "This field is required"],
      numberPositifRules: [
        value => !!value || "This field is required",
        value => value > 0 || "This field must be greater than 0"
      ]
    };
  },

  methods: {
    showIcon(icon) {
      if (this.$vuetify.breakpoint.name === "xs") {
        return "";
      }
      return icon;
    }
  }
};
</script>

<style scoped>
</style>
