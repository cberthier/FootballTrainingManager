<template>
  <v-card>
    <v-form>
      <v-container>
        <v-row :dense="$vuetify.breakpoint.xsOnly">
          <v-col cols="12" sm="12" md="8" lg="6" xl="6">
            <v-text-field
              label="Name"
              name="name"
              v-model="name"
              prepend-icon="mdi-account"
              type="text"
              outlined
              required
              :rules="requiredRules"
              dense
            />
          </v-col>
          <v-col cols="12" sm="6" md="5" lg="3" xl="3">
            <v-text-field
              label="Age"
              name="ageYears"
              v-model="age.years"
              prepend-icon="mdi-cake-variant"
              type="number"
              suffix="Years"
              outlined
              required
              :rules="ageYearsRules"
              :dense="$vuetify.breakpoint.xsOnly"
            />
          </v-col>
          <v-col cols="12" sm="6" md="5" lg="3" xl="3">
            <v-text-field
              label="Age"
              name="ageDays"
              v-model="age.days"
              type="number"
              suffix="Days"
              outlined
              required
              :rules="ageDaysRules"
              :dense="$vuetify.breakpoint.xsOnly"
            />
          </v-col>
          <v-col cols="12" sm="12" md="6" lg="6" xl="6">
            <v-autocomplete
              label="Speciality"
              name="speciality"
              v-model="speciality"
              prepend-icon="mdi-crown"
              type="text"
              outlined
              required
              :items="specialties"
              :rules="requiredRules"
              :dense="$vuetify.breakpoint.xsOnly"
            />
          </v-col>
          <v-col cols="12" sm="12" md="6" lg="6" xl="6">
            <v-text-field
              label="Nationality"
              name="nationality"
              v-model="nationality"
              prepend-icon="mdi-flag"
              type="text"
              outlined
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
export default {
  name: "BasicInformationsCard",
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
  }
};
</script>

<style scoped>
</style>
