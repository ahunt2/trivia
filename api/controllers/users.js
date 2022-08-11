
/**
 * @desc    Create a user
 * @route   POST /api/users
 */
exports.createUser = (req, res, next) => {
  res.send('create user')
}

/**
 * @desc    Get a user
 * @route   GET /api/users/:id
 */
exports.getUser = (req, res, next) => {
  res.send('get user')
}

/**
 * @desc    Get users
 * @route   GET /api/users
 */
exports.getUsers = (req, res, next) => {
  res.send('get users')
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

