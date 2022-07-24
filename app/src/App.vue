<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TriviaHeader from './components/layout/TriviaHeader.vue'
</script>

<template>
  <div class="app">
    <trivia-header class="w-screen" />
    <!-- <router-view class="w-screen" /> -->
  </div>
</template>

<style scoped>
.app {
  @apply w-screen h-screen bg-stone-900 text-zinc-300;
}
</style>
