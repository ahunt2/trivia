<script setup>
import { ref, computed } from 'vue'
import { useUserStore } from '../../stores/users'

const userStore = useUserStore()
const score = computed(() => userStore.score)
const fadeIn = ref(true)
</script>

<template>
  <div class="score">
    <h2>Score: <span :class="{ 'fade-in': fadeIn, 'fade-out': !fadeIn }">{{ score }}</span></h2>
  </div>
</template>

<style scoped>
.score {
  @apply w-full py-2 px-3;
}

.fade-in {
  visibility: visible;
  opacity: 1;
  transition: opacity 0.2s linear;
}

.fade-out {
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s 0.2s, opacity 0.2s linear;
}
</style>