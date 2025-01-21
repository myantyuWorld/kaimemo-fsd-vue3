<script setup lang="ts">
import { Client } from '@notionhq/client';
import { onMounted, ref } from 'vue';

const notion = new Client({auth: import.meta.env.VITE_NOTION_TOKEN});

const data = ref();

onMounted(async () => {
  data.value = await notion.databases.query({
    database_id: import.meta.env.VITE_NOTION_DATABASE_ID,
  });
});
</script>
<template>
  <div class="flex justify-center items-center min-h-screen">
    <div class="bg-gray-100 p-8 rounded-lg shadow-lg">
      <h1 class="text-4xl font-bold mb-4">Welcome</h1>
      <p class="text-lg">ウェルカムページへようこそ</p>
    </div>
    <div>
    <template v-if="data">
      <div v-for="item in data.results" :key="item.id">
        <p>{{ JSON.stringify(item.properties, null, 2) }}</p>
      </div>
    </template>
    </div>
  </div>
</template>
