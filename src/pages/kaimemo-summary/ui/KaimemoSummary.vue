<script setup lang="ts">
import { PlusButton } from '@/shared/ui'
import SummaryRecordHeader from './SummaryRecordHeader.vue'
import TheCard from './TheCard.vue'
import SummaryRecordItem from './SummaryRecordItem.vue'
import MonthlySummaryTile from './MonthlySummaryTile.vue'

const onClickSample = () => {
  console.log('sample')
}
</script>

<template>
  <div>
    <div class="justify-center">
      <div class="bg-gray-100 rounded-lg shadow-lg p-4 flex items-center justify-between">
        <span class="text-3xl">＜</span>
        <h1 class="text-2xl font-bold">2024/02</h1>
        <span class="text-3xl">＞</span>
      </div>
    </div>

    <MonthlySummaryTile tag="食費" :current-expense="10000" :available-amount="40000" />
    <MonthlySummaryTile tag="日用品" :current-expense="5090" :available-amount="1" />

    <TheCard>
      <SummaryRecordHeader startDate="2025-02-01" endDate="2025-02-17" :weeklyAmount="10000" />

      <TheCard>
        <div class="flow-root overflow-auto">
          <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            <SummaryRecordItem tag="食費" :amount="3000" date="2025-02-19" />
            <SummaryRecordItem tag="日用品" :amount="1000" date="2025-02-18" />
            <SummaryRecordItem tag="食費" :amount="1000" date="2025-02-14" />
          </ul>
        </div>
      </TheCard>
    </TheCard>

    <PlusButton @click="onClickSample" />
  </div>
</template>
