const {Router} = require('express')
const indexRouter = Router()
const indexController = require('../controllers/index.controllers')


indexRouter.get('/', indexController.indexController )




module.exports = indexRouter