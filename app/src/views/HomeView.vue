<script setup>
import { RouterView } from 'vue-router';
import TriviaHeader from '../components/layout/TriviaHeader.vue'
</script>

<template>
  <div class="w-screen" scroll="no">
    <trivia-header :menu="true" />
    <router-view scroll="no"></router-view>
  </div>
</template>