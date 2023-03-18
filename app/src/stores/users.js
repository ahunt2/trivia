import { defineStore } from 'pinia'
import { useDatabase } from '../composition/useDatabase'
import io from '../services/socketio.services'

export const useUserStore = defineStore({
  id: 'users',
  state: () => ({
    id: '',
    username: '',
    score: 0,
    questionsAnswered: 0,
    correctAnswers: 0
  }),
  actions: {
    incrementScore(difficulty) {
      this.incrementCorrect()
      const value = difficulty * 10
      this.score += value
    },

    incrementCorrect() {
      this.correctAnswers++
    },

    incrementAnswered() {
      this.questionsAnswered++
    },

    setUser(user) {
      this.id = user._id
      this.username = user.username
      this.score = user.score
      this.questionsAnswered = user.questionsAnswered
      this.correctAnswers = user.correctAnswers
    },

    update(user) {
      const { score, questionsAnswered, correctAnswers } = user
      this.score = score
      this.questionsAnswered = questionsAnswered
      this.correctAnswers = correctAnswers
    },

    updateUser() {
      const db = useDatabase()
      db.updateUser(this.user)
    },

    updateScore(update) {
      const token = sessionStorage.getItem('access_token')
      io.socket.emit('update-user', update, token)
    }
  },
  getters: {
    user: (state) => {
      return {
        id: state.id,
        username: state.username,
        score: state.score,
        questionsAnswered: state.questionsAnswered,
        correctAnswers: state.correctAnswers
      }
    }
  }
})