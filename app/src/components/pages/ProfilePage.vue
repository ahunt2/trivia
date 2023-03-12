<script setup>
import { onMounted, computed } from 'vue'
import { useUserStore } from '../../stores/users'
import { useDatabase } from '../../composition/useDatabase'

const userStore = useUserStore()
const user = computed(() => userStore.user)
const username = computed(() => user.value.username)

onMounted(async () => {
  const db = useDatabase()
  const user = await db.getMe()
  userStore.setUser(user)
})

// TODO: modal for updating username or password
function changeUsername() {
}

function changePassword() {
}
</script>

<template>
  <div class="profile">
    <h1 class="heading">Profile</h1>

    <div class="profile-body">
      <div class="profile-item">
        <h1 class="w-24">Username</h1>
        <h1>{{ username }}</h1>
      </div>

      <div class="text-center">
        <button class="base-btn" @click="changeUsername">
          Change username
        </button>
      </div>
      
      <div class="text-center">  
        <button class="base-btn" @click="changePassword">
          Change password
        </button>
      </div>
    </div>
  </div>
    
</template>

<style scoped>
.profile {
  @apply absolute top-14 py-12 px-8 w-screen h-screen;
}

.profile-body {
  @apply mt-8 space-y-8 mx-auto;
}

.profile-item {
  @apply flex space-x-12 text-right;
}

h1 {
  @apply font-semibold;
}
</style>