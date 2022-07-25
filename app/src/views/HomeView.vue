<script setup>
import { RouterView } from 'vue-router';
import TriviaHeader from '../components/layout/TriviaHeader.vue'
</script>

<template>
  <div class="w-screen">
    <trivia-header class="w-screen" />
    <router-view></router-view>
  </div>
</template>