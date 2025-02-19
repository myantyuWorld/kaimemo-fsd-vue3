import { createRouter, createWebHistory } from 'vue-router'
import { WelcomePage } from '@/pages/welcome'
import { KaimemoPage } from '@/pages/kaimemo'
import { KaimemoSummaryPage } from '@/pages/kaimemo-summary'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'kaimemo',
      component: KaimemoPage,
    },
    {
      path: '/summary',
      name: 'summary',
      component: KaimemoSummaryPage,
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: WelcomePage,
    },
  ],
})

export default router
