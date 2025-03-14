import mongoose from "mongoose"
import { connect } from "./config/db"
import data from "./config/data.json"
import { ImageModel } from "./models/image.model"

/**
 * @description open mongoose connection and populate collections if necessary
 *
 */
const initialization = async () => {
    console.log("Server start listening...")
    await connect()

    try {
        if (!mongoose.connection.readyState) {
            console.error("MongoDB connection is not ready.")
            return
        }

        const db = mongoose.connection.db

        const collections = await db!.listCollections().toArray()
        const collectionExists = collections.some(col => col.name === "images")

        if (!collectionExists) {
            console.log("Creating 'images' collection...")
            await ImageModel.insertMany(data)
        } else {
            console.log("Collection 'images' already exists.")
            const count = await ImageModel.countDocuments()
            console.log(`Current collection size: ${count}`)
            if (count === 0) {
                console.log("Populating database with initial data...")
                await ImageModel.insertMany(data)
            }
        }
    } catch (error) {
        console.error(error)
        mongoose.connection.close()
    }
}

export { initialization }
