const User = require('../models/User')

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

  // Create token
  const token = user.getSignedJwtToken()

  res.status(200).json({
    success: true,
    token
  })
}

/**
 * @desc    Login user
 * @route   POST /api/v1/auth/login
 * @access  Public
 */
exports.login = async (req, res, next) => {
  const { username, password } = req.body

  // Validate username and password
  if (!username || !password) {
    return res.status(400).json({
      success: false,
      error: 'Please provide a username and password'
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

  // Create token
  const token = user.getSignedJwtToken()

  res.status(200).json({
    success: true,
    token
  })
}