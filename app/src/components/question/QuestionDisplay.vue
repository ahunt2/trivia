<script setup>
import { ref } from 'vue'
import Score from '../layout/Score.vue'
import QuestionItem from './QuestionItem.vue'
import AnswerList from '../answers/AnswerList.vue'
import ButtonList from '../layout/ButtonList.vue'
import { onMounted } from 'vue'
import { useQuestionStore } from '../../stores/question'

const questionStore = useQuestionStore()
const selected = ref('')

onMounted(() => {
  questionStore.loadNewQuestion()
})

function selectAnswer(text) {
  selected.value = text
}

function submitAnswer() {
  if (selected.value === questionStore.correct) {
    console.log('correct')
  } else {
    console.log('incorrect')
  }
}
</script>

<template>
  <div>
    <div>
      <score />
    </div>

    <div class="space-y-6 text-lg">
      <div class="container text-center">
        <question-item :text="questionStore.question" />
      </div>

      <div class="container text-center">
        <answer-list :answers="questionStore.answers" @select-answer="(text) => selectAnswer(text)" />
      </div>

      <div class="container text-center">
        <button-list @submit-answer="submitAnswer()" @new-question="questionStore.loadNewQuestion()"></button-list>
      </div>
    </div>

  </div>
</template>