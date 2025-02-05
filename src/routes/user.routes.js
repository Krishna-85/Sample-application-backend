const express = require('express')
const userRouter  = express.Router()
const userController = require('../controllers/user.controller')



userRouter.get('/feed', userController.feedController) 
userRouter.post('/register', userController.registerController )
userRouter.get('/register', userController.registercontroller )
userRouter.get('/login', userController.loginUserpageController)
userRouter.post('/login', userController.loginController)
userRouter.get('/create', userController.getCreateController)
userRouter.post('/create', userController.postCreateController)

module.exports = userRouter