import { createStore } from "vuex";
import {
  fetchInfoList,
  fetchHomeView,
  fetchComment,
  fetchVideo,
} from "../api/youtubes";
export default createStore({
  state: {
    user: [],
    home: [],
    comment: [],
    video: [],
  }, //data
  getters: {
    fetchUser(state) {
      return state.user;
    },
    fetchHome(state) {
      return state.home;
    },
    fetchComment(state) {
      return state.comment;
    },
    fetchVideo(state) {
      return state.video;
    },
  }, //computed
  mutations: {
    SET_user(state, data) {
      state.user = data;
    },
    SET_home(state, data) {
      // this.$router.push("/home");
      state.home = data;
    },
    SET_comment(state, data) {
      state.comment = data;
    },
    SET_video(state, data) {
      state.video = data;
    },
  }, //methods
  actions: {
    FETCH_INFO({ commit }, id) {
      fetchInfoList(id)
        .then((data) => {
          commit("SET_user", data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    FETCH_HOME_VIEW({ commit }, id) {
      fetchHomeView(id).then(({ data: { items } }) => {
        commit("SET_home", items);
      });
    },
    FETCH_COMMENT({ commit }, id) {
      fetchComment(id).then(({ data: { items } }) => {
        commit("SET_comment", items);
      });
    },
    FETCH_VIDEO({ commit }, id) {
      fetchVideo(id).then(({ data: { items } }) => {
        commit("SET_video", items);
      });
    },
  }, //비동기 methods
  modules: {},
});
