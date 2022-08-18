const express = require('express')
require('dotenv').config({ path: '../.env' })
const connectDB = require('./connection/config')
const cors = require('cors')

// Connect Database
connectDB()

const users = require('./routes/users')
const auth = require('./routes/auth')

const app = express()
app.use(express.json())
app.use(cors({
  origin: '*'
}))

app.use('/api/users', users)
app.use('/api/auth', auth)

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`)
})