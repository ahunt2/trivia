<script setup>
import { ref } from 'vue'
import AnswerItem from './AnswerItem.vue'

const props = defineProps(['answers'])
const selected = ref('')

function selectAnswer(id) {
  console.log(`emit select-answer ${id}`)
}
</script>

<template>
<div>
  <AnswerItem :class="{ selectedItem: selected === answer.text }" v-for="answer in answers" :key="answer.text" :id="answer.text" :text="answer.text" @select-answer="(id) => selectAnswer(id)" />
</div>
</template>

<style scoped>
.item {
  color: white;
}
.selectedItem {
  color: blue;
}
</style>