<template>
  <div class="vidie_box">
    <div class="videomini" v-for="arr in fetchHome" :key="arr">
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
  computed: {
    ...mapGetters(["fetchHome"]),
  },
  created() {
    if (this.$store.state.home == "") {
      // video파트에서 검색을 할수있게 하려고 조건을검
      this.$store.dispatch("FETCH_HOME_VIEW");
    }
  },

  data() {
    return {};
  },
  watch: {},

  methods: {},
};
</script>

<style scoped>
.vidie_box {
  width: 100%;
  height: auto;
  padding: 30px;
  box-sizing: border-box;
  display: flex;
  flex-flow: row wrap;
}
.videomini {
  width: 20.9%;
  display: flex;
  flex-flow: column nowrap;
  padding: 20px;
}
.bigtitle {
  font-size: 12px;
  font-weight: 800;
  text-overflow: ellipsis;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.topbox {
  width: 100%;
}
.topbox > img {
  width: 100%;
  object-fit: contain;
}
.bottombox {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
}
.titlebox {
  display: flex;
  flex-flow: column wrap;
}
.title {
  font-size: 5px;
  font-weight: 800;
  text-align: left;
  color: #ccc;
}
.imgbox {
  width: 40px;
  border-radius: 100px;
  overflow: hidden;
  position: relative;
}
.imgbox > img {
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  object-fit: cover;
}
a {
  text-decoration: none;
  color: black;
}
</style>
