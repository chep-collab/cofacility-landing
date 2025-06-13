import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: () => import('@/views/Login.vue') },
  { path: '/signup', component: () => import('@/views/Signup.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router