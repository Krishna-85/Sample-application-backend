const express = require('express')
const app = express()
const indexRouter = require('./routes/index.routes')
const userRouter = require('./routes/user.routes')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs')
app.set('views', './src/views')
const cookieparser = require('cookie-parser')
app.use(cookieparser())


app.use('/', indexRouter)
app.use('/user', userRouter)


module.exports = app