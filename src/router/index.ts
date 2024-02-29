import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'props',
      component: () => import('../views/props/Father.vue')
    },
    {
      path: '/props',
      name: 'props',
      component: () => import('../views/props/Father.vue')
    },
    {
      path: '/custom-events',
      name: 'custom-events',
      component: () => import('../views/customEvents/Father.vue')
    },
  ]
})

export default router
