import { defineStore } from 'pinia'
import axios from 'axios'
import { randomize } from '../../utils/randomize'
import { decodeString } from '../../utils/decodeString'
import { useUserStore } from './users'

export const useQuestionStore = defineStore({
  id: 'question',
  state: () => ({
    question: '',
    correct: '',
    answers: [],
    difficulty: 0
  }),
  actions: {
    async loadNewQuestion() {
      const res = await axios.get('https://opentdb.com/api.php?amount=1&type=multiple')
      await res
      const data = res.data.results[0]

      let answers = data.incorrect_answers
      answers = [...answers, data.correct_answer]
      randomize(answers)

      let difficulty
      if (data.difficulty === 'easy') {
        difficulty = 1
      } else if (data.difficulty === 'medium') {
        difficulty = 2
      } else {
        difficulty = 3
      }
      
      answers.forEach(el => decodeString(el))

      this.answers = answers
      this.correct = decodeString(data.correct_answer)
      this.question = decodeString(data.question)
      this.difficulty = difficulty
    },

    async incrementScore() {
      const user = useUserStore
      const value = this.difficulty * 10

      user.incrementScore(value)
      user.incrementCorrect()
    }
  }
})