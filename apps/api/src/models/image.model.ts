import { Schema, model } from "mongoose"

/**
 * @property {string} id - provided by json data
 * @property {string} url - provided by json data
 * @property {number} [upvotes=0] - number of upvotes received
 * @property {number} [participations=0] - number of participations in a duel
 */
const imageSchema = new Schema({
    id: { type: String, required: true },
    url: { type: String, required: true },
    upvotes: { type: Number, default: 0 },
    participations: { type: Number, default: 0 }
})

const ImageModel = model("Image", imageSchema)

export { ImageModel }
