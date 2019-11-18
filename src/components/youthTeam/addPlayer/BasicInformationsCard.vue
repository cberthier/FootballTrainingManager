<template>
  <v-card>
    <v-form>
      <v-container>
        <v-row :dense="$vuetify.breakpoint.xsOnly">
          <v-col cols="12" sm="5" md="12" lg="5" xl="5">
            <v-text-field
              label="Name"
              name="name"
              v-model="name"
              :prepend-icon="showIcon('mdi-account')"
              type="text"
              :outlined="$vuetify.breakpoint.smAndUp"
              required
              :rules="requiredRules"
              dense
            />
          </v-col>
          <v-col cols="12" sm="4" md="4" lg="4" xl="4">
            <v-text-field
              label="Age"
              name="ageYears"
              v-model="age.years"
              :prepend-icon="showIcon('mdi-cake-variant')"
              type="number"
              suffix="Years"
              :outlined="$vuetify.breakpoint.smAndUp"
              required
              :rules="ageYearsRules"
              :dense="$vuetify.breakpoint.xsOnly"
            />
          </v-col>
          <v-col cols="12" sm="3" md="4" lg="3" xl="3">
            <v-text-field
              label="Age"
              name="ageDays"
              v-model="age.days"
              type="number"
              suffix="Days"
              :outlined="$vuetify.breakpoint.smAndUp"
              required
              :rules="ageDaysRules"
              :dense="$vuetify.breakpoint.xsOnly"
            />
          </v-col>
          <v-col cols="12" sm="4" md="4" lg="4" xl="4">
            <select-date label="First Day With Club" :icon="showIcon('mdi-airport')"/>
          </v-col>
          <v-col cols="12" sm="4" md="6" lg="4" xl="4">
            <v-autocomplete
              label="Speciality"
              name="speciality"
              v-model="speciality"
              :prepend-icon="showIcon('mdi-crown')"
              type="text"
              :outlined="$vuetify.breakpoint.smAndUp"
              required
              :items="specialties"
              :rules="requiredRules"
              :dense="$vuetify.breakpoint.xsOnly"
            />
          </v-col>
          <v-col cols="12" sm="4" md="6" lg="4" xl="4">
            <v-text-field
              label="Nationality"
              name="nationality"
              v-model="nationality"
              :prepend-icon="showIcon('mdi-flag')"
              type="text"
              :outlined="$vuetify.breakpoint.smAndUp"
              required
              :rules="requiredRules"
              :dense="$vuetify.breakpoint.xsOnly"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-card>
</template>

<script>
import SelectDate from "@/components/form/SelectDate";
export default {
  name: "BasicInformationsCard",
  components: { SelectDate },
  data: function() {
    return {
      name: "",
      age: { years: null, days: null },
      speciality: "",
      nationality: "",
      specialties: [
        "Technical",
        "Quick",
        "Head",
        "Powerful",
        "Unpredictable",
        "None"
      ],
      requiredRules: [value => !!value || "This field is required"],
      ageYearsRules: [
        value => !!value || "This field is required",
        value => value > 0 || "This field must be greater than 0"
      ],
      ageDaysRules: [
        value => !!value || "This field is required",
        value => value < 0 || "This field can't be negatif",
        value => value <= 111 || "This field can't be greater than 111"
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
