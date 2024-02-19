<script setup>
import PostsList from "../../components/PostsList.vue";
</script>

<template>
  <div class="flex justify-center items-center flex-col gap-5">
    <h1 class="text-xl font-semibold">Posts Page</h1>

    <div>
      <span class="text-gray-500 mr-2">You can create a post</span>
      <router-link class="underline" to="posts/create"
        >Create New Post</router-link
      >
    </div>

    <PostsList />
  </div>
</template>
