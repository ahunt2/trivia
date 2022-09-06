<script setup>
import { ref } from 'vue'

const props = defineProps(['place', 'username', 'score'])
</script>

<template>
  <!-- <div class="display">
    <div class="w-12">
      <h1>{{ place }}</h1>
    </div>
    <div class="w-24">
      <h1>{{ username }}</h1>
    </div>
    <div class="w-12">
      <h1>{{ score }}</h1>
    </div>
  </div> -->
</template>

<style scoped>
.display {
  @apply text-lg font-semibold;
}
</style>