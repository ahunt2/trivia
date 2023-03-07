import { defineStore } from 'pinia'
import axios from 'axios'
import { randomize } from '../../utils/randomize'
import { decodeString } from '../../utils/decodeString'
import { useUserStore } from './users'

export const useQuestionStore = defineStore({
  id: 'question',
  state: () => ({
    question: '',
    correct: undefined,
    answers: [],
    difficulty: 0,
    answered: false,
    selected: undefined,
    isLoading: false
  }),
  actions: {
    async loadNewQuestion() {
      this.isLoading = true
      this.reset()
      const res = await axios.get('https://opentdb.com/api.php?amount=1&type=multiple')
      const [data] = res.data.results

      console.log(data)

      this.question = decodeString(data.question)
      this.setAnswers(data)
      this.setDifficulty(data)
      this.setIndex(data)
      this.isLoading = false
    },

    reset() {
      this.question = ''
      this.correct = undefined
      this.answers = []
      this.difficulty = 0
      this.answered = false
      this.selected = undefined
    },

    setAnswers(data) {
      let answers = data.incorrect_answers
      answers = [...answers, data.correct_answer]
      randomize(answers)
      this.answers = answers.map(el => decodeString(el))
    },

    setDifficulty(data) {
      if (data.difficulty === 'easy') {
        this.difficulty = 1
      } else if (data.difficulty === 'medium') {
        this.difficulty = 2
      } else {
        this.difficulty = 3
      }
    },

    setIndex(data) {
      const correct = decodeString(data.correct_answer)
      const index = this.answers.findIndex((answer) => answer === correct)
      this.correct = index
    },

    async incrementScore() {
      const user = useUserStore
      const value = this.difficulty * 10

      user.incrementScore(value)
      user.incrementCorrect()
    },

    setAnswered(value) {
      this.answered = value
    },

    setSelected(index) {
      this.selected = index
    }
  }
})