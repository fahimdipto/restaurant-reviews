import express from "express"
import cors from "cors"
import restaurants from "./api/restaurants.route.js"
import errres from "./utils/Response.js"
const app = express()
app.use(cors())
app.use(express.json())

app.use("/api/v1/restaurants",restaurants)
app.use("*",(req,res)=> res.status(404).json(errres("Content Does not Exist" ,"Wrong URL")))

export default app