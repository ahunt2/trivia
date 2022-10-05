import axios from 'axios'

export async function getQuestion() {
  const res = await axios.get(
    'https://opentdb.com/api.php?amount=1&type=multiple'
  )

  await res
  const data = res.data.results[0]
  let answers = data.incorrect_answers
  answers = [...answers, data.correct_answer]

  answers = answers.map((answer) => decodeString(answer))
  console.log(answers)
  randomize(answers)
}

function randomize(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

function decodeString(str) {
  str = str.replaceAll('&quot;', '"')
  str = str.replaceAll('&#039;', "'")
  str = str.replaceAll('&eacute;', 'e')
  str = str.replaceAll('&amp;', '&')
  str = str.replaceAll('&lt;', '<')
  str = str.replaceAll('&gt;', '>')
  str = str.replaceAll('&lsquo;', "'")
  str = str.replaceAll('&rsquo;', "'")
  return str
}
