<template>
  <v-range-slider
    :tick-labels="minLevel"
    :value="[0, 1]"
    min="0"
    max="20"
    ticks="always"
    tick-size="1"
  ></v-range-slider>
</template>

            <script>
export default {
  name: "InputSlider",
  data: function() {
    return {
      minLevel: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20
      ]
    };
  },
  methods: {}
};
</script>

<style scoped>
</style>