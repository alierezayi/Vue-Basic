<script setup>
import Header from "./components/Header.vue";
</script>

<template>
  <div class="flex flex-col">
    <Header />

    <div class="px-4 md:px-6 my-10">
      <div class="mx-auto max-w-screen-xl">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
