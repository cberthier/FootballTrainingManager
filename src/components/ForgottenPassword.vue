<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4 lg3>
      <v-card class="elevation-12">
        <v-card-text>
          <h1 class="title">FORGOTTEN PASSWORD</h1>
        </v-card-text>
        <v-card-text>
          <v-form>
            <v-text-field
              label="Email"
              name="email"
              prepend-icon="mdi-account"
              type="text"
              outlined
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-text>
          <v-btn color="primary">Submit</v-btn>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "ForgottenPassword"
};
</script>

<style scoped>
.v-card__text {
  text-align: center;
}
</style>
