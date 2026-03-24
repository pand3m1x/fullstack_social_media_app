import 'dotenv/config'
import './config/connection.js'
import express from 'express'

const app = express()

const port = process.env.PORT || 3000

app.get('/', (req,res) => {
  res.send('hello world!')
})

app.listen(port,() => console.log(`listening to port: http://localhost:${port}`))