import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async ()=>{
    try {
        const connectInstance = await mongoose.connect(`${process.env.MongoDB_URL}/${DB_NAME}`)
        console.log(`\n MongoDB connect || db host ${connectInstance.connection.host}`)
    } catch (error) {
        console.log(`problem in db/db.js failed to connect the db: ${error} `)
    }
}

export default connectDB