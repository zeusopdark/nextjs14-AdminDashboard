import mongoose from "mongoose"

export const connectDb = async () => {
    try {
        const db = await mongoose.connect(process.env.MONGO);
        console.log("Connection Established")
    } catch (err) {
        throw new Error(err);
    }
}