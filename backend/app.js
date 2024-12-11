const express = require("express")
const connection = require("./Cofig/db")
const cors = require("cors")
const UserRouter = require("./Router/userRouter")
const CategoryRouter = require("./Router/category")
const subCategoryRouter = require("./Router/subCategory")
const ProductRouter = require("./Router/product")
const CartRouter = require("./Router/cart")


const app = express()
app.use(cors())
app.use(express.json())

app.use("/user",UserRouter)
app.use("/cat", CategoryRouter)
app.use("/subcat", subCategoryRouter)
app.use("/product", ProductRouter)
app.use("/cart", CartRouter)

app.listen(8080,()=>{
    connection()
    console.log("Server is Running on Port 8080")
})