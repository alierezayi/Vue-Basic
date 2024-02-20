<script setup>
import { onMounted, ref } from "vue";
import { editPost, getPostDetails } from "../../api/postApi";
import { useRoute, useRouter } from "vue-router";
import PostForm from "../../components/PostForm.vue";

const post = ref({
  userId: null,
  id: null,
  title: "",
  body: "",
});
const loading = ref(true);
const errorMsg = ref(null);

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

const getFormData = (data) => (post.value = data);

const editPostAction = () => {
  loading.value = true;

  const { error } = editPost(id, post.value);

  loading.value = false;
  errorMsg.value = error;

  if (!error) {
    router.push(`/posts/${id}`);
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

    <PostForm
      buttonText="Confirm"
      :formAction="editPostAction"
      :initialValues="post"
      @formData="getFormData"
    />
  </div>
</template>
