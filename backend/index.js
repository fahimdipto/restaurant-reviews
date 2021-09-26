import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
import restaurantsDAO from "./dao/restaurantsDAO.js"
import ReviewsDAO from "./dao/reviewsDAO.js";
//import {logDOM} from "@testing-library/react";

dotenv.config()
const MongoClient = mongodb.MongoClient
const port = process.env.PORT|| 8000

MongoClient.connect(
    process.env.ATLAS_URL,
    {
        poolSize: 50,
        wtimeout: 2500,
        useNewUrlParser: true
    })
    .catch( err => {
        console.error(err.stack)
        process.exit(1)
    })
    .then (async client =>{
        await  restaurantsDAO.injectDB(client)
        await ReviewsDAO.injectDB(client)
        app.listen(port,()=>{
            console.log(`Listening to the port ${port}`)
        })
    } )
