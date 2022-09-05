<script setup>
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import TriviaHeader from '../components/layout/TriviaHeader.vue'
import axios from 'axios'

const router = useRouter()

const username = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

async function submit() {
  if (!validate()) return

  const result = await axios.post('http://localhost:3001/api/auth/register', {
    username: username.value,
    email: email.value,
    password: password.value
  })

  if (result) {
    console.log(result)
    $cookies.set('token', result.data.token)
    router.push('/')
  }
}

function cancel() {
  console.log('cancel')
}

function validate() {
  if (!username.value) return false
  if (!email.value) return false
  if (!password.value || password.value.length < 6) return false
  if (confirmPassword.value !== password.value) return false
  return true
}
</script>

<template>
  <div>
    <trivia-header :menu="false" />
    <div class="display">
      <div class="content">
        <h1 class="text-2xl font-semibold">Signup</h1>
        <div class="form-group">
          <div> 
            <h2>USERNAME</h2>
          </div>
          <div> 
            <input v-model="username" class="form-input" type="text" placeholder="Enter username..." />
          </div>
        </div>

        <div class="form-group">
          <div> 
            <h2>EMAIL</h2>
          </div>
          <div> 
            <input type="email" v-model="email" class="form-input" placeholder="Enter email..." />
          </div>
        </div>

        <div class="form-group">
          <div> 
            <h2>PASSWORD</h2>
          </div>
          <div> 
            <input v-model="password" class="form-input" type="password" />
          </div>
        </div>

        <div class="form-group">
          <div> 
            <h2>CONFIRM PASSWORD</h2>
          </div>
          <div> 
            <input v-model="confirmPassword" class="form-input" type="password" />
          </div>
        </div>

        <div class="space-y-2 space-x-6 text-center">
          <button class="form-btn" type="button" @click="submit()">Submit</button>
          <button class="form-btn" type="button" @click="cancel()">Cancel</button>
        </div>
        <div class="container text-center"> 
          <h2>Already have an account? Login <router-link to="/login" class="text-sky-400">here</router-link>.</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
  .form {
    @apply absolute top-14 text-center;
  }

  .form-group {
    @apply space-y-2 container text-left pl-6;
  }

  .display {
    @apply absolute top-14 h-screen w-screen py-12;
  }

  .content {
    @apply w-96 mx-auto space-y-12;
  }
</style>