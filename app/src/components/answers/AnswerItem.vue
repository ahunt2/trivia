<script setup>
import { computed } from 'vue'
import { useQuestionStore } from '../../stores/question'

const questions = useQuestionStore()
const props = defineProps(['id', 'text'])
const emit = defineEmits(['select-answer'])

const style = computed(() => {
  if (questions.answered && (questions.correct === props.id)) return 'bg-green-600 font-semibold'
  else if (questions.answered && (props.id === questions.selected)) return 'bg-red-600 font-semibold'
  else if (questions.selected === props.id) return 'bg-sky-400 text-gray-800 font-semibold'
  return ''
})

function selectAnswer() {
  questions.setSelected(props.id)
}
</script>

<template>
<div :class="style">
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