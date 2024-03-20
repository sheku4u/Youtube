
###### 2nd Proxy&CORS 

targets 
- mindset of coders regarding frontend and backend
- cors error s
- server kaise bnte hai 
- fullstack basics 



backends 
-  humne istall kiya express ko
- fir humne banaya app using express
- fir humne send kiya res 
- humne dekha kese hum .env file se port ko access kre or fir uske baabd hum kese OR operator ka use krke safety rkhe code m
- kese json data ko send kre
- humne banaaya ek array JoKES 
- usse kr diya humne send 



frontend
- humne vite se create kr liya 
- ab data ko handle krne ke liye humne humne useState use krke state manage kr lenge 
- array ko handle krna hai data print krna hai
- fir humne axios ko install kiya
- axios ka use hum fetch ki jgh krte hai isse hum data ko handle kr skte hai 
- ye khud hi data ko json format m se dusre formats m change kr leta hai 
- humme need ni pdti iske response ko alg se format krne ki 
- humne useeffect ka use kiya jisse jb bhi site on ho vo automatically hi run krke data ko call krle isse error ke chances km ho jayenge or data bhi humare paas phle hi aajayega
- axios.get se hum data ko call krte hai usse data ko lete hai bs get krke usse link deni hoti hai 
- ise humme response (promise) jo milta hai usse hum .then ki help se use kr skte ha i

cors
- cors policy is used for providing safety to the website data 
- url differnt hai or port bhi different hai toh vo sb ko origin ni milta 
- origin alg alg hai \
- theek kasie kre
- url ko whitelist krenge toh backend m ho jayega isse bhi solve kr skte hai





proxy
- ye use hota hai tkki hum cors ki erorr ko thek kr ske
- isse alg alg tools m alg tarike se us ekrte hai pr thoda common hota hia 
- create react app se krte tb hum isse nodemodule.json file m change krte hai usem type ke niche ad dkrte hai procy 
- vite m hum isse vite.config file m jaaker theek krte hai 
- whan pr server object add krke -> usme proxy bana kr -> fir key likh kr jisse phle hume server ki link chahiye vo krte hai toh -> link likhte hai
- isse proxy automatically hi link ko add kr deta hai jahan bhi vo (/api) like dekhta hai usse phle link ko ad kr deta hai
- iska ek ye bhi fdaida hai ki ye computer ko ye btata hai ki dono server or frontend ek hi origin se aa rhe hai 




###### Target for Backend Series 

### kuch tough projects 
- 
### Main Toughest Project 
## final project 
###### YOUTUBE APP OUR APP

###### MERN Project (Mongoose corporate level tools )

- sbse phle thinking questions 
- data ky store krna hai 
- konsi fields chhaiye humme
## approch regarding backend ko start kese kre 
- mongoose use kr rhw hai is video m
# tools 
- moon modeler -> expensive hai , ye use hota  hai manage krne ke liye ki kis type ka data hum lenge , kese unhe modelling krenge , keese hum unkko manage krte chelnge, ye direct mongoose ka code bna ke deta hai , isse bs draw kro or ye mongoose ka code dedeta hai
eraser.io -> for free or cheap rate to do so
make by self -> just draw by self on pen and paper 
- humesha first page nta hai jb field humme store krna hota hai toh hum sbse phle usse krte hai 
# steps to make flow for backend 
1. data ko store krne ki socho ky ky store krna hai -> register page banao usse pta chl jayega ky ky data aana hai user sidee 
2. login banao kyuki login page m hum purani data ko match krte hai na ki usme kuch naya store krte hai
3. overall structure banna hai 

- mongoose database ko document se pdna mushkil hai but learn kr lete hai
# creating data models in mongoose 
- models are scheme where we structure the data like how they are view or how they are storing the data 
# steps
- import mongoose from 'mongoose' {import it in file user.model.js for example}
- create schema (const userSchema = new mongoose.Schema({data or structure for storing data },{timestamps to monitor the time }))
- export the model {export const User = mongoose.model("name",jis schema ka reference dena hai vo)}
# we create a todo data model 
- we create user model and transferring the data to the next model
- we create todos model and collecting the data from usre model
- we create a subTodos model and collecting the data from user models 
- we collect the data using type {
    type : mongoose.Schema.Types.ObjectId,
    ref : "User" // jis file ka naam dena hota hai usse hum yaha call krte hai 
}

# ecommerce and hospital management Data models 
# in ecommerce site
- we create 4 models {product, order, user, category}
- in these we see a 2 schemas in order model
- one we dont have to export when we want to use this in one file 


# how to setup the backend with 100% code standard

## Mega Project youtube app  
# data modeling 


# first we setup our folders and see what dependices are needed or not
 
# second How to Connect databae in MERN with debugging
- go to mongodb atlas
- create a project 
- go in env file and give them (port=3000, mongodb url, ending / ni chaiye)
- go in constants js and make a name to db name
- npm i dotenv , mongoose, express 
* in index.js

- always try catch 
- db humesha dusre continent m rkha hai usme humesha time lgta hai
- humesha async await use krna hota hai 


- import mongoose from mongoose
- import {DB_NAME} from "./constants"

**** first apporach

import express from 'express'
const app = express()

- ;(async ()=>{

    try{
       await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
       app.on("errror",(error)=>{
        console.log(error)
        throw(error)

        app.listen(process.env.PORT,()=>{
            console.log(`app is running on http://localhost:${process.env.PORT}`)
        })
       })
    }catch(error){
        console.log(error)
    }
})() // self invoke function


**** Second apporach
- create a file in db (index.js)
- in index.js

- import mongoose from 'mongoose'
import {DB_NAME} from "../constants"

const connectDB = async ()=>{
    try{
       const conncectionInstance =  await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
       console.log(`\n MOngoDB connected  !! db host ${connectionInstance.connection.host}`) // isse hum dekh skte hai konse host pr m hun tkki production m dikkat na aye 
    }
    catch(err){
        console.log(err)
        process.exit(1) // isme node se hum failure kr skte hai process ka access hota hai hume hr time jisse hum kisi bhi ko kr skte hai
    }
}

export default connectDB

** dotenv
- as soon as possible execute kro main file m
- in index.js(main file)
- import {connectDB} from './db'
- import dotenv from 'dotenv'
- dotenv.config({
    path: "./env"
})
- connectDB()
- go in package.json[
    go in dev => "nodemon -r dotenv/config
    --expreimental-json-modules src/index.js"]

** while running the project errors handling
- import is important sometimes it can't import properlly so we have to give the extension of file as well
- example [(import {connectDB} from "./db") is wrong, (import {connectDB} from "./db/index.js") is right way]
- always give the correct the error in try and catch so the debugging is can be smooth as smoother


# third custom api response and error handling

setup zone m hai filal hum 
- middlewares
- or packages [cookie-parser,cors]
- kasie hum custom api ko handle krenge 

* create a server in app.js

- import express from 'express'
- import cors from 'cors'
- import cookieParser from 'cookie-parser'
- const app = express()
- app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
- app.use(express.json({limit:"16kb"})) // isse hum json ka data recieve krte hai 

- app.use(express.urlencoded({extended: true, limit: "16kb"})) // isse hu murl ke data ko pd skte hai or 






- export {app}

* in index.js main file
const port = process.env.PORT || 8000
- connectDB().then(()=>{
    app.on(error,()=>{
        console.log(`error in index file then ${error}`)
    })
    app.listen(port, ()=>{
        console.log(`servers running at: http://localhost:${port}`)
    })
}).catch((err)=> console.log(`problem in mongoDB connection failed ||| ${err}`))


* notes documentation
- req.params for url to take the data from url
- req.body for json,html 
- always use app.use for middlewares
- when we need to get the data fro mothers we use app.use() for 
- humare pass data bhot saari chizo se aata hai [string,json,forms,body,url]

- 


* middleware
- midlleware are the functions jo check krte rhete hai bich bich m 
- jb bhi link per req aati hai usse vo res send krne se phle check hota hai
- example = admin check , user id check ki ye jo request bhej rha hai is link pr ye thek hai bhi ki ni
- (err,req,res,next) ye 4 things hoti hai 
- next = isme ek flah ki trh hota hai jb bhi ek middleware check krta hai toh next usse alge middleware pr bhejta hai usse next aise tbtk hota hai jb tk vo res send na ho jaye 
 