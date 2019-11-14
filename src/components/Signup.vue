<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4 lg3>
      <v-card class="elevation-12">
        <v-card-text>
          <h1 class="title">SIGNUP</h1>
        </v-card-text>
        <v-card-text>
          <v-form>
            <v-text-field
              id="email"
              label="Email"
              name="email"
              prepend-icon="mdi-account"
              type="text"
              outlined
            ></v-text-field>
            <v-text-field
              id="emailConfirmation"
              label="Email confirmation"
              name="email"
              prepend-icon="mdi-account"
              type="text"
              outlined
            ></v-text-field>
            <v-text-field
              id="password"
              label="Password"
              name="password"
              prepend-icon="mdi-lock"
              type="password"
              outlined
            ></v-text-field>
            <v-text-field
              id="passwordConfirmation"
              label="Password confirmation"
              name="password"
              prepend-icon="mdi-lock"
              type="password"
              outlined
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-text>
          <v-btn color="primary">Signup</v-btn>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "Signup"
};
</script>

<style scoped>
.v-card__text {
  text-align: center;
}

/* .v-card {
  width: 100%;
  max-width: 400px;
} */
</style>
