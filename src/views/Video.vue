<template>
  <div>
    <iframe
      width="560"
      height="315"
      :src="`https://www.youtube.com/embed/${this.$route.params.id}`"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "OneProjectVideo",
  created() {
    console.log(this.$route.params.id);
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
