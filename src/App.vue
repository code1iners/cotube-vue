<template>
  <div id="nav">
    <Header v-if="$route.name !== 'login' && $route.name !== 'SingUp'" />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
// import Vue from "vue";
import { useRouter } from "vue-router";
export default {
  name: "OneProjectApp",
  setup() {
    const router = useRouter();
    if (sessionStorage.getItem("ACCESS_TOKEN") === null) {
      router.push("/");
      // url 막기
    }
  },
  // created() {
  //   if (sessionStorage.getItem("ACCESS_TOKEN") === null) {
  //     this.$router.push("/");
  //   }
  // },
  // data() {
  //   return {
  //     isStatusOn: true,
  //   };
  // },
  components: { Header },
  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
