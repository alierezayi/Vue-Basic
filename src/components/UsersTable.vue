<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
import UserCardView from "./UserColumn.vue";

const users = ref([]);

onMounted(() => {
  const getUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        users.value = response.data;
      })
      .catch((err) => console.log(err));
  };

  getUsers();
});
</script>

<template>
  <div class="relative shadow-md sm:rounded-lg overflow-x-auto">
    <table class="w-full text-sm text-left">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" class="px-6 py-3">Name</th>
          <th scope="col" class="px-6 py-3">Username</th>
          <th scope="col" class="px-6 py-3">Email</th>
          <th scope="col" class="px-6 py-3">Phone</th>
          <th scope="col" class="px-6 py-3">Website</th>
        </tr>
      </thead>

      <tbody>
        <UserCardView
          v-for="(user, index) in users"
          :key="index"
          :user="user"
        />
      </tbody>
    </table>
  </div>
</template>
