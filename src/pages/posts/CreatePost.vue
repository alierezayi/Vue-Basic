<script setup>
import { ref } from "vue";
import { createPost } from "../../api/postApi";
import { useRouter } from "vue-router";
import PostForm from "../../components/PostForm.vue";

const post = ref({
  userId: "1",
  title: "",
  body: "",
});
const loading = ref(false);
const errorMsg = ref(null);
const router = useRouter();

const getFormData = (data) => {
  post.value = {
    ...post.value,
    title: data.title,
    body: data.body,
  };
};

const createPostAction = () => {
  loading.value = true;

  const { error } = createPost(post.value);

  errorMsg.value = error;
  loading.value = false;

  if (!error) {
    router.push("/posts");
  }
};
</script>

<template>
  <div v-if="errorMsg" class="text-red-500 text-xl text-center">
    {{ errorMsg }}
  </div>

  <div v-else class="flex flex-col justify-center items-center gap-5">
    <h1 class="text-xl font-semibold">Create New Post</h1>

    <PostForm
      :formAction="createPostAction"
      buttonText="Create"
      @formData="getFormData"
    />
  </div>
</template>
