import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    component: () => import('@/App.vue')
  },
  {
    path: '/react15',
    component: () => import('@/App.vue')
  },
  {
    path: '/react16',
    component: () => import('@/App.vue')
  },
  {
    path: '/vue2',
    component: () => import('@/App.vue')
  },
  {
    path: '/vue3',
    component: () => import('@/App.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
