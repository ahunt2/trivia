import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      component: () => import('../views/HomeView.vue'),
      children: [
        {
          path: '',
          component: () => import('../components/question/QuestionDisplay.vue')
        }
      ]
    },
    {
      path: '/login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/signup',
      component: () => import('../views/Signup.vue')
    }
  ]
})

export default router
