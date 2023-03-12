<script setup>
import { ref, computed, watch } from 'vue'
import { onMounted } from 'vue'
import { useQuestionStore } from '../../stores/question'
import Score from '../layout/Score.vue'
import QuestionItem from './QuestionItem.vue'
import AnswerList from '../answers/AnswerList.vue'
import ButtonList from '../layout/ButtonList.vue'

const questions = useQuestionStore()
const selected = ref('')
const loading = computed(() => questions.isLoading)
const isAnswered = computed(() => questions.answered)
// const isMobile = computed(() => window.innerWidth < 400)

onMounted(() => {
  questions.loadNewQuestion()
})

function submit() {
  if (questions.selected === undefined) return

  questions.submit()
}

function getNewQuestion() {
  questions.loadNewQuestion()
}
</script>

<template>
  <div class="display">
    <div>
      <score />
    </div>

    <div class="questions" v-if="!loading">
      <div class="container text-center">
        <question-item :text="questions.question" />
      </div>

      <div class="container text-center">
        <answer-list :answers="questions.answers" />
      </div>

      <div class="container text-center">
        <!-- <button-list @submit-answer="submitAnswer()" @new-question="questionStore.loadNewQuestion()"></button-list> -->
        <div class="btn-container">
            <button @click="submit" :disabled="questions.answered" class="btn">Submit</button>
            <button @click="getNewQuestion" class="btn">New Question</button>
            <!-- <button @click="getNewQuestion" class="btn" v-if="!isMobile">New Question</button> -->
        </div>
      </div>
    </div>
    <div v-else class="spinner">
      <!-- <font-awesome-icon icon="fa-solid fa-spinner" :spin="true" /> -->
      <font-awesome-icon icon="fa-solid fa-circle-notch" :spin="true" />
    </div>

  </div>
</template>

<style scoped>
  .display {
    @apply absolute top-14 w-screen h-full;
  }

  .display.animated {
    transition: all 0.2s ease-in-out;
  }

  .questions {
    @apply space-y-2 text-lg mt-2;
  }

  .buttons {
    @apply container text-center;
  }

  .btn-item {
    @apply w-48 p-2 border-2 rounded-lg;
  }

  .btn {
    @apply w-48 p-2 border-2 rounded-lg;
  }

  .btn-container {
    @apply absolute bottom-24 container space-y-4;
  }

  .spinner {
    font-size: 6em;
    @apply text-center py-48 h-full;
  }
</style>