const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const bodyParser = require('body-parser')
const cors = require('cors')

const connectDB = require('./config/db')
const { notFound, errorHandler } = require('./middlewares/errorMiddleware')
const userRoutes = require('./routes/userRoutes')
const chatRoutes = require('./routes/chatRoutes')
const messageRoutes = require('./routes/messageRoutes')
const postRoutes = require('./routes/postRoutes')

dotenv.config()

connectDB()

const app = express()

app.use(bodyParser.json({ limit: '30mb' }))
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }))
app.use(cors())

app.get('/', (req, res) => {
    res.send('API is running')
})

app.use('/api/user', userRoutes)
app.use('/api/chat', chatRoutes)
app.use('/api/message', messageRoutes)
app.use('/api/post', postRoutes)

// Error Handling middlewares
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`.yellow.bold)
})
