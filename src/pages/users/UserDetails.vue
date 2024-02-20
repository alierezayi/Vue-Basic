<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { getUserDetails } from "../../api/userApi";

const loading = ref(true);
const errorMsg = ref(null);
const user = ref(null);
const {
  params: { id },
} = useRoute();
onMounted(() => {
  const fetchData = async () => {
    const { data, error } = await getUserDetails(id);

    user.value = data;
    errorMsg.value = error;
    loading.value = false;
  };

  fetchData();
});
</script>

<template>
  <div>
    <div v-if="loading" class="text-blue-500 text-center">Loading ...</div>
    <div v-if="errorMsg" class="text-red-500 text-xl text-center">
      {{ errorMsg }}
    </div>
    <div v-if="user" class="flex justify-center items-center">
      <div
        class="w-full max-w-xl bg-white border border-gray-200 rounded-lg shadow"
      >
        <h5
          class="text-2xl font-semibold tracking-tight text-gray-900 bg-gray-100 px-4 py-4"
        >
          {{ user.name }}
        </h5>

        <div class="divide-y">
          <p class="py-3 px-6">
            <span class="font-medium">Username: </span>
            <span class="italic">{{ user.username }}</span>
          </p>

          <p class="py-3 px-6">
            <span class="font-medium">Email: </span>
            <span class="italic">{{ user.email }}</span>
          </p>

          <p class="py-3 px-6">
            <span class="font-medium">Phone: </span>
            <span class="italic">{{ user.phone }}</span>
          </p>

          <p class="py-3 px-6">
            <span class="font-medium">Website: </span>
            <span class="italic">{{ user.website }}</span>
          </p>

          <p class="py-3 px-6">
            <span class="font-medium">Address: </span>
            <span class="italic">
              {{ user.address.city }} - {{ user.address.street }}
            </span>
          </p>

          <p class="py-3 px-6">
            <span class="font-medium">Company: </span>
            <span class="italic">{{ user.company.name }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
