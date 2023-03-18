import { defineStore } from 'pinia'

export const useLeaderboard = defineStore({
  id: 'leaderboard',
  state: () => ({
    rank: []
  }),
  actions: {
    updateLeaderboard(scores) {
      this.rank = scores
    }
  }
})