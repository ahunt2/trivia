const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  _id: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: [true, 'Username taken'],
  },
  email: {
    type: String,
    required: true,
    unique: [true, 'Email already in use']
  },
  score: {
    type: Number,
    default: 0
  },
  totalCorrect: {
    type: Number,
    default: 0
  },
  totalIncorrect: {
    type: Number,
    default: 0
  }
})

module.exports = mongoose.model('User', UserSchema)