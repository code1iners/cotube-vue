import { createApp, h, provide } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { apolloClient } from "@libs/apollo.provider";
import { createI18n } from "vue-i18n";
// import axios from "axios";
// import VueAxios from "vue-axios";

const i18n = createI18n({
  locale: "ko", // set locale
  fallbackLocale: "ko", // set fallback locale
  allowComposition: true,
  messages: {
    ko: {
      message: {
        hello: "헬로 월드",
      },
    },
    en: {
      message: {
        hello: "hello world",
      },
    },
  },
});

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },

  render: () => h(App),
});

app.use(store).use(router);
// app.use(VueAxios, axios);
app.use(i18n);

app.mount("#app");

// app.config.globalProperties.axios = axios;
