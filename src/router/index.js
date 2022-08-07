import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/user'

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

// 路由白名单
const whiteList = ['/login']

// 路由前置守卫
router.beforeEach(async (to, from, next) => {
  if (useUserStore().getToken) {
    if (to.path === '/login')
      next('/')
    else
      next()
  }
  else {
    if (whiteList.includes(to.path))
      next()
    else
      next('/login')
  }
})

export default router
