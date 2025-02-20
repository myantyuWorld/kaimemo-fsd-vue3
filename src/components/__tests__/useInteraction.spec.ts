// import { describe, it, expect } from 'vitest'
// import { ref } from 'vue'
// import { useInteraction } from '@/pages/kaimemo-summary/hooks/useInteraction'

// describe('useInteraction', () => {
//   const hook = useInteraction()

//   describe('onClickMonthlyNext', () => {
//     it('should increment month when next month is before current date', () => {
//       const operatingCurrentMonth = ref(new Date('2023-01-15'))
//       hook.onClickMonthlyNext()
//       expect(operatingCurrentMonth.value).toEqual(new Date('2023-02-15'))
//     })

//     it('should not increment month when next month is after current date', () => {
//       const currentDate = new Date()
//       const futureDate = new Date()
//       futureDate.setMonth(currentDate.getMonth() + 2)

//       const operatingCurrentMonth = ref(futureDate)
//       const initialValue = operatingCurrentMonth.value

//       hook.onClickMonthlyNext()
//       expect(operatingCurrentMonth.value).toEqual(initialValue)
//     })

//     it('should handle month rollover to next year', () => {
//       const operatingCurrentMonth = ref(new Date('2023-12-15'))
//       hook.onClickMonthlyNext()
//       expect(operatingCurrentMonth.value).toEqual(new Date('2024-01-15'))
//     })
//   })
// })
