<template>
  <div>
    {{ zzz }}
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "OneProjectUserinfo",
  created() {
    console.log(this.$route.params.id);
    this.$store.dispatch("FETCH_INFO", this.$route.params.id);
  },
  computed: {
    ...mapGetters(["fetchUser"]),
    zzz() {
      return console.log(this.fetchUser);
    },
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped></style>
