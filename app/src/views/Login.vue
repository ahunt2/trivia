<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useUserStore } from '../stores/users'
import TriviaHeader from '../components/layout/TriviaHeader.vue'
import axios from 'axios'

const userStore = useUserStore()
const username = ref('')
const password = ref('')

async function submit() {
  // TODO: set up validation
  console.log('submit')
  const data = JSON.stringify({ username: username.value, password: password.value })

  const res = await axios.post('http://localhost:3001/api/login', {
    username: username.value,
    password: password.value
  })

  await res
  console.log(res)
  if ( res.error ) {
    console.error(res.error)
  } else {
    userStore.loadUser(res.body)
  }
}

function cancel() {
  username.value = ''
  password.value = ''
}
</script>

<template>
  <div class="w-screen">
    <trivia-header class="w-screen" />
    <div class="form"> 
      <h1 class="text-2xl font-semibold">Login</h1>
      <form @submit.prevent class="space-y-4">
        <div class="space-y-2 container">
          <div> 
            <h2>USERNAME</h2>
          </div>
          <div> 
            <input class="form-input" type="text" placeholder="Enter username..." />
          </div>
        </div>

        <div class="space-y-2">
          <div> 
            <h2>PASSWORD</h2>
          </div>
          <div> 
            <input class="form-input" type="password" />
          </div>
        </div>

        <div class="space-y-2 space-x-6 text-center">
          <button class="form-btn" type="button" @click="submit()">Submit</button>
          <button class="form-btn" type="button" @click="cancel()">Cancel</button>
        </div>
      </form>
    </div>

    <div class="container text-center"> 
      <h2>Don't have an account? Signup <router-link to="/signup" class="text-sky-400">here</router-link>.</h2>
    </div>
  </div>
</template>