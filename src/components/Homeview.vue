<template>
  <div class="vidie_box">
    <div class="videomini" v-for="arr in this.movieList" :key="arr">
      <router-link :to="`/video/${arr.id.videoId}`">
        <div class="topbox">
          <img :src="arr.snippet.thumbnails.medium.url" />
        </div>
        <div class="bottombox">
          <div class="imgbox">
            <img
              :src="`https://img.youtube.com/vi/${arr.id.videoId}/mqdefault.jpg`"
            />
          </div>
          <div class="titlebox">
            <p class="bigtitle">
              {{ arr.snippet.title }}
            </p>
            <p class="title">{{ arr.snippet.channelTitle }}</p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "OneProjectHomeview",

  data() {
    return {};
  },
  computed:{
      ...mapGetters(["fetchHome"]),
  }

  mounted() {},

  methods: {},
};
</script>

<style scoped></style>
