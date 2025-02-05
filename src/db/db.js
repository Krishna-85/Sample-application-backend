const mongoose = require('mongoose')



const dbConnect = ()=>{
    mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log("Connetted to db : application")
    })
    .catch(err=>{
        console.log(err)
    })
}


module.exports = dbConnect