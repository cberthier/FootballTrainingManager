<template>
  <v-card :to="to">
    <v-container>
      <v-row class="hidden-xs-only">
        <v-col cols="3" sm="12" md="12" lg="3" xl="3" align-self="center">
          <div class="logo">
            <v-icon x-large>{{logo}}</v-icon>
          </div>
        </v-col>
        <v-col cols="9" sm="12" md="12" lg="9" xl="9">
          <h2 class="title">{{title}}</h2>
          <div>
            <p class="body-1">{{description}}</p>
          </div>
        </v-col>
      </v-row>
      <v-row class="hidden-sm-and-up">
        <v-col cols="12" sm="12" md="12" lg="9" xl="9">
          <v-row>
            <v-col cols="3">
              <div class="xs-logo">
                <v-icon>{{logo}}</v-icon>
              </div>
            </v-col>
            <v-col cols="9">
              <h2 class="title">
                <span>{{title}}</span>
              </h2>
            </v-col>
          </v-row>
          <div>
            <p class="body-2">{{description}}</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "ActionCard",
  props: ["title", "logo", "description", "to"]
};
</script>

<style scoped>
.v-card {
  min-height: 172px;
}
.logo {
  display: block;
  position: relative;
  text-align: center;
  border: 1px solid #e5e5e5;
  border-radius: 50%;
  width: 80px;
  line-height: 80px;
  height: 80px;
  margin-right: auto;
  margin-left: auto;
}
.xs-logo {
  display: block;
  position: relative;
  text-align: center;
  border: 1px solid #e5e5e5;
  border-radius: 50%;
  width: 40px;
  line-height: 40px;
  height: 40px;
  margin-right: auto;
  margin-left: auto;
}
</style>
