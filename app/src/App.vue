<script setup>
import { onBeforeMount, onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { useLeaderboard } from './stores/leaderboard'
import io from './services/socketio.services'

const leaderboard = useLeaderboard()

onBeforeMount(() => {
  io.setupSocketConnection()
})

onMounted(() => {
  io.socket.on('update-leaderboard', (data) => leaderboard.updateLeaderboard(data))
})
</script>

<template>
  <div class="app">
    <router-view class="w-screen h-screen absolute top-0" />
  </div>
</template>

<style>
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

.heading {
  @apply text-2xl font-semibold;
}

.base-btn {
  @apply w-40 bg-stone-700 h-8 rounded-lg;
}
</style>
