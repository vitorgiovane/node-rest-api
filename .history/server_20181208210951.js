const express = require('express')

// Iniciando o App
const app = express()

// Iniciando o DB

// Primeira rota
app.get('/', (req, res) => {
  res.send('Hello, Mano')
})

app.listen(3001)