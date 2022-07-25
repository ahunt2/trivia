<script setup>
import { ref } from 'vue'
import AnswerItem from './AnswerItem.vue'

const props = defineProps(['answers'])
const selected = ref('')

console.log(props.answers)

function selectAnswer(id) {
  console.log(`emit select-answer ${id}`)
}
</script>

<template>
<div class="space-y-4 container">
  <AnswerItem class="item container" :class="{ selectedItem: selected === answer.text }" v-for="answer in props.answers" :key="answer.text" :id="answer.text" :text="answer.text" @select-answer="(id) => selectAnswer(id)" />
</div>
</template>

<style scoped>
.item {
  @apply w-72 p-2 text-white bg-green-500 border-2 rounded-lg;
}
.selectedItem {
  color: blue;
}
</style>