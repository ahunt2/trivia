<script setup>
import { ref, computed } from 'vue'
import { useQuestionStore } from '../../stores/question';
import AnswerItem from './AnswerItem.vue'

const question = useQuestionStore()
const props = defineProps(['answers'])
const emit = defineEmits(['select-answer'])
const selected = ref('')

function selectAnswer(text) {
  selected.value = text
  emit('select-answer', text)
}
</script>

<template>
<div class="space-y-4 container">
  <AnswerItem :disabled="question.answered" class="item container" :class="{ selectedItem: selected === answer }" v-for="(answer, index) in props.answers" :key="index" :id="index" :text="answer" @select-answer="(text) => selectAnswer(text)" />
</div>
</template>

<style scoped>
.item {
  @apply w-72 p-2 border-2 rounded-lg;
}

.item:hover {
  cursor: pointer;
  /* @apply font-semibold border-4; */
}
.selectedItem {
  @apply bg-sky-400 text-zinc-800 font-semibold;
}
</style>