<script setup>
import VueFeather from "vue-feather";
import { links } from "../utils/constant";
</script>

<template>
  <header>
    <nav class="bg-slate-100 border-gray-200 px-4 lg:px-6 py-4">
      <div
        class="flex flex-wrap justify-center lg:justify-between items-center mx-auto max-w-screen-xl"
      >
        <div class="self-center text-xl font-semibold whitespace-nowrap">
          Basic Vue
        </div>
        <div
          class="justify-center lg:justify-between items-center w-full flex lg:w-auto lg:order-1"
        >
          <ul class="flex mt-4 font-medium lg:gap-x-8 lg:mt-0">
            <li v-for="(link, index) in links" :key="index">
              <router-link
                :to="link.href"
                class="flex items-center gap-1 py-2 pr-4 pl-3 text-gray-500 hover:text-gray-600 lg:p-0 transition"
              >
                <vue-feather :type="link.icon" class="w-5 h-5" />

                {{ link.name }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
