<script setup>
import { RouterView } from 'vue-router'

// TODO: check answer
// TODO: submit answer -> disable submit button
// TODO: [layout] profile & style
// TODO: [layout] leaderboard & style
// TODO: stats page?
</script>

<template>
  <div class="app">
    <router-view class="w-screen h-screen absolute top-0" />
  </div>
</template>

<style lang="postcss">
body {
  @apply overflow-hidden overscroll-none;
}

.app {
  @apply w-screen h-screen min-w-[320px] bg-stone-900 text-zinc-300 overflow-hidden overscroll-none;
}

.form {
  @apply container w-96 rounded-xl p-3 my-8 space-y-4;
}

.form-btn {
  @apply w-24 border-2 rounded-lg py-1;
}

.form-input {
  @apply w-80 rounded py-1 px-2 text-black;
}
</style>
