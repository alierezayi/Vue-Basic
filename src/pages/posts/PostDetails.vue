<script setup>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getPostDetails } from "../../api/postApi";

const loading = ref(true);
const errorMsg = ref(null);
const post = ref(null);

const {
  params: { id },
} = useRoute();

const router = useRouter();

onMounted(() => {
  const fetchData = async () => {
    const { data, error } = await getPostDetails(id);

    post.value = data;
    errorMsg.value = error;
    loading.value = false;
  };

  fetchData();
});

const deletePostAction = async () => {};
</script>

<template>
  <div v-if="loading" class="text-blue-500 text-center">Loading ...</div>
  <div v-if="errorMsg" class="text-red-500 text-xl text-center">
    {{ errorMsg }}
  </div>

  <div v-if="post" class="flex justify-center items-center flex-col">
    <div class="w-full max-w-2xl p-3 sm:p-10 border rounded-lg shadow">
      <h1 class="text-2xl font-medium mb-5">{{ post.title }}</h1>
      <p class="text-gray-700 mb-5">{{ post.body }}</p>
      <div class="flex gap-5">
        <button
          @click="router.push(`/posts/edit/${id}`)"
          class="px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 w-20"
        >
          Edit
        </button>
        <button
          @click="deletePostAction"
          class="px-3 py-2 text-sm font-medium text-center text-red-500 border border-red-700 rounded-lg hover:bg-red-50 focus:ring-4 focus:outline-none focus:ring-red-300 w-20"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>
