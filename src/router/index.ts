import { createRouter, createWebHistory } from 'vue-router'
import { WelcomePage } from '@/pages/welcome'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: WelcomePage,
    },
  ],
})

export default router
