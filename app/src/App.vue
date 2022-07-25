<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TriviaHeader from './components/layout/TriviaHeader.vue'
</script>

<template>
  <div class="app">
    <router-view class="w-screen" />
  </div>
</template>

<style scoped>
.app {
  @apply w-screen h-screen min-w-[320px] bg-stone-900 text-zinc-300;
}
</style>
