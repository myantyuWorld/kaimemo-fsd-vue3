import { GET } from '@/shared/api'
import type { components } from '@/shared/api/v1'
import { computed, onMounted, ref } from 'vue'

export const useInteraction = () => {
  // TODO : provide, injectで共通的に処理したい
  const loading = ref<boolean>(true)
  const operatingCurrentDate = ref<Date>(new Date())
  const summaries = ref<components['schemas']['KaimemoSummary']>()

  onMounted(async () => {
    await fetchKaimemoSummary()
  })

  const fetchKaimemoSummary = async () => {
    const { data, error } = await GET('/kaimemo/summary', {})
    if (error) {
      console.error(error)
      return []
    }

    summaries.value = data
  }

  const onClickSample = () => {
    console.log('sample')
  }

  const onClickMonthlyPrev = () => {
    operatingCurrentDate.value = new Date(
      operatingCurrentDate.value.setMonth(operatingCurrentDate.value.getMonth() - 1, 1),
    )
  }

  const onClickMonthlyNext = () => {
    const nextMonth = new Date(operatingCurrentDate.value)
    nextMonth.setMonth(nextMonth.getMonth() + 1, 1)

    if (nextMonth <= new Date()) {
      operatingCurrentDate.value = nextMonth
    }
  }

  const onClickWeeklyPrev = () => {
    const weekStart = new Date(operatingCurrentDate.value)
    weekStart.setDate(weekStart.getDate() - weekStart.getDay())
    weekStart.setDate(weekStart.getDate() - 7)

    operatingCurrentDate.value = weekStart
  }

  const onClickWeeklyNext = () => {
    const weekStart = new Date(operatingCurrentDate.value)
    weekStart.setDate(weekStart.getDate() - weekStart.getDay())
    weekStart.setDate(weekStart.getDate() + 7)

    if (weekStart <= new Date()) {
      operatingCurrentDate.value = weekStart
    }
  }

  const currentMonthlySummary = computed(() => {
    return summaries.value?.monthlySummaries.find(
      (summary) => summary.month === operatingCurrentDate.value.toISOString().slice(0, 7),
    )
  })

  const currentWeeklySummary = computed(() => {
    const weekStart = new Date(operatingCurrentDate.value)
    weekStart.setDate(weekStart.getDate() - weekStart.getDay())

    return summaries.value?.weeklySummaries.find(
      (summary) => summary.weekStart === weekStart.toISOString().slice(0, 10),
    )
  })

  return {
    loading,
    currentMonthlySummary,
    currentWeeklySummary,
    operatingCurrentDate,
    fetchKaimemoSummary,
    onClickSample,
    onClickMonthlyPrev,
    onClickMonthlyNext,
    onClickWeeklyPrev,
    onClickWeeklyNext,
  }
}
