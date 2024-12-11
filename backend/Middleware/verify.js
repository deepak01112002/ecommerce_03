const jwt = require("jsonwebtoken")

const verify = (req,res,next)=>{
    const token = req.headers.authorization.split(" ")[1]
    if(token){
       let decode = jwt.verify(token, "deepakpandey")
       req.user = decode
       next()
    }else{
        res.send({msg : "Login FIrst"})
    }
}

const auth = (req,res,next)=>{
   console.log(req.user)
   if(req.user.userRole == "admin"){
      next()
   }else{
      res.send({msg : "unuothorized"})
   }
}

module.exports = {verify,auth}