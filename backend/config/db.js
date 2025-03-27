import mongoose from 'mongoose'
import dotenv from 'dotenv'


dotenv.config()
// console.log(process.env.mongoURI); you could not be able to see untill you import dotenv and use dotenv.config()

export const connectDB = async ()=>{
    
    try {
        
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected : ${conn.connection.host}`);
        
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1)  //  1 means failure and 0 means success
    }  
}