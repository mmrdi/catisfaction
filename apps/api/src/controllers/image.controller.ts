import { Request, Response } from "express"
import { type Image } from "@shared/types"
import { ImageModel } from "../models/image.model"
import { Types } from "mongoose"

/**
 * @TODO order by upvotes
 */
const getImages = async (req: Request, res: Response) => {
    const images: (Omit<Image, "_id"> & { _id: Types.ObjectId | string })[] =
        await ImageModel.find().sort({
            upvotes: "desc"
        })

    res.json(images)
}

/**
 * @TODO check participation rate to favor the less represented ?? elo/thompson/custom ?
 * @TODO check aggregate facet totalParticipations
 */
const getImagesForDuel = async (req: Request, res: Response) => {
    let { excludeIds } = req.query
    excludeIds = excludeIds?.toString().split(",") || []

    const result = await ImageModel.aggregate([
        {
            $facet: {
                totalParticipations: [
                    {
                        $group: {
                            _id: null,
                            total: { $sum: "$participations" }
                        }
                    }
                ],
                images: [
                    {
                        $match: {
                            _id: { $nin: excludeIds }
                        }
                    },
                    {
                        $sample: { size: 2 }
                    }
                ]
            }
        }
    ])

    res.json({
        data: result[0]?.images || [],
        meta: {
            totalParticipations: result[0]?.totalParticipations[0]?.total || 0
        }
    })
}

const handleVoteResult = async (req: Request, res: Response) => {
    const { winnerId, loserId } = req.body
    if (!winnerId || !loserId) {
        throw new Error(`Missing body parameters`)
    }

    await ImageModel.findByIdAndUpdate(winnerId, {
        $inc: { upvotes: 1, participations: 1 }
    })
    await ImageModel.findByIdAndUpdate(loserId, { $inc: { participations: 1 } })

    res.status(204).end()
}

export { getImages, getImagesForDuel, handleVoteResult }
