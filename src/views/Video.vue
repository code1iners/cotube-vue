<template>
  <div class="videobox">
    <div class="framebox" style="width: 100%">
      <iframe
        style="width: 100%; aspect-ratio: 16/9"
        :src="`https://www.youtube.com/embed/${route.params.id}`"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <h1 class="title">{{ videoArr[0].snippet.title }}</h1>
      <p>{{ videoArr[0].snippet.title }}</p>
      <div class="titlebox">
        <div class="thumbnail">
          <img :src="`http://img.youtube.com/vi/${route.params.id}/2.jpg`" />
        </div>
        <div class="titlename">
          <p>{{ videoArr[0].snippet.channelTitle }}</p>
          <div></div>
        </div>
      </div>
      <div class="comment">
        <p>댓글:{{ comment.length }}개</p>
        <ul class="comment_ul">
          <li v-for="text in comment" :key="text">
            <div>
              <router-link
                :to="`/user/${text.snippet.topLevelComment.snippet.authorChannelId.value}`"
              >
                <img
                  class="comment_img"
                  :src="
                    text.snippet.topLevelComment.snippet.authorProfileImageUrl
                  "
                />
              </router-link>
            </div>
            <ol>
              <li
                v-html="text.snippet.topLevelComment.snippet.authorDisplayName"
              ></li>
              <li
                v-html="text.snippet.topLevelComment.snippet.textDisplay"
              ></li>
              <li></li>
            </ol>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { backGuard } from "../api/customfunction.js";
export default {
  name: "OneProjectVideo",
  setup() {
    backGuard();

    const store = useStore();
    const route = useRoute();
    store.dispatch("FETCH_COMMENT", route.params.id);
    store.dispatch("FETCH_VIDEO", route.params.id);
    const comment = computed(() => store.getters.fetchComment);
    const videoArr = computed(() => store.getters.fetchVideo);
    return { comment, route, videoArr };
  },

  // created() {
  //   axios
  //     .get(
  //       `https://www.googleapis.com/youtube/v3/commentThreads?key=AIzaSyCHhaeNyuDZCCRrDzYVdCDwWpTmtee6IAY&part=snippet&maxResults=100&videoId=${this.$route.params.id}`
  //     )
  //     .then(({ data }) => {
  //       // console.log(data.items[0].snippet, "response");
  //       // console.log(data, "response");
  //       console.log(data.items);
  //       this.comment = data.items;
  //       // console.log(data.items[0].snippet.topLevelComment.snippet);
  //     })
  //     .catch((error) => {
  //       console.log(error, "error");
  //     });
  //   axios
  //     .get(
  //       `https://www.googleapis.com/youtube/v3/videos?key=AIzaSyCHhaeNyuDZCCRrDzYVdCDwWpTmtee6IAY&part=snippet&id=${this.$route.params.id}`
  //     )
  //     .then(({ data }) => {
  //       console.log(data, "response");
  //       this.videoArr = data.items[0].snippet;
  //     })
  //     .catch((error) => {
  //       console.log(error, "error");
  //     });
  // },
  // data() {
  //   return {
  //     videoArr: [],
  //     comment: [],
  //   };
  // },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.videobox {
  padding: 30px;
}
.framebox {
  width: 948px;
  height: auto;
  margin: 0 auto;
}
.title {
  text-overflow: ellipsis;
  white-space: normal;
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  border-bottom: 2px solid #ccc;
}
.titlebox {
  width: 100%;
  border-bottom: 2px solid #ccc;
  display: flex;
  flex-flow: row nowrap;
}
.thumbnail {
  display: flex;
  justify-content: center;
  align-items: center;
}
.thumbnail > img {
  width: 30px;
  height: 30px;
  border-radius: 100%;
}
.titlename {
  display: flex;
  flex-flow: column nowrap;
}
.comment_ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.comment_ul > li {
  display: flex;
  margin-bottom: 30px;
}
.comment_ul > li > ol {
  margin: 0;
  padding-left: 20px;
  list-style: none;
}
.comment_ul > li > ol > li:nth-of-type(1) {
  font-weight: 800;
}
.comment_img {
  border-radius: 100%;
}
</style>
