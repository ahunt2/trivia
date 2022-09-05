<script setup>
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import Divider from './Divider.vue';

const router = useRouter()
const emit = defineEmits(['toggle-menu'])

function switchView(view) {
  if (view === '/signout') {
    $cookies.remove('token')
    router.push('/login')
  } else {
    router.push(view)
  }
  
  emit('toggle-menu')
}
</script>

<template>
  <div class="menu">
   <div class="menu-item" @click="switchView('/')">
    <div class="item-group">
      <font-awesome-icon icon="fa-solid fa-house" class="w-12" />
      <h1>Home</h1>
    </div>
   </div>
   <divider />
   <div class="menu-item" @click="switchView('/profile')">
    <div class="item-group">
      <font-awesome-icon icon="fa-solid fa-user" class="w-12" />
      <h1>Profile</h1>
    </div>
   </div>
   <divider />
   <div class="menu-item" @click="switchView('/leaderboard')">
    <div class="item-group">
      <font-awesome-icon icon="fa-solid fa-trophy" class="w-12" />
      <h1>Leaderboard</h1>
    </div>
   </div>
   <divider />
   <div class="menu-item" @click="switchView('/signout')">
    <div class="item-group">
      <font-awesome-icon icon="fa-solid fa-right-from-bracket" class="w-12" />
      <h1>Signout</h1>
    </div>
   </div>
   <divider />
   <div class="footer">
    <h1 class="text-xl font-semibold">Version 1.0.0</h1>
   </div>
  </div>
</template>

<style scoped lang="postcss">
.menu {
  @apply w-screen bg-zinc-800 h-screen absolute top-14 z-20 text-center py-12;
}

.menu-item {
  @apply text-center text-xl font-semibold cursor-pointer h-12 items-center py-12;
}

.item-group {
  @apply flex space-x-6 items-center pl-4;
}

.footer {
  @apply pt-12;
}
</style>