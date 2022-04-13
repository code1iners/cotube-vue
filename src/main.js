import { createApp, h, provide } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { ApolloClients } from "@vue/apollo-composable";

const app = createApp({
  setup() {
    provide(ApolloClients);
  },

  render: () => h(App),
});
app.use(store).use(router).mount("#app");
