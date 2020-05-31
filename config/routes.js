const express = require('express')
const UserController = require('../controllers/Auth/UserController')
const DietPlanController = require('../controllers/DietPlanController')
const RecipeController = require('../controllers/RecipeController')
const OrderController = require('../controllers/OrderController')
const { authenticateUser, authorizeUser } = require('../middlewares/authentication')
const imgController = require('../controllers/ImageUpload')
const routes = express.Router()

routes.post('/users/register', UserController.register)
routes.post('/users/login', UserController.login)
routes.get('/users/account', authenticateUser, UserController.account)
routes.put('/users/edit', authenticateUser, UserController.update_user)
routes.delete('/users/logout', authenticateUser, UserController.logout)
routes.post('/users/add_user', authenticateUser, authorizeUser, UserController.add_user)

routes.get('/diets', DietPlanController.list)
routes.post('/diets/add_diet', authenticateUser, authorizeUser, DietPlanController.add)
routes.delete('/diets/:id', authenticateUser, authorizeUser, DietPlanController.remove)
routes.put('/diets/:id', authenticateUser, authorizeUser, DietPlanController.edit)
routes.get('/diets/:id', DietPlanController.show)

routes.get('/recipes', RecipeController.list)
routes.put('/recipes/:id', authenticateUser, authorizeUser, RecipeController.edit)
routes.post('/recipes/add_recipe', authenticateUser, authorizeUser, RecipeController.add)
routes.get('/recipes/:id', RecipeController.show)
routes.delete('/recipes/:id', authenticateUser, authorizeUser, RecipeController.remove)

routes.get('/orders', authenticateUser, OrderController.list)
routes.post('/orders/add_order', authenticateUser, OrderController.add)
routes.put('/orders/:id',authenticateUser, OrderController.edit)
routes.get('/orders/:id', authenticateUser, OrderController.show)
routes.delete('/orders/:id', authenticateUser, OrderController.remove)

routes.post('/upload', imgController.uploadImg)

module.exports = routes


