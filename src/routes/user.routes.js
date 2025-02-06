const express = require('express')
const userRouter  = express.Router()
const userController = require('../controllers/user.controller')
const userModel = require('../models/userModel')
const postModel = require('../models/postModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


userRouter.get('/feed',async (req, res, next)=>{
try{
    
    const token = req.cookies.token

    if(!token){
        return res.redirect("/user/login");
    }
    
    const decoded = jwt.verify(token,process.env.SECRET_KEY );
   

    
      next()
  
}
catch(err){
    console.log("User not verified")
    res.redirect('/user/register')
}
},
userController.feedController) 
    
userRouter.post('/register', userController.registerController )
userRouter.get('/register', userController.registercontroller )
userRouter.get('/login', userController.loginUserpageController)
userRouter.post('/login', userController.loginController)
userRouter.get('/create', userController.getCreateController)
userRouter.post('/create', userController.postCreateController)
userRouter.get('/logout', userController.logOutcontroller)

module.exports = userRouter