import { createRouter, createWebHistory } from 'vue-router'
import { KaimemoPage } from '@/pages/kaimemo'
import { KaimemoSummaryPage } from '@/pages/kaimemo-summary'
import { SharePage } from '@/pages/share'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'share',
      component: SharePage,
    },
    {
      path: '/kaimemo',
      name: 'kaimemo',
      component: KaimemoPage,
    },
    {
      path: '/summary',
      name: 'summary',
      component: KaimemoSummaryPage,
    },
  ],
})

export default router
