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

const { updateScores, getLeaders } = require('./controllers/scores')

io.on('connection', (socket) => {
  socket.on('update-user', async (data, token) => {
    const scores = await updateScores(data, token, socket)
    io.emit('update-leaderboard', scores)
  })

  socket.on('get-leaderboard', async () => {
    const scores = await getLeaders()
    io.emit('update-leaderboard', scores)
  })
})

http.listen(process.env.PORT, () => {
  console.debug(`Server listening on port ${process.env.PORT}`.blue)
})