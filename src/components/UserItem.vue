<script setup>
const props = defineProps({
  user: Object,
  index: Number,
});
const { id, name, username, email, phone, website } = props.user;
</script>

<template>
  <tr class="odd:bg-white even:bg-gray-50 border-b hover:bg-gray-100">
    <td class="px-6 py-4">{{ index + 1 }}</td>
    <th
      scope="row"
      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap underline"
    >
      <router-link :to="{ name: 'userDetails', params: { id } }"
        >{{ name }} "
      </router-link>
    </th>
    <td class="px-6 py-4">
      {{ username }}
    </td>
    <td class="px-6 py-4">
      {{ email }}
    </td>
    <td class="px-6 py-4">
      {{ phone }}
    </td>
    <td class="px-6 py-4">
      {{ website }}
    </td>
  </tr>
</template>
