<template>
  <div class="textbox">
    <!-- <input type="text" v-model="video_val" @keyup.enter="getMovieList" /> -->
    <input type="text" />
  </div>
</template>

<script>
export default {
  name: "OneProjectHeader",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.textbox {
  width: 100%;
  height: 50px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}
.textbox > input {
  width: 35%;
  height: 35px;
}
</style>
