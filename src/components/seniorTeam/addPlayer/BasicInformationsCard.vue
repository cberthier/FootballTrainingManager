<template>
  <v-card>
    <v-form>
      <v-container>
        <v-row :dense="$vuetify.breakpoint.xsOnly">
          <v-col cols="12" sm="5" md="12" lg="6" xl="6">
            <v-text-field
              label="Name"
              name="name"
              v-model="name"
              :prepend-icon="showIcon('mdi-account')"
              type="text"
              :outlined="$vuetify.breakpoint.smAndUp"
              required
              :rules="requiredRules"
            />
          </v-col>
          <v-col cols="12" sm="4" md="4" lg="3" xl="3">
            <v-text-field
              label="Age"
              name="ageYears"
              v-model="age.years"
              :prepend-icon="showIcon('mdi-cake-variant')"
              type="number"
              suffix="Years"
              :outlined="$vuetify.breakpoint.smAndUp"
              required
              :rules="numberPositifRules"
            />
          </v-col>
          <v-col cols="12" sm="3" md="3" lg="3" xl="3">
            <v-text-field
              label="Age"
              name="ageDays"
              v-model="age.days"
              type="number"
              suffix="Days"
              :outlined="$vuetify.breakpoint.smAndUp"
              required
              :rules="ageDaysRules"
            />
          </v-col>

          <v-col cols="12" sm="5" md="5" lg="4" xl="4">
            <select-date label="First Day With Club" :icon="showIcon('mdi-airport')"/>
          </v-col>

          <v-col cols="12" sm="3" md="6" lg="3" xl="3">
            <v-text-field
              label="TSI"
              name="tsi"
              v-model="tsi"
              type="number"
              :prepend-icon="showIcon('mdi-certificate')"
              :outlined="$vuetify.breakpoint.smAndUp"
              required
              :rules="numberPositifRules"
            />
          </v-col>

          <v-col cols="12" sm="4" md="6" lg="4" xl="4">
            <v-text-field
              label="Wage"
              name="wage"
              v-model="wage"
              :prepend-icon="showIcon('mdi-cash-100')"
              suffix="€/mois"
              type="number"
              :outlined="$vuetify.breakpoint.smAndUp"
              required
              :rules="numberPositifRules"
            />
          </v-col>
          <v-col cols="12" sm="6" md="6" lg="6" xl="6">
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
            />
          </v-col>
          <v-col cols="12" sm="6" md="6" lg="6" xl="6">
            <v-text-field
              label="Nationality"
              name="nationality"
              v-model="nationality"
              :prepend-icon="showIcon('mdi-flag')"
              type="text"
              :outlined="$vuetify.breakpoint.smAndUp"
              required
              :rules="requiredRules"
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
  watch: {
    menu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
    }
  },
  methods: {
    showIcon(icon) {
      if (this.$vuetify.breakpoint.name === "xs") {
        return "";
      }
      return icon;
    },
    save(date) {
      this.$refs.menu.save(date);
    },
    onResize() {
      if (window.innerWidth < 800) {
        this.size = 10;
      } else {
        this.size = 20;
      }
    }
  },
  data: function() {
    return {
      tsi: null,
      wage: null,
      form: 0,
      stamina: 0,
      length: 8,
      size: 20,
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
      numberPositifRules: [
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
  beforeDestroy() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.onResize, { passive: true });
    }
  },

  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  }
};
</script>

<style scoped>
</style>
