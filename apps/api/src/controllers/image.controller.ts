import { Request, Response } from "express"
import { type Image } from "@shared/types"
import { ImageModel } from "../models/image.model"

const getImages = async (req: Request, res: Response) => {
    const images: Image[] = await ImageModel.find()
    res.json(images)
}

export { getImages }
