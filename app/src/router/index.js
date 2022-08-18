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
        },
        {
          path: '/profile',
          component: () => import('../views/ProfileView.vue')
        },
        {
          path: '/leaderboard',
          component: () => import('../views/LeaderboardView.vue')
        }
      ],
      beforeEnter: (to, from) => {
        if (!$cookies.get('token')) {
          return '/login'
        }
      }
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
