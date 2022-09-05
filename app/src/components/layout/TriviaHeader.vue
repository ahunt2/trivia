<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../../stores/users'
import TheMenu from './TheMenu.vue'

const user = useUserStore()

const props = defineProps(['menu'])

const menuOpen = ref(false)

function toggleMenu() {
  console.log('toggle')
  menuOpen.value = !menuOpen.value
}
</script>

<template>
  <div>
    <div class="header">
      <h1 class="header-text">Trivia</h1>
      <!-- <div class="header-btn" @click="toggleMenu" v-if="props.menu">
        <the-menu />
      </div> -->
      <button @click="toggleMenu()" class="pr-6 header-btn" v-if="props.menu">
        <font-awesome-icon class="fa-xl" icon="fa-solid fa-bars" />
      </button>
    </div>
    <transition>
      <the-menu v-if="menuOpen" @toggle-menu="toggleMenu" />
    </transition>
  </div>
</template>

<style scoped lang="postcss">
.header {
  @apply flex absolute top-0 w-screen h-14 py-3 px-6 bg-sky-400 text-zinc-800 items-center;
}

.header-text {
  @apply text-xl font-semibold;
}

.header-btn {
  @apply absolute h-auto right-0;
}

.animate {
  animation: menu-open 1s ease-in-out forwards;
}

/* .menu {
  @apply bg-red-400 h-screen opacity-25 absolute z-20 top-0;
} */

.v-enter-from {
  transform: translateX(100%);
}

.v-enter-active {
  transition: all 0.5s ease-out;
}

.v-enter-to {
  transform: translateX(0%);
}

.v-leave-from {
  transform: translateX(0%);
}

.v-leave-active {
  transition: all 0.3s ease-in-out;
}

.v-leave-to {
  transform: translateX(100%);
}
</style>