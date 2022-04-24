import { createStore } from "vuex";
import { fetchInfoList, fetchHomeView } from "../api";
export default createStore({
  state: {
    user: [],
    home: [],
  }, //data
  getters: {
    fetchUser(state) {
      return state.user;
    },
    fetchHome(state) {
      return state.home;
    },
  }, //computed
  mutations: {
    SET_user(state, data) {
      state.user = data;
    },
    SET_home(state, data) {
      (state.home = data).then(this.$router.push("/home"));
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
  }, //비동기 methods
  modules: {},
});
