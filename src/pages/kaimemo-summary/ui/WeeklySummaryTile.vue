<script setup lang="ts">
import TheCard from './TheCard.vue'
import SummaryRecordHeader from './SummaryRecordHeader.vue'
import SummaryRecordItem from './SummaryRecordItem.vue'
import type { components } from '@/shared/api/v1'

defineProps<{
  weeklySummary: components['schemas']['WeeklySummary']
}>()

defineEmits<{
  onClickPrev: []
  onClickNext: []
}>()
</script>

<template>
  <TheCard>
    <div class="flex flex-row">
      <div class="basis-32 flex items-center text-2xl" @click="$emit('onClickPrev')">＜</div>
      <div class="basis-224 m-2">
        <SummaryRecordHeader
          :startDate="weeklySummary.weekStart"
          :endDate="weeklySummary.weekEnd"
          :weeklyAmount="weeklySummary.totalAmount"
        />
      </div>
      <div class="flex items-center text-2xl" @click="$emit('onClickNext')">＞</div>
    </div>

    <TheCard>
      <div class="flow-root overflow-auto">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
          <template v-for="item in weeklySummary.items" :key="item.id">
            <SummaryRecordItem :tag="item.tag" :amount="item.amount" :date="item.date" />
          </template>
        </ul>
      </div>
    </TheCard>
  </TheCard>
</template>
