<script setup lang="ts">
import { Calendar } from 'v-calendar'
import 'v-calendar/style.css'
import { useInteraction } from '../hooks/useInteraction'
const props = defineProps<{
  date: string
}>()

const attr = [
  {
    key: 'today',
    highlight: 'red',
    dates: [new Date()],
    event: {
      label: 'test',
    },
    popover: {
      label: 'Today',
    },
  },
]

useInteraction({ id: () => props.date })
</script>

<template>
  <Calendar :date="props.date" expanded :attributes="attr" />
</template>

<style>
.vc-title {
  font-size: 1.5rem;
}
.vc-day {
  height: 100px;
}

.vc-day-content {
  height: 100px;
}
</style>
