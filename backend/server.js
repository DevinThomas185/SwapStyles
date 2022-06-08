const express = require('express')
const app = express()
const port = 5000

app.get('/api', (req, res) => {
  res.status(200).send('Hello from the backend!');
})
