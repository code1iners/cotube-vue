<template>
  <div>
    <!-- <span>뭐라도 해보샘</span> -->
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  setup() {},
  mounted() {
    console.log("hello", process.env.VUE_APP_USER_API_URI); // 0
  },
};
</script>
