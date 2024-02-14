<script setup>
import { ref } from "vue";

const title = ref("Home Page");
</script>

<template>
  <div class="flex flex-col items-center">
    <h1 class="text-xl font-semibold mb-5">{{ title }}</h1>

    <div class="w-full max-w-2xl mb-3">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita laborum
      reprehenderit voluptatum sunt blanditiis dolor architecto ipsum? Beatae
      voluptatibus sunt deleniti quos ex a atque iste perferendis facilis quia
      totam earum voluptates molestias obcaecati at repudiandae explicabo quam,
      porro illo! Suscipit earum a nemo voluptates quasi reprehenderit quo ipsum
      iusto? Harum minus eos voluptate repudiandae molestiae, officiis vitae
      ipsa ducimus, architecto magnam autem inventore eum ipsum minima cumque!
      Quo quos sed dignissimos consectetur hic mollitia perspiciatis laboriosam
      cupiditate harum, iusto assumenda possimus praesentium? Nesciunt possimus
      blanditiis illum enim aliquam! Consectetur, illum in. Temporibus sed
      officiis vero commodi nisi obcaecati minima.
    </div>

    <div class="flex gap-5">
      <button
        class="bg-gray-900 py-2 rounded-lg text-white hover:bg-gray-800 transition w-20"
      >
        Users
      </button>
      <button
        class="bg-gray-100 py-2 rounded-lg hover:bg-gray-200 transition w-20"
      >
        Posts
      </button>
    </div>
  </div>
</template>
