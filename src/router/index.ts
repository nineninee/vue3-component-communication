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
    {
      path: '/useAttrs',
      name: 'useAttrs',
      component: () => import('../views/05_useAttrs/Father.vue')
    },
    {
      path: '/ref-$parent',
      name: 'ref-$parent',
      component: () => import('../views/06_ref-$parent/Father.vue')
    },
    {
      path: '/provide-inject',
      name: 'provide-inject',
      component: () => import('../views/07_provide-inject/Father.vue')
    },
    
  ]
})

export default router
