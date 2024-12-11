const {Router} = require("express");
const {verify,auth} = require("../Middleware/verify");
const ProductModel = require("../Model/productModel");

const ProductRouter = Router();


ProductRouter.post("/add",verify,auth,async(req,res)=>{
    try {
        let {title,description,image,price,category,subCategory} = req.body
        let obj = {
            title : title,
            description : description,
            image ,
            price ,
            adminId : req.user.userId,
            category  ,
            subCategory
        }
        
        let data = await ProductModel.create(obj)
        res.status(200).send({msg : "Product Added successfully"})
    } catch (error) {
        res.status(401).json({msg : error.message})
    }
   
})


ProductRouter.get("/all",verify,async(req,res)=>{
   try {
      let data = await ProductModel.find().populate('adminId','email').populate('category').populate('subCategory')
      res.status(200).json(data)
   } catch (error) {
    res.status(401).json({msg : error.message})
   }
})




module.exports = ProductRouter