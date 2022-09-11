<script setup>
import { useQuestionStore } from '../../stores/question'

const questions = useQuestionStore()
const emit = defineEmits(['new-question', 'submit'])

function submit() {
  // if (questions.selected === '') return
  emit('submit-answer')
}

function newQuestion() {
  emit('new-question')
}
</script>

<template>
  <div class="absolute bottom-24 container space-y-4">
    <!-- <div class="btn-item"> -->
      <button @click="submit()" class="btn-item">Submit</button>
    <!-- </div> -->
    <!-- <div class="btn-item container"> -->
      <button @click="newQuestion()" class="btn-item">New Question</button>
    <!-- </div> -->
  </div>
</template>

<style scoped>
.btn-item {
  @apply w-48 p-2 border-2 rounded-lg cursor-pointer bg-sky-400;
}

.btn-item:hover {
  cursor: pointer;
  @apply font-semibold text-sky-400 border-sky-400;
}
</style>