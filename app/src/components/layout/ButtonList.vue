<script setup>
const emit = defineEmits(['new-question'])

function submit() {
  console.log('submit')
}

function newQuestion() {
  console.log('new question')
}
</script>

<template>
  <div class="space-y-4">
    <div class="btn-item container">
      <button @click="submit()">Submit</button>
    </div>
    <div class="btn-item container">
      <button @click="newQuestion()">New Question</button>
    </div>
  </div>
</template>

<style scoped>
.btn-item {
  @apply w-48 p-2 bg-red-600 border-2 rounded-lg;
}
</style>