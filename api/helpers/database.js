import axios from 'axios'
require('dotenv')

export const useDatabase = () => {
  async function login(username, password) {
    try {
      const res = await axios.post(`${process.env.BASE_URL}/api/auth/login`, {
        username,
        password
      })
      console.log('no error')
    } catch (err) {
      console.log('error')
      console.error(err)
    }
  }

  async function register(username, email, password) {
    const res = await axios.post(`${process.env.BASE_URL}/api/auth/register`, {
      username, email, password
    })
  }

  return {
    login,
    register
  }
}