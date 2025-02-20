<script setup lang="ts">
import { PlusButton } from '@/shared/ui'
import MonthlySummaryTile from './MonthlySummaryTile.vue'
import { useInteraction } from '../hooks/useInteraction'
import { formatYearMonth } from '@/shared/util/string'
import WeeklySummaryTile from './WeeklySummaryTile.vue'

const {
  operatingCurrentDate,
  currentMonthlySummary,
  currentWeeklySummary,
  onClickSample,
  onClickMonthlyPrev,
  onClickMonthlyNext,
  onClickWeeklyPrev,
  onClickWeeklyNext,
} = useInteraction()
</script>

<template>
  <div>
    <div class="justify-center">
      <div class="bg-gray-100 rounded-lg shadow-lg p-4 flex items-center justify-between">
        <span class="text-3xl" @click="onClickMonthlyPrev">＜</span>
        <h1 class="text-2xl font-bold">{{ formatYearMonth(operatingCurrentDate) }}</h1>
        <span class="text-3xl" @click="onClickMonthlyNext">＞</span>
      </div>
    </div>

    <MonthlySummaryTile
      tag="食費"
      :current-expense="currentMonthlySummary?.tagSummary.食費 ?? 0"
      :available-amount="40000"
    />
    <MonthlySummaryTile
      tag="日用品"
      :current-expense="currentMonthlySummary?.tagSummary.日用品 ?? 0"
      :available-amount="10000"
    />

    <WeeklySummaryTile
      :date="operatingCurrentDate"
      :weekly-summary="
        currentWeeklySummary || { weekStart: '', weekEnd: '', totalAmount: 0, items: [] }
      "
      @onClickPrev="onClickWeeklyPrev"
      @onClickNext="onClickWeeklyNext"
    />

    <PlusButton @click="onClickSample" />
  </div>
</template>
