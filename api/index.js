const express = require('express')
require('dotenv').config()

const users = require('./routes/users')

const app = express()
app.use(express.json())
app.use(users)

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`)
})