import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: () => import('@/views/Login.vue') },
  { path: '/signup', component: () => import('@/views/Signup.vue') }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      // Use setTimeout to ensure DOM is rendered
      return new Promise((resolve) => {
        setTimeout(() => {
          const el = document.querySelector(to.hash)
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' })
          }
          resolve({ el: to.hash })
        }, 300)
      })
    }
    return { top: 0 }
  }
})

export default router