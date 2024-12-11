const {Router} = require("express")
const CartModel = require("../Model/cartModel")
const { verify } = require("../Middleware/verify")




const CartRouter = Router()

CartRouter.post("/add",verify,async(req,res)=>{
    console.log(req.user)
     try {
        let data = await CartModel.findOne({productID : req.body.id})
        console.log(data)
       if(data){
          res.status(200).send({msg : "Already in cart"})
       }else{
          let obj = {
            userID : req.user.userId,
            productID : req.body.id,
            quantity : 1
          }
          let data = await CartModel.create(obj);
          res.status(200).send({data,msg : "added in cart"})
       }
     } catch (error) {
        res.status(401).json({msg : error.message})
     }
})



module.exports = CartRouter