const mongoose = require("mongoose")

const connection = async()=>{
    await mongoose.connect("mongodb+srv://deepak:pandey@cluster0.ytx2l.mongodb.net/Ecommerce?retryWrites=true&w=majority&appName=Cluster0")
    console.log("Database is connected")
}


module.exports = connection