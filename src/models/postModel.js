const mongoose = require('mongoose')


const postSchema = mongoose.Schema({
   caption:{
    type:String
   },
   imageurl:{
   type:String,
   
   }
})

const postModel = mongoose.model('post', postSchema)
module.exports = postModel