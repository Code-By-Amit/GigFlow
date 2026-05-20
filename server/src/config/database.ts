import mongoose from "mongoose"
import 'dotenv/config'
export default function connectDB() : Promise<void> {
    const mongoURL = process.env.MONGODB_URL;

    if (!mongoURL) {
        throw new Error("MONGODB_URL is missing in .env");
    }

   return mongoose.connect(mongoURL).then(() => {
        console.log("Mongodb Connected Sucessfully")
    }).catch((err) => {
        console.log("Failed to Connect to Mongodb", err);
        process.exit(1);
    })
}