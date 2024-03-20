import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials : true
}))
// setting middleware for getting data from json format
app.use(express.json({limit:"16kb"}))

// for getting url data 
app.use(express.urlencoded({extended : true,limit:"16kb"}))

// for storing the data[pdf,image,favicon,etc] not in server but storing in folders like public asset for 
app.use(express.static("public"))

app.use(cookieParser())

export {app}