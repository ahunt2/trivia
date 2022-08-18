import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'users',
  state: () => ({
    isAuthenticated: false,
    id: '',
    username: '',
    score: 0,
    totalCorrect: 0,
    totalIncorrect: 0
  }),
  getters: {
    totalGuesses(state) {
      return state.totalCorrect + state.totalIncorrect
    }
  },
  actions: {
    setAuthentication(value) {
      this.isAuthenticated = value
    },

    incrementScore(value) {
      this.score += value
    },

    incrementCorrect() {
      this.totalCorrect++
    },

    incrementIncorrect() {
      this.totalIncorrect++
    },

    loadUser(user) {
      this.isAuthenticated = true
      this.id = user.id
      this.username = user.username
      this.score = user.score
      this.totalCorrect = user.totalCorrect
      this.totalIncorrect = user.totalIncorrect
    },

    signout() {
      $cookies.remove('token')
    }
  }
})