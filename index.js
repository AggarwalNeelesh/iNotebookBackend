// index.js is a express server
require("dotenv").config();
const connectToMongo = require('./db');
var cors = require('cors')
const port = process.env.PORT || 5000
const express = require('express');
const { db } = require('./models/User');

connectToMongo();

var app = express()

app.use(cors())
app.use(express.json())

// Available Routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`iNotebook listening on port ${port} ${process.env.PORT}`)
})