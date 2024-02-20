<script setup>
import { onMounted, ref } from "vue";
import { validation } from "../../utils/validation";
import { editPost, getPostDetails } from "../../api/postApi";
import { useRoute, useRouter } from "vue-router";

const post = ref({
  userId: null,
  id: null,
  title: "",
  body: "",
});
const loading = ref(true);
const errorMsg = ref(null);
const validateMsg = ref(null);

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

const editPostAction = () => {
  const message = validation(post);

  if (message) {
    validateMsg.value = message;

    return;
  }

  const { error } = editPost(id, post);

  errorMsg.value = error;

  if (!error) {
    router.push("/posts");
  }
};
</script>

<template>
  <div v-if="loading" class="text-blue-500 text-center">Loading ...</div>
  <div v-if="errorMsg" class="text-red-500 text-xl text-center">
    {{ errorMsg }}
  </div>

  <div
    v-if="!loading && !errorMsg"
    class="flex flex-col justify-center items-center gap-5"
  >
    <h1 class="text-xl font-semibold">Edit Post</h1>

    <form class="w-full max-w-xl" @submit.prevent="editPostAction">
      <div class="mb-5">
        <label for="title" class="block mb-2 text-sm font-medium text-gray-900">
          Title
        </label>
        <input
          type="text"
          id="title"
          v-model.trim="post.title"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        />
      </div>

      <div class="">
        <label
          for="message"
          class="block mb-2 text-sm font-medium text-gray-900"
          >Text</label
        >
        <textarea
          id="message"
          rows="4"
          v-model.trim="post.body"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Leave a comment..."
        />
      </div>

      <div v-if="validateMsg" class="text-sm text-red-500 mt-2">
        {{ validateMsg }}
      </div>

      <button
        :disabled="loading"
        type="submit"
        class="px-3 py-2.5 mt-7 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-black/90 focus:ring-4 focus:outline-none focus:ring-black/50 w-full disabled:opacity-50"
      >
        Confirm
      </button>
    </form>
  </div>
</template>
