const express = require('express')

const UserController = require('./controllers/UserController')

const routes = express.Router()

routes.get('/user', UserController.search)
routes.get('/users', UserController.index)
routes.get('/users/:username', UserController.show)

module.exports = routes