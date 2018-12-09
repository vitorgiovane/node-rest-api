const express = require('express')
const bodyParser = require('body-parser')

// Iniciando o App
const app = express()
app.use(bodyParser.urlencoded({ extended: false }));

// Iniciando o DB

// Primeira rota
app.get('/', (req, res) => {
  res.send('Hello, Mano')
})

app.listen(3001)