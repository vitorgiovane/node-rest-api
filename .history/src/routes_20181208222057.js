const routes = require('express').Router()
const ProductController = require('./controllers/ProductController')

routes.get('/products', ProductController.index)
routes.get('/products/:')
routes.post('/products', ProductController.store)

module.exports = routes