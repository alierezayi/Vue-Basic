<script setup>
import { reactive, ref } from "vue";
import { validation } from "../../utils/validation";
import { createPost } from "../../api/postApi";

const formData = reactive({
  id: "333",
  title: "",
  body: "",
});

const loading = ref(false);
const validateError = ref(null);
const responseError = ref(null);

const createPostAction = () => {
  const error = validation(formData);

  if (error) {
    validateError.value = error;
    return;
  }

  if (!error) {
    loading.value = true;

    const { data, error } = createPost(formData);
    responseError.value = error;
    console.log(data, error);

    loading.value = false;
  }
};
</script>

<template>
  <div class="flex flex-col justify-center items-center gap-5">
    <h1 class="text-xl font-semibold">Create New Post</h1>

    <form class="w-full max-w-xl" @submit.prevent="createPostAction">
      <div class="mb-5">
        <label for="title" class="block mb-2 text-sm font-medium text-gray-900">
          Title
        </label>
        <input
          type="text"
          id="title"
          v-model.trim="formData.title"
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
          v-model.trim="formData.body"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Leave a comment..."
        />
      </div>

      <div v-if="validateError" class="text-sm text-red-500 mt-2">
        {{ validateError }}
      </div>

      <button
        :disabled="loading"
        type="submit"
        class="px-3 py-2.5 mt-7 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-black/90 focus:ring-4 focus:outline-none focus:ring-black/50 w-full disabled:opacity-50"
      >
        Create
      </button>
    </form>
  </div>
</template>
