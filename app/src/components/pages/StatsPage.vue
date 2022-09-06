<script setup>
import { ref, computed } from 'vue'

const totalQuestions = ref(0)
const correct = ref(0)
const incorrect = ref(0)
const percentage = computed(() => {
  if (totalQuestions.value === 0) return 0
  return (correct/totalQuestions).toFixed(2)
})

</script>

<template>
  <div class="display">
    <div class="mt-12">
      <h1 class="text-2xl font-semibold">Stats</h1>
    </div>

    <div class="grid grid-cols-3 gap-12 container">
      <h1 class="col-span-2">Questions Answered:</h1>
      <h1>{{ totalQuestions }}</h1>

      <h1 class="col-span-2">Correct Guesses:</h1>
      <h1>{{ correct }}</h1>

      <h1 class="col-span-2">Incorrect Guesses:</h1>
      <h1>{{ incorrect }}</h1>

      <h1 class="col-span-2">Correct Rate:</h1>
      <h1>{{ percentage }}%</h1>

      </div>
  </div>
</template>

<style scoped lang="postcss">
.display {
  @apply absolute top-14 w-screen px-8;
}

.grid {
  @apply py-12 text-lg font-semibold;
}
</style>