<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <div class="flex items-center justify-between mb-2">
    <h5 class="text-lg font-bold leading-none text-gray-900 dark:text-white">{{ label }}</h5>
  </div>
</template>
