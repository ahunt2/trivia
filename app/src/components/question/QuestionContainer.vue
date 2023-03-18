<script setup>
import { ref } from 'vue'

import QuestionDisplay from './QuestionDisplay.vue'

const active = ref(null)
const next = ref(null)
</script>

<template>
  <div class="h-full w-full">
    <component ref="active" :is="QuestionDisplay" class="z-10" />
    <component ref="next" :is="QuestionDisplay" />
  </div>
</template>