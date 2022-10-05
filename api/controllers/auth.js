const User = require('../models/User')
const jwt = require('jsonwebtoken')

/**
 * @desc    Register user
 * @route   POST /api/v1/auth/register
 * @access  Public
 */
exports.register = async (req, res, next) => {
  const { username, email, password } = req.body

  // Create user
  const user = await User.create({
    username,
    email,
    password
  })

  sendTokenResponse(user, 200, res)
}

/**
 * @desc    Login user
 * @route   POST /api/v1/auth/login
 * @access  Public
 */
exports.login = async (req, res, next) => {
  const { username, password } = req.body

  // Validate username and password
  if (!username && !password) {
    return res.status(400).json({
      success: false,
      error: 'Please provide a username and password'
    })
  } else if (!username) {
    return res.status(400).json({
      success: false,
      error: 'Please provide a username'
    })
  } else if (!password) {
    return res.status(400).json({
      success: false,
      error: 'Please provide a username'
    })
  }

  // Check for user
  const user = await User.findOne({ username }).select('+password')

  if (!user) {
    return res.status(401).json({
      success: false,
      error: 'Invalid Credentials'
    })
  }

  // Check if password matches
  const isMatch = await user.matchPassword(password)

  if (!isMatch) {
    return res.status(401).json({
      success: false,
      error: 'Invalid Credentials'
    })
  }

  sendTokenResponse(user, 200, res)
}

/**
 * @desc    Get current logged in user
 * @route   POST /api/auth/me
 * @access  Private
 */
exports.getMe = async (req, res, next) => {
  const user = await User.findById(req.user.id)

  res.status(200).json({
    success: true,
    data: user
  })
}

// Get token from model, create cookie and send response
const sendTokenResponse = (user, statusCode, res) => {
  // Create token
  const token = user.getSignedJwtToken()

  const options = {
    expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
    httpOnly: true
  }

  if (process.env.NODE_ENV === 'production') {
    options.secure = true
  }

  res
    .status(statusCode)
    .cookie('token', token, options)
    .json({
      success: true,
      token
    })
}