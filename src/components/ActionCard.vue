<template>
  <v-card>
    <v-container>
      <v-row>
        <v-col col="12" md="4">
          <div class="logo">
            <v-icon x-large>{{logo}}</v-icon>
          </div>
        </v-col>
        <v-col col="12" md="8">
          <h1>{{title}}</h1>
          <div>
            <p>{{description}}</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "ActionCard",
  props: ["title", "logo", "description", "href"]
};
</script>

<style scoped>
.logo {
  display: block;
  position: relative;
  text-align: center;
  border: 1px solid #e5e5e5;
  border-radius: 50%;
  width: 100px;
  line-height: 100px;
  height: 100px;
}
</style>
