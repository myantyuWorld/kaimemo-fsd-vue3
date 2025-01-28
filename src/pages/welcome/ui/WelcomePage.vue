<script setup lang="ts">
import { onMounted, ref } from 'vue';
import {GET}  from "@/shared/api";
import type { Kaimemo } from "@/shared/api";

const items = ref<Kaimemo[]>();

onMounted(async () => {
  const {data, error} = await GET("/kaimemo", {});
  if (error) {
    console.error(error);
    return;
  }
  items.value = data;
});
</script>
<template>
  <div>
  <div class="flex justify-center items-center">
    <div class="bg-gray-100 p-8 rounded-lg shadow-lg">
      <h1 class="text-4xl font-bold mb-4">Welcome</h1>
      <p class="text-lg">ウェルカムページへようこそ</p>
    </div>
  </div>
  <div>
  </div>
  <div >
    <ul class="space-y-4 mb-2">
      <li v-for="item in items" :key="item.id" class="bg-gradient-to-r from-green-400 to-blue-500 p-4 m-4 rounded-lg shadow-lg text-white">
        <h2 class="text-2xl font-bold">{{ item.tag }}</h2>
        <p class="text-lg">{{ item.name }}</p>
        <p class="text-lg">{{ item.done ? 'Done' : 'Not Done' }}</p>
      </li>
    </ul>
  </div>
  </div>
</template>
