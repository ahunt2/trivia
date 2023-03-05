import { createRouter, createWebHistory } from 'vue-router'
import { useDatabase } from '../composition/useDatabase'
import Login from '../views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      component: () => import('../views/HomeView.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../components/question/QuestionContainer.vue')
        },
        {
          path: '/profile',
          name: 'profile',
          component: () => import('../components/pages/ProfilePage.vue')
        },
        {
          path: '/stats',
          name: 'stats',
          component: () => import('../components/pages/StatsPage.vue')
        },
        {
          path: '/leaderboard',
          name: 'leaderboard',
          component: () => import('../components/pages/LeaderboardPage.vue')
        }
      ],
      beforeEnter: async (to, from, next) => {
        const database = useDatabase()
        const isAuthenticated = await database.isAuthenticated()

        if (!isAuthenticated && to !== 'login') {
          return next({ name: 'login' })
        }
        next()
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

export default router
