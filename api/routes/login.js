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
    console.log(req)

    const username = req.body.username
    let password = req.body.password

    await client.connect()
    const collection = await client.db('trivia').collection('users')
    const user = await collection.findOne({ username: username })
    await user

    // if (!user) {
    //   res.status(203).json({ msg: 'username not found' })
    //   return client.close()
    // }

    console.log(await user)

    await bcrypt.compare(password, user.password, (err, result) => {
      if (result) {
        // login user
        // TODO: sign jwt
        res.status(203).json({ 
          id: user._id,
          username: user.username,
          score: user.score,
          totalCorrect: user.totalCorrect,
          totalIncorrect: user.totalIncorrect
         })
        return client.close()
      } else {
        // login unsuccessful
        res.status(403).json({ msg: 'password incorrect' })
        return client.close()
      }
    })
})

router.route('/api/logout/:id')

.post(async (req, res) => {
  console.log('logout')
})

module.exports = router