<script setup>
function changeUsername() {

}

function changeEmail() {

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
        <h1>temp-username</h1>
      </div>
      
      <div class="profile-item">
        <h1 class="w-24">Email</h1>
        <h1>temp@email.com</h1>
      </div>

      <div class="text-center">
        <button class="base-btn" @click="changeUsername">
          Change username
        </button>
      </div>
      
      <div class="text-center">
        <button class="base-btn" @click="changeEmail">
          Change email
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
</style>