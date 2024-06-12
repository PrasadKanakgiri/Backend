const express = require('express')
require("dotenv").config()
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', (req, res) => {
  res.send('Twitter!!!')
})
app.get('/chai', (req, res) => {
  res.send('Chai aur Code')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})