<script setup>
import { ref, computed } from 'vue'
import { useQuestionStore } from '../../stores/question';
import AnswerItem from './AnswerItem.vue'

const question = useQuestionStore()
const props = defineProps(['answers'])
const emit = defineEmits(['select-answer'])
const selected = ref('')
const answered = computed(() => question.answered)

const itemStyle = computed(() => {
  // TODO: maybe doing this with indexes would be better?
  // if (answered.value && (selected.value === question.correct)) return 'bg-green-500'
  // else if (answered.value && (selected.value !== question.correct)) return 'bg-red-500'
  // else return ''
  return ''
})
</script>

<template>
<div class="space-y-4 container">
  <AnswerItem 
    v-for="(answer, index) in props.answers"
    :disabled="question.answered" 
    class="item container" 
    :class="itemStyle"  
    :key="index" 
    :id="index" 
    :text="answer" />
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