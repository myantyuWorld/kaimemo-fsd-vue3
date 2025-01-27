<script setup lang="ts">
import { onMounted } from 'vue';
import {GET} from "@/shared/api";

onMounted(async () => {
  console.log(GET)
  // TODO : swaggerから生成したv1.schema.tsに基づいてチェックが行われるため、backend側でswaggerの作成が必須
  const {data} = await GET("/kaimemo", {});
  console.log(data);
});
</script>
<template>
  <div class="flex justify-center items-center min-h-screen">
    <div class="bg-gray-100 p-8 rounded-lg shadow-lg">
      <h1 class="text-4xl font-bold mb-4">Welcome</h1>
      <p class="text-lg">ウェルカムページへようこそ</p>
    </div>
    <div>
    </div>
  </div>
</template>
