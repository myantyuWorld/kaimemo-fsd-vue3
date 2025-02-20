<script setup lang="ts">
import { BaseModal, PlusButton, PrimaryButton, SecondaryButton, TheForm } from '@/shared/ui'
import MonthlySummaryTile from './MonthlySummaryTile.vue'
import { useInteraction } from '../hooks/useInteraction'
import { formatYearMonth } from '@/shared/util/string'
import WeeklySummaryTile from './WeeklySummaryTile.vue'

const {
  isOpenModal,
  operatingCurrentDate,
  currentMonthlySummary,
  currentWeeklySummary,
  errors,
  defineField,
  onClickAddAmountModal,
  onClickCloseAmountModal,
  onClickMonthlyPrev,
  onClickMonthlyNext,
  onClickWeeklyPrev,
  onClickWeeklyNext,
  onClickAddAmountRecord,
} = useInteraction()

const [amount, amountProps] = defineField('amount')
const [tag, tagProps] = defineField('tag')
const [date, dateProps] = defineField('date')
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

    <PlusButton @click="onClickAddAmountModal" />

    <BaseModal title="金額追加" :isOpen="isOpenModal" @closeModal="onClickCloseAmountModal">
      <template #modalBody>
        <TheForm label="日付">
          <input
            type="date"
            class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1"
            :class="{ 'bg-red-50 border-red-500': errors.date }"
            v-model="date"
            v-bind="dateProps"
          />
          <p class="mt-2 text-sm text-red-600 dark:text-red-500">{{ errors.date }}</p></TheForm
        >
        <TheForm label="tag">
          <select
            class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1"
            :class="{ 'bg-red-50 border-red-500': errors.tag }"
            v-model="tag"
            v-bind="tagProps"
          >
            <option value="食費">食費</option>
            <option value="日用品">日用品</option>
          </select>
          <p class="mt-2 text-sm text-red-600 dark:text-red-500">{{ errors.tag }}</p>
        </TheForm>
        <TheForm label="金額">
          <input
            type="number"
            class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1"
            :class="{ 'bg-red-50 border-red-500': errors.amount }"
            v-model="amount"
            v-bind="amountProps"
          />
          <p class="mt-2 text-sm text-red-600 dark:text-red-500">{{ errors.amount }}</p>
        </TheForm>
      </template>

      <template #buttons>
        <SecondaryButton @click="onClickCloseAmountModal">閉じる</SecondaryButton>
        <PrimaryButton @click="onClickAddAmountRecord">追加</PrimaryButton>
      </template>
    </BaseModal>
  </div>
</template>
