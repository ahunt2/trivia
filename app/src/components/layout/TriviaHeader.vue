<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../../stores/users'
import TheMenu from './TheMenu.vue'

const user = useUserStore()
const router = useRouter()

// function signout() {
//   user.signout()
//   router.push('/login')
// }
</script>

<template>
  <div class="header">
    <h1 class="header-text">Trivia</h1>
    <div class="header-btn">
      <the-menu />
    </div>
  </div>
</template>

<style scoped>
.header {
  @apply flex w-screen h-auto py-3 px-6 bg-sky-400 text-zinc-800;
}

.header-text {
  @apply text-xl font-semibold;
}

.header-btn {
  @apply absolute h-auto right-0;
}
</style>