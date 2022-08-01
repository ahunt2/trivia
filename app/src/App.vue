<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TriviaHeader from './components/layout/TriviaHeader.vue'
</script>

<template>
  <div class="app">
    <router-view class="w-screen" />
  </div>
</template>

<style>
.app {
  @apply w-screen h-screen min-w-[320px] bg-stone-900 text-zinc-300;
}

.form {
  /* @apply container w-96 rounded-xl border-2 p-3 my-8 space-y-4; */
  @apply container w-96 rounded-xl p-3 my-8 space-y-4;
}

.form-btn {
  @apply w-24 border-2 rounded-lg py-1;
}

.form-input {
  @apply w-80 rounded py-1 px-2 text-black;
}
</style>
