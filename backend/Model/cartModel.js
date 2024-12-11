const mongoose = require("mongoose")

const categorySchema = mongoose.Schema({
    productID : {type : mongoose.Schema.Types.ObjectId, ref : "product"},
    userID :  {type : mongoose.Schema.Types.ObjectId, ref : "user"},
    qunatity : Number
})

const CartModel = mongoose.model("cart" , categorySchema)


module.exports = CartModel