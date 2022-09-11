<script setup>
import { computed } from 'vue'
import { useQuestionStore } from '../../stores/question'

const questions = useQuestionStore()
const props = defineProps(['id', 'text'])
const emit = defineEmits(['select-answer'])
const style = computed(() => {
  if (questions.answered &&
  (questions.selected === questions.correct) &&
  (questions.correct === props.text)) return 'correct'

  else if (questions.anwered &&
  (questions.selected !== questions.correct) &&
  (questions.selected === props.text)) return 'incorrect'

  return '' 
})

function selectAnswer() {
  console.log(`selected: ${props.text}`)
  emit('select-answer', props.text)
}

// TODO: style answer buttons similar to submit and new question buttons
</script>

<template>
<div>
  <button @click="selectAnswer()" :disabled="questions.answered" :class="style">
    <h2>{{ props.text }}</h2>
  </button>
</div>
</template>

<style scoped>
h2 {
  @apply text-sm;
}

.correct {
  @apply bg-green-700;
}

.incorrect {
  @apply bg-red-700;
}
</style>