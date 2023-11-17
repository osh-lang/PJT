import { createRouter, createWebHistory } from 'vue-router'
import Community1View from '@/views/Community1View.vue'
import Community2View from '@/views/Community2View.vue'
import LoginView from '@/views/LoginView.vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/community1',
      name: 'Community1View',
      component: Community1View
    },
    {
      path: '/community2',
      name: 'Community2View',
      component: Community2View
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView
    },
  ]
})

export default router
