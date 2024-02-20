<script setup>
import { onMounted, ref } from "vue";
import { validation } from "../utils/validation";

const props = defineProps({
  formAction: Function,
  initialValues: Object,
  buttonText: String,
});

const emit = defineEmits();

const post = ref({
  title: "",
  body: "",
});
const validateMsg = ref("");

const submition = () => {
  emit("formData", post.value);

  const message = validation(post.value);
  if (message) {
    validateMsg.value = message;
    return;
  }

  props.formAction();
};

onMounted(() => {
  if (props.initialValues) {
    post.value = props.initialValues;
  }
});
</script>

<template>
  <form class="w-full max-w-xl" @submit.prevent="submition">
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
      <label for="message" class="block mb-2 text-sm font-medium text-gray-900"
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
      type="submit"
      class="px-3 py-2.5 mt-7 text-sm font-medium text-center text-white bg-black rounded-lg hover:bg-black/90 focus:ring-4 focus:outline-none focus:ring-black/50 w-full disabled:opacity-50"
    >
      {{ buttonText }}
    </button>
  </form>
</template>
