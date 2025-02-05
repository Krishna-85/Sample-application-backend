const app = require('./src/app')
require('dotenv').config()
const dbConnect = require('./src/db/db')
dbConnect()








app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`)
})