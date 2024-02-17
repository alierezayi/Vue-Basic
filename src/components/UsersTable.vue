<script setup>
import { onMounted, ref } from "vue";
import UserItem from "./UserItem.vue";
import { getAllUsers } from "../api/userApi";

const loading = ref(true);
const errorMsg = ref(null);
const users = ref([]);

onMounted(() => {
  const fetchData = async () => {
    const { data, error } = await getAllUsers();

    users.value = data;
    errorMsg.value = error;
    loading.value = false;
  };

  fetchData();
});
</script>

<template>
  <div v-if="loading" class="text-blue-500">Loading ...</div>
  <div v-if="errorMsg" class="text-red-500 text-xl">{{ errorMsg }}</div>

  <div
    class="relative shadow-md sm:rounded-lg overflow-x-auto"
    v-if="users.length"
  >
    <table class="w-full text-sm text-left">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" class="px-6 py-3">Num</th>
          <th scope="col" class="px-6 py-3">Name</th>
          <th scope="col" class="px-6 py-3">Username</th>
          <th scope="col" class="px-6 py-3">Email</th>
          <th scope="col" class="px-6 py-3">Phone</th>
          <th scope="col" class="px-6 py-3">Website</th>
        </tr>
      </thead>

      <tbody>
        <UserItem
          v-for="(user, index) in users"
          :key="index"
          :user="user"
          :index="index"
        />
      </tbody>
    </table>
  </div>
</template>
