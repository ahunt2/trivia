<script setup>
import { computed } from 'vue'
import { useLeaderboard } from '../../stores/leaderboard'
import LeaderboardItem from './LeaderboardItem.vue'

const leaderboard = useLeaderboard()
const items = computed(() => leaderboard.rank)
</script>

<template>
<div class="leaderboard">
  <h1 class="heading">Leaderboard</h1>
  <div class="item-container">
    <leaderboard-item v-for="(item, index) in items" :key="index" :place="index + 1" :username="item.username" :score="item.score" />
  </div>
</div>
</template>

<style scoped>
.leaderboard {
  @apply absolute top-14 py-12 px-8;
}

.item-container {
  @apply px-4 mt-8 space-y-5;
}
</style>