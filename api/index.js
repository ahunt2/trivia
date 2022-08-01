const express = require('express')
require('dotenv').config({ path: '../.env'})
const cors = require('cors')

const users = require('./routes/users')
const login = require('./routes/login')

const app = express()
app.use(cors({
  origin: '*'
}))
app.post('/', (req, res) => {
  console.log('base')
  res.send('base')
})
app.use(express.json())
app.use('/api', users)
app.use('/api', login)

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`)
})