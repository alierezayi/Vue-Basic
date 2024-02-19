import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Users from "../pages/users/index.vue";
import Posts from "../pages/posts/index.vue";
import UserDetails from "../pages/users/UserDetails.vue";
import PostDetails from "../pages/posts/PostDetails.vue";
import CreatePost from "../pages/posts/CreatePost.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  {
    path: "/users",
    children: [
      { path: "", name: "users", component: Users },
      { path: ":id", name: "userDetails", component: UserDetails },
    ],
  },
  {
    path: "/posts",
    children: [
      { path: "", name: "posts", component: Posts },
      { path: ":id", name: "postDetails", component: PostDetails },
      { path: "create", name: "createPost", component: CreatePost },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
