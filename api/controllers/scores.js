const User = require('../models/User')

exports.updateScore = async (req, res) => {
  try {
    const { score, questionsAnswered, correctAnswers } = req.body

    const user = await User.findByIdAndUpdate(req.user._id, {
      $inc: { score, questionsAnswered, correctAnswers }
    })

    res.status(200).json(user)
  } catch (error) {
    console.error(error.message)
    res.status(400).json({ error: true })
  }
}

exports.getLeaders = async (req, res) => {
  try {
    const users = await User.find({})

    console.log(users)
    res.status(200).json(users)
  } catch (error) {
    console.error('Could not get users')
    res.status(400).json({ error: true })
  }
}