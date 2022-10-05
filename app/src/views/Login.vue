<script setup>
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { useDatabase } from '../../../api/helpers/database'
import { useUserStore } from '../stores/users'
import TriviaHeader from '../components/layout/TriviaHeader.vue'
import axios from 'axios'

const router = useRouter()
const database = useDatabase()
const userStore = useUserStore()
const username = ref('')
const password = ref('')
const error = ref('')

async function submit() {
  // TODO: set up validation

  const res = await database.login(username.value, password.value)

  if (res && res.data.token) {
      $cookies.set('token', res.data.token)
      router.push('/')
    }

  // try {    
  //   const res = await axios.post('http://localhost:5080/api/auth/login', {
  //     username: username.value,
  //     password: password.value
  //   })
    
  //   console.log(res)
    
  //   if (res && res.data.token) {
  //     $cookies.set('token', res.data.token)
  //     router.push('/')
  //   }
    
  //   if (res.data.error) {
  //     error.value = res.data.error
  //   }
  // } catch (err) {
  //   console.error(err)
  // }
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
            <input v-model="username" class="form-input" type="text" placeholder="Enter username..." />
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

        <div v-if="error !== ''">
          <h1 class="text-red-400">{{ error }}</h1>
        </div>

        <div class="space-y-2 space-x-6 text-center">
          <button class="form-btn" type="button" @click="submit()">Submit</button>
          <button class="form-btn" type="button" @click="cancel()">Cancel</button>
        </div>
        <div class="container text-center"> 
          <h2>Don't have an account? Signup <router-link to="/signup" class="text-sky-400">here</router-link>.</h2>
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