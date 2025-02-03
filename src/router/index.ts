import { createRouter, createWebHistory } from 'vue-router'
import { WelcomePage } from '@/pages/welcome'
import { KaimemoPage } from '@/pages/kaimemo'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'kaimemo',
      component: KaimemoPage,
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: WelcomePage,
    },
  ],
})

export default router
