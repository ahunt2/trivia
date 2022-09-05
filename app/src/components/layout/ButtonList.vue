<script setup>
const emit = defineEmits(['new-question', 'submit'])

function submit() {
  emit('submit-answer')
}

function newQuestion() {
  emit('new-question')
}
</script>

<template>
  <div class="absolute bottom-24 container space-y-4">
    <div class="btn-item container">
      <button @click="submit()">Submit</button>
    </div>
    <div class="btn-item container">
      <button @click="newQuestion()">New Question</button>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.btn-item {
  @apply w-48 p-2 border-2 rounded-lg;
}

.btn-item:hover {
  cursor: pointer;
  @apply font-semibold text-sky-400 border-sky-400;
}
</style>