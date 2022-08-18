<script setup>
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

const router = useRouter()
const expanded = ref(false)

function signout() {
  $cookies.remove('token')
  toggleMenu()
  router.push('/login')
}

function toggleMenu() {
  expanded.value = !expanded.value
}
</script>

<template>
  <div class="dropdown">
    <button @click="toggleMenu()" class="pr-6">
      <font-awesome-icon class="fa-xl" icon="fa-solid fa-bars" />
    </button>
    <div class="dropdown-content" :class="{ expanded: expanded }">
      <router-link to="/" @click="toggleMenu()" class="menu-item">Home</router-link>
      <router-link to="/profile" @click="toggleMenu()" class="menu-item">Profile</router-link>
      <router-link to="/leaderboard" @click="toggleMenu()" class="menu-item">Leaderboard</router-link>
      <button @click="signout()" class="menu-item">Signout</button>
    </div>
  </div>
</template>

<style scoped>
/* Style The Dropdown Button */
.dropbtn {
  background-color: #4CAF50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  right: 0;
  margin-top: 1rem;
  margin-right: 0;
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.menu-item {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  background-color: #f1f1f1
}

/* Show the dropdown menu on hover */
.expanded {
  display: block;
}
</style>