const routes = require('express').Router()
const ProductController = require('./controllers/ProductController')

routes.get('/products', ProductController.index)
routes.post('/products')

module.exports = routes