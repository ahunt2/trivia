<script setup>
import { ref, computed, watch } from 'vue'
import { onMounted } from 'vue'
import { useQuestionStore } from '../../stores/question'
import { useSwipe } from '@vueuse/core'
import Score from '../layout/Score.vue'
import QuestionItem from './QuestionItem.vue'
import AnswerList from '../answers/AnswerList.vue'
import ButtonList from '../layout/ButtonList.vue'

const questions = useQuestionStore()
const selected = ref('')
const isMobile = computed(() => window.innerWidth < 400)

// const el = ref(null)
// const { isSwiping, direction } = useSwipe(el)

// watch([isSwiping], () => {
//   console.log('isSwiping')
//   console.log(direction.value)
// })

onMounted(() => {
  questions.loadNewQuestion()
})

function selectAnswer(text) {
  selected.value = text
  questions.setSelected(selected.value)
}

function submit() {
  if (questions.selected === '') return

  questions.setSelected(selected.value)
  questions.setAnswered(true)

  // TODO: take out after testing is done
  if (selected.value === questions.correct) {
    console.log('correct')
  } else {
    console.log('incorrect')
  }
}

function getNewQuestion() {
  questions.loadNewQuestion()
  questions.setAnswered(false)
  questions.setSelected('')
}
</script>

<template>
  <div class="display">
    <div>
      <score />
    </div>

    <div class="questions">
      <div class="container text-center">
        <question-item :text="questions.question" />
      </div>

      <div class="container text-center">
        <answer-list :answers="questions.answers" @select-answer="(text) => selectAnswer(text)" />
      </div>

      <div class="container text-center">
        <!-- <button-list @submit-answer="submitAnswer()" @new-question="questionStore.loadNewQuestion()"></button-list> -->
        <div class="btn-container">
            <button @click="submit()" :disabled="questions.answered" class="btn">Submit</button>
            <button @click="getNewQuestion()" class="btn" v-if="!isMobile">New Question</button>
        </div>
      </div>
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
</style>