const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: [true, 'Username taken'],
  },
  email: {
    type: String,
    required: true,
    unique: [true, 'Email already in use'],
    match: [
      '/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/',
      'Please enter a valid email'
    ]
  },
  password: {
    type: String,
    required: [true, 'Please add a password'],
    minLength: 6,
    select: false
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
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
  created: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('User', UserSchema)