<script setup lang="ts">
import { formatAmount, formatDate } from '@/shared/util/string'
import { computed } from 'vue'

const props = defineProps<{
  tag: string
  date: string
  amount: number
}>()

const formattedDate = computed(() => {
  return formatDate(props.date)
})

const formattedAmount = computed(() => {
  return formatAmount(props.amount)
})
</script>
<template>
  <li class="py-3 sm:py-4">
    <div class="flex items-center">
      <div class="shrink-0">
        <svg
          v-if="tag === '食費'"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
          class="w-16 h-16 rounded-2xl p-3 border border-blue-100 text-blue-400 bg-blue-50"
        >
          <path
            fill="currentColor"
            d="M298.2 156.6c-52.7-25.7-114.5-10.5-150.2 32.8l55.2 55.2c6.3 6.3 6.3 16.4 0 22.6c-3.1 3.1-7.2 4.7-11.3 4.7s-8.2-1.6-11.3-4.7L130.4 217L2.3 479.7c-2.9 6-3.1 13.3 0 19.7c5.4 11.1 18.9 15.7 30 10.3l133.6-65.2l-49.2-49.2c-6.3-6.2-6.3-16.4 0-22.6s16.4-6.2 22.6 0l57 57l102-49.8c24-11.7 44.5-31.3 57.1-57.1c30.1-61.7 4.5-136.1-57.2-166.2m92.1-34.9C409.8 81 399.7 32.9 360 0c-50.3 41.7-52.5 107.5-7.9 151.9l8 8c44.4 44.6 110.3 42.4 151.9-7.9c-32.9-39.7-81-49.8-121.7-30.3"
          />
        </svg>
        <svg
          v-if="tag === '日用品'"
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="32"
          viewBox="0 0 448 512"
          class="w-16 h-16 rounded-2xl p-3 border border-blue-100 text-blue-400 bg-blue-50"
        >
          <path
            fill="currentColor"
            d="M448 358.4V25.6c0-16-9.6-25.6-25.6-25.6H96C41.6 0 0 41.6 0 96v320c0 54.4 41.6 96 96 96h326.4c12.8 0 25.6-9.6 25.6-25.6v-16q0-9.6-9.6-19.2c-3.2-16-3.2-60.8 0-73.6q9.6-4.8 9.6-19.2M144 144c0-8.84 7.16-16 16-16h48V80c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v48h48c8.84 0 16 7.16 16 16v32c0 8.84-7.16 16-16 16h-48v112c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16V192h-48c-8.84 0-16-7.16-16-16zm236.8 304H96c-19.2 0-32-12.8-32-32s16-32 32-32h284.8z"
          />
        </svg>
      </div>
      <div class="flex-1 min-w-0 ms-4">
        <p class="text-xl font-medium text-gray-900 truncate dark:text-white">
          {{ formattedDate }}
        </p>
      </div>
      <div class="inline-flex items-center text-xl font-semibold text-gray-900 dark:text-white">
        {{ formattedAmount }}円
      </div>
    </div>
  </li>
</template>
