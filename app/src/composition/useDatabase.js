import axios from 'axios'
import { useUserStore } from '../stores/users'

const host = 'localhost:5080'

export const useDatabase = () => {
  const protect = axios.create()
  protect.interceptors.request.use((config) => {
    const token = sessionStorage.getItem('access_token')
    config.headers = {
      Authorization: `Bearer ${token}`
    }
    return config
  })

  /**
   * Login user
   * @param {username, password} user user credentials
   * @returns error true or false
   */
  async function login(user) {
    try {
      const result = await axios.post(`http://${host}/api/auth/login`, user)
      sessionStorage.setItem('access_token', result.data)

      // const userStore = useUserStore()
      // const user = await getMe()
      // userStore.setUser(user)

      return { error: false }
    } catch (error) {
      return { error: true }
    }
  }

  /**
   * Get the current logged in user
   * @returns user data or error
   */
  async function getMe() {
    try {
      const res = await protect.get(`http://${host}/api/auth/me`)
      return res.data
    } catch (error) {
      return { error: true, message: 'Unauthorized'}
    }
  }

  async function isAuthenticated() {
    try {
      await protect.get(`http://${host}/api/auth/authenticated`)
      return true
    } catch (error) {
      return false
    }
  }

  async function updateUser(updated) {
    try {
      const result = await protect.put(`http://${host}/api/auth/update`, updated)
      const userStore = useUserStore()
      userStore.setUser(result.data)
      return {}
    } catch (error) {
      return { error: true }
    }
  }

  async function updateScore(update) {
    try {
      await protect.put(`http://${host}/api/scores`, update)
      const user = await getMe()
      const userStore = useUserStore()
      userStore.setUser(user)
    } catch (error) {
      return { error: true }
    }
  }

  return {
    login,
    getMe,
    isAuthenticated,
    updateUser,
    updateScore
  }
}

