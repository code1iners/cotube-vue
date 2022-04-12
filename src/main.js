import { createApp } from "vue";
import VueApollo from "vue-apollo";
import App from "./App.vue";
import { apolloClient } from "./libs/apollo.provider";
import router from "./router";
import store from "./store";

createApp(App)
  .use(
    new VueApollo({
      defaultClient: apolloClient,
    })
  )
  .use(store)
  .use(router)
  .mount("#app");
