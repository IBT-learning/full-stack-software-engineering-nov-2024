import express from "express"

const app = express()
const PORT = 4001


// get request 
app.get("/",(req,res)=>{
    res.send("Server has started")
})





// Start the server by listening on PORT 
app.listen(PORT,()=>{
    console.log(`Server started listening on Port: ${PORT}`)
})