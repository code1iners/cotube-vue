<template>
  <div class="homeVue">
    <HomeView></HomeView>
  </div>
</template>

<script>
import HomeView from "../components/Homeview.vue";
export default {
  name: "Home",
  created() {
    if (sessionStorage.getItem("ACCESS_TOKEN") === null) {
      this.$router.push("/");
    }
  },
  data() {
    return {};
  },
  components: {
    HomeView,
  },
  computed: {},
  mounted() {},
  methods: {},
};
</script>

<style scoped>
.homeVue {
  padding: 30px;
}
</style>
