import { Request, Response } from "express"
import { type Image } from "@shared/types"
import { ImageModel } from "../models/image.model"

const getImages = async (req: Request, res: Response) => {
    const images: Image[] = await ImageModel.find()
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

export { getImages, getImagesForDuel }
