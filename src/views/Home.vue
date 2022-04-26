<template>
  <div class="homeVue">
    <HomeView></HomeView>
  </div>
</template>

<script>
import HomeView from "../components/Homeview.vue";
export default {
  name: "Home",
  components: {
    HomeView,
  },
  created() {},
  data() {
    return {};
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
