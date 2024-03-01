import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'props',
      component: () => import('../views/01_props/Father.vue')
    },
    {
      path: '/props',
      name: 'props',
      component: () => import('../views/01_props/Father.vue')
    },
    {
      path: '/custom-events',
      name: 'custom-events',
      component: () => import('../views/02_customEvents/Father.vue')
    },
    {
      path: '/event-bus',
      name: 'event-bus',
      component: () => import('../views/03_event-bus/Father.vue')
    },
    {
      path: '/v-model',
      name: 'v-model',
      component: () => import('../views/04_v-model/Father.vue')
    },
  ]
})

export default router
