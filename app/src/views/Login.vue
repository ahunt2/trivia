<script setup>
import { ref, reactive } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { useDatabase } from '../composition/useDatabase'
import { useUserStore } from '../stores/users'
import TriviaHeader from '../components/layout/TriviaHeader.vue'

const database = useDatabase()
const router = useRouter()
const userStore = useUserStore()

const username = reactive({
  value: '',
  error: false,
  message: ''
})
const password = reactive({
  value: '',
  error: false,
  message: ''
})

async function submit() {
  const { error } = await database.login({ 
    username: username.value, 
    password: password.value 
  })

  if (!error) {
    const user = await database.getMe()
    userStore.setUser(user)
    router.push('/')
  } 
}

function cancel() {
  username.value = ''
  password.value = ''
}
</script>

<template>
  <div>
    <trivia-header :menu="false" />
    <div class="display">
      <div class="content">
        <h1 class="text-2xl font-semibold pl-6">Login</h1>
        <div class="form-group">
          <div> 
            <h2>USERNAME</h2>
          </div>
          <div> 
            <input v-model="username.value" class="form-input" type="text" placeholder="Enter username..." />
          </div>
        </div>

        <div class="form-group">
          <div> 
            <h2>PASSWORD</h2>
          </div>
          <div> 
            <input v-model="password.value" class="form-input" type="password" />
          </div>
        </div>

        <!-- <div v-if="error !== ''">
          <h1 class="text-red-400">{{ error }}</h1>
        </div> -->

        <div class="space-y-2 space-x-6 text-center">
          <button class="form-btn" type="button" @click="submit">Submit</button>
          <button class="form-btn" type="button" @click="cancel">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .form {
    @apply absolute top-14 text-center;
  }

  .form-group {
    @apply space-y-2 container text-left pl-6;
  }

  .form-btn:active {
    @apply bg-sky-400 text-black;
  }

  .display {
    @apply absolute top-14 h-screen w-screen py-12;
  }

  .content {
    @apply w-96 mx-auto space-y-12;
  }
</style>