<script setup>
import { ref } from 'vue'

const props = defineProps(['place', 'username', 'score'])
</script>

<template>
  <div class="leaderboard-item">
    <div class="w-12">
      <font-awesome-icon v-if="place===1" class="text-yellow-300" icon="fa-solid fa-trophy" />
      <font-awesome-icon v-else-if="place===2" class="text-stone-300" icon="fa-solid fa-trophy" />
      <font-awesome-icon v-else-if="place===3" class="text-yellow-600" icon="fa-solid fa-trophy" />
      <h1 v-else>{{ place }}</h1>
    </div>
    <div class="w-44">
      <h1>{{ username }}</h1>
    </div>

    <div class="w-12">
      <h1>{{ score }}</h1>
    </div>
  </div>
</template>

<style scoped>
.leaderboard-item {
  @apply text-lg font-semibold flex space-x-5;
}
</style>