const express = require('express')
const router = express.Router()

const {
  createUser,
  getUser,
  deleteUser,
  updateUser
} = require('../controllers/users')

router
  .route('/users')
  .post(createUser)
  
router
  .route('/users/:id')
  .get(getUser)
  .delete(deleteUser)
  .put(updateUser)

// user {
//     _id,
//     username,
//     password,
//     email,
//     score,
//     correctAnswers,
//     incorrectAnswers
// }

// router.route('/api/users')
  
//   // get users (test)
//   .get(async (req, res) => {
//     await client.connect()
//     const collection = await client.db('trivia').collection('users')
//     const users = await collection.fin({}).limit(10).toArray()
//     res.status(200).send(await users)
//     return client.close()
//   })

//   /**
//    * Create a new user
//    * @body username
//    * @body email
//    * @body password
//    */
//   .post(async (req, res) => {
//     await client.connect()
//     const collection = await client.db('trivia').collection('users')

//     // TODO: only allow one account per email
//     // TODO: lowercase email
//     const check = await collection.findOne({ username: req.body.username })
//     if (await check) {
//       res.status(400).json({ msg: 'Username taken.' })
//       return client.close()
//     }
      
//     const username = req.body.username
//     const email = req.body.email
//     let password = req.body.password

//     password = await bcrypt.hash(password, saltRounds)

//     const result = await collection.insertOne({
//       username,
//       email,
//       password: await password,
//       score: 0,
//       totalCorrect: 0,
//       totalIncorrect: 0
//     })
    
//     res.status(200).json({ id: await result.insertedId })
//     return client.close()
//   })

// router.route('/api/users/:id')

// /**
//  * Get a user by id
//  * @params id
//  */
// .get(async (req, res) => {
//   await client.connect()
//   const collection = await client.db('trivia').collection('users')
//   const user = await collection.findOne({ _id: ObjectId(req.params.id) })

//   if (await user) {
//     res.status(200).send(user)
//   } else {
//     res.status(400).json({ msg: 'User not found.' })
//   }
//   return client.close()
// })
  
// /**
//  * Delete a user
//  * @params id
//  */
// .delete(async (req, res) => {
//   await client.connect()
//   const collection = await client.db('trivia').collection('users')
//   const result = await collection.findOneAndDelete({ _id: ObjectId(req.params.id) })

//   // TODO: check for successful delete
//   res.status(200).send(await result)
//   return client.close()
// })

// /**
//  * Update a user
//  * @param id
//  * @body user should include score, totalCorrect, and totalIncorrect increment values
//  */
// .put(async (req, res) => {
//   await client.connect()
//   const collection = await client.db('trivia').collection('users')
//   const result = await collection.findOneAndUpdate(
//     { _id: ObjectId(req.params.id) },
//     {
//       $inc: {
//         score: req.body.user.score,
//         totalCorrect: req.body.user.correct,
//         totalIncorrect: req.body.user.incorrect
//       }
//     },
//     { returnDocument: true }
//   )

//   if (await result) {
//     res.status(200).send(result)
//   } else {
//     res.status(400).json({ msg: 'Error updating.' })
//   }
//   return client.close()
// })

module.exports = router