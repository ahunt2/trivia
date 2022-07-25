<script setup>
import Score from '../layout/Score.vue'
import QuestionItem from './QuestionItem.vue'
import AnswerList from '../answers/AnswerList.vue'
import ButtonList from '../layout/ButtonList.vue'

const query = 'https://opentdb.com/api.php?amount=1&type=multiple'
const answers = [
  { text: 'Answer 1' },
  { text: 'Answer 2' },
  { text: 'Answer 3' },
  { text: 'Answer 4' },
]

function getQuestion() {
  
}
</script>

<template>
  <div>
    <div>
      <score />
    </div>

    <div class="space-y-6 text-lg">
      <div class="container place-items-center bg-blue-400 text-center">
        <question-item :text="'This is a question'" />
      </div>

      <div class="container mx-auto bg-green-400 text-center">
        <answer-list :answers="answers" />
      </div>

      <div class="container bg-red-400 text-center">
        <button-list></button-list>
      </div>
    </div>

  </div>
</template>