import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/Login.vue";
import Home from "@/views/Home.vue";
import SingUp from "@/views/SingUp.vue";
import Video from "@/views/Video.vue";
import User from "@/views/UserInfo.vue";
const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/singup",
    name: "SingUp",
    component: SingUp,
  },
  {
    path: "/video/:id",
    name: "video",
    component: Video,
  },
  {
    path: "/user/:id",
    name: "user",
    component: User,
  },
  // {
  //   path: "/about",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
