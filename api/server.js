require('dotenv').config({ path: '../.env' })
const connectDB = require('./connection/config')
const cors = require('cors')
const morgan = require('morgan')
const router = require('./routes/router')
const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http, {
  cors: {
    origins: ['http://localhost:3000']
  }
})

// Connect Database
connectDB()

app.use(express.json())
app.use(cors())

// Request logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
} 

// api router
app.use('/api', router)

io.on('connection', (socket) => {
  console.log('a user connected')

  socket.on('update-user', (data) => {
    console.log('update user')
    console.log(data)
  })
})

http.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`)
})