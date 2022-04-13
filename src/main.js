import { createApp, h } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import { DefaultApolloClient } from "@vue/apollo-composable";
// import { apolloClient } from "./libs/apollo.provider";

const app = createApp({
  setup() {
    // provide(DefaultApolloClient, apolloClient);
  },

  render: () => h(App),
});
app.use(store).use(router).mount("#app");
