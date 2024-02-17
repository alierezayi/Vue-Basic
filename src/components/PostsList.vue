<script setup>
import { onMounted, ref } from "vue";
import { getAllPosts } from "../api/postApi";
import PostItem from "./PostItem.vue";

const loading = ref(true);
const errorMsg = ref(null);
const posts = ref([]);

onMounted(() => {
  const fetchData = async () => {
    const { data, error } = await getAllPosts();

    posts.value = data;
    errorMsg.value = error;
    loading.value = false;
  };

  fetchData();
});
console.log(posts);
</script>

<template>
  <div v-if="loading" class="text-blue-500">Loading ...</div>
  <div v-if="errorMsg" class="text-red-500 text-xl">{{ errorMsg }}</div>

  <div class="grid grid-cols-3 gap-10" v-if="posts.length">
    <PostItem v-for="(post, index) in posts" :key="index" :post="post" />
  </div>
</template>
