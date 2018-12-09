// Iniciando o App
const app = require('express')()
const mongoose = require('mongoose')
const requireDir = require('require-dir')

// Iniciando o DB
mongoose.connect(
  'mongodb://localhost:27017/nodeapi', { useNewUrlParser: true })
requireDir('./src/models')

const Product = mongoose.model('Product')

// Primeira rota
app.get('/', (req, res) => {
  Product.create({
    title: 'React Native',
    description: 'Build something greatful',
    url: 'http://github.com/facebook/react-native'
  })
  return res.send('Hello, Manol)')
})

app.listen(3001)