<template>
  <div class="homeVue">
    <HomeView></HomeView>
  </div>
</template>

<script>
import HomeView from "../components/Homeview.vue";
import { backGuard } from "../api/customfunction.js";
export default {
  name: "Home",
  components: {
    HomeView,
  },
  setup() {
    backGuard();
  },
};
</script>

<style scoped></style>
