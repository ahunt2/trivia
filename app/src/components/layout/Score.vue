<script setup>
import { ref, computed } from 'vue'
import { useUserStore } from '../../stores/users'

const userStore = useUserStore()
const score = computed(() => userStore.score)
</script>

<template>
  <div class="score">
    <h2>Score: {{ score }}</h2>
  </div>
</template>

<style scoped>
.score {
  @apply w-full py-2 px-3;
}
</style>