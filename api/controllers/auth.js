const User = require('../models/User')

module.exports.register = async (req, res, next) => {
  res.status(200).json({
    success: true
  })
}