<script setup>
import { ref, watch } from 'vue'
import { useSwipe } from '@vueuse/core'

import QuestionDisplay from './QuestionDisplay.vue'

const active = ref(null)
const next = ref(null)

const { isSwiping, direction } = useSwipe(active)

watch([isSwiping], () => {
  console.log('isSwiping')
  console.log(direction.value)
})
</script>

<template>
  <div class="h-full w-full">
    <!-- active needs to sit on top of next -->
    
    <component ref="active" :is="QuestionDisplay" class="z-10" />
    <!-- <QuestionDisplay ref="active" /> -->
    <component ref="next" :is="QuestionDisplay" />
  </div>
</template>