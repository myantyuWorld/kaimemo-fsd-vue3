import { z } from 'zod'

export const schema = z.object({
  date: z.string({ required_error: '必ず選択してね' }),
  tag: z.string({ required_error: '必ず選択してね' }),
  amount: z.number({ required_error: '必ず入力してね' }),
})

export type KaimemoSummarySchema = z.infer<typeof schema>
