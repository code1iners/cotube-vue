<template>
  <div>
    <div>
      <input type="text" v-model="video_val" @keyup.enter="getMovieList" />
    </div>
    <div v-for="arr in this.movieList" :key="arr">
      <iframe
        scrolling="no"
        border="no"
        maginwidth="0"
        marginheight="0"
        frameborder="0"
        :src="arr.snippet.thumbnails.medium.url"
        :type="video"
      >
      </iframe>
      <p>{{ arr.snippet.title }}</p>
    </div>

    <!-- <div v-for="arr in this.movie" :key="arr">{{ arr }}</div> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  created() {
    if (sessionStorage.getItem("ACCESS_TOKEN") === "") {
      this.$router.push("/");
    }
  },
  data() {
    return {
      movieList: [],
      video_val: "",
    };
  },

  mounted() {
    this.getMovieList();
  },
  methods: {
    getMovieList() {
      let url =
        "https://www.googleapis.com/youtube/v3/search?key=AIzaSyCHhaeNyuDZCCRrDzYVdCDwWpTmtee6IAY&part=id,snippet&q=앨리&type=video&maxResults=12";
      this.video_val === ""
        ? url
        : `https://www.googleapis.com/youtube/v3/search?key=AIzaSyCHhaeNyuDZCCRrDzYVdCDwWpTmtee6IAY&part=id,snippet&q=${this.video_val}&type=video&maxResults=12`;
      axios
        .get(url)
        .then((response) => {
          this.movieList = response.data.items;
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
