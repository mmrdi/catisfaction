import mongoose from "mongoose"
/**
 * Shared types for React front and Node api backend
 */

export type Image = {
    _id: string | mongoose.Types.ObjectId
    id: string
    url: string
    upvotes: number
    participations: number
}
