const express = require('express')
const router = express.Router()

const {
  createUser,
  getUser,
  getUsers,
  deleteUser,
  updateUser
} = require('../controllers/users')

router
  .route('/')
  .post(createUser)
  .get(getUsers)
  
router
  .route('/:id')
  .get(getUser)
  .delete(deleteUser)
  .put(updateUser)

module.exports = router