import mongoose from "mongoose";

export const connectDB = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(`error ${error.message}`);
        process.exit(1) //exit code 1 is for failure and  0 is for success
    }
}