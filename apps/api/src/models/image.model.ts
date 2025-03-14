import { Schema, model } from "mongoose"

const imageSchema = new Schema({
    id: String,
    url: String,
    upvotes: { type: Number, default: 0 },
    participations: { type: Number, default: 0 }
})

const ImageModel = model("Image", imageSchema)

export { ImageModel }
