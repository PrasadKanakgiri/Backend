import express from 'express';
import { config as configDotenv } from 'dotenv';

configDotenv();

const app = express()

const port = process.env.PORT || 3000
console.log('Loaded port from .env:', process.env.PORT);

const jokes = [
  {
    id : 1,
    title : 'A joke',
    content : 'This is a joke'
  },
  {
    id : 2,
    title : 'Another joke',
    content : 'This is a joke'
  },
  {
    id : 3,
    title : 'Third joke',
    content : 'This is a Third joke'
  },
  {
    id : 4,
    title : 'Fourth joke',
    content : 'This is a Fourth joke'
  },
  {
    id : 5,
    title : 'Fifth joke',
    content : 'This is a Fifth joke'
  },
]

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('Twitter!!!')
})

app.get('/chai', (req, res) => {
  res.send('Chai aur Code')
})

app.get('/api/jokes', (req,res) => {
  res.json(jokes)
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
