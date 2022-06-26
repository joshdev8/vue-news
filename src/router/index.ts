import { createRouter, createWebHistory } from 'vue-router'
import NewsView from '../views/NewsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'news',
      component: NewsView
    }
  ]
})

export default router
