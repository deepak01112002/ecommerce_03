const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
    title : {type : String, require : true},
    description : {type : String, require : true},
    image : {type : String, require : true},
    price : {type : Number, require : true},
    adminId : {type : mongoose.Schema.Types.ObjectId, ref : "user"},
    category : {type : mongoose.Schema.Types.ObjectId, ref : "categories"},
    subCategory : {type : mongoose.Schema.Types.ObjectId, ref : "subcategories"}
})


const ProductModel = mongoose.model("product", productSchema)

module.exports = ProductModel