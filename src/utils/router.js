import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Users from "../pages/users/index.vue";
import Posts from "../pages/Posts.vue";
import UserDetails from "../pages/users/UserDetails.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  {
    path: "/users",
    children: [
      { path: "", name: "users", component: Users },
      { path: ":id", name: "userDetails", component: UserDetails },
    ],
  },
  { path: "/posts", name: "posts", component: Posts },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
