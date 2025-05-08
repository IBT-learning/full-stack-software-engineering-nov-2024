import express from "express"
import { connectDB } from "./db.js"
import RecipeRoutes from "./routes/Recipe.js"
import AuthRoutes from "./routes/authRoutes.js"


const app = express()
const Port  = 4000

app.use(express.json())
app.use("/recipes", RecipeRoutes)
app.use("/auth" , AuthRoutes)










app.listen(Port,()=> {
    connectDB()
    console.log(`[server]: Started listening on Port ${Port}`)
})