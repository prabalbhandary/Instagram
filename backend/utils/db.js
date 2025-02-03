import mongoose from "mongoose";
import "colors";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: process.env.DB_NAME
        });
        console.log(`Connected to MongoDB ${mongoose.connection.host}`.bgGreen);
    } catch (error) {
        console.log(`Error in MongoDB ${error}`.bgRed.white);
    }
}
export default connectDB;