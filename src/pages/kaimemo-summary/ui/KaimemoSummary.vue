<script setup lang="ts">
import { TheForm, PrimaryButton, SecondaryButton } from '@/shared/ui'
import SummaryRecordHeader from './SummaryRecordHeader.vue'
import TheCard from './TheCard.vue'
import SummaryRecordItem from './SummaryRecordItem.vue'
</script>

<template>
  <div>
    <!-- TODO : Layoutを導入して、ヘッダーを共通的に設定すること -->
    <!-- FYI. https://qiita.com/kensoz/items/8ad254d3294792ae6073 -->
    <div class="justify-center">
      <div class="bg-gray-100 rounded-lg shadow-lg p-4 flex items-center justify-between">
        <h1 class="text-4xl font-bold">Kaimemo!!</h1>
        <router-link to="/" class="text-gray-600 hover:text-gray-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        </router-link>
      </div>
    </div>

    <TheCard>
      <SummaryRecordHeader label="2025/02" />
      <div class="flex flex-row">
        <div class="basis-16 flex items-center justify-center">＜</div>
        <div class="basis-64 flex items-center justify-center">
          <TheForm label="食費"> 22000円 </TheForm>
        </div>
        <div class="basis-64 flex items-center justify-center">
          <TheForm label="日用品"> 5000円 </TheForm>
        </div>
        <div class="basis-16 flex items-center justify-center">＞</div>
      </div>
    </TheCard>

    <TheCard>
      <SummaryRecordHeader label="１週間分の合計" />
      <label class="block text-xl font-medium text-gray-700 dark:text-gray-300">
        2025/02/dd ~ 2025/02/dd
      </label>
      <div class="flex flex-row">
        <div class="flex items-center justify-end">
          <TheForm label="食費"> 22000円 </TheForm>
        </div>
      </div>
    </TheCard>

    <TheCard>
      <SummaryRecordHeader label="１週間分の買い物" />
      <div class="flow-root overflow-auto">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
          <SummaryRecordItem tag="食費" :amount="3000" date="2025/02/19" />
          <SummaryRecordItem tag="日用品" :amount="1000" date="2025/02/18" />
          <SummaryRecordItem tag="食費" :amount="1000" date="2025/02/14" />
          <SummaryRecordItem tag="食費" :amount="1000" date="2025/02/14" />
          <SummaryRecordItem tag="食費" :amount="1000" date="2025/02/14" />
          <SummaryRecordItem tag="食費" :amount="1000" date="2025/02/14" />
          <SummaryRecordItem tag="食費" :amount="1000" date="2025/02/14" />
        </ul>
      </div>
    </TheCard>

    <button
      class="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 flex items-center justify-center"
      style="width: 56px; height: 56px"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M16 25V7m-9 9h18"
        />
      </svg>
    </button>
  </div>
</template>
