<script setup>
import { RouterView } from 'vue-router';
import TriviaHeader from '../components/layout/TriviaHeader.vue'
</script>

<template>
  <div class="overflow-hidden">
    <trivia-header :menu="true" />
    <router-view></router-view>
  </div>
</template>