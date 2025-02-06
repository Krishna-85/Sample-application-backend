const userModel = require('../models/userModel')
const postModel = require('../models/postModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

 

module.exports.feedController = async(req, res)=>{
    const postdata = await postModel.find()
        res.render('feed', {postdata})
    
    }
     

       
module.exports.registercontroller = (req, res) => {
    res.render("register");
  };
module.exports.registerController = async (req, res)=>{
    try{

        
        
        const {username, email, password, imageurl} = req.body
        
        const hashedpassword = await bcrypt.hash(password, 10)
        
        const user = await userModel.create({
            username,
            email,
            password:hashedpassword,
            imageurl
        })
        
        const token = jwt.sign({
            id:user._id,
            email:user.email
        }, 
        
        process.env.SECRET_KEY
    )
    res.cookie("token", token)
    // console.log(token, user)
    res.redirect('/user/login')
}
catch(err){
    console.log(err)
}
}

module.exports.loginUserpageController = (req, res)=>{
    res.render('login')
}


module.exports.loginController = async(req, res)=>{

    try{

        const {email, password} = req.body
        
        const user = await userModel.findOne({
            email
        })
        
        if(!user){
            res.redirect('/user/register')
        }
        
        const isMatch = await bcrypt.compare(password, user.password)

        if(!isMatch){
            res.redirect('/user/register')
            
        }
        
    
    const token = jwt.sign({
        id:user._id,
        email:user.email
    }, 
    
    process.env.SECRET_KEY
)
res.cookie("token", token)
res.redirect('/user/feed')
}
catch(err){
    console.log(err)
}
    
}

module.exports.getCreateController = (req, res)=>{
    res.render('create')
}

module.exports.postCreateController = async(req, res)=>{

  

      const {imageurl, caption} = req.body
      
      const post = await postModel.create({
        imageurl,
        caption
      })

      res.redirect('/user/feed')

}
       
 
module.exports.logOutcontroller = (req, res) => {
    res.clearCookie("token", { path: "/"});
    res.redirect("/user/register");
};

    
 
        
        
        
         
        
        

        
      
        
        
            
