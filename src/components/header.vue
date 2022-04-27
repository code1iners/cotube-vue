<template>
  <div class="textbox">
    <ul class="menubox">
      <li @click="logout">로그아웃</li>
    </ul>
    <div class="inputbox">
      <input type="text" v-model="form.video_val" @keyup.enter="search" />
      <input type="button" class="btn" value="검색" @click="search" />
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { useStore } from "vuex"; //*
import { reactive } from "@vue/reactivity";
export default {
  name: "OneProjectHeader",
  setup() {
    const store = useStore();
    const router = useRouter();

    const form = reactive({
      video_val: "",
    });

    const logout = async () => {
      sessionStorage.removeItem("ACCESS_TOKEN");
      // router.push("/");
      // router.go("/");
      router.replace("/");
    };
    const search = () => {
      store.dispatch(`FETCH_HOME_VIEW`, form.video_val);
      router.push("/home");
    };
    return {
      form,
      logout,
      search,
    };
  },

  // data() {
  //   return {
  //     video_val: "",
  //   };
  // },

  // mounted() {},

  // methods: {
  //   logout() {
  //     sessionStorage.removeItem("ACCESS_TOKEN");
  //     this.$router.push("/");
  //   },
  //   search() {
  //     this.$store.dispatch(`FETCH_HOME_VIEW`, this.video_val);
  //   },
  // },
};
</script>

<style scoped>
.textbox {
  width: 100%;
  padding: 30px;
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
.menubox {
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
  margin-bottom: 10px;
}
.menubox > li {
  cursor: pointer;
  margin-right: 10px;
  font-weight: 800;
  font-size: 14px;
}
.inputbox {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}
input {
  width: 55%;
  height: 40px;
  box-sizing: border-box;
}
.btn {
  width: 80px;
  height: 40px;
  background-color: black;
  cursor: pointer;
  color: white;
  border: 0;
  box-sizing: border-box;
  margin-left: 10px;
  border-radius: 2px;
}
</style>
