<template>
  <div class="homeVue">
    <div class="textbox">
      <input type="text" v-model="video_val" @keyup.enter="getMovieList" />
    </div>
    <!-- <router-link to="/video/hi"> </router-link> -->
    <div class="vidie_box">
      <div class="videomini" v-for="arr in this.movieList" :key="arr">
        <router-link :to="`/video/${arr.id.videoId}`">
          <div class="topbox">
            <img :src="arr.snippet.thumbnails.medium.url" />
          </div>
          <div class="bottombox">
            <div class="imgbox">
              <img :src="arr.snippet.thumbnails.default.url" />
            </div>
            <div class="titlebox">
              <p class="bigtitle">
                {{
                  arr.snippet.title.length > 45
                    ? arr.snippet.title.substr(0, 45) + "..."
                    : arr.snippet.title
                }}
              </p>
              <p class="title">{{ arr.snippet.channelTitle }}</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
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
  computed: {},
  mounted() {
    this.getMovieList();
  },
  methods: {
    getMovieList() {
      let url =
        "https://www.googleapis.com/youtube/v3/search?key=AIzaSyCHhaeNyuDZCCRrDzYVdCDwWpTmtee6IAY&part=id,snippet&q=앨리&type=video&maxResults=2";
      this.video_val === ""
        ? url
        : (url = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyCHhaeNyuDZCCRrDzYVdCDwWpTmtee6IAY&part=id,snippet&q=${this.video_val}&type=video&maxResults=2`);
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
    // go(link) {
    //   location.href = "https://www.youtube.com/watch?v=" + link;
    // },
  },
};
</script>

<style scoped>
.textbox {
  width: 100%;
  height: 50px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}
.textbox > input {
  width: 35%;
  height: 35px;
}
.homeVue {
  padding: 30px;
}
.vidie_box {
  width: 100%;
  height: auto;
  padding: 30px;
  box-sizing: border-box;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}
.videomini {
  width: 24%;
  height: 300px;
  display: flex;
  flex-flow: column nowrap;
  padding: 20px;
}
.bigtitle {
  font-size: 12px;
  font-weight: 800;
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
  width: 100px;
  border-radius: 100px;
  overflow: hidden;
  position: relative;
}
.imgbox > img {
  left: 0;
  right: 0;
  top: 20px;
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
