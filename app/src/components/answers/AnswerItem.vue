<script setup>
const props = defineProps(['id', 'text'])
const emit = defineEmits(['select-answer'])

function selectAnswer() {
  console.log(`selected: ${props.text}`)
  emit('select-answer', props.id)
}
</script>

<template>
<div @click="selectAnswer()">
  <h2>{{ props.text }}</h2>
</div>
</template>