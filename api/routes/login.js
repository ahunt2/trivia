const { ObjectId } = require('bson')
const express = require('express')
const router = express.Router()
const client = require('../mongo')
const bcrypt = require('bcrypt')
const saltRounds = 10

router.route('/api/login')

  /**
   * @body username
   * @body password
   */
  .post(async (req, res) => {
    // TODO: separate auth functionality
    const username = req.body.username
    let password = req.body.password
    await bcrypt.hash(password, saltRounds, (err, hash) => {
      password = hash
    })
    await client.connect()
    const collection = await client.db('trivia').collection('users')
    const user = await collection.findOne({ username })

    const match = await bcrypt.compare(password, user.password)

    if (match) {
      // successful login
    } else {
      // unsuccessful login
    }
})