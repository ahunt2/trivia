import axios from 'axios'

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
      const result = await axios.post('http://localhost:5080/api/auth/login', user)
      sessionStorage.setItem('access_token', result.data)
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
      const res = await protect.get('http://localhost:5080/api/auth/me')
      return res.data
    } catch (error) {
      return { error: true, message: 'Unauthorized'}
    }
  }

  async function isAuthenticated() {
    try {
      await protect.get('http://localhost:5080/api/auth/authenticated')
      return true
    } catch (error) {
      return false
    }
  }

  return {
    login,
    getMe,
    isAuthenticated
  }
}

