const express = require('express')
require('dotenv').config({ path: '../.env' })
const connectDB = require('./connection/config')
const cors = require('cors')
const morgan = require('morgan')
const router = require('./routes/router')

// Connect Database
connectDB()

const app = express()
app.use(express.json())
app.use(cors())

// Request logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
} 

// api router
app.use('/api/', router)

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`)
})