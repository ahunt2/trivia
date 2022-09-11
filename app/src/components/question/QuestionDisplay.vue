<script setup>
import { ref } from 'vue'
import Score from '../layout/Score.vue'
import QuestionItem from './QuestionItem.vue'
import AnswerList from '../answers/AnswerList.vue'
import ButtonList from '../layout/ButtonList.vue'
import { onMounted } from 'vue'
import { useQuestionStore } from '../../stores/question'

const questions = useQuestionStore()
const selected = ref('')

onMounted(() => {
  questions.loadNewQuestion()
})

function selectAnswer(text) {
  selected.value = text
}

function submit() {
  questions.setAnswered(true)

  if (selected.value === questions.correct) {
    console.log('correct')
  } else {
    console.log('incorrect')
  }
}

function getNewQuestion() {
  questions.loadNewQuestion()
  questions.setAnswered(false)
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
        <div class="absolute bottom-24 container space-y-4">
          <div class="btn-item container">
            <button @click="submit()" :disabled="questions.answered">Submit</button>
          </div>
          <div class="btn-item container">
            <button @click="getNewQuestion()">New Question</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped lang="postcss">
  .display {
    @apply absolute top-14 w-screen h-full;
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
</style>