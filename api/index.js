const express = require('express')
require('dotenv').config({ path: '../.env'})

const users = require('./routes/users')
const login = require('./routes/login')

const app = express()
app.use(express.json())
app.use(users)
app.use(login)

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`)
})