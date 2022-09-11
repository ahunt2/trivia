<script setup>
import { useQuestionStore } from '../../stores/question';

const questions = useQuestionStore()
const props = defineProps(['id', 'text'])
const emit = defineEmits(['select-answer'])

function selectAnswer() {
  console.log(`selected: ${props.text}`)
  emit('select-answer', props.text)
}
</script>

<template>
<div>
  <button @click="selectAnswer()" :disabled="questions.answered">
    <h2>{{ props.text }}</h2>
  </button>
</div>
</template>

<style scoped>
h2 {
  @apply text-sm;
}
</style>