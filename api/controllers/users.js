const mongoose = require('mongoose')
const User = require('../models/User')
const ErrorResponse = require('../utils/errorResponse')
const bcrypt = require('bcryptjs')

/**
 * @desc    Create a user
 * @route   POST /api/users
 */
exports.createUser = async (req, res, next) => {
  try {
    const result = await User.create(req.body)
    return res.json(result)
  } catch (err) {
    return next(new ErrorResponse(err, 400))
  }
}

/**
 * @desc    Get a user
 * @route   GET /api/users/:id
 */
exports.getUser = async (req, res, next) => {
  const user = await User.findById(req.params.id)

  if (user) {
    return res.status(200).json(user)
  } else {
    return next(new ErrorResponse('User not found', 400))
  }
}

/**
 * @desc    Get users
 * @route   GET /api/users
 */
exports.getUsers = async (req, res, next) => {
  const users = await User.find({})

  if (users) {
    return res.status(200).json({
      success: true,
      count: users.length,
      data: users
    })
  } else {
    return next(new ErrorResponse('Cannot get users', 500))
  }
}

/**
 * @desc    Update a user
 * @route   PUT /api/users/:id
 */
exports.updateUser = (req, res, next) => {
  res.send('update user')
}

/**
 * @desc    Delete a user from database
 * @route   DELETE /api/users/:id
 */
exports.deleteUser = (req, res, next) => {
  res.send('delete user')
}

