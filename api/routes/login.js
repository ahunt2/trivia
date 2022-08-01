const { ObjectId } = require('bson')
const express = require('express')
const router = express.Router()
const client = require('../mongo')
const bcrypt = require('bcrypt')
const saltRounds = 10
const { loginUser } = require('../controllers/login')

router.get('/login', async (req, res) => {
  console.log('yes')
  loginUser()
})

  /**
   * @body username
   * @body password
   */
  router.post('/login', async (req, res) => {
    // TODO: separate auth functionality
    loginUser()
    // console.log(req)

    // const username = req.body.username
    // let password = req.body.password

    // await client.connect()
    // const collection = await client.db('trivia').collection('users')
    // const user = await collection.findOne({ username: username })
    // await user

    // // if (!user) {
    // //   res.status(203).json({ msg: 'username not found' })
    // //   return client.close()
    // // }

    // console.log(await user)

    // await bcrypt.compare(password, user.password, (err, result) => {
    //   if (result) {
    //     // login user
    //     // TODO: sign jwt
    //     res.status(203).json({ 
    //       id: user._id,
    //       username: user.username,
    //       score: user.score,
    //       totalCorrect: user.totalCorrect,
    //       totalIncorrect: user.totalIncorrect
    //      })
    //     return client.close()
    //   } else {
    //     // login unsuccessful
    //     res.status(403).json({ msg: 'password incorrect' })
    //     return client.close()
    //   }
    // })
})



router.post('/logout', async (req, res) => {
  console.log('logout')
})

module.exports = router