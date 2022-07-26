const { ObjectId } = require('bson')
const express = require('express')
const router = express.Router()
const client = require('../mongo')
const bcrypt = require('bcrypt')
const saltRounds = 10 

// user {
//     _id,
//     username,
//     password,
//     email,
//     score,
//     correctAnswers,
//     incorrectAnswers
// }

router.route('/api/users')
  
  // get users (test)
  .get(async (req, res) => {
    await client.connect()
    const collection = await client.db('trivia').collection('users')
    const users = await collection.fin({}).limit(10).toArray()
    res.status(200).send(await users)
    return client.close()
  })

  /**
   * Create a new user
   * @body username
   * @body email
   * @body password
   */
  .post(async (req, res) => {
    await client.connect()
    const collection = await client.db('trivia').collection('users')

    const check = await collection.findOne({ username: ObjectId(req.body.username) })
    let user
    if (await check) {
      res.status(400).json({ msg: 'Username taken.' })
    } else {
      const username = req.body.username
      const email = req.body.email
      let password = req.body.password

      bcrypt.hash(password, saltRounds, (err, hash) => {
        user = await collection.insertOne({
          username,
          email,
          password: hash,
          score: 0,
          totalCorrect: 0,
          totalIncorrect: 0
        })
      })
    }
    
    res.status(200).send(user)
    return client.close()
  })

router.route('/api/users/:id')

/**
 * Get a user by id
 * @params id
 */
.get(async (req, res) => {
  await client.connect()
  const collection = await client.db('trivia').collection('users')
  const user = await collection.findOne({ _id: ObjectId(req.params.id) })

  if (await user) {
    res.status(200).send(user)
  } else {
    res.status(400).json({ msg: 'User not found.' })
  }
  return client.close()
})
  
/**
 * Delete a user
 * @params id
 */
.delete(async (req, res) => {
  await client.connect()
  const collection = await client.db('trivia').collection('users')
  const result = await collection.findOneAndDelete({ _id: ObjectId(req.params.id) })

  res.status(200).json({ msg: 'User removed.' })
  return client.close()
})

/**
 * Update a user
 * @param id
 * @body user
 */
.put(async (req, res) => {
  await client.connect()
  const collection = await client.db('trivia').collection('users')
  const result = await collection.findOneAndUpdate(
    { _id: ObjectId(req.params.id) },
    {
      $inc: {
        score: req.body.user.score,
        totalCorrect: req.body.user.correct,
        totalIncorrect: req.body.user.incorrect
      }
    },
    { returnDocument: true }
  )

  if (await result) {
    res.status(200).send(result)
  } else {
    res.status(400).json({ msg: 'Error updating.' })
  }
  return client.close()
})

module.exports = router