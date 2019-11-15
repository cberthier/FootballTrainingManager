<template>
  <v-card>
    <v-form>
      <v-container>
        <v-row :dense="$vuetify.breakpoint.xsOnly">
          <v-col cols="12">
            <v-row v-if="this.$vuetify.breakpoint.name == 'xs'" dense>
              <select-input-leadership-form label="Form" name="form"/>
              <select-input-leadership-form label="Stamina" name="stamina"/>
              <select-input-leadership-form label="Leadership" name="leadership"/>
              <select-input-player-abilities label="Experience" name="experience"/>
              <select-input-player-abilities label="Loyalty" name="loyalty"/>
            </v-row>
            <v-simple-table v-else>
              <template>
                <tbody>
                  <table-row-rating label="Form" :max="8"/>
                  <table-row-rating label="Stamina" :max="8"/>
                  <table-row-rating label="Leadership" :max="8"/>
                  <table-row-rating label="Experience" :max="20"/>
                  <table-row-rating label="Loyalty" :max="20"/>
                </tbody>
              </template>
            </v-simple-table>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-card>
</template>

<script>
import TableRowRating from "./TableRowRating";
import SelectInputPlayerAbilities from "@/components/form/SelectInputPlayerAbilities";
import SelectInputLeadershipForm from "@/components/form/SelectInputLeadershipForm";
export default {
  name: "HumanCaracteristicsCard",
  components: { TableRowRating, SelectInputPlayerAbilities, SelectInputLeadershipForm },
  methods: {
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
      form: 0,
      stamina: 0,
      experience: 0,
      leadership: 0,
      loyalty: 0,
      length: 8,
      size: 20
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
