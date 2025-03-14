import mongoose from "mongoose"
import { config } from "."

const connect = async () => {
    try {
        await mongoose.connect(config.MONGODB_URI)
    } catch (err) {
        console.error("Error initializing MongoDB connection", err)
        throw new Error("Error initializing MongoDB connection")
    }
}

mongoose.connection.once("open", () => {
    console.log("Mongoose connected to DB successfully.")
})

mongoose.connection.on("error", err => {
    console.error("MongoDB connection error:", err)
})

mongoose.connection.on("close", () => {
    console.log("Mongoose connection closed")
})

export { connect }
