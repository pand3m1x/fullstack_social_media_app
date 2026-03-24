import 'dotenv/config'
import './config/connection.js'
import express from 'express'
import userRoutes from './routes/userRoutes.js'

const app = express()

const port = process.env.PORT || 3000

app.use('/api/users', userRoutes)

app.get('/', (req,res) => {
  res.send('hello world!')
})

app.listen(port,() => console.log(`Mic Check, Mic Check: http://localhost:${port}`))