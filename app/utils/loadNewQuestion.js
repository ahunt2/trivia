const axios = require('axios')

async function loadNewQuestion() {
  const res = await axios.get('https://opentdb.com/api.php?amount=1&type=multiple')

  await res
  const data = res.data.results[0]
  console.log(data)
  let answers = data.incorrect_answers
  answers = [...answers, data.correct_answer]
  console.log(answers)
  randomize(answers)
  console.log(answers)
}

function randomize(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
    }
}

loadNewQuestion()