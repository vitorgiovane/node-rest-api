const routes = require('express').Router()

app.get('/', (req, res) => {
  Product.create({
    title: 'React Native',
    description: 'Build something greatful',
    url: 'http://github.com/facebook/react-native'
  })
  
  return res.send('Hello, Manol)')
})

module.exports = routes