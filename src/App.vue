<template>
  <div id="nav">
    <Header v-if="$route.name !== 'login'" />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: "OneProjectApp",
  created() {
    if (sessionStorage.getItem("ACCESS_TOKEN") === null) {
      this.$router.push("/");
    }
  },
  data() {
    return {
      isStatusOn: true,
    };
  },
  components: { Header },
  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
