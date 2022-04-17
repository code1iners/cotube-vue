<template>
  <div id="nav">
    <HeaderVue></HeaderVue>
    <router-view />
  </div>
</template>

<script>
import HeaderVue from "./components/header.vue";
export default {
  name: "OneProjectApp",

  data() {
    return {};
  },
  component: {
    HeaderVue,
  },
  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
