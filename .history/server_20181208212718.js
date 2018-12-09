// Iniciando o App
const app = require('express')()
const mongoose = require('mongoose')

// Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi'.)

// Primeira rota
app.get('/', (req, res) => {
  res.send('Hello, Manolo0')
})

app.listen(3001)