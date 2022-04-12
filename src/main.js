import { createApp, h, provide } from "vue";
import { DefaultApolloClient } from "@vue/apollo-composable";
import App from "./App.vue";
import { apolloClient } from "./libs/apollo.provider";
import router from "./router";
import store from "./store";

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },

  render: () => h(App),
});
app.use(store).use(router).mount("#app");
