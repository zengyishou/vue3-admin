import { createRouter, createWebHistory } from 'vue-router'

const publicRoutes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/Index.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: publicRoutes,
})

export default router
