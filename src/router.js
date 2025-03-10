import { createWebHistory, createRouter } from 'vue-router'
import lesson from './router/lesson'



const router = createRouter({
  history: createWebHistory(),
  routes : [{...lesson}],
})

export default router
